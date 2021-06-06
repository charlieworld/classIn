import Head from 'next/head';
import Footer from './Footer';

export default function MainLayout(props: { children: React.ReactNode; }) {
  const { children } = props;

  return (
    <div id="main">
      <Head>
        <title>ClassIn | 專屬輔大人的修課經驗交流平台</title>
        <meta http-equiv="pragma" content="no-cache"></meta>
        <meta name="description" content="專屬輔大學生的修課評價網站，來看看學長姐們對於不同課程的評價、也分享你這學期所修的課吧！" />
        <meta name="author" content="ClassIn"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="ClassIn | 專屬輔大人的修課經驗交流平台"/>
        <meta property="og:description" content="專屬輔大學生的修課評價網站，來看看學長姐們對於不同課程的評價、也分享你這學期所修的課吧！" />
        <meta property="og:image" content="./asset/og_cover.jpg"/>
        <meta property="og:url" content="https://classin.info"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="ClassIn"/>
      </Head>
      {children}
      <Footer />
    </div>
  );
}
