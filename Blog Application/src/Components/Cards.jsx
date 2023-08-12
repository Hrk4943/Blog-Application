import React from "react";
import { useNavigate } from "react-router-dom";
import card1 from "../assets/cardImage/c1.jpg";
import card2 from "../assets/cardImage/c2.jpg";
import card3 from "../assets/cardImage/c3.jpg";
import card4 from "../assets/cardImage/c4.jpg";

function Cards() {
  const Navigate = useNavigate();
  const posts = [
    {
      title: "Blog Post 1",
      imageUrl: card1,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Blog Post 2",
      imageUrl: card2,
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Blog Post 3", 
      imageUrl: card3,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Blog Post 4", 
      imageUrl: card4,
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      <div className="flex justify-center mt-10 items-center h-screen">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Featured Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md border-2 border-white rounded-lg overflow-hidden w-96"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-700">{post.content}</p>

                <button
                  className="mt-4 border-2 border-black hover:bg-black hover:text-white text-black px-4 py-2 focus:outline-none focus:ring focus:ring-slate-300"
                  onClick={() => Navigate(`/blogs/${index}`)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Cards;
