import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  OptionsList,
  OptionsListItem,
  OptionsListBtn,
} from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <OptionsList>
        {options.map(option => {
          return (
            <OptionsListItem key={option}>
              <OptionsListBtn
                id={option}
                type="button"
                onClick={onLeaveFeedback}
              >
                {option[0].toUpperCase() + option.slice(1, option.length)}
              </OptionsListBtn>
            </OptionsListItem>
          );
        })}
      </OptionsList>
    );
  }
}
