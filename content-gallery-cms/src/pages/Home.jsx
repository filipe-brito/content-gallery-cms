import { useState } from "react";
import { Carousel } from "../components/organisms/Carousel";
import { client } from "../lib/sanityClient";
import { useEffect } from "react";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  PhoneIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "../components/atoms/Icons";

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "homePageCarouselImage"]{ imageUrl, description }`)
      .then((data) => {
        setImages(data);
      });
  }, []);

  return (
    <div className="w-8/10">
      <section className="w-full flex flex-col items-center mb-20 text-white">
        <h1 className="text-4xl font-extrabold">
          Bem-vindo ao Recanto Nossa Senhora de Lourdes!
        </h1>
        <img
          src="/logo-recanto-header.png"
          alt="logo principal"
          className="w-8/10"
        />
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-extrabold">
            Seja um colaborador{" "}
            <span className="text-rose-500">Amigo do Recanto</span>
          </h1>
          <h3 className="text-2xl font-medium text-center">
            Cadastre-se como colaborador mensal e ajude o Recanto a promover
            inclusão e autonomia para cada vez mais pessoas com deficiência em
            situação de pobreza.
          </h3>
          <h2 className="text-3xl text-rose-500 font-bold">
            Acesse nossas redes sociais
          </h2>
          <ul className="flex gap-3">
            <li>
              <a
                href="https://www.facebook.com/recantonsdelourdes/"
                target="_blank"
              >
                <button>
                  <FacebookIcon className="text-white size-10 transition duration-300 hover:scale-120 cursor-pointer" />
                </button>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/recantonsdelourdes/"
                target="_blank"
              >
                <button>
                  <InstagramIcon className="text-white size-10 transition duration-300 hover:scale-120 cursor-pointer" />
                </button>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCL8haj21ksJaIMNy5jG-k6w"
                target="_blank"
              >
                <button>
                  <YouTubeIcon className="text-white size-10 transition duration-300 hover:scale-120 cursor-pointer" />
                </button>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/99915154/admin/feed/posts/"
                target="_blank"
              >
                <button>
                  <LinkedInIcon className="text-white size-11 transition duration-300 hover:scale-120 cursor-pointer" />
                </button>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="w-full mb-20">
        <h2 className="w-full text-center text-4xl text-white font-extrabold">
          O que dizem alguns dos nossos colaboradores
        </h2>
        <Carousel images={images} />
      </section>
      <section className="w-full flex flex-col items-center mb-20 gap-4">
        <h2 className="text-4xl text-white text-center font-extrabold">
          Faça como a Paloma Bernardi:{" "}
          <span className="text-rose-500 font-extrabold">
            Seja Amigo do Recanto
          </span>
        </h2>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/N7ez1zNZS2E?si=kASzVXr1AgaISP5N"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
      <section className="w-full flex flex-col items-center gap-8 mb-20">
        <h2 className="w-full text-center text-4xl text-white font-extrabold">
          Venha ser amigo do <span className="text-rose-500">Recanto!</span>
          <br></br>
          <p className="text-2xl">
            Para isso é simples, clique no botão abaixo e preencha o formulário
          </p>
        </h2>
        <a
          target="_blank"
          className="bg-rose-500 p-4 rounded-xl transition duration-300 hover:scale-120"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeV8gbiId3HQtZxAxMBHJcewzRrOKjX13vTJXgr9H-9NCua_Q/viewform?vc=0&amp;c=0&amp;w=1&amp;flr=0"
        >
          <button className="text-white text-2xl cursor-pointer">
            Torne-se um colaborador
          </button>
        </a>
      </section>
      <section className="w-full flex gap-4 mb-20">
        <div className="w-6/10">
          <h2 className="text-2xl text-rose-500 font-extrabold mb-4">
            Fale conosco
          </h2>
          <p className="text-xl text-white mb-10">
            Se desejar falar conosco basta entrar em contato através dos
            telefones ou e-mails abaixo. E, se quiser nos visitar para conhecer
            o nosso trabalho com os assistidos ou mesmo adquirir produtos na
            horta ou no bazar, estamos localizados no seguinte endereço: <br />
            <span className="font-extrabold">
              Av. Luís Carlos Gentile de Laet, 1736, Vila Rosa, São Paulo-SP
              (Zona Norte) – CEP: 02378-000
            </span>
          </p>
          <ul className="font-semibold text-xl text-white">
            <li className="flex items-center  gap-2">
              <PhoneIcon className="size-6" />
              (11) 2204.5085
            </li>
            <li className="flex items-center  gap-2">
              <WhatsAppIcon className="size-6" />
              (11) 5555.6208
            </li>
            <li className="flex items-center  gap-2">
              <EmailIcon className="size-6" />
              comunic@aossc.org.br
            </li>
            <li className="flex items-center  gap-2">
              <EmailIcon className="size-6" />
              mobilizrecursos@aossc.org.br
            </li>
          </ul>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.1666946353457!2d-46.62957485738438!3d-23.452511656659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7d2aae79b3f%3A0x7fad005ebfdf767b!2sAOSSC%20-%20Recanto%20Nossa%20Senhora%20de%20Lourdes!5e0!3m2!1spt-BR!2sbr!4v1762792109951!5m2!1spt-BR!2sbr"
          className="w-[640px] h-[420px] rounded-lg shadow-lg"
          allowFullScreen=""
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Home;
