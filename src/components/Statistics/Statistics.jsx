import PropTypes from 'prop-types';
import { Component } from 'react';
import { StatList, StatListItem } from './Statistics.styled';

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
    const [g, n, b] = Object.keys(this.props);
    return (
      <StatList>
        <StatListItem id={g}>
          <p>Good:</p>
          <p> {good}</p>
        </StatListItem>
        <StatListItem id={n}>
          <p>Neutral:</p>
          <p> {neutral}</p>
        </StatListItem>
        <StatListItem id={b}>
          <p>Bad:</p>
          <p> {bad}</p>
        </StatListItem>
        <StatListItem>
          <p>Total:</p>
          <p> {total}</p>
        </StatListItem>
        <StatListItem>
          <p>Positive feedback:</p>
          <p> {positivePercentage}%</p>
        </StatListItem>
      </StatList>
    );
  }
}
