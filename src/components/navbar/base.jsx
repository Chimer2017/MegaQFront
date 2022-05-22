import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BaseNavbar = () => {
  return (
    <section className="hero is-white">
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src="https://github.com/anfederico/Flaskex/raw/master/media/flaskex-logo.png"
              alt="Flaskex_logo"
            />
            <h6 href="/" className="subtitle">
              <strong>Flaskex</strong>
            </h6>
          </a>
          <div
            id="navbar-burger-id"
            className="navbar-burger burger"
            data-target="navbar-menu-id"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navbar-menu-id" className="navbar-menu">
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a href="/#" className="button is-primary is-outlined">
                    <span>Logout</span>
                  </a>
                </p>
                <p className="control">
                  <a href="/#" className="button is-primary is-outlined">
                    <span id="cog" className="icon">
                      <FontAwesomeIcon icon={faCog} />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};
