import Link from "next/link";
import Image from "next/image";

import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import logo from "@/assets/logosaas.png";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="relative"
          />
        </div>

        <nav className="flex flex-col md:justify-center md:flex-row gap-6 mt-6">
          <Link href="#">About</Link>
          <Link href="#">Features</Link>
          <Link href="#">Customers</Link>
          <Link href="#">Updates</Link>
          <Link href="#">Helps</Link>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          © 2023 Stunning Saas by JMK. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
