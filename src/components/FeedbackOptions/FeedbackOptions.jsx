export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};
