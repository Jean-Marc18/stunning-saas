import Image from "next/image";

import ArrowRight from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_95%)] dark:bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#020814_95%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-7xl max-md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black dark:from-[#001E80] to-[#001E80] dark:to-[#EAEEFE] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] dark:text-[#d9dffb] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Button size="lg">Get for free</Button>
              <Button variant="ghost">
                <span>Learn more</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={CogImage}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={cylinderImage}
              width={220}
              height={220}
              alt="cylinder Image"
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src={noodleImage}
              width={220}
              height={220}
              alt="noodle Image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
