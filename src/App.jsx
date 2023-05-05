import { Route, Routes, BrowserRouter } from "react-router-dom";
import FavouritePage from "./pages/SavedPage";
import MainPage from "./pages/MainPage";
import VacancyPage from "./pages/VacancyPage";
import ErrorPage from "./pages/ErrorPage";
import { ActiveVacanciesContext } from "./contexts/Contexts";

import "./App.css";
import Layout from "./components/Layout";
import { useState } from "react";

const getActiveVancancies = () => {
  const activeVacanciesString = window.localStorage.getItem("activeVacancies");
  if (activeVacanciesString) {
    return JSON.parse(activeVacanciesString);
  }
  return [];
};

function App() {
  const [activeVacancies, setActiveVacancies] = useState(getActiveVancancies());
  return (
    <>
      <ActiveVacanciesContext.Provider
        value={[activeVacancies, setActiveVacancies]}
      >
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
      </ActiveVacanciesContext.Provider>
    </>
  );
}

export default App;
