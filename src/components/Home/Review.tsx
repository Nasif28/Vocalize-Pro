"use client";
import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Angel Rose",
    title: "Founder and CEO at Emergency Net",
    review:
      "Done! This is truly an amazing product that will save us so much time. I’ll definitely be spreading the word! With all the buzz about Chat GPT, people are exploring new possibilities, and nothing else I’ve found matches these features. Fantastic!",
    image: "/review/p1.png",
  },
  {
    id: 2,
    name: "John Doe",
    title: "CTO at Tech Innovators",
    review:
      "This service has been a game-changer for us! We’ve significantly cut down on our project timelines, and the efficiency is unparalleled. Everyone on the team is impressed with the results, and we’re excited to see how much further we can take it. Truly incredible!",
    image: "/review/p2.png",
  },
  {
    id: 3,
    name: "Amy Smith",
    title: "Lead Developer at CodeFlow",
    review:
      "We’ve tried several tools in the past, but nothing comes close to this one. The speed and accuracy are unmatched, and it has completely revolutionized the way we work. I can’t recommend it enough to anyone looking for a smarter solution!",
    image: "/review/p3.png",
  },
  {
    id: 4,
    name: "Rock Johnson",
    title: "Founder and CEO at Emergency Net",
    review:
      "Absolutely amazing! The level of detail and precision this tool offers is beyond anything we expected. It’s been a massive time-saver and has simplified so many of our processes. A must-have for anyone serious about efficiency!",
    image: "/review/p4.png",
  },
  {
    id: 5,
    name: "Angilina Jolly",
    title: "CTO at Tech Innovators",
    review:
      "I’m blown away by how intuitive and easy to use this product is. It has saved us countless hours and drastically improved our workflows. The team’s productivity has soared since we started using it. Couldn’t ask for more!",
    image: "/review/p5.png",
  },
  {
    id: 6,
    name: "John Cena",
    title: "Lead Developer at CodeFlow",
    review:
      "The results speak for themselves! This product has taken our operations to a new level, streamlining tasks and freeing up time for more strategic work. I wouldn’t hesitate to recommend it to anyone looking for a reliable, efficient solution!",
    image: "/review/p6.png",
  },
];

const Review = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

  return (
    <div className="relative">
      <img
        src="/review/pd1.png"
        alt="Icon 1"
        className="absolute top-20 left-16 w-10 h-10 md:w-auto md:h-auto"
      />
      <img
        src="/review/pd3.png"
        alt="Icon 2"
        className="absolute -bottom-1/2 right-0 w-10 h-10 md:w-auto md:h-auto"
      />

      <div className="myContainer">
        <div className="relative py-28">
          <div className="text-center">
            <h2 className="text-5xl font-bold">
              What our customers say about us
            </h2>
            <p className="text-xl text-gray-500 py-4">
              Our Trustworthy Customer
            </p>
          </div>

          {/* Floating Avatars */}
          <div className="overflow-hidden py-5">
            {/* Left side avatars for big screens */}
            <div className="hidden xl:block">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute rounded-full w-32 h-32 bg-white p-2 cursor-pointer transform transition-all duration-500 ease-in-out ${
                    activeTestimonial.id === testimonial.id
                      ? "scale-125 border-4 border-[#4A2BF1]"
                      : "scale-100"
                  }`}
                  style={{
                    bottom: `${(index + 1) * 190}px`, // Vertically spaced
                    left: `${index % 2 === 0 ? "50px" : "250px"}`, // Alternates between left and right for each avatar
                  }}
                  onClick={() => setActiveTestimonial(testimonial)}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* Right side avatars for big screens */}
            <div className="hidden xl:block">
              {testimonials.slice(3).map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute rounded-full w-32 h-32 bg-white p-2 cursor-pointer transform transition-all duration-500 ease-in-out ${
                    activeTestimonial.id === testimonial.id
                      ? "scale-125 border-4 border-[#4A2BF1]"
                      : "scale-100"
                  }`}
                  style={{
                    bottom: `${(index + 1) * 190}px`, // Vertically spaced
                    right: `${index % 2 === 0 ? "50px" : "250px"}`, // Alternates between left and right for each avatar
                  }}
                  onClick={() => setActiveTestimonial(testimonial)}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* Responsive avatars for smaller screens */}
            <div className="xl:hidden flex justify-center gap-4 flex-wrap">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`rounded-full w-24 h-24 bg-white p-2 cursor-pointer transform transition-all duration-500 ease-in-out ${
                    activeTestimonial.id === testimonial.id
                      ? "scale-110 border-4 border-[#4A2BF1]"
                      : "scale-100"
                  }`}
                  onClick={() => setActiveTestimonial(testimonial)}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* Active Testimonial */}
            <div className="my-12 text-center">
              <img
                src="/review/pd2.png"
                alt={activeTestimonial.name}
                className="mx-auto w-20 h-14 my-10"
              />
              <div className="w-72 h-72 mx-auto my-8 rounded-full overflow-hidden">
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="italic text-lg text-gray-600 my-6 xl:w-1/2 mx-auto">
                "{activeTestimonial.review}"
              </p>
              <div className="">
                <span className="text-lg font-semibold text-[#4A2BF1]">
                  {activeTestimonial.name}
                </span>
                {""} - {""}
                <span className="text-lg font-bold">
                  {activeTestimonial.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
