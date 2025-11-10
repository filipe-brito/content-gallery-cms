import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<Home />} path="/home" />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
