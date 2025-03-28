import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";

import Image from "next/image";

import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>

          <Image
            src={starImage}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
          />
          <Image
            src={springImage}
            alt="Spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <Button>Get for free</Button>
          <Button variant="ghost" className="gap-1">
            <span>Learn more</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
