import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginForm } from "./auth/login";

export const Drawer = ({ isOpen, close }) => {
  return (
    <>
      {isOpen ? (
        <div className="drawer">
          <span onClick={close} className="close-drawer">
            <FontAwesomeIcon icon={faWindowClose} size="lg" />
          </span>
          <div className="content-drawer">
            <LoginForm />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
