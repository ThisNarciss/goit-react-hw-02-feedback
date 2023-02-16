import PropTypes from 'prop-types';
import { Component } from 'react';

export class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <ul>
          <li>
            <p>Good:{good}</p>
          </li>
          <li>
            <p>Neutral:{neutral}</p>
          </li>
          <li>
            <p>Bad:{bad}</p>
          </li>
          <li>
            <p>Total:{total}</p>
          </li>
          <li>
            <p>
              Positive feedback:{positivePercentage ? positivePercentage : 0}
            </p>
          </li>
        </ul>
      </>
    );
  }
}
