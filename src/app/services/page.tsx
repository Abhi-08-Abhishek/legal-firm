'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Briefcase,
  Users,
  Scroll,
  Building2,
  Scale,
  Shield,
  ArrowUpRight,
} from 'lucide-react';
import styles from './page.module.css';
import ArrowLink from '@/components/ArrowLink/ArrowLink';
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import CTABanner from '@/components/CTABanner/CTABanner';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const practices = [
  {
    number: '01',
    icon: Briefcase,
    title: 'Business & corporate law',
    description:
      'From your first agreement to your next stage of growth, we help owners and organizations build a sound legal foundation and navigate commercial decisions.',
    helpItems: [
      'Incorporation & governance',
      'Commercial contracts',
      'Shareholder agreements',
    ],
    team: 'Your team: Eleanor Bennett & Michael Chen',
  },
  {
    number: '02',
    icon: Users,
    title: 'Family law',
    description:
      'We help you understand your options in separation, parenting and financial matters, with a focus on workable arrangements and the people who matter most.',
    helpItems: [
      'Separation agreements',
      'Parenting arrangements',
      'Support & property division',
    ],
    team: 'Your team: Amara Okafor',
  },
  {
    number: '03',
    icon: Scroll,
    title: 'Estate planning',
    description:
      'Make important decisions with care. We translate your family circumstances and long-term wishes into a coordinated plan that can evolve with your life.',
    helpItems: [
      'Wills & powers of attorney',
      'Trust planning',
      'Estate administration',
    ],
    team: 'Your team: Eleanor Bennett & Amara Okafor',
  },
  {
    number: '04',
    icon: Building2,
    title: 'Real estate',
    description:
      'Whether you are buying a home, selling a property or arranging a commercial lease, we examine the details, explain obligations and help keep your transaction moving.',
    helpItems: [
      'Purchases & sales',
      'Mortgage refinancing',
      'Commercial leasing',
    ],
    team: 'Your team: Michael Chen',
  },
  {
    number: '05',
    icon: Scale,
    title: 'Civil litigation',
    description:
      'We assess the strengths, risks and practical costs of a dispute, then help you choose a path through negotiation, mediation or court proceedings.',
    helpItems: [
      'Contract disputes',
      'Property disputes',
      'Negotiation & court representation',
    ],
    team: 'Your team: Daniel Reed',
  },
  {
    number: '06',
    icon: Shield,
    title: 'Criminal defense',
    description:
      'Facing an allegation can feel overwhelming. We explain the process, review the evidence and provide careful advice at each stage, without judgment or promises of a result.',
    helpItems: [
      'Bail & release advice',
      'Charge & evidence review',
      'Trial preparation',
    ],
    team: 'Your team: Daniel Reed',
  },
];

const servicesFaqItems = [
  {
    question: 'Which practice area is right for my matter?',
    answer:
      'A short overview is enough to start. Our intake team will help identify the appropriate attorney, including when a matter involves more than one practice area.',
  },
  {
    question: 'How are legal fees determined?',
    answer:
      'Fees depend on the scope, complexity and type of work. We explain the proposed fee arrangement and likely additional costs before you decide to retain us.',
  },
  {
    question: 'What if my matter has an urgent deadline?',
    answer:
      'Please call (416) 555-0128 directly and mention the date. Do not assume we are acting for you until representation has been confirmed in writing.',
  },
  {
    question: 'Can you advise on more than one legal issue?',
    answer:
      'Yes. Our team can coordinate related business, family, property and estate matters where appropriate, subject to conflict checks and an agreed scope.',
  },
];

export default function ServicesPage() {
  useScrollAnimation();

  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          Services
        </div>

        <div className={styles.heroContent}>
          <div>
            <p className="section-label">Our areas of practice</p>
            <h1 className={styles.heroHeading}>
              Clear advice for life&apos;s
              <br />
              complex moments.
            </h1>
          </div>
          <p className={styles.heroText}>
            From everyday decisions to unfamiliar challenges, we help you understand
            your position, weigh your options and choose a way forward.
          </p>
        </div>

        {/* HERO CARD SPLIT */}
        <div className={styles.heroCardWrapper}>
          <div className={styles.heroCard}>
            <div className={styles.heroCardImageCol}>
              <Image
                src="/images/office-meeting.jpg"
                alt="Law firm meeting room overlooking skyline"
                fill
                sizes="(max-width: 968px) 100vw, 50vw"
                className={styles.heroCardImage}
                priority
              />
            </div>
            <div className={styles.heroCardContentCol}>
              <p className="section-label">Start where you are</p>
              <h2 className={styles.heroCardHeading}>
                You don&apos;t need to know the legal language to ask for help.
              </h2>
              <p className={styles.heroCardText}>
                Tell us what is happening. We&apos;ll help identify the right area of
                practice and connect you with an attorney whose focus fits your
                needs.
              </p>
              <Link href="/consultation" className={styles.heroCardBtn}>
                Request a consultation <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SIX PRACTICES GRID */}
      <section className={`${styles.practicesSection} animate-in`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <div>
              <p className="section-label">Focused advice. Connected thinking.</p>
              <h2 className={styles.sectionHeading}>
                Six practices.
                <br />
                One client-centered approach.
              </h2>
            </div>
            <p className={styles.sectionSubtext}>
              Some matters cross more than one area of law. Our attorneys work
              together when your circumstances call for a broader view.
            </p>
          </div>

          <div className={styles.practicesGrid}>
            {practices.map((practice) => {
              const IconComponent = practice.icon;
              return (
                <div key={practice.number} className={styles.practiceCard}>
                  <div className={styles.cardTopRow}>
                    <div className={styles.cardIcon}>
                      <IconComponent size={28} strokeWidth={1.5} />
                    </div>
                    <span className={styles.cardNumber}>{practice.number}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{practice.title}</h3>
                  <p className={styles.cardDescription}>{practice.description}</p>

                  <p className={styles.helpLabel}>How we can help</p>
                  <ul className={styles.helpList}>
                    {practice.helpItems.map((item, idx) => (
                      <li key={idx} className={styles.helpItem}>
                        <span className={styles.helpDash}>&mdash;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.cardFooter}>
                    <span className={styles.teamText}>{practice.team}</span>
                    <Link href="/consultation" className={styles.cardLink}>
                      Discuss your matter <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MORE THAN LEGAL DOCUMENTS */}
      <section className={`${styles.understandingSection} animate-in`}>
        <div className={styles.sectionInner}>
          <div className={styles.understandingGrid}>
            <div className={styles.understandingLeft}>
              <p className="section-label">More than legal documents</p>
              <h2 className={styles.understandingHeading}>
                A clear understanding of where you stand.
              </h2>
              <p className={styles.understandingLead}>
                Good legal support gives you the context to make decisions, not just
                a list of things to sign.
              </p>
            </div>

            <div className={styles.understandingRight}>
              <div className={styles.understandingItem}>
                <h3 className={styles.itemHeading}>Advice in plain language</h3>
                <p className={styles.itemText}>
                  Understand the key issues, your legal options and the trade-offs
                  involved. We welcome questions throughout.
                </p>
              </div>

              <div className={styles.understandingItem}>
                <h3 className={styles.itemHeading}>Transparency about fees</h3>
                <p className={styles.itemText}>
                  We discuss our proposed fee arrangement, the work it covers and
                  likely additional costs before you retain us.
                </p>
              </div>

              <div className={styles.understandingItem}>
                <h3 className={styles.itemHeading}>Communication with purpose</h3>
                <p className={styles.itemText}>
                  We agree how to stay in touch and provide updates when there are
                  developments or decisions to make.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKING WITH LEGALIZE (PROCESS STEPS) */}
      <section className={`${styles.processSection} animate-in`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <div>
              <p className="section-label">Working with Legalize</p>
              <h2 className={styles.sectionHeading}>
                A considered start.
                <br />
                A clear way forward.
              </h2>
            </div>
            <p className={styles.sectionSubtext}>
              Before substantive advice begins, we check for conflicts and confirm
              that our team can assist with your matter.
            </p>
          </div>

          <ProcessSteps />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={`${styles.faqSection} animate-in`}>
        <div className={styles.sectionInner}>
          <div className={styles.faqGrid}>
            <div className={styles.faqLeft}>
              <p className="section-label">Before we begin</p>
              <h2 className={styles.faqHeading}>
                A little clarity,
                <br />
                before we talk.
              </h2>
              <p className={styles.faqLead}>
                Some questions are a good place to start. For advice about your
                situation, speak with our team.
              </p>
              <ArrowLink href="/consultation">Ask us a question</ArrowLink>
            </div>

            <div>
              <FAQAccordion items={servicesFaqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTABanner />
    </>
  );
}
