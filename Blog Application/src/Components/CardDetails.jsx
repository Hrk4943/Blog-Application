import React from "react";
import { useParams } from "react-router-dom";
import card1 from "../assets/cardImage/c1.jpg";
import card2 from "../assets/cardImage/c2.jpg";
import card3 from "../assets/cardImage/c3.jpg";
import card4 from "../assets/cardImage/c4.jpg";



function CardDetails() {
  const blogs = [
    {
      title: "Blog Post 1",
      imageUrl: card1,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Blog Post 2",
      imageUrl: card2,
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Blog Post 3",
      imageUrl: card3,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Blog Post 4",
      imageUrl: card4,
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const { index } = useParams();
  const post = blogs[parseInt(index)];

  if (!post) {
    return <div>Blog not found</div>;
  }
  return (
    <>
      <div className="bg-white shadow-md p-4  mt-20">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-96 object-cover mb-4"
        />
        <h2 className="text-3xl font-semibold mb-2 text-center">{post.title}</h2>
        <p className="text-gray-700 text-lg text-center mx-10 ">{post.content}</p>
      </div>
    </>
  );
}

export default CardDetails;
