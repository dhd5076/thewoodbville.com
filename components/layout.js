import Head from 'next/head';

import Navbar from './navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Head>
      <div className="mx-auto font-goudos">
        <Navbar />
        <div className="mx-auto">
          {children}
        </div>
      </div>
    </>
  );
}