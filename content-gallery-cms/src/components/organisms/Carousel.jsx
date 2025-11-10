import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../atoms/Icons";
import { PortableText } from "@portabletext/react";

export const Carousel = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className="relative w-full overflow-hidden" ref={emblaRef}>
      {/* Faixa deslizante */}
      <div className="flex">
        {images.map((src, i) => (
          <div key={i} className="flex-[0_0_100%] relative">
            <img
              src={src.imageUrl}
              alt={`Slide ${i + 1}`}
              className="w-full h-[60vh] object-contain"
            />
            <div className="flex text-white text-xl mt-4 px-20">
              <PortableText value={src.description} />
            </div>
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-1 text-white/50 cursor-pointer transition duration-300 hover:scale-130 hover:text-white"
      >
        <LeftArrowIcon className="w-12 h-12" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-white/50 cursor-pointer transition duration-300 hover:scale-130 hover:text-white"
      >
        <RightArrowIcon className="w-12 h-12" />
      </button>
    </div>
  );
};
