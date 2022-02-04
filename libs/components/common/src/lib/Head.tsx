import React from 'react';
import NextHead from 'next/head';

export type HeadProps = {
  title?: string;
  description?: string;
};

export const Head: React.FC<HeadProps> = ({
  title = 'Dashboard',
  description = '',
}) => (
  <NextHead>
    <title>{title}</title>
    <meta property="description" content={description} />
  </NextHead>
);
