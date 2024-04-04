import HomePageGraphics from "@/assets/HomePageGraphic.png";
import HomePageText from "@/assets/HomePageText.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ActionButton from "../ActionButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
      className=" gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
      id={SelectedPage.Home}
    >
      {/* image */}
      <div className=" md:flex mx-auto w-5/6 items-center justify-center gap-8 md:h-5/6">
        {/* main header */}
        <div className=" z-10 mt-32 md:basis-3/5">
          {/* headings */}
          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm">
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get the Body Shapes That you Dream of.. Get Your Dream
            Body Now.
          </p>
        </div>
        {/* actions */}
        <div className=" mt-8 flex items-center gap-10 md:justify-start md:basis-2/5 text-nowrap">
          <ActionButton setSelectedPage={setSelectedPage}>
            Join Now
          </ActionButton>

          <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.Contact)}
            href={`#${SelectedPage.Contact}`}
          >
            <p>Learn More</p>
          </AnchorLink>
        </div>

        {/* image */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphics} />
        </div>
      </div>

      {/* sponsors */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;