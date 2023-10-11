import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <header className="bg-zinc-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <img src="amavi-big-logo.png" className="h-[150px]"alt="Amavi Logo" />
        </a>
        <div className="flex items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full mr-4">
            <a
              href="/support"
              id="supportUs"
              title="Please consider donating to Amavi"
            >
              Donate
            </a>
          </button>
          <SocialMedia />
        </div>
      </div>
    </header>
  );
};

export default Header;
