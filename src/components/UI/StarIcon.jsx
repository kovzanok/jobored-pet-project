import React, { useState, useContext } from "react";
import { ActiveVacanciesContext } from "../../context/VacancyContext";

const saveActiveVacancies = (activeVacancies) => {
  window.localStorage.setItem(
    "activeVacancies",
    JSON.stringify(activeVacancies)
  );
};

export default function StartIcon({ id }) {
  const [activeVacancies, setActiveVacancies] = useContext(
    ActiveVacanciesContext
  );
  const [isHovered, setIsHovered] = useState(false);
  const isActive = activeVacancies.includes(id);
  const toggleVacancy = (e) => {
    e.preventDefault();
    const newActiveVacancies = activeVacancies.slice();
    if (isActive) {
      const index = newActiveVacancies.indexOf(id);
      newActiveVacancies.splice(index, 1);
      setActiveVacancies([...newActiveVacancies]);
    } else {
      newActiveVacancies.push(id);
      setActiveVacancies([...newActiveVacancies]);
    }
    saveActiveVacancies(newActiveVacancies);
  };

  return (
    <svg
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={toggleVacancy}
      style={{ minWidth: "22px" }}
      width="22"
      height="22"
      viewBox="0 0 22 20"
      fill={isActive ? "#5E96FC" : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.97183 1.70846C10.4382 0.933481 11.5618 0.933482 12.0282 1.70847L14.3586 5.58087C14.5262 5.85928 14.7995 6.05784 15.116 6.13116L19.5191 7.15091C20.4002 7.35499 20.7474 8.42356 20.1545 9.10661L17.1918 12.5196C16.9788 12.765 16.8744 13.0863 16.9025 13.41L17.2932 17.9127C17.3714 18.8138 16.4625 19.4742 15.6296 19.1214L11.4681 17.3583C11.1689 17.2316 10.8311 17.2316 10.5319 17.3583L6.37038 19.1214C5.53754 19.4742 4.62856 18.8138 4.70677 17.9127L5.09754 13.41C5.12563 13.0863 5.02124 12.765 4.80823 12.5196L1.8455 9.1066C1.25257 8.42356 1.59977 7.35499 2.48095 7.15091L6.88397 6.13116C7.20053 6.05784 7.47383 5.85928 7.64138 5.58087L9.97183 1.70846Z"
        stroke={isHovered ? "#5E96FC" : isActive ? "#5E96FC" : "#ACADB9"}
        strokeWidth="1.5"
      />
    </svg>
  );
}
