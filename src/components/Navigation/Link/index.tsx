import NextLink from "next/link";
import styled from "@emotion/styled";
import { LinkProps } from "~types";

const LinkComponent = ({ children, className, href, ...rest }: LinkProps) => (
  <NextLink href={href} prefetch={false} passHref>
    <a data-testid="link" {...rest} className={className}>
      {children}
    </a>
  </NextLink>
);

const Link = styled(LinkComponent)`
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #0076ff;
  border: 1px solid #0076ff;
  box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
  padding: 0.5rem 2rem;
  border-radius: 4px;
  margin: 0;
  font-weight: 500;

  :hover {
    background: #fff;
    color: #0076ff;
  }

  :focus {
    outline: 0;
  }
`;

export default Link;
