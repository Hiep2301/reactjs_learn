import React from "react";
import { useLocation } from "react-router-dom";

export default function BlogDetails() {
  const location = useLocation();
  const blog = location.state?.blog;

  if (!blog) return <div>No blog selected.</div>;

  return (
    <div>
      <h2>
        {blog.author} - {blog.title}
      </h2>
      {/* You can add more blog details here */}
    </div>
  );
}
