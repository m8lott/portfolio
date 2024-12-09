import "./style.css";
import { FaTelegramPlane } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
  <>
  <footer className="footer">
    <div className="container">
        <div className="footer__wrapper">
            <ul className="social">
                <li className="social__item"><a target="_blank" href="https://t.me/northsideshawty88"><FaTelegramPlane size="40" color="white"/></a></li>
                <li className="social__item"><a target="_blank" href="https://vk.com/frontenddev13" ><FaVk size="40" color="white"/></a></li>
                <li className="social__item"><a target="_blank" href="https://github.com/m8lott"><FaGithub size="40" color="white"/></a></li>
            </ul>
            <div className="copyright">
                <p>© 2024</p>
            </div>
        </div>
    </div>
</footer>
</>);
}

export default Footer;