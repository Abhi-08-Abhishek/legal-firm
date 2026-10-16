'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import styles from './page.module.css';
import ArrowLink from '@/components/ArrowLink/ArrowLink';
import CTABanner from '@/components/CTABanner/CTABanner';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const attorneys = [
  {
    name: 'Eleanor Bennett',
    role: 'Managing Partner',
    specialties: 'Business & corporate law · Estate planning',
    image: '/images/attorney-eleanor.jpg',
    bio1:
      'Eleanor advises business owners and families on decisions with lasting consequences. Her practice connects commercial planning with the protection of personal and family interests.',
    bio2:
      'She turns complex documents into clear choices, balancing immediate priorities with the bigger picture.',
    focusAreas:
      'Corporate governance, business agreements, wills and succession planning.',
    consultUrl: '/consultation?attorney=eleanor',
    ctaText: 'Arrange a consultation with Eleanor',
  },
  {
    name: 'Michael Chen',
    role: 'Partner',
    specialties: 'Real estate · Business & corporate law',
    image: '/images/attorney-michael.jpg',
    bio1:
      'Michael works with individuals, entrepreneurs and property owners on transactions that move their plans forward. He brings a detail-focused, practical perspective to every agreement.',
    bio2:
      'He identifies issues early and keeps clients informed about documents, obligations and closing milestones.',
    focusAreas:
      'Residential transactions, commercial leasing, refinancing and commercial contracts.',
    consultUrl: '/consultation?attorney=michael',
    ctaText: 'Arrange a consultation with Michael',
  },
  {
    name: 'Amara Okafor',
    role: 'Partner',
    specialties: 'Family law · Estate planning',
    image: '/images/attorney-amara.jpg',
    bio1:
      'Amara supports people through family transitions and helps them plan for what comes next. Her work connects sensitive legal advice with a clear understanding of each client’s circumstances.',
    bio2:
      'She listens without judgment and looks for durable arrangements that respect family priorities.',
    focusAreas:
      'Separation, parenting arrangements, support, wills and powers of attorney.',
    consultUrl: '/consultation?attorney=amara',
    ctaText: 'Arrange a consultation with Amara',
  },
  {
    name: 'Daniel Reed',
    role: 'Litigation Counsel',
    specialties: 'Civil litigation · Criminal defense',
    image: '/images/attorney-daniel.jpg',
    bio1:
      'Daniel represents clients navigating disputes and criminal allegations. He combines thorough preparation with candid advice about the evidence, the process and the choices ahead.',
    bio2:
      'He considers resolution at every stage while preparing carefully for proceedings when they are needed.',
    focusAreas:
      'Contract and property disputes, criminal charges, bail matters and trial preparation.',
    consultUrl: '/consultation?attorney=daniel',
    ctaText: 'Arrange a consultation with Daniel',
  },
];

export default function AttorneysPage() {
  useScrollAnimation();

  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          Our attorneys
        </div>

        <div className={styles.heroContent}>
          <div>
            <p className="section-label">The people in your corner</p>
            <h1 className={styles.heroHeading}>
              Good counsel.
              <br />
              Genuine connection.
            </h1>
          </div>
          <p className={styles.heroText}>
            Meet the people who will listen closely, think carefully and help you
            make informed decisions. Different perspectives, united by the way we
            care for our clients.
          </p>
        </div>

        {/* SUB BAR / FILTER */}
        <div className={styles.subBar}>
          <div className={styles.filterTabs}>
            <span className={`${styles.filterTab} ${styles.filterTabActive}`}>
              All attorneys
            </span>
          </div>

          <div className={styles.subBarRight}>
            <span>Not sure who to speak with? We&apos;ll help you find the right fit.</span>
            <ArrowLink href="/consultation">Talk to our team</ArrowLink>
          </div>
        </div>
      </section>

      {/* ATTORNEY PROFILES LIST */}
      <section className={`${styles.profilesSection} animate-in`}>
        <div className={styles.sectionInner}>
          <div className={styles.profilesList}>
            {attorneys.map((attorney) => (
              <div key={attorney.name} className={styles.profileRow}>
                <div className={styles.profileImageWrapper}>
                  <Image
                    src={attorney.image}
                    alt={attorney.name}
                    fill
                    sizes="(max-width: 968px) 320px, 360px"
                    className={styles.profileImage}
                  />
                </div>

                <div className={styles.profileDetails}>
                  <span className={styles.profileRole}>{attorney.role}</span>
                  <h2 className={styles.profileName}>{attorney.name}</h2>
                  <p className={styles.profileSpecialties}>{attorney.specialties}</p>

                  <p className={styles.profileBio}>{attorney.bio1}</p>
                  <p className={styles.profileBio}>{attorney.bio2}</p>

                  <div className={styles.focusAreasBox}>
                    <span className={styles.focusLabel}>Focus areas</span>
                    <span className={styles.focusText}>{attorney.focusAreas}</span>
                  </div>

                  <Link href={attorney.consultUrl} className={styles.profileLink}>
                    {attorney.ctaText} <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTED BY YOUR PRIORITIES (SHARED COMMITMENT) */}
      <section className={`${styles.sharedSection} animate-in`}>
        <div className={styles.sectionInner}>
          <div className={styles.sharedGrid}>
            <div className={styles.sharedLeft}>
              <p className="section-label">Connected by your priorities</p>
              <h2 className={styles.sharedHeading}>
                The right perspective.
                <br />
                A shared commitment.
              </h2>
              <p className={styles.sharedLead}>
                A family transition may raise estate questions. A business agreement
                may involve property. When your matter crosses practice areas, your
                attorney can draw on the wider team while remaining your clear point
                of contact.
              </p>
              <ArrowLink href="/services">Explore our areas of practice</ArrowLink>
            </div>

            <div className={styles.sharedImageCol}>
              <Image
                src="/images/office-panorama.jpg"
                alt="Legalize conference room with city view"
                fill
                sizes="(max-width: 968px) 100vw, 50vw"
                className={styles.sharedImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* A GOOD FIT MATTERS */}
      <section className={`${styles.fitSection} animate-in`}>
        <div className={styles.sectionInner}>
          <div className={styles.fitGrid}>
            <div className={styles.fitLeft}>
              <p className="section-label">A good fit matters</p>
              <h2 className={styles.fitHeading}>
                Start with a conversation,
                <br />
                not a commitment.
              </h2>
              <Link href="/consultation" className={styles.fitBtn}>
                Request a consultation <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className={styles.fitRight}>
              <div className={styles.fitStep}>
                <h3 className={styles.stepTitle}>Tell us what you need</h3>
                <p className={styles.stepDesc}>
                  Share a short overview of your situation and any deadlines. We
                  will identify the appropriate attorney and complete initial
                  conflict checks.
                </p>
              </div>

              <div className={styles.fitStep}>
                <h3 className={styles.stepTitle}>Ask the questions that matter</h3>
                <p className={styles.stepDesc}>
                  Use your consultation to discuss the approach, communication,
                  timing and proposed fees. You should feel comfortable with the
                  person advising you.
                </p>
              </div>

              <div className={styles.fitStep}>
                <h3 className={styles.stepTitle}>Decide with confidence</h3>
                <p className={styles.stepDesc}>
                  There is no obligation to retain us after an initial
                  conversation. If we proceed together, the scope and terms will be
                  confirmed in writing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTABanner />
    </>
  );
}
