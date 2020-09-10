import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { LinkProps } from "~types";

const LinkComponent = ({ children, href, ...rest }: LinkProps) => (
  <Link href={href} prefetch={false} passHref>
    <a data-testid="link" {...rest} className="link">
      {children}
    </a>
  </Link>
);

const StyledLink = styled(LinkComponent)`
  cursor: pointer;
  display: block;
  color: #03a9f3;
  font-size: 16px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;

  :hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
