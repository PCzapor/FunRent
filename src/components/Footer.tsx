import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Fun Rent</h3>
            <p className="footer-text">
              Profesjonalna obsługa eventów na terenie całego Podkarpacia.
            </p>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Kontakt</h3>
            <p className="footer-text">
              <a href="tel:+48123456789" className="footer-link">
                +48 123 456 789
              </a>
              <br />
              <a href="mailto:kontakt@funrent.pl" className="footer-link">
                kontakt@funrent.pl
              </a>
            </p>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Śledź nas</h3>
            <div className="footer-social">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram - Otwórz w nowej karcie"
                className="footer-social-link"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook - Otwórz w nowej karcie"
                className="footer-social-link"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Fun Rent. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
