import Logo from "../assets/logo.svg";
import SocialMediaLogo from "../assets/icons-social-media.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__logo">
          <svg className="logo" width="90" height="24">
            <use xlinkHref={`${Logo}#logo`} />
          </svg>
        </div>
        <div className="footer__links-wrapper">
          <div className="footer__link" data-footer-link="features">
            <h5 className="footer__link-heading">Features</h5>
            <p className="footer__link-text">Link Shortening</p>
            <p className="footer__link-text">Branded Links</p>
            <p className="footer__link-text">Analytics</p>
          </div>
          <div className="footer__link" data-footer-link="resources">
            <h5 className="footer__link-heading">Resources</h5>
            <p className="footer__link-text">Blog</p>
            <p className="footer__link-text">Developer</p>
            <p className="footer__link-text">Support</p>
          </div>
          <div className="footer__link" data-footer-link="company">
            <h5 className="footer__link-heading">Company</h5>
            <p className="footer__link-text">About</p>
            <p className="footer__link-text">Our Team</p>
            <p className="footer__link-text">Careers</p>
            <p className="footer__link-text">Contact</p>
          </div>
          <div className="footer__icons">
            <div className="footer-icon">
              <svg className="icon" width="24" height="24">
                <use xlinkHref={`${SocialMediaLogo}#icon-facebook`} />
              </svg>
            </div>
            <div className="footer-icon">
              <svg className="icon" width="24" height="24">
                <use xlinkHref={`${SocialMediaLogo}#icon-twitter`} />
              </svg>
            </div>
            <div className="footer-icon">
              <svg className="icon" width="24" height="24">
                <use xlinkHref={`${SocialMediaLogo}#icon-pinterest`} />
              </svg>
            </div>
            <div className="footer-icon">
              <svg className="icon" width="24" height="24">
                <use xlinkHref={`${SocialMediaLogo}#icon-instagram`} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
