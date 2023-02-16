import PropTypes from 'prop-types';
import { Component } from 'react';

export class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    return (
      <>
        <p>{this.props.message}</p>
      </>
    );
  }
}
