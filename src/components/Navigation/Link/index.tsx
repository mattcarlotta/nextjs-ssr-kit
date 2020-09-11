import Link from "next/link";
import styled from "styled-components";
import { LinkProps } from "~types";

const LinkComponent = ({ children, className, href, ...rest }: LinkProps) => (
  <Link href={href} prefetch={false} passHref>
    <a data-testid="link" {...rest} className={className}>
      {children}
    </a>
  </Link>
);

const StyledLink = styled(LinkComponent)`
  cursor: pointer;
  display: block;
  color: #007ec5;
  font-size: 16px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;

  :hover {
    color: #0f7ae5;
    text-decoration: underline;
  }

  :focus {
    outline: 0;
  }
`;

export default StyledLink;
