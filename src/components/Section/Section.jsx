import PropTypes from 'prop-types';
import { Component } from 'react';
import { SectionBox, SectionTitle } from './Section.styled';

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
  };
  render() {
    const { title, children } = this.props;

    return (
      <SectionBox>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionBox>
    );
  }
}
