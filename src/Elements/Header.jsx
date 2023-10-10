// import { useEffect } from "react"

const Header = () => {
  return (
<header id="primary" className="bg-gray-900 py-4">
  <div className="container mx-auto flex justify-between items-center">
    <figure id="logo" className="text-white">
      <h1>
        <a href="/" title="Return to Home" className="text-2xl font-bold">Amavi</a>
      </h1>
      <p id="tagline" className="text-gray-300">Something &amp; Something else</p>
    </figure>

    <a href="/support" id="supportUs" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" title="Please consider donating to Tenebrae">Donate</a>

    <ul className="flex space-x-4">
      <li className="text-white">
        <a href="https://www.facebook.com/amavichorale" title="Like us on Facebook" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
      </li>
      <li className="text-white">
        <a href="https://x.com/Amavichorale" title="Follow us on X" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-xing"></i>
        </a>
      </li>
      {/* <li className="text-white">
        <a href="https://www.youtube.com/@amavichorale" title="Watch us on YouTube" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
      </li> */}
      <li className="text-white">
        <a href="https://instagram.com/amavichorale/" title="Follow us on Instagram" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
    </ul>
  </div>
</header>

    
  );
};

export default Header;
