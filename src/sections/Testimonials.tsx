import Image from "next/image";

import { motion } from "framer-motion";

import { testimonials } from "@/constants";
import React from "react";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: props.duration || 10,
        ease: "linear",
      }}
      className="flex flex-col gap-6 pb-16"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(
            ({ text, imageSrc, name, username }, index) => (
              <div key={index} className="card">
                <div>{text}</div>

                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight text-muted-foreground text-sm">
                      {username}
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </React.Fragment>
      ))}

      {props.testimonials.map(({ text, imageSrc, name, username }, index) => (
        <div key={index} className="card">
          <div>{text}</div>

          <div className="flex items-center gap-2 mt-5">
            <Image
              src={imageSrc}
              alt={name}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col">
              <div className="font-medium tracking-tight leading-5">{name}</div>
              <div className="leading-5 tracking-tight text-muted-foreground text-sm">
                {username}
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our users are saying</h2>
          <p className="section-description mt-5 mb-28">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={19} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={23}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden md:block"
            duration={21}
          />
        </div>
      </div>
    </section>
  );
};
