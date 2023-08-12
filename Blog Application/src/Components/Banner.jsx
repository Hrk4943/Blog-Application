import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img11 from '../assets/img11.jpg'
import img22 from '../assets/img22.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

function Banner() {
  const images = [
    {
      title: "Blog Post 1",
      imageUrl: img11,
    },
    {
      title: "Blog Post 2",
      imageUrl: img22,
    },
    {
      title: "Blog Post 3",
      imageUrl: img3,
    },
    {
        title: "Blog Post 4",
        imageUrl: img4,
      },
  ];

  return (
    <>
       <div className=" text-white py-10">
      <div className="container mx-auto mt-10 px-4">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={3000} 
        >
          {images.map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full  h-96 object-cover rounded-lg"
                
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <h3 className="text-xl font-semibold text-center">{img.title}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
    </>
  );
}

export default Banner;
