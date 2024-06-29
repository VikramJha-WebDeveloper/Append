import React from "react";
import About from "../components/About";
import PageHeading from "../components/PageHeading";

const AboutPage = () => {
  let heading = "About Us";
  let description =
    "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit";
  return (
    <>
      <PageHeading heading={heading} description={description}></PageHeading>
      <About></About>
    </>
  );
};
export default AboutPage;
