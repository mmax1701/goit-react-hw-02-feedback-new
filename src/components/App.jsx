import { Component } from 'react';

export class App extends Component {
  state = {
    good: 1,
    neutral: 2,
    bad: 3,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    console.log(1);
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: </p>
        </div>
      </div>
    );
  }
}
