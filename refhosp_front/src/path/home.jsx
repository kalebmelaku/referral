import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import NewsVid from '../components/newsVid';
import Hero from '../components/hero';
import NewsRead from '../components/newsRead';
import Mission from '../components/mission';
import HowToHelp from '../components/howtohelp';
import DonateSec from '../components/donateSection';

function Home()
{
  return (
    <>
      <Header />
      <Hero />
      <section style={{ paddingTop: '30px', paddingBottom: '30px' }} className="module text news-video no-border base-theme" id="">
        <div className="container-sm">
          <h2 className="title text-center">
            WATCH RECENT NEWS
          </h2>
          <NewsVid />
          <h2 className="title text-center mt-5">
            READ RECENT NEWS
          </h2>
          <NewsRead />
        </div>
      </section>
      <Mission />
      <HowToHelp />
      <DonateSec/>
      <Footer />
    </>
  );
}

export default Home;