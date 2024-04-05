import Description from './Description/Descriptions';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import { useState, useEffect } from 'react';
import ac from './App.module.css';

const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const getInitialFeedback = () => {
  const savedFeedback = window.localStorage.getItem('feedback');
  return savedFeedback !== null ? JSON.parse(savedFeedback) : initialFeedback;
};

function App() {
  const [feedback, setFeedback] = useState(getInitialFeedback);

  const updateFeedback = feedbackType => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => {
    setFeedback(initialFeedback);
  };

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div className={ac.app}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback !== 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
}

export default App;
