import Head from "next/head";
import { HeaderProps } from "~types";

const { CLIENT } = process.env;

const Header = ({
  description,
  title,
  type,
  url,
}: HeaderProps): JSX.Element => (
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
  type: "website",
};

export default Header;
