import fc from './Feedback.module.css';

const Feedback = ({ feedback: { good, neutral, bad }, totalFeedback }) => {
  return (
    <ul className={fc.feedback}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {Math.round(((good + neutral) / totalFeedback) * 100)}%</li>
    </ul>
  );
};

export default Feedback;
