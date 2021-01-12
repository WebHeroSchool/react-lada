import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({count}) => (<p>Осталось дел: {count}</p>);

Footer.defaultProps = {
  count: 0
};

Footer.propTypes = {
  count: PropTypes.number
};

export default Footer;