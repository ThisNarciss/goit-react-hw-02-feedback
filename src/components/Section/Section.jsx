import PropTypes from 'prop-types';
import { Component } from 'react';

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
  };
  render() {
    const { title, children } = this.props;

    return (
      <section>
        <h1>{title}</h1>
        {children}
      </section>
    );
  }
}
