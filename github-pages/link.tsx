import type { ComponentProps } from 'react';

// The same dashboard uses normal document navigation on a static Pages host.
export default function Link({ href = '/', ...props }: ComponentProps<'a'>) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const target = href.startsWith('/') && !href.startsWith('//')
    ? `${base}${href === '/' ? '/' : `${href.replace(/\/$/, '')}/`}`
    : href;
  return <a href={target} {...props} />;
}
