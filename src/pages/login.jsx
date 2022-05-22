import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCopyright,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SignUp } from "../components/auth/signup";
import { LoginNavbar } from "../components/navbar/login";

export function LoginPage() {
  return (
    <>
      <LoginNavbar />
      <title>Flaskex</title>
      <section className="hero is-primary is-bold is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-auto">
                <br />
                <p className="title is-2">MegaQ</p>
                <p className="subtitle is-4">
                  <i>Interview the web as if you are speaking to a person</i>
                </p>
                <ul>
                  <li className="subtitle is-5 list-item">
                    Analyze millions of user posts and comments
                  </li>
                  <li className="subtitle is-5">
                    Interact with natural language
                  </li>
                  <li className="subtitle is-5">
                    Build the right products for your users
                  </li>
                </ul>
              </div>
              <div className="column is-auto">
                <SignUp />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero">
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <span>
                <strong>MegaQ </strong>
                by Andrew Gorovoy
                <span className="icon is-small mx-2">
                  <FontAwesomeIcon icon={faCopyright} />
                </span>
                2022
              </span>
              <p>
                <a
                  className="icon has-text-primary"
                  href="https://github.com/Chimer2017"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
                <a
                  className="icon has-text-primary"
                  href="https://github.com/Chimer2017"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  className="icon has-text-primary"
                  href="mailto:agorovoy@chimerllc.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
