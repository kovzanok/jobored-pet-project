import { Route, Routes, BrowserRouter } from "react-router-dom";
import FavouritePage from "./pages/FavouritePage";
import MainPage from "./pages/MainPage";
import VacancyPage from "./pages/VacancyPage";
import ErrorPage from "./pages/ErrorPage";

import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<MainPage />}></Route>
            <Route path="/vacancy/:id" element={<VacancyPage />}></Route>
            <Route path="/favourites" element={<FavouritePage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
