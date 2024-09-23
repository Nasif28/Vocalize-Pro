import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div
    id="faq"
      className="relative py-20 text-white text-center"
      style={{
        backgroundImage: 'url("faq.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ background: "#00000066" }}
      />

      <div className="relative z-10 text-center">
        <h3 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions </h3>
        <p className="text-xl py-6">
          Explore your question to let us know more
        </p>

        {/* Content Section */}
        <div className="flex flex-col mx-auto xl:flex-row gap-14 py-8">
          {/* Left Column - Image */}
          <div className="xl:w-1/2 mx-auto">
            <img src="/faq2.png" alt="FAQ Image" className="rounded-lg" />
          </div>

          {/* Right Column - Accordion */}
          <div className="xl:w-1/2 mx-auto text-left pr-5 xl:pr-40 px-5 md:px-0">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="space-y-6"
            >
              {/* Accordion Item 1 */}
              <AccordionItem
                value="item-1"
                className=" bg-white/30 py-3 px-10 backdrop-blur-md rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-xl font-semibold">
                  How does it work with two wallets?
                </AccordionTrigger>
                <AccordionContent className="text-[#FFFFFFE5] text-base">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </AccordionContent>
              </AccordionItem>

              {/* Accordion Item 2 */}
              <AccordionItem
                value="item-2"
                className=" bg-white/30 py-3 px-10 backdrop-blur-md rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-xl font-semibold">
                  Is there an option for manual Deposit?
                </AccordionTrigger>
                <AccordionContent className="text-[#FFFFFFE5] text-base">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </AccordionContent>
              </AccordionItem>

              {/* Accordion Item 3 */}
              <AccordionItem
                value="item-3"
                className=" bg-white/30 py-3 px-10 backdrop-blur-md rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-xl font-semibold">
                  How to Withdraw Money?
                </AccordionTrigger>
                <AccordionContent className="text-[#FFFFFFE5] text-base">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </AccordionContent>
              </AccordionItem>

              {/* Accordion Item 4 */}
              <AccordionItem
                value="item-4"
                className=" bg-white/30 py-3 px-10 backdrop-blur-md rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-xl font-semibold">
                  How can I upgrade my Ranking?
                </AccordionTrigger>
                <AccordionContent className="text-[#FFFFFFE5] text-base">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </AccordionContent>
              </AccordionItem>

              {/* Accordion Item 5 */}
              <AccordionItem
                value="item-5"
                className=" bg-white/30 py-3 px-10 backdrop-blur-md rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-xl font-semibold">
                  How the Referral Levels works?
                </AccordionTrigger>
                <AccordionContent className="text-[#FFFFFFE5] text-base">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
