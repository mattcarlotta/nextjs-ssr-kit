import Head from "next/head";
import { ReactElement } from "~types";

const { CLIENT } = process.env;

export type HeaderProps = {
  description: string;
  title: string;
  type: string;
  url: string;
};

const Header = ({
  description,
  title,
  type,
  url
}: HeaderProps): ReactElement => (
  <Head>
    <title>{title} - NextJS SSR Kit</title>
    <link rel="canonical" href={`${CLIENT}${url}`} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`${CLIENT}${url}`} />
    <meta property="og:type" content={type} />
  </Head>
);

Header.defaultProps = {
  description: "A fullstack MERN SSR boilerplate.",
  type: "website"
};

export default Header;
