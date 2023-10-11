import {
  faFacebook,
  faInstagram,
  // faTwitter,
  // faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SocialMedia = () => {
  const a = {
    margin: "0 1rem",
    transition: "transform 250ms",
    display: "inline-block",
    hover: { transform: "translate(-2px)" },
  }
  const style = {
    social: {
      backgroundColor: "#eee",
      padding: "25px 50px",
    },
      youtube: { color: "#eb3223", ...a },
      facebook: { color: "#4968ad", ...a},
      twitter: { color: "#49a1eb", ...a},
      instagram: { color: "black", ...a},
  };


  return (
    <>
      {/* <a href="https://www.youtube.com/amavi" style={style.youtube}>
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a> */}
      <a href="https://www.facebook.com/amavichorale/" style={style.facebook}>
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      {/* <a href="https://www.twitter.com/amavi" style={style.twitter}>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a> */}
      <a href="https://www.instagram.com/amavi_chorale" style={style.instagram}>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </>
  );
};

export default SocialMedia;
