// import { useEffect } from "react"

import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center">
        <div>Amavi</div>
        <p>tagline</p>
        <div className="flex">
          <img src="logo.svg" width={50} />
        </div>
        <SocialMedia />
        <button>
          <a
            href="/support"
            id="supportUs"
            title="Please consider donating to Amavi"
          >
            Donate
          </a>
        </button>
      </div>
    </header>
  );
};

export default Header;