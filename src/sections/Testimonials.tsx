import { testimonials } from "@/constants";
import clsx from "clsx";
import Image from "next/image";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
}) => (
  <div
    className={clsx(
      "flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
      props.className
    )}
  >
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
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white pb-32">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our users are saying</h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <TestimonialsColumn testimonials={firstColumn} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:flex"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden md:flex"
          />
        </div>
      </div>
    </section>
  );
};
