// import { useEffect } from "react"

const Header = () => {
  return (
    <header id="primary">
			<div class="wrapper"> Hi
				<figure id="logo">
					<h1><a href="/" title="Return to Home">Amavi</a></h1>
					<p id="tagline">Something &amp; Something else</p>
				</figure>

				<a href="/support" id="supportUs" class="button support" title="Please consider donating to Tenebrae">Donate</a>

				<ul class="social">
					<li class="sFacebook"><a href="https://www.facebook.com/amavichorale" title="Like us on Facebook" target="_blank" rel="noopener noreferrer">Facebook</a></li>
					<li class="sX"><a href="https://x.com/Amavichorale" title="Follow us on X" target="_blank" rel="noopener noreferrer">X</a></li>
					<li class="sYouTube"><a href="https://www.youtube.com/@amavichorale" title="Watch us on YouTube" target="_blank" rel="noopener noreferrer">YouTube</a></li>
					<li class="sInstagram"><a href="https://instagram.com/amavichorale/" title="Follow us on Instagram" target="_blank" rel="noopener noreferrer">Instagram</a></li>
				</ul> 
			</div> 
		</header>
    
  );
};

export default Header;
