/**
 * Figma Code Connect — CardContent
 * Storybook path: "Atoms/CardContent"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the CardContent component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { CardContent } from './CardContent';

export default {
  component: CardContent,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [NotificationError, NotificationWarning, NotificationSuccess, NotificationInfo],
      props: {
          variant: figma.enum('Variant', { /* add options */ }),
          status: figma.enum('Status', { /* add options */ }),
          size: figma.enum('Size', { /* add options */ }),
          heading: figma.string('Heading'),
          body: figma.string('Body'),
          imageSrc: figma.string('Image Src'),
          imageAlt: figma.string('Image Alt'),
          ratingCount: figma.string('Rating Count'),
          border: figma.boolean('Border'),
          showIcon: figma.boolean('Show Icon'),
          showBody: figma.boolean('Show Body'),
          showActions: figma.boolean('Show Actions'),
          showDismiss: figma.boolean('Show Dismiss'),
          showRating: figma.boolean('Show Rating'),
          showImage: figma.boolean('Show Image'),
          imagePosition: figma.enum('Image Position', {
            'Top': 'top',
            'Left': 'left',
            'Right': 'right',
          }),
          notificationLayout: figma.enum('Notification Layout', {
            'Vertical': 'vertical',
            'Horizontal': 'horizontal',
          }),
          buttonGroupType: figma.enum('Button Group Type', {
            'Label': 'label',
            'Icon': 'icon',
          }),
          buttonGroupVariant: figma.enum('Button Group Variant', {
            'Primary': 'primary',
            'Secondary': 'secondary',
            'Tertiary': 'tertiary',
            'Ghost': 'ghost',
          }),
          buttonGroupSpecial: figma.enum('Button Group Special', {
            'Default': 'default',
            'Alt': 'alt',
          }),
          buttonGroupLayout: figma.enum('Button Group Layout', {
            'Joined': 'joined',
            'Separate': 'separate',
          }),
          buttonGroupDisabled: figma.boolean('Button Group Disabled'),
      },
    },
  },
};

/** Notification Error variant. */
export function NotificationError() {
  return <CardContent />;
}

/** Notification Warning variant. */
export function NotificationWarning() {
  return <CardContent />;
}

/** Notification Success variant. */
export function NotificationSuccess() {
  return <CardContent />;
}

/** Notification Info variant. */
export function NotificationInfo() {
  return <CardContent />;
}
