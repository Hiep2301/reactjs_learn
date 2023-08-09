import React from "react";
import { useNavigate } from "react-router-dom";

export default function BlogList({ blogs, author }) {
  const navigate = useNavigate();

  const onBlogClick = (blog) => {
    navigate("/blog-details", { state: { blog } });
  };

  return (
    <div>
      {blogs &&
        blogs.map((blog, index) => (
          <div key={index}>
            <ul>
              <p>
                <b>{author}</b>
              </p>
              <li onClick={() => onBlogClick(blog)}>
                {blog.author} - {blog.title}
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
}
