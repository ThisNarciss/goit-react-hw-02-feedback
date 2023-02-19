import PropTypes from 'prop-types';
import { Component } from 'react';
import { Text } from './Notification.styled';

export class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    return <Text>{this.props.message}</Text>;
  }
}
