"use client";

// @ts-expect-error - Types are available but not properly exposed through package.json exports
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Img1 from "../../public/assets/img/homepage/trustbar-logos/Logo-1.webp";
import Img2 from "../../public/assets/img/homepage/trustbar-logos/Logo-2.webp";
import Img3 from "../../public/assets/img/homepage/trustbar-logos/Logo-3.webp";
import Img4 from "../../public/assets/img/homepage/trustbar-logos/Logo-4.webp";
import Image from "next/image";

const logos = [
  { img: Img1, url: "https://yarravilledental.com.au/" },
  { img: Img2, url: "https://passiondental.com.au/" },
  { img: Img3, url: "https://www.dentalniddrieplaza.com.au/" },
  { img: Img4, url: "https://kingsvilledental.com.au/" },
];

const HomeHeroTrustBar = () => {
  return (
    <section className="bg-[#1f3a4d] py-3">
      <Splide
        options={{
          type: "loop",
          perPage: 8,
          gap: "3rem",
          breakpoints: {
            768: {
              perPage: 4,
              gap: "3.5rem",
            },
            1024: {
              perPage: 6,
              gap: "5.5rem",
            },
          },
          arrows: false,
          pagination: false,
          drag: false,
          autoScroll: {
            speed: 0.8, // Adjust for smoothness
            pauseOnHover: true,
            pauseOnFocus: false,
          },
          easing: "linear",
          clones: 30, // ✅ preload more clones so it doesn't need to jump often
        }}
        extensions={{ AutoScroll }}
        className="w-full"
      >
        {logos.map((logoObj, index) => (
          <SplideSlide key={index}>
            <a href={logoObj.url} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center justify-center">
                <Image src={logoObj.img} alt={`Logo ${index + 1}`} className={`h-16 sm:h-14 md:h-12 w-auto object-center object-contain filter ${index === 0 ? 'brightness-0 invert-[1] hover:brightness-1 hover:invert-0' : 'brightness-100 hover:brightness-110'} transition-all cursor-pointer`} />
              </div>
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default HomeHeroTrustBar;

