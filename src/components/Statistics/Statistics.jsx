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
    const [goodVar, neutralVar, badVar] = Object.keys(this.props);
    return (
      <StatList>
        <StatListItem variant={goodVar}>
          <p>Good:</p>
          <p>{good}</p>
        </StatListItem>
        <StatListItem variant={neutralVar}>
          <p>Neutral:</p>
          <p>{neutral}</p>
        </StatListItem>
        <StatListItem variant={badVar}>
          <p>Bad:</p>
          <p>{bad}</p>
        </StatListItem>
        <StatListItem>
          <p>Total:</p>
          <p>{total}</p>
        </StatListItem>
        <StatListItem>
          <p>Positive feedback:</p>
          <p>{positivePercentage}%</p>
        </StatListItem>
      </StatList>
    );
  }
}
