'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  CheckCircle,
  Briefcase,
  Users,
  Scroll,
  Building2,
  Scale,
  Shield,
  Heart,
} from 'lucide-react';
import styles from './page.module.css';
import ArrowLink from '@/components/ArrowLink/ArrowLink';
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import CTABanner from '@/components/CTABanner/CTABanner';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: <Briefcase size={28} />,
    title: 'Business & corporate law',
    description:
      'Practical advice for the decisions that shape your business.',
  },
  {
    icon: <Users size={28} />,
    title: 'Family law',
    description:
      "Thoughtful support through life's most personal changes.",
  },
  {
    icon: <Scroll size={28} />,
    title: 'Estate planning',
    description:
      'Protect your wishes and plan for the people you love.',
  },
  {
    icon: <Building2 size={28} />,
    title: 'Real estate',
    description:
      'Clear guidance from the first review to the final signature.',
  },
  {
    icon: <Scale size={28} />,
    title: 'Civil litigation',
    description:
      'A considered strategy when a disagreement needs resolution.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Criminal defense',
    description:
      'Steady representation when your rights are at stake.',
  },
];

const attorneys = [
  {
    name: 'Eleanor Bennett',
    role: 'Managing Partner',
    specialties: 'Business & corporate law · Estate planning',
    image: '/images/attorney-eleanor.jpg',
  },
  {
    name: 'Amara Okafor',
    role: 'Partner',
    specialties: 'Family law · Estate planning',
    image: '/images/attorney-amara.jpg',
  },
  {
    name: 'Daniel Reed',
    role: 'Litigation Counsel',
    specialties: 'Civil litigation · Criminal defense',
    image: '/images/attorney-daniel.jpg',
  },
];

const faqItems = [
  {
    question: 'What happens at the first consultation?',
    answer:
      'We discuss your circumstances, identify the questions that need answering and explore possible next steps. You can ask about our approach, timing and fees before deciding whether to proceed.',
  },
  {
    question: 'What should I prepare?',
    answer:
      'Bring a brief timeline, key documents and a list of questions. Tell us about any deadlines. Please avoid sending confidential details until we have completed our initial checks.',
  },
  {
    question: 'Do you offer remote consultations?',
    answer:
      'Consultations can be arranged by phone, video or in person in Toronto, depending on the needs of your matter and attorney availability.',
  },
  {
    question: 'Does contacting you mean you represent me?',
    answer:
      'No. Representation begins only after conflict checks are complete and we have both agreed to a written engagement. If a deadline is approaching, please call directly.',
  },
];

export default function HomePage() {
  useScrollAnimation();

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.heroLabel}>
              Thoughtful counsel. Confident decisions.
            </p>
            <h1 className={styles.heroHeading}>
              Legal guidance.
              <br />
              With you at
              <br />
              the centre.
            </h1>
            <p className={styles.heroText}>
              For your business, your family and the moments that matter. We
              bring clarity to complex decisions, so you can move forward with
              confidence.
            </p>
            <Link href="/consultation" className={styles.heroButton}>
              Request a consultation <ArrowUpRight size={16} />
            </Link>
            <p className={styles.heroLocation}>
              Toronto, Ontario &middot; Personal attention, from the start
            </p>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/hero-statue.jpg"
              alt="Lady Justice statue in a modern law office"
              width={600}
              height={800}
              priority
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className={styles.heroImageCaption}>
              A clearer way forward
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS BAR */}
      <section className={styles.valueProps}>
        <div className={styles.valuePropsGrid}>
          <div className={styles.valueProp}>
            <CheckCircle size={18} className={styles.valuePropIcon} />
            Clear advice, without the jargon
          </div>
          <div className={styles.valueProp}>
            <CheckCircle size={18} className={styles.valuePropIcon} />
            A dedicated attorney for your matter
          </div>
          <div className={styles.valueProp}>
            <CheckCircle size={18} className={styles.valuePropIcon} />
            Fees discussed before we begin
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className={`${styles.aboutIntro} animate-in`}>
        <div className={styles.aboutIntroGrid}>
          <div>
            <p className="section-label">The people behind the practice</p>
            <h2 className={styles.aboutIntroHeading}>
              Good counsel starts
              <br />
              with listening.
            </h2>
          </div>
          <div className={styles.aboutIntroRight}>
            <p>
              The law is personal. So is the way we work.
            </p>
            <p>
              Legalize is a client-centered law firm helping individuals, families and
              businesses navigate change. We take the time to understand your
              circumstances, explore your options and build a practical path forward.
            </p>
            <ArrowLink href="/about">Get to know Legalize</ArrowLink>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className={`${styles.services} animate-in`}>
        <div className={styles.servicesHeader}>
          <div>
            <p className="section-label">How we can help</p>
            <h2 className="section-heading">Counsel for every chapter.</h2>
          </div>
          <ArrowLink href="/services">Explore our services</ArrowLink>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.description}</p>
              <ArrowLink href="/services">Learn more</ArrowLink>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className={`${styles.process} animate-in`}>
        <div className={styles.processHeader}>
          <div>
            <p className="section-label">A partnership, not a process</p>
            <h2 className="section-heading">
              Your priorities. Our starting point.
            </h2>
          </div>
          <p style={{ color: 'var(--color-text-body)', lineHeight: 'var(--leading-relaxed)' }}>
            You deserve to understand not just what comes next, but why. We
            keep you informed and involved at every step.
          </p>
        </div>
        <div className={styles.processContent}>
          <ProcessSteps />
        </div>
      </section>

      {/* ATTORNEYS PREVIEW */}
      <section className={`${styles.attorneys} animate-in`}>
        <div className={styles.attorneysHeader}>
          <div>
            <p className="section-label">People you can rely on</p>
            <h2 className="section-heading">
              Dedicated to your next chapter.
            </h2>
          </div>
          <ArrowLink href="/attorneys">Meet all our attorneys</ArrowLink>
        </div>
        <div className={styles.attorneysGrid}>
          {attorneys.map((attorney, index) => (
            <div key={index} className={styles.attorneyCard}>
              <Image
                src={attorney.image}
                alt={attorney.name}
                width={400}
                height={533}
                className={styles.attorneyImage}
              />
              <p className={styles.attorneyRole}>{attorney.role}</p>
              <h3 className={styles.attorneyName}>{attorney.name}</h3>
              <p className={styles.attorneySpec}>{attorney.specialties}</p>
              <ArrowLink href="/attorneys">Meet your attorney</ArrowLink>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST STATEMENT */}
      <section className={`${styles.trust} animate-in`}>
        <div className={styles.trustGrid}>
          <div>
            <p className="section-label">What you can count on</p>
            <h2 className={styles.trustHeading}>
              Serious about the law.
              <br />
              Thoughtful about you.
            </h2>
          </div>
          <div className={styles.trustRight}>
            <p>
              No two matters are the same. Our commitment is to honest advice, careful
              preparation and a respectful relationship, whatever brings you to our door.
            </p>
            <div className={styles.trustChecks}>
              <div className={styles.trustCheck}>
                <CheckCircle size={18} className={styles.trustCheckIcon} />
                Your questions are always welcome.
              </div>
              <div className={styles.trustCheck}>
                <CheckCircle size={18} className={styles.trustCheckIcon} />
                Your options and costs are explained.
              </div>
              <div className={styles.trustCheck}>
                <CheckCircle size={18} className={styles.trustCheckIcon} />
                Your decisions remain yours.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.faq} animate-in`}>
        <div className={styles.faqGrid}>
          <div className={styles.faqLeft}>
            <p className="section-label">Before we begin</p>
            <h2 className={styles.faqHeading}>
              A little clarity, before we talk.
            </h2>
            <p className={styles.faqText}>
              Some questions are a good place to start. For advice about your
              situation, speak with our team.
            </p>
            <ArrowLink href="/consultation">Ask us a question</ArrowLink>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA BANNER */}
      <CTABanner />
    </>
  );
}
