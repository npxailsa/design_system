import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { Toast } from './Toast';
import type { ToastColour, ToastPosition, ToastSize } from './Toast';
import styles from './Toast.module.css';

/* ── Toast item type ── */

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  colour?: ToastColour;
  size?: ToastSize;
  showLeadingIcon?: boolean;
  showSubtext?: boolean;
  /** Duration in ms before auto-dismiss. Set to 0 to disable auto-dismiss. */
  duration?: number;
  visible: boolean;
}

/* ── Context shape ── */

interface ToastContextValue {
  /** Show a toast notification. Returns the toast id. */
  toast: (options: Omit<ToastItem, 'id' | 'visible'>) => string;
  /** Dismiss a specific toast by id */
  dismiss: (id: string) => void;
  /** Dismiss all toasts */
  dismissAll: () => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

/* ── Hook ── */

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used inside <ToastProvider>');
  }
  return ctx;
}

/* ── Provider ── */

export interface ToastProviderProps {
  children: React.ReactNode;
  /** Where toasts appear on screen */
  position?: ToastPosition;
  /** Default duration for all toasts (ms). 0 = no auto-dismiss. Default: 4000 */
  defaultDuration?: number;
  /** Maximum number of toasts to show at once */
  maxToasts?: number;
}

const EXIT_DELAY = 220; // slightly longer than exit animation duration

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = 'bottom-right',
  defaultDuration = 4000,
  maxToasts = 5,
}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const dismiss = useCallback((id: string) => {
    // Start exit animation
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, visible: false } : t))
    );
    // Remove from DOM after animation
    const removeTimer = setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, EXIT_DELAY);

    // Clean up any existing auto-dismiss timer
    const existing = timersRef.current.get(id);
    if (existing) clearTimeout(existing);
    timersRef.current.set(`remove-${id}`, removeTimer);
  }, []);

  const dismissAll = useCallback(() => {
    setToasts((prev) => prev.map((t) => ({ ...t, visible: false })));
    setTimeout(() => setToasts([]), EXIT_DELAY);
    timersRef.current.forEach((timer) => clearTimeout(timer));
    timersRef.current.clear();
  }, []);

  const toast = useCallback(
    (options: Omit<ToastItem, 'id' | 'visible'>): string => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const duration = options.duration ?? defaultDuration;

      const newToast: ToastItem = {
        ...options,
        id,
        visible: true,
      };

      setToasts((prev) => {
        const updated = [...prev, newToast];
        // Trim to maxToasts by dismissing oldest
        if (updated.length > maxToasts) {
          const toRemove = updated.slice(0, updated.length - maxToasts);
          toRemove.forEach((t) => {
            const timer = timersRef.current.get(t.id);
            if (timer) clearTimeout(timer);
          });
          return updated.slice(updated.length - maxToasts);
        }
        return updated;
      });

      // Auto-dismiss
      if (duration > 0) {
        const timer = setTimeout(() => dismiss(id), duration);
        timersRef.current.set(id, timer);
      }

      return id;
    },
    [defaultDuration, maxToasts, dismiss]
  );

  // Cleanup on unmount
  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const containerClass = [
    styles['toast-container'],
    styles[`toast-container--${position}`],
  ].join(' ');

  const portalContent = (
    <div className={containerClass} aria-label="Notifications" role="region">
      {toasts.map((t) => (
        <Toast
          key={t.id}
          id={t.id}
          colour={t.colour}
          size={t.size}
          title={t.title}
          description={t.description}
          showLeadingIcon={t.showLeadingIcon ?? true}
          showSubtext={t.showSubtext ?? true}
          showTrailingIcon
          visible={t.visible}
          onClose={() => dismiss(t.id)}
        />
      ))}
    </div>
  );

  return (
    <ToastContext.Provider value={{ toast, dismiss, dismissAll }}>
      {children}
      {typeof document !== 'undefined'
        ? createPortal(portalContent, document.body)
        : null}
    </ToastContext.Provider>
  );
};
