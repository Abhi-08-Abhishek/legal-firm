import styles from './ProcessSteps.module.css';

const steps = [
  {
    number: '01',
    title: 'We listen first.',
    description:
      'Tell us what is happening, what matters to you and any deadlines we should know about.',
  },
  {
    number: '02',
    title: 'We make a plan.',
    description:
      'Understand your options, the scope of our work and the proposed fees before deciding.',
  },
  {
    number: '03',
    title: 'We move together.',
    description:
      'Work with a dedicated attorney, with clear updates and practical advice as your matter develops.',
  },
];

export default function ProcessSteps() {
  return (
    <div className={styles.processSteps}>
      {steps.map((step) => (
        <div key={step.number} className={styles.step}>
          <p className={styles.stepNumber}>{step.number}</p>
          <h3 className={styles.stepTitle}>{step.title}</h3>
          <p className={styles.stepDesc}>{step.description}</p>
        </div>
      ))}
    </div>
  );
}
