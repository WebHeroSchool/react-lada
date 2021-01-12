import React from 'react';

const Footer = ({count}) => (<p>Осталось дел: {count}</p>);

Footer.defaultProps = {
  count: 0
};

export default Footer;