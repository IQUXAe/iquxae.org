import React from 'react';

export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  linkText: string;
  to: string;
  icon?: React.ReactNode;
}