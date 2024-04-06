import fc from './Feedback.module.css';

const Feedback = ({ feedback: { good, neutral, bad }, totalFeedback, getAvarageFeedback }) => {
  return (
    <ul className={fc.feedback}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {getAvarageFeedback}%</li>
    </ul>
  );
};

export default Feedback;
