import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout>
              <Index />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
