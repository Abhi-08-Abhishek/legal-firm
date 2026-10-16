import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={styles.ctaBanner}>
      <div className={styles.ctaInner}>
        <p className={styles.ctaLabel}>A clearer way forward</p>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaHeading}>
            Let&apos;s take the first step.
          </h2>
          <div className={styles.ctaRight}>
            <Link href="/consultation" className={styles.ctaButton}>
              Request a consultation <ArrowUpRight size={16} />
            </Link>
            <a href="tel:+14165550128" className={styles.ctaPhone}>
              Or call (416) 555-0128
            </a>
            <span className={styles.ctaHours}>
              Monday–Friday, 9:00 am–5:00 pm ET
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
