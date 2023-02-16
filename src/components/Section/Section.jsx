import PropTypes from 'prop-types';
import { Component } from 'react';

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
  };
  render() {
    return (
      <section>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </section>
    );
  }
}
