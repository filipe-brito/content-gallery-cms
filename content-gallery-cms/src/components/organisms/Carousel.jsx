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

  /**
   * Há estilos feitos no editor de texto no painel do Sanity Studio que
   * não são interpretados automaticamente no React. Para isso, é necessário
   * definir como cada um desses estilos será renderizado.
   * Criamos o objeto portableTextComponents para mapear esses estilos e passamos
   * ele como propriedade para o componente PortableText.
   *
   * EXPLICANDO OS ESTILOS:
   * block: h1, h2, h3 -> Estilos para cabeçalhos
   * list: bullet, number -> Estilos para listas
   * listItem: bullet, number -> Estilos para itens de listas
   * marks: link -> Estilo para links
   */
  const portableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-4xl font-bold mt-6 mb-4">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-3xl font-semibold mt-5 mb-3">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-medium mt-4 mb-2">{children}</h3>
      ),
    },

    list: {
      bullet: ({ children }) => <ul className="list-disc ml-6">{children}</ul>,
      number: ({ children }) => (
        <ol className="list-decimal ml-6">{children}</ol>
      ),
    },

    listItem: {
      bullet: ({ children }) => <li className="mb-1">{children}</li>,
      number: ({ children }) => <li className="mb-1">{children}</li>,
    },

    marks: {
      link: ({ value, children }) => (
        <a
          href={value?.href}
          target="_blank"
          className="text-rose-500 underline"
        >
          {children}
        </a>
      ),
    },
  };

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
            <div className="font-inter text-white text-xl mt-4 px-20">
              <PortableText
                value={src.description}
                components={portableTextComponents}
              />
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
