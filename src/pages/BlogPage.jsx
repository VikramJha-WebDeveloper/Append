import React from "react";
import Posts from "../components/Posts";
import PageHeading from "../components/PageHeading";

const BlogPage = () => {
  let heading = "Blog";
  let description =
    "Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.";
  return (
    <>
      <PageHeading heading={heading} description={description}></PageHeading>
      <div className="container py-5">
        <div className="row">
          <Posts></Posts>
        </div>
      </div>
    </>
  );
};
export default BlogPage;
