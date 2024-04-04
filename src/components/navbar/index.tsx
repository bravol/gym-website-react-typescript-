// import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline"
import Logo from "@/assets/Logo.png";
// import { useState } from "react";

type Props = {};

const NavBar = (props: Props) => {
  // const [first, setfirst] = useState('');

  const flextBetween = " flex items-center justify-between";
  return (
    <nav>
      <div className={`${flextBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flextBetween} mx-auto w-5/6`}>
          <div className={`${flextBetween} w-full gap-16`}>
            <img src={Logo} />
            <div className={`${flextBetween} w-full`}>
              <div className={`${flextBetween} gap-8 text-sm`}>
                <p>Home</p>
                <p>Benefits</p>
                <p>Our Classes</p>
                <p>Contact Us</p>
              </div>
              <div>
                <p>Sign In</p>
                <button>Decome a member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
