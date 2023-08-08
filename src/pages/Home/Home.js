import React, { useState } from "react";
import "./Home.css";
import BlogList from "../../components/BlogList/BlogList";

export default function Home() {
  const values = ["abc", "xyz"];
  const [index, setIndex] = useState(0);
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Blog 1" },
    { id: 2, title: "Blog 2" },
    { id: 3, title: "Blog 3" },
  ]);

  const handleClick = () => {
    setIndex((prevIndex) => {
      console.log(prevIndex);
      console.log(values.length);
      console.log((prevIndex + 1) % values.length);
      return (prevIndex + 1) % values.length;
    });
  };

  return (
    <div className="container">
      <h1>Welcome to My Website</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        luctus mi, sit amet aliquet magna. Ut eu quam nec orci fermentum
        scelerisque.
      </p>
      <p>{values[index]}</p>
      <button onClick={handleClick}>Click me</button>

      <BlogList blogs={blogs} />
    </div>
  );
}
