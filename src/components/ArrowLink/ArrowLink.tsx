import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import styles from './ArrowLink.module.css';

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ArrowLink({ href, children, className = '' }: ArrowLinkProps) {
  return (
    <Link href={href} className={`${styles.arrowLink} ${className}`}>
      {children}
      <ArrowUpRight size={14} className={styles.arrow} />
    </Link>
  );
}
