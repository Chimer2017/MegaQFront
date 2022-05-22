import { Navigate } from "react-router-dom";

//Used to redirect to login if the route is protected
export function RequireAuth({ children }) {
  //   let auth = useAuth();
  const token = window.localStorage.getItem("token");
  //   let location = useLocation();

  if (!token) {
    // Redirect them to the /login page if there is no user autenticated,
    // At the moment there is only home page. But if the app grows
    // useLocation from react router can be used to save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: "/" }} replace />;
  }

  return children;
}
