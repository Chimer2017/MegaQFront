import "bulma/css/bulma.min.css";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./components/requireAuth";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
