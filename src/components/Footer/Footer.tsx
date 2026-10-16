import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.footerLogo}>
            Legalize
          </Link>
          <p className={styles.footerTagline}>
            Thoughtful counsel. Confident decisions.
          </p>
          <p className={styles.footerLocation}>
            Toronto, Ontario &middot; Serving clients with care
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h4>Explore</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/attorneys">Our attorneys</Link></li>
            <li><Link href="/consultation">Consultation</Link></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Our Practice</h4>
          <ul>
            <li><Link href="/services">Business &amp; corporate law</Link></li>
            <li><Link href="/services">Family law</Link></li>
            <li><Link href="/services">Estate planning &middot; Real estate</Link></li>
            <li><Link href="/services">Civil litigation &middot; Criminal defense</Link></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Let&apos;s Talk</h4>
          <ul>
            <li><a href="tel:+14165550128"><strong>(416) 555-0128</strong></a></li>
            <li>Monday–Friday</li>
            <li>9:00 am–5:00 pm ET</li>
            <li>
              <Link href="/consultation" className={styles.footerCta}>
                Request a consultation <ArrowUpRight size={14} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.footerCopy}>
          &copy; 2026 Legalize. All rights reserved.
        </p>
        <div className={styles.footerLegal}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms &amp; Conditions</Link>
        </div>
      </div>

      <p className={styles.disclaimer}>
        General information only, not legal advice. Contacting Legalize does not create an attorney–client relationship. For urgent matters or deadlines, please call directly.
      </p>
    </footer>
  );
}
