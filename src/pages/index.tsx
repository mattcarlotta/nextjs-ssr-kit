import Head from "next/head";
import { FaCoffee } from "react-icons/fa";
import Link from "~components/Navigation/Link";
import SubTitle from "~components/Layout/SubTitle";
import { FC } from "~types";

const Home: FC = () => (
  <div
    data-testid="home-page"
    css="text-align: center;height: 100%;color: #007ec5;background-color: #ebebeb;"
  >
    <Head>
      <title>Home - NextJS SSR Kit</title>
    </Head>
    <div css="max-width: 850px;width: 100%;padding-top: 25vh;margin-left: auto;	margin-right: auto;margin-bottom: 20px;">
      <img
        css="margin-bottom: 10px;width: 100%;"
        src="/images/nextjsKit.png"
        alt="ssrLogoLight.png"
      />
      <SubTitle>Edit files in the root directory and save to reload.</SubTitle>
      <Link href="/users">
        <FaCoffee
          style={{
            position: "relative",
            top: 6,
            fontSize: 23,
            marginRight: 5,
          }}
        />
        See Example
      </Link>
    </div>
  </div>
);

export default Home;
