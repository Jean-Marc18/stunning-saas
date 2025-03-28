import Link from "next/link";
import Image from "next/image";

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import ToggleButton from "@/components/ToggleButton";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm !bg-transparent z-50">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-muted-foreground hidden md:block">
          Streamline your worflow and boost your productivity
        </p>
        <div className="flex items-center">
          <p>Get started for free</p>
          <ArrowRight className="ml-1 w-4 h-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Logo" width={40} height={40} />

            <Sheet>
              <SheetTrigger className="md:hidden">
                <MenuIcon className="w-7 h-7 cursor-pointer" />
              </SheetTrigger>
              <SheetContent side="top" className="h-full">
                <div className="size-full flex flex-col  items-center justify-between pt-10">
                  <Image src={Logo} alt="Logo" width={40} height={40} />
                  <nav className="flex justify-between items-center">
                    <ul className="flex flex-col gap-6 items-center text-muted-foreground">
                      <li>
                        <Link href="#">About</Link>
                      </li>
                      <li>
                        <Link href="#">Features</Link>
                      </li>
                      <li>
                        <Link href="#">Customers</Link>
                      </li>
                      <li>
                        <Link href="#">Updates</Link>
                      </li>
                      <li>
                        <Link href="#">Helps</Link>
                      </li>
                    </ul>
                  </nav>

                  <div className="flex flex-col items-center gap-4">
                    {/* <ToggleButton /> */}
                    <Button>Get for free</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <nav className="hidden md:flex justify-between items-center">
              <ul className="flex gap-6 text-black/60 dark:text-neutral-300 items-center">
                <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <Link href="#">Features</Link>
                </li>
                <li>
                  <Link href="#">Customers</Link>
                </li>
                <li>
                  <Link href="#">Updates</Link>
                </li>
                <li>
                  <Link href="#">Helps</Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {/* <ToggleButton /> */}
              <Button className="hidden md:flex">Get for free</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
