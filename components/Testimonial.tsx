import { testimonials } from "@/data/index";
import GlowCard from "./GlowCard";

const Testimonial = () => {
  return (
    <section id="testimonials" className="flex-center">
      <div className="w-full h-full md:px-10 px-5">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          What people <span className="text-purple">say about me?</span>
        </h1>
        <div className="lg:columns-3 md:columns-3 sm:columns-2 columns-1 md:mt-16 sm:mt-14 mt-10">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-2 font-text text-gray-300">
                <p className="font-bold text-xs">{testimonial.name}</p>
                <p className="text-xs">{testimonial.mentions}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
