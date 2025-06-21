import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

import { MdExplore } from "react-icons/md";
import { IoMdUnlock } from "react-icons/io";

interface HeroProps {
  handleUnlock: () => void;
}

const Hero = ({ handleUnlock }: HeroProps) => {
  return (
    <section className="relative mb-16 rounded-2xl overflow-hidden">
      <div className="relative h-[500px] bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=A%20stunning%20fantasy%20library%20with%20towering%20bookshelves%2C%20magical%20glowing%20books%2C%20spiral%20staircases%2C%20and%20floating%20lanterns%2C%20rays%20of%20light%20streaming%20through%20stained%20glass%20windows%2C%20atmospheric%20and%20enchanting%20scene%20with%20rich%20details%20and%20warm%20colors&width=1400&height=500&seq=22&orientation=landscape')`,
            opacity: 0.7,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent"></div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6 md:px-12 flex">
            <div className="w-full md:w-1/2 text-white z-10 py-12">
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 !rounded-button whitespace-nowrap">
                Featured Collection
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Discover Worlds Beyond Imagination
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                Explore thousands of captivating stories across every genre.
                Your next literary adventure awaits.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="!rounded-button whitespace-nowrap hover:bg-white/30 hover:text-black"
                >
                  <MdExplore className="fas fa-crown mr-2" />
                  Explore Library
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white text-white hover:bg-white/20 !rounded-button whitespace-nowrap"
                  onClick={handleUnlock}
                >
                  <IoMdUnlock className="fas fa-compass mr-2" />
                  Unlock Access
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
