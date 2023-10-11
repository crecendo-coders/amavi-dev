const Footer = () => {
  return (
    <footer id="primary">
      <section id="footer">
        <div className="wrapper">
          <div className="flex">
            <a href="/mailing-list" id="footerMailingList">
              <h3>Join our Mailing List</h3>
              <p>
                Subscribe to receive advance notice of concerts, and occasional
                news from the group.
              </p>
            </a>

            <a href="/support" id="footerDonate">
              <h3>Donate to Amavi</h3>
              <p>
                Please help sustain the choir’s essential music education work
                and artistic output.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section id="legal">
        <div className="wrapper">
          <nav id="secondary" className="menu-secondary-container">
            <ul id="menu-secondary" className="">
              <li
                id="menu-item-12413"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12413"
              >
                <a href="/contact">Contact</a>
              </li>

              <li
                id="menu-item-60"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-60"
              >
                <a href="/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li
                id="menu-item-11279"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11279"
              >
                <a href="/equality-diversity-policy">
                  Equality &amp; Diversity Policy
                </a>
              </li>
              <li
                id="menu-item-61"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-61"
              >
                <a href="/terms-conditions">
                  Terms &amp; Conditions
                </a>
              </li>
              <li
                id="menu-item-59"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-59"
              >
                <a href="/credits">Credits</a>
              </li>
            </ul>
          </nav>
          <p id="copyright">Copyright 2023 Amavi. All Rights Reserved.</p>

          <p>
            Amavi is a working name of The Amavi Chorale, 501(c)(3) Registration: ##-#######. 
            Office: ***************Address**********.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
