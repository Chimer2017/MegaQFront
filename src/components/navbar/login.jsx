import { LoginForm } from "../auth/login";
import { useState } from "react";
import { Drawer } from "../drawer";
export const LoginNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <section className="hero is-white is-medium">
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src="https://github.com/anfederico/Flaskex/raw/master/media/flaskex-logo.png"
              alt="Flaskex"
            />
            <h6 href="/" className="subtitle">
              <strong>MegaQ</strong>
            </h6>
          </a>
          <div
            id="navbar-burger-id"
            className="navbar-burger burger"
            data-target="navbar-menu-id"
            onClick={() => setDrawerOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Drawer isOpen={drawerOpen} close={() => setDrawerOpen(false)} />
        </div>
        <div id="navbar-menu-id" className="navbar-menu">
          <LoginForm />
        </div>
      </nav>
    </section>
  );
};
