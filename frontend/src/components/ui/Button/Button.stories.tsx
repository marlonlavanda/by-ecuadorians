import * as React from "react"
import type { Meta, StoryObj } from '@storybook/react';
import { ChevronRight } from "lucide-react"

import { fn } from '@storybook/test';
import { Button } from './index';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    size: 'default',
    asChild: false,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
};

// Example with icon
export const WithIcon: Story = {
  args: {
    size: 'icon',
    children: React.createElement(ChevronRight),
  },
};

// Different sizes
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

// Example as a link
export const AsLink: Story = {
  args: {
    asChild: true,
    children: <a href="/">Link Button</a>,
  },
};