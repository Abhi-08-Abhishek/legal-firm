'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import styles from './FAQAccordion.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <button
            className={styles.trigger}
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span className={styles.question}>{item.question}</span>
            <Plus
              className={`${styles.icon} ${openIndex === index ? styles.open : ''}`}
              size={20}
            />
          </button>
          <div
            className={`${styles.content} ${openIndex === index ? styles.open : ''}`}
          >
            <p className={styles.answer}>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
