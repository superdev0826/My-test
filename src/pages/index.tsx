import type { NextPage } from 'next';
import Head from 'next/head';
import { MainLayout } from '../layout';



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <MainLayout />
    </>
  );
};

export default Home;
