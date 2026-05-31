import React from "react";


import Hero from "../Hero";
import QuoteSection from "../QuoteSec";
import Collections from "../CollectionSection";
import BoutiqueFeature from "../BoutiqueFeature";
import OlfactoryPyramid from "../OlfactoryPyramid";

const Home = () => {
  return (
    <>
      <Hero/>
      <QuoteSection/>
      <Collections/>
      <BoutiqueFeature/>
      <OlfactoryPyramid/>
    </>
  );
};

export default Home;