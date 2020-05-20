import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const StyledLink = ({ children, href, ...rest }) => (
  <Link href={href} prefetch={false} passHref>
    <a data-testid="link" {...rest} className="link">
      {children}
    </a>
  </Link>
);

StyledLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default StyledLink;
