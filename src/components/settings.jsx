//Is not used, but was at the original project
export function Settings() {
  return (
    <section className="hero is-primary is-bold is-small">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div id="settings" className="settings-box">
            <div className="settings-area">
              <h1 className="title">Settings</h1>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    id="settings-user"
                    className="input is-success"
                    type="text"
                    placeholder="{{user.username}}"
                    readonly="readonly"
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-user"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    id="settings-mail"
                    className="input is-success"
                    type="text"
                    placeholder="{{user.email}}"
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    id="settings-pass"
                    className="input"
                    type="password"
                    placeholder="***"
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock"></i>
                  </span>
                </p>
              </div>
              <br />
              <a
                id="save"
                className="form-button button is-primary is-inverted is-outlined"
              >
                <span>Save</span>
              </a>
              <a
                href="/"
                className="form-button button is-primary is-inverted is-outlined"
              >
                <span>Exit</span>
              </a>
              <br />
              <br />
              <i>
                <a id="feedback" className="feedback"></a>
              </i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
