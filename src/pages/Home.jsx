import React from "react";

// import components
import Hero from "../components/Hero";
import Client from "../components/Client";
import About from "../components/About";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Features from "../components/Features";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Team from "../components/Team";
import CallAction from "../components/CallAction";
import Testimonials from "../components/Testimonials";
import RecentPosts from "../components/RecentPosts";
import Contact from "../components/contact";
const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Client></Client>
      <About></About>
      <Stats></Stats>
      <Services></Services>
      <Features></Features>
      <Portfolio></Portfolio>
      <Pricing></Pricing>
      <Team></Team>
      <CallAction></CallAction>
      <Testimonials></Testimonials>
      <RecentPosts></RecentPosts>
      <Contact></Contact>
    </>
  );
};
export default Home;
