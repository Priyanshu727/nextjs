import "bootstrap/dist/css/bootstrap.min.css";
import style from "../style/Header.module.css";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className="container-fluid">
        <header className={style.main}>
          <div className="container">
            <div className={`${style.head} d-flex align-items-center justify-content-between p-3`}>
              <div className={style.logo}>
                <img src="/assets/images/logo.png" alt="" />
              </div>
              <div className="header-list pt-4">
                <ul
                  className={` ${style.menu} d-flex justify-content-between align-items-start gap-4`}
                >
                  <li>
                    <Link
                      href="/"
                      className={`${style.tag} ${style.active} fw-bold `}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className={`${style.tag} fw-light   `}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/rooms" className={`${style.tag} fw-light `}>
                      Rooms
                    </Link>
                  </li>
                  <li>
                    <Link href="/banquet" className={`${style.tag} fw-light `}>
                      Banquet
                    </Link>
                  </li>
                  <li>
                    <Link href="/events" className={`${style.tag} fw-light `}>
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className={`${style.tag} fw-light `}>
                      FAQ's
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className={`${style.tag} fw-light `}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
