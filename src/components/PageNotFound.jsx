import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div>PageNotFound</div>
      <Link to="/posts">Go to Posts</Link>
    </>
  );
};

export default PageNotFound;
