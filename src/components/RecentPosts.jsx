import React from "react";
import PageTitles from "./PageTitles";
import styled from "styled-components";
import Posts from "./Posts";

// css for recent posts section
const RecentPostsSection = styled.div``;

const RecentPosts = () => {
  let title = "Recent Posts";
  let description =
    "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit";
  return (
    <RecentPostsSection>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12">
            <PageTitles title={title} description={description}></PageTitles>
          </div>
          <Posts></Posts>
        </div>
      </div>
    </RecentPostsSection>
  );
};

export default RecentPosts;
