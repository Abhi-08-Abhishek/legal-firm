'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Ear, MessageCircle, HeartHandshake } from 'lucide-react';
import styles from './page.module.css';
import ArrowLink from '@/components/ArrowLink/ArrowLink';
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps';
import CTABanner from '@/components/CTABanner/CTABanner';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const team = [
  {
    name: 'Eleanor Bennett',
    role: 'Managing Partner',
    specialties: 'Business & corporate law · Estate planning',
    image: '/images/attorney-eleanor.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Partner',
    specialties: 'Real estate · Estate planning',
    image: '/images/attorney-michael.jpg',
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

export default function AboutPage() {
  useScrollAnimation();

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          About us
        </div>
        <div className={styles.heroContent}>
          <div>
            <p className="section-label">Our firm, your partner</p>
            <h1 className={styles.heroHeading}>
              The law is complex.
              <br />
              The relationship shouldn&apos;t be.
            </h1>
          </div>
          <p className={styles.heroText}>
            We&apos;re a Toronto law firm built around a simple belief: people make
            better decisions when they feel heard, informed and supported.
          </p>
        </div>
        <div className={styles.heroBanner}>
          <Image
            src="/images/office-panorama.jpg"
            alt="Legalize law office conference room"
            width={1200}
            height={340}
            className={styles.heroBannerImage}
            priority
          />
        </div>
        <div className={styles.heroBannerInfo}>
          <span>A place for thoughtful conversations and clear decisions.</span>
          <span>Toronto, Ontario</span>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className={`${styles.origin} animate-in`}>
        <div className={styles.originGrid}>
          <div className={styles.originLeft}>
            <p className="section-label">Why Legalize exists</p>
            <h2>
              A different starting point.
            </h2>
            <div className={styles.originQuote}>
              &ldquo;Start with the person.
              <br />
              Then build the legal plan.&rdquo;
            </div>
            <p className={styles.originQuoteAuthor}>
              Eleanor Bennett — Managing partner
            </p>
          </div>
          <div className={styles.originRight}>
            <p>
              Legalize grew from the belief that good legal work should feel like a
              partnership, not an unfamiliar system you have to navigate alone.
            </p>
            <p>
              Eleanor Bennett brought together a team whose practices reflect the ways
              people&apos;s lives overlap: a business decision can affect a family, a property
              purchase can change an estate plan, and a dispute can disrupt both work and home.
            </p>
            <p>
              Today, our attorneys collaborate across business law, family law, estate
              planning, real estate, civil litigation and criminal defense. That shared
              perspective helps us see the whole picture while giving each matter the
              individual attention it needs.
            </p>
            <p>
              Our purpose remains straightforward: to make the law more understandable, and
              your next decision more informed.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className={`${styles.principles} animate-in`}>
        <div className={styles.principlesInner}>
          <p className="section-label">What guides us</p>
          <h2 className={styles.principlesHeading}>
            Principles you can feel in practice.
          </h2>
          <div className={styles.principlesGrid}>
            <div className={styles.principleCard}>
              <Ear size={36} className={styles.principleIcon} />
              <h3 className={styles.principleTitle}>Listen with purpose</h3>
              <p className={styles.principleDesc}>
                We ask thoughtful questions and make space for your concerns. Your
                goals shape the advice, rather than the other way around.
              </p>
              <p className={styles.principleFooter}>
                Your circumstances come first.
              </p>
            </div>
            <div className={styles.principleCard}>
              <MessageCircle size={36} className={styles.principleIcon} />
              <h3 className={styles.principleTitle}>Speak with clarity</h3>
              <p className={styles.principleDesc}>
                We explain the law in everyday language, discuss risks honestly
                and make sure you have room to ask questions.
              </p>
              <p className={styles.principleFooter}>
                Understanding is part of the service.
              </p>
            </div>
            <div className={styles.principleCard}>
              <HeartHandshake size={36} className={styles.principleIcon} />
              <h3 className={styles.principleTitle}>Act with care</h3>
              <p className={styles.principleDesc}>
                We prepare thoroughly, protect your information and recommend
                steps that are proportionate to your needs.
              </p>
              <p className={styles.principleFooter}>
                Thoughtful work, at every stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={`${styles.process} animate-in`}>
        <div className={styles.processGrid}>
          <div>
            <p className="section-label">How we work with you</p>
            <h2 className="section-heading">
              Personal attention.
              <br />
              A practical plan.
            </h2>
          </div>
          <p style={{ color: 'var(--color-text-body)', lineHeight: 'var(--leading-relaxed)', alignSelf: 'center' }}>
            From the first conversation, you&apos;ll know who is working on your
            matter and how to reach them. We agree on the scope, discuss fees
            and keep you involved as things develop.
          </p>
        </div>
        <div className={styles.processContent}>
          <ProcessSteps />
        </div>
      </section>

      {/* TEAM */}
      <section className={`${styles.team} animate-in`}>
        <div className={styles.teamHeader}>
          <div>
            <p className="section-label">Individual perspectives. Shared purpose.</p>
            <h2 className="section-heading">
              One team, a broader perspective.
            </h2>
          </div>
          <ArrowLink href="/attorneys">Meet our attorneys</ArrowLink>
        </div>
        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={400}
                className={styles.teamImage}
              />
              <p className={styles.teamRole}>{member.role}</p>
              <h3 className={styles.teamName}>{member.name}</h3>
              <p className={styles.teamSpec}>{member.specialties}</p>
              <ArrowLink href="/attorneys">Meet your attorney</ArrowLink>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className={`${styles.values} animate-in`}>
        <div className={styles.valuesGrid}>
          <div>
            <p className="section-label">The standard we set</p>
            <h2 className={styles.valuesHeading}>
              You should never feel like just another file.
            </h2>
          </div>
          <div className={styles.valuesRight}>
            <div className={styles.valueItem}>
              <h4>A conversation, not a script</h4>
              <p>
                We adapt our advice and communication to your circumstances and preferences.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h4>Candour, not guarantees</h4>
              <p>
                We explain uncertainty and possible outcomes honestly. No attorney can promise
                a result.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h4>A relationship with boundaries</h4>
              <p>
                We confirm the scope of our work in writing and discuss any changes before
                proceeding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTABanner />
    </>
  );
}
