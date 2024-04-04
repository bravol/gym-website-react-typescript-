import Logo from "@/assets/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ActionButton from "../ActionButton";
import Link from "./Link";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const flextBetween = " flex items-center justify-between";

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav>
      <div
        className={` ${navbarBackground} ${flextBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flextBetween} mx-auto w-5/6`}>
          <div className={`${flextBetween} w-full gap-16`}>
            <img src={Logo} />

            {isAboveMediumScreens ? (
              <div className={`${flextBetween} w-full`}>
                <div className={`${flextBetween} gap-8 text-sm`}>
                  <Link
                    page={SelectedPage.Home}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page={SelectedPage.Benefits}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page={SelectedPage.Classes}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page={SelectedPage.Contact}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flextBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Decome a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className=" rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className=" h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* mobile menu model */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {/* menu items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page={SelectedPage.Home}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={SelectedPage.Benefits}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={SelectedPage.Classes}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={SelectedPage.Contact}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />{" "}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
