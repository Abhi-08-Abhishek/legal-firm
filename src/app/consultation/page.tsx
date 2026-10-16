'use client';

import { useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowUpRight, Lock, CheckCircle2, Loader2 } from 'lucide-react';
import styles from './page.module.css';
import ArrowLink from '@/components/ArrowLink/ArrowLink';

function ConsultationFormContent() {
  const searchParams = useSearchParams();
  const initialAttorney = searchParams.get('attorney') || '';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    practiceArea: '',
    situation: '',
    agreeConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.practiceArea ||
      !formData.situation ||
      !formData.agreeConsent
    ) {
      alert('Please complete all required fields and accept the consent agreement.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit request.');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(
        err.message ||
          'Something went wrong while sending your request. Please try again or call us directly at (416) 555-0128.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      preferredContact: 'email',
      practiceArea: '',
      situation: '',
      agreeConsent: false,
    });
    setErrorMessage('');
    setIsSubmitted(false);
  };

  return (
    <div className={styles.pageContainer}>
      {/* BREADCRUMB */}
      <div className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <span>/</span>
        Request a consultation
      </div>

      {/* HERO HEADER */}
      <div className={styles.heroHeader}>
        <div>
          <p className="section-label">A clearer way forward</p>
          <h1 className={styles.heroHeading}>Let&apos;s take the first step.</h1>
        </div>
        <p className={styles.heroSubtext}>
          Every matter begins with a conversation. Tell us a little about yours,
          and we&apos;ll help you understand what comes next.
        </p>
      </div>

      {/* MAIN TWO-COLUMN LAYOUT */}
      <div className={styles.mainLayout}>
        {/* LEFT COLUMN: FORM */}
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Tell us how we can help</h2>
            <span className={styles.timeBadge}>About 3 minutes</span>
          </div>
          <p className={styles.requiredNotice}>Fields marked with * are required.</p>

          {isSubmitted ? (
            <div className={styles.successBox}>
              <CheckCircle2 size={48} color="#2d5e4a" style={{ margin: '0 auto 1rem' }} />
              <h3 className={styles.successTitle}>Thank you, {formData.firstName}!</h3>
              <p className={styles.successDesc}>
                We have received your consultation request and dispatched a confirmation
                email to <strong>{formData.email}</strong>. One of our attorneys or
                intake specialists will review your matter and contact you within
                one business day.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className={styles.successResetBtn}
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* SECTION 01: YOUR DETAILS */}
              <p className={styles.formSectionTitle}>01 / Your details</p>

              <div className={styles.inputGrid}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="firstName" className={styles.fieldLabel}>
                    First name<span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={styles.textInput}
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="lastName" className={styles.fieldLabel}>
                    Last name<span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={styles.textInput}
                  />
                </div>
              </div>

              <div className={styles.inputGrid}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="email" className={styles.fieldLabel}>
                    Email address<span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.textInput}
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="phone" className={styles.fieldLabel}>
                    Phone number <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(416) 555-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.textInput}
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Preferred contact</label>
                <div className={styles.radioRow}>
                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleChange}
                      className={styles.radioInput}
                    />
                    <span>Email</span>
                  </label>
                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleChange}
                      className={styles.radioInput}
                    />
                    <span>Phone</span>
                  </label>
                </div>
              </div>

              <div className={styles.sectionDivider} />

              {/* SECTION 02: YOUR LEGAL MATTER */}
              <p className={styles.formSectionTitle}>02 / Your legal matter</p>

              <div className={styles.fieldGroup}>
                <label htmlFor="practiceArea" className={styles.fieldLabel}>
                  How can we help?<span className={styles.requiredStar}>*</span>
                </label>
                <select
                  id="practiceArea"
                  name="practiceArea"
                  required
                  value={formData.practiceArea}
                  onChange={handleChange}
                  className={styles.selectInput}
                >
                  <option value="" disabled>Select a practice area</option>
                  <option value="business">Business & corporate law</option>
                  <option value="family">Family law</option>
                  <option value="estate">Estate planning</option>
                  <option value="realestate">Real estate</option>
                  <option value="litigation">Civil litigation</option>
                  <option value="criminal">Criminal defense</option>
                  <option value="other">General inquiry / Not sure</option>
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="situation" className={styles.fieldLabel}>
                  Briefly describe your situation<span className={styles.requiredStar}>*</span>
                </label>
                <textarea
                  id="situation"
                  name="situation"
                  required
                  maxLength={1000}
                  placeholder="Share a short overview and any important dates or deadlines..."
                  value={formData.situation}
                  onChange={handleChange}
                  className={styles.textareaInput}
                />
                <div className={styles.textareaFooter}>
                  <span>Please do not include confidential or sensitive information.</span>
                  <span>{formData.situation.length} / 1,000</span>
                </div>
              </div>

              <label className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  name="agreeConsent"
                  required
                  checked={formData.agreeConsent}
                  onChange={handleChange}
                  className={styles.checkboxInput}
                />
                <span className={styles.checkboxLabel}>
                  I agree to the Privacy Policy and consent to being contacted by
                  Legalize about my consultation request. *
                </span>
              </label>

              {errorMessage && (
                <div
                  style={{
                    backgroundColor: '#fff0f0',
                    border: '1px solid #ffcccc',
                    color: '#c00',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '1.25rem',
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                  }}
                >
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitBtn}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="spin" style={{ animation: 'spin 1s linear infinite' }} />
                    Submitting request...
                  </>
                ) : (
                  <>
                    Request a consultation <ArrowUpRight size={18} />
                  </>
                )}
              </button>

              <div className={styles.securityNote}>
                <Lock size={14} />
                <span>Your information is handled securely and with care.</span>
              </div>
            </form>
          )}
        </div>

        {/* RIGHT COLUMN: SIDEBAR */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <div className={styles.attorneyImageCol}>
              <Image
                src="/images/attorney-eleanor.jpg"
                alt="Eleanor Bennett, Managing Partner"
                fill
                sizes="(max-width: 968px) 100vw, 400px"
                className={styles.attorneyImage}
              />
            </div>

            <h3 className={styles.counselHeading}>
              Good counsel starts with listening.
            </h3>
            <p className={styles.counselText}>
              Our attorneys take the time to understand your circumstances,
              explain your options, and help you move forward with confidence.
            </p>
            <ArrowLink href="/attorneys">Meet our attorneys</ArrowLink>
          </div>

          <div className={styles.sidebarDivider} />

          {/* WHAT HAPPENS NEXT */}
          <div>
            <h3 className={styles.nextStepsTitle}>What happens next</h3>
            <div className={styles.stepsList}>
              <div className={styles.stepItem}>
                <span className={styles.stepNumber}>01</span>
                <div>
                  <h4 className={styles.stepHeading}>A thoughtful review</h4>
                  <p className={styles.stepDescription}>
                    Our team reviews your request and connects you with the right attorney.
                  </p>
                </div>
              </div>

              <div className={styles.stepItem}>
                <span className={styles.stepNumber}>02</span>
                <div>
                  <h4 className={styles.stepHeading}>A personal response</h4>
                  <p className={styles.stepDescription}>
                    We&apos;ll contact you within one business day to arrange a convenient time.
                  </p>
                </div>
              </div>

              <div className={styles.stepItem}>
                <span className={styles.stepNumber}>03</span>
                <div>
                  <h4 className={styles.stepHeading}>Clarity on your options</h4>
                  <p className={styles.stepDescription}>
                    Discuss your matter, ask questions, and understand any fees before proceeding.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.sidebarDivider} />

          {/* DIRECT PHONE BOX */}
          <div className={styles.phoneBox}>
            <p className={styles.phoneLabel}>Prefer to speak with someone?</p>
            <a href="tel:+14165550128" className={styles.phoneLink}>
              (416) 555-0128 <ArrowUpRight size={18} />
            </a>
            <p className={styles.phoneHours}>Monday–Friday, 9:00 am–5:00 pm ET</p>
          </div>

          <p className={styles.sidebarDisclaimer}>
            Submitting this form does not create an attorney–client relationship.
            If your matter is urgent or involves a deadline, please call our office directly.
          </p>
        </aside>
      </div>
    </div>
  );
}

export default function ConsultationPage() {
  return (
    <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center' }}>Loading...</div>}>
      <ConsultationFormContent />
    </Suspense>
  );
}
