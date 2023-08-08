import React from "react";
import { useNavigate } from "react-router-dom";

export default function BlogList({ blogs }) {
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
              <li onClick={() => onBlogClick(blog)}>
                {blog.id} - {blog.title}
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
}
