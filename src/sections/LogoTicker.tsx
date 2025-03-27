import Image from "next/image";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";

export const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image
              src={acmeLogo}
              alt="acme logo"
              width={200}
              height={50}
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="quantum logo"
              width={200}
              height={50}
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="echo logo"
              width={200}
              height={50}
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="celestial logo"
              width={200}
              height={50}
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="pulse logo"
              width={200}
              height={50}
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="apex logo"
              width={200}
              height={50}
              className="logo-ticker-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
