import React from "react";
import Banner from "../layouts/Banner";
import Header from "../layouts/Header";
import Cards from "../layouts/Cards";
import Services from "../layouts/Services";
import Testimonial from "../layouts/Testimonial";
import Footer from "../layouts/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Cards />
      <Services />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default Home;
