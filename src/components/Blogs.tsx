import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShare2 } from "react-icons/fi";
import { FaRegComments } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Avatar, AvatarImage } from "./ui/avatar";

const cards = [
  {
    imgSrc: "blogs/b1.png",
    date: "Apr 20, 2024",
    views: "500 Views",
    liked: "200 Liked",
    comments: "200 Comments",
    avatar: "path/to/avatar1.jpg",
    name: "shibluahmad",
    read: "Read 5 min",
    title: "AI has made a big difference in simplifying our lives.",
    paragraph:
      "There are thousands of free and premium Word-Press themes available, catering...",
  },
  {
    imgSrc: "blogs/b2.png",
    date: "Apr 20, 2024",
    views: "500 Views",
    liked: "200 Liked",
    comments: "200 Comments",
    avatar: "path/to/avatar1.jpg",
    name: "shibluahmad",
    read: "Read 5 min",
    title: "Bank registration typically refers to the process",
    paragraph:
      "There are thousands of free and premium Word-Press themes available, catering...",
  },
  {
    imgSrc: "blogs/b3.png",
    date: "Apr 20, 2024",
    views: "500 Views",
    liked: "200 Liked",
    comments: "200 Comments",
    avatar: "path/to/avatar1.jpg",
    name: "shibluahmad",
    read: "Read 5 min",
    title: "Bank registration typically refers to the process",
    paragraph:
      "There are thousands of free and premium Word-Press themes available, catering...",
  },
  {
    imgSrc: "blogs/b4.png",
    date: "Apr 20, 2024",
    views: "500 Views",
    liked: "200 Liked",
    comments: "200 Comments",
    avatar: "path/to/avatar1.jpg",
    name: "shibluahmad",
    read: "Read 5 min",
    title: "8 special and essential trips for UI designer",
    paragraph:
      "There are thousands of free and premium Word-Press themes available, catering...",
  },
];

const Blogs = () => {
  return (
    <section className=" relative">
      {/* Decoration  */}
      <img
        src="/blogs/deco1.png"
        alt="Icon 3"
        className="absolute -bottom-92 left-0 w-[456px] -z-20"
      />

      <img
        src="/blogs/deco2.png"
        alt="Icon 1"
        className="absolute top-0 right-16 w-44"
      />
      <section className="myContainer ">
        {/* Title and Paragraph */}
        <div className="text-center mb-12 mt-24">
          <h2 className="text-5xl font-bold mb-4">Latest Blog</h2>
          <p className="text-lg text-gray-600 mb-20">
            Your one-stop solution for transforming audio and <br /> video into
            a wide range of content formats.
          </p>
        </div>

        {/* Cards */}
        <div className="mb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                {/* Image */}
                <img
                  src={card.imgSrc}
                  alt={`Card Image ${idx + 1}`}
                  className="w-full p-4 h-60  rounded-[15px]"
                />
                <div className="absolute top-7 left-7 bg-black bg-opacity-30 text-white text-xs px-3 py-2 rounded border border-white border-opacity-60 backdrop-blur-sm">
                  {card.date}
                </div>

                <div
                  className="absolute top-7 right-7 bg-white text-[#4A2BF1] text-xs px-1 py-1 rounded-md flex items-center justify-center"
                  style={{
                    boxShadow: "0 4px 12px rgba(255, 255, 255, 0.7)",
                  }}
                >
                  <IoMdHeartEmpty size={18} />
                </div>
              </div>

              <div className="px-4 pb-6">
                {/* View, Like, Comment */}
                <div className="flex items-center justify-between mb-4">
                  <button className="flex items-center space-x-2 text-[#355BFB] bg-[#355BFB1A] text-xs px-1 py-1 rounded hover:bg-[#355BFB1A]">
                    <IoEyeOutline size={14} />
                    <span>{card.views}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-[#355BFB] bg-[#355BFB1A] text-xs px-1 py-1 rounded hover:bg-[#355BFB1A]">
                    <IoMdHeartEmpty size={14} />
                    <span>{card.liked}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-[#355BFB] bg-[#355BFB1A] text-xs px-1 py-1 rounded hover:bg-[#355BFB1A]">
                    <FaRegComments size={14} />
                    <span>{card.comments}</span>
                  </button>
                  <div className="flex items-center space-x-2 text-[#fff] bg-[#355BFB] text-xs px-1 py-1 rounded hover:bg-[#355BFB1A]">
                    <FiShare2 size={14} />
                  </div>
                </div>

                {/* Avatar and Name */}
                <div className="flex items-center mb-4">
                  <Avatar className="w-4 h-4">
                    <AvatarImage
                      src="/blogs/avatar.png"
                      className="w-full h-full rounded-full"
                    />
                  </Avatar>
                  <div className="flex flex-row ml-2 items-center">
                    <span className="text-[#4A2BF1] text-xs font-semibold">
                      {card.name}
                    </span>
                    <span className="w-1 h-1 bg-[#546A7E] rounded-full mx-1"></span>
                    <p className="text-[#546A7E] text-[10px]">{card.read}</p>
                  </div>
                </div>

                {/* Title and Paragraph */}
                <h3
                  //   className="font-workSans"
                  style={{
                    //   fontFamily: "Work Sans",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "28px",
                    marginBottom: "8px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  //   className="font-workSans"
                  style={{
                    //   fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "21px",
                    color: "#546A7E",
                  }}
                >
                  {card.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Blogs;
