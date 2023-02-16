import PropTypes from 'prop-types';
import { Component } from 'react';

export class FeedbackOptions extends Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        <ul>
          {options.map((option, index) => {
            return (
              <li key={index}>
                <button type="button" onClick={onLeaveFeedback}>
                  {option[0].toUpperCase() + option.slice(1, option.length)}
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
