import React from 'react';
import { NpxLogo } from './NpxLogo';
import styles from './DocsTemplate.module.css';

/* ==========================================================================
   DocsTemplate — Root wrapper
   ========================================================================== */

export interface DocsTemplateProps {
  children: React.ReactNode;
  className?: string;
}

export const DocsTemplate: React.FC<DocsTemplateProps> & {
  Header: typeof Header;
  Section: typeof Section;
  Subsection: typeof Subsection;
  BodyText: typeof BodyText;
  TokenTable: typeof TokenTable;
  Principles: typeof Principles;
  PrincipleCard: typeof PrincipleCard;
  CodeBlock: typeof CodeBlock;
  DosDonts: typeof DosDonts;
  BulletList: typeof BulletList;
  RelatedLinks: typeof RelatedLinks;
  IconGallery: typeof IconGallery;
  SizeDemo: typeof SizeDemo;
  Anatomy: typeof Anatomy;
  Footer: typeof Footer;
} = ({ children, className }) => {
  return (
    <div className={`${styles['docs-template']} ${className || ''}`}>
      <div className={styles['docs-content']}>{children}</div>
    </div>
  );
};

/* ==========================================================================
   Header — NPX logo + title + subtitle
   ========================================================================== */

interface HeaderProps {
  title: string;
  subtitle?: string;
  showLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, showLogo = true }) => (
  <>
    {showLogo && (
      <div className={styles['logo-container']}>
        <NpxLogo />
      </div>
    )}
    <div className={styles.header}>
      <h1 className={styles['header-title']}>{title}</h1>
      {subtitle && <p className={styles['header-subtitle']}>{subtitle}</p>}
    </div>
  </>
);

/* ==========================================================================
   Section — H1 title + optional subtitle + children
   ========================================================================== */

interface SectionProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children }) => (
  <div className={styles.section}>
    <h2 className={styles['section-title']}>{title}</h2>
    {subtitle && <p className={styles['section-subtitle']}>{subtitle}</p>}
    {children}
  </div>
);

/* ==========================================================================
   Subsection — H4 title + children
   ========================================================================== */

interface SubsectionProps {
  title: string;
  children?: React.ReactNode;
}

const Subsection: React.FC<SubsectionProps> = ({ title, children }) => (
  <div className={styles.subsection}>
    <h3 className={styles['subsection-title']}>{title}</h3>
    {children}
  </div>
);

/* ==========================================================================
   BodyText — Styled paragraph
   ========================================================================== */

interface BodyTextProps {
  children: React.ReactNode;
  size?: 'default' | 'small';
}

const BodyText: React.FC<BodyTextProps> = ({ children, size = 'default' }) => (
  <p className={size === 'small' ? styles['body-text-sm'] : styles['body-text']}>
    {children}
  </p>
);

/* ==========================================================================
   TokenTable — Blue-bordered card with token rows
   ========================================================================== */

interface TokenRow {
  name: string;
  description: string;
}

interface TokenTableProps {
  title?: string;
  description?: string;
  tokens: TokenRow[];
}

const TokenTable: React.FC<TokenTableProps> = ({
  title = 'Design Tokens',
  description,
  tokens,
}) => (
  <div className={styles['token-table']}>
    <h3 className={styles['token-table-title']}>{title}</h3>
    {description && (
      <p className={styles['token-table-description']}>{description}</p>
    )}
    <div className={styles['token-table-code']}>
      <table className={styles['token-table-grid']}>
        <thead>
          <tr>
            <th>Token Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <tr key={token.name}>
              <td>{token.name}</td>
              <td>{token.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

/* ==========================================================================
   Principles — Container for PrincipleCards
   ========================================================================== */

interface PrinciplesProps {
  children: React.ReactNode;
}

const Principles: React.FC<PrinciplesProps> = ({ children }) => (
  <div className={styles['principles-container']}>{children}</div>
);

/* ==========================================================================
   PrincipleCard — Numbered principle
   ========================================================================== */

interface PrincipleCardProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ number, title, children }) => (
  <div className={styles['principle-card']}>
    <h4 className={styles['principle-card-title']}>
      {number}. {title}
    </h4>
    <p className={styles['principle-card-body']}>{children}</p>
  </div>
);

/* ==========================================================================
   CodeBlock — Gray background code snippet
   ========================================================================== */

interface CodeBlockProps {
  children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => (
  <div className={styles['code-block']}>
    <pre>{children}</pre>
  </div>
);

/* ==========================================================================
   DosDonts — Side-by-side Do/Don't comparison
   ========================================================================== */

interface DosDontsItem {
  icon: React.ReactNode;
  label?: string;
  description: string;
}

interface DosDontsProps {
  doItem: DosDontsItem;
  dontItem: DosDontsItem;
}

const DosDonts: React.FC<DosDontsProps> = ({ doItem, dontItem }) => (
  <div className={styles['dos-donts-container']}>
    {/* Do card */}
    <div className={styles['dos-donts-card']}>
      <div className={styles['dos-donts-icon-area']}>{doItem.icon}</div>
      {doItem.label && (
        <div className={styles['dos-donts-label-area']}>
          <p className={styles['dos-donts-label-text']}>{doItem.label}</p>
        </div>
      )}
      <div className={styles['dos-donts-bottom-do']}>
        <p className={styles['dos-donts-do-label']}>Do</p>
        <p className={styles['dos-donts-description']}>{doItem.description}</p>
      </div>
    </div>
    {/* Don't card */}
    <div className={styles['dos-donts-card']}>
      <div className={styles['dos-donts-icon-area']}>{dontItem.icon}</div>
      {dontItem.label && (
        <div className={styles['dos-donts-label-area']}>
          <p className={styles['dos-donts-label-text']}>{dontItem.label}</p>
        </div>
      )}
      <div className={styles['dos-donts-bottom-dont']}>
        <p className={styles['dos-donts-dont-label']}>Don&rsquo;t</p>
        <p className={styles['dos-donts-description']}>{dontItem.description}</p>
      </div>
    </div>
  </div>
);

/* ==========================================================================
   BulletList — Styled list
   ========================================================================== */

interface BulletListProps {
  items: React.ReactNode[];
  ordered?: boolean;
  variant?: 'default' | 'link';
}

const BulletList: React.FC<BulletListProps> = ({ items, ordered = false, variant = 'default' }) => {
  const Tag = ordered ? 'ol' : 'ul';
  const className = variant === 'link' ? styles['bullet-list-link'] : styles['bullet-list'];
  return (
    <Tag className={className}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </Tag>
  );
};

/* ==========================================================================
   RelatedLinks
   ========================================================================== */

interface RelatedLink {
  label: string;
  href: string;
}

interface RelatedLinksProps {
  links: RelatedLink[];
}

const RelatedLinks: React.FC<RelatedLinksProps> = ({ links }) => (
  <div className={styles['related-links']}>
    <h3 className={styles['related-links-title']}>Related links</h3>
    <ul className={styles['bullet-list-link']}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            className={styles['inline-link']}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

/* ==========================================================================
   IconGallery — Grid of icons
   ========================================================================== */

interface IconGalleryItem {
  icon: React.ReactNode;
  label: string;
}

interface IconGalleryProps {
  items: IconGalleryItem[];
}

const IconGallery: React.FC<IconGalleryProps> = ({ items }) => (
  <div className={styles['icon-gallery']}>
    {items.map((item) => (
      <div key={item.label} className={styles['icon-gallery-item']}>
        {item.icon}
        <span className={styles['icon-gallery-label']}>{item.label}</span>
      </div>
    ))}
  </div>
);

/* ==========================================================================
   SizeDemo — Icon size demonstration rows
   ========================================================================== */

interface SizeDemoRow {
  label: string;
  sublabel?: string;
  children: React.ReactNode;
}

interface SizeDemoProps {
  rows: SizeDemoRow[];
}

const SizeDemo: React.FC<SizeDemoProps> = ({ rows }) => (
  <div className={styles['size-demo']}>
    {rows.map((row) => (
      <div key={row.label} className={styles['size-demo-row']}>
        <div>
          <span className={styles['size-demo-label']}>{row.label}</span>
          {row.sublabel && (
            <span className={styles['size-demo-sublabel']}> — {row.sublabel}</span>
          )}
        </div>
        {row.children}
      </div>
    ))}
  </div>
);

/* ==========================================================================
   Anatomy — Component anatomy diagram with numbered callouts
   ========================================================================== */

export interface AnatomyPart {
  id: number;
  /** Short element name shown in the table */
  name: string;
  /** Design token name(s) or component reference */
  token: string;
  /** What this element does / how it behaves */
  description: string;
  /** @deprecated Pin placement no longer used — kept for backward compat */
  pin?: { top: string; left: string };
}

interface AnatomyProps {
  /** The rendered component to annotate */
  preview: React.ReactNode;
  /** Numbered anatomy parts */
  parts: AnatomyPart[];
}

const Anatomy: React.FC<AnatomyProps> = ({ preview, parts }) => (
  <div className={styles.anatomy}>
    <div className={styles['anatomy-preview']}>
      {preview}
    </div>

    {/* Legend strip — numbered badges + element names */}
    <div className={styles['anatomy-legend']}>
      {parts.map((p) => (
        <span key={p.id} className={styles['anatomy-legend-item']}>
          <span className={styles['anatomy-legend-badge']}>{p.id}</span>
          <span className={styles['anatomy-legend-label']}>{p.name}</span>
        </span>
      ))}
    </div>

    <div className={styles['anatomy-parts']}>
      <div className={styles['anatomy-parts-header']}>
        <span>#</span>
        <span>Element</span>
        <span>Token / Component</span>
        <span>Description</span>
      </div>
      {parts.map((p) => (
        <div key={p.id} className={styles['anatomy-part-row']}>
          <div className={styles['anatomy-part-badge']}>{p.id}</div>
          <div className={styles['anatomy-part-name']}>{p.name}</div>
          <div className={styles['anatomy-part-token']}>{p.token}</div>
          <div className={styles['anatomy-part-description']}>{p.description}</div>
        </div>
      ))}
    </div>
  </div>
);

/* ==========================================================================
   Footer — Separator + copyright
   ========================================================================== */

interface FooterProps {
  text?: string;
}

const Footer: React.FC<FooterProps> = ({
  text = `\u24D2 ${new Date().getFullYear()} NPX Design System`,
}) => (
  <div className={styles.footer}>
    <div className={styles['footer-line']} />
    <p className={styles['footer-text']}>{text}</p>
  </div>
);

/* ==========================================================================
   Attach sub-components
   ========================================================================== */

DocsTemplate.Header = Header;
DocsTemplate.Section = Section;
DocsTemplate.Subsection = Subsection;
DocsTemplate.BodyText = BodyText;
DocsTemplate.TokenTable = TokenTable;
DocsTemplate.Principles = Principles;
DocsTemplate.PrincipleCard = PrincipleCard;
DocsTemplate.CodeBlock = CodeBlock;
DocsTemplate.DosDonts = DosDonts;
DocsTemplate.BulletList = BulletList;
DocsTemplate.RelatedLinks = RelatedLinks;
DocsTemplate.IconGallery = IconGallery;
DocsTemplate.SizeDemo = SizeDemo;
DocsTemplate.Anatomy = Anatomy;
DocsTemplate.Footer = Footer;
