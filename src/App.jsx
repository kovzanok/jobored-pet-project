import { Route, Routes, BrowserRouter } from "react-router-dom";
import FavouritePage from "./pages/SavedPage";
import MainPage from "./pages/MainPage";
import VacancyPage from "./pages/VacancyPage";
import { ActiveVacanciesContext } from "./contexts/Contexts";
import { useLocalStorage } from "@mantine/hooks";

import "./App.css";
import Layout from "./components/Layout";
import { VacancyService } from "./API/VacancyService";
import { useState } from "react";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [activeVacancies, setActiveVacancies] = useLocalStorage({
    key: "activeVacancies",
    defaultValue: [],
  });
  const [token, setToken] = useState("");
  useFetching(
    (signal) => VacancyService.getAccessKey(signal),
    [],
    (token) => setToken(token)
  );
  return (
    <>
      <ActiveVacanciesContext.Provider
        value={[activeVacancies, setActiveVacancies, token]}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout></Layout>}>
              <Route index element={<MainPage />}></Route>
              <Route path="/vacancy/:id" element={<VacancyPage />}></Route>
              <Route path="/favourites" element={<FavouritePage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ActiveVacanciesContext.Provider>
    </>
  );
}

export default App;
