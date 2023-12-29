import "bootstrap/dist/css/bootstrap.min.css";
import style from "../style/Header.module.css";

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
                    <a
                      href=""
                      className={`${style.tag} ${style.active} fw-bold `}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="" className={`${style.tag} fw-light   `}>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="" className={`${style.tag} fw-light `}>
                      Rooms
                    </a>
                  </li>
                  <li>
                    <a href="" className={`${style.tag} fw-light `}>
                      Banquet
                    </a>
                  </li>
                  <li>
                    <a href="" className={`${style.tag} fw-light `}>
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="" className={`${style.tag} fw-light `}>
                      FAQ's
                    </a>
                  </li>
                  <li>
                    <a href="" className={`${style.tag} fw-light `}>
                      Contact Us
                    </a>
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
