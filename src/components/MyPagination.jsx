import { Pagination } from "@mantine/core";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { VacanciesContext } from "../contexts/Contexts";

export default function MyPagination({ displayedVacancies, value, onChange }) {
  const location = useLocation();
  const [vacancies] = useContext(VacanciesContext);
  const countMaxPage = () => {
    if (vacancies.length < 20) {
      const max = Math.ceil(vacancies.length / 4) + (value > 5 ? value : 0);
      if (value === 1) {
        return max > 3 ? 3 : max;
      } else if (max - value <= 1) {
        return max;
      }
      return value + 1;
    } else {
      if (value === 125) {
        return 125;
      } else if (value === 1) {
        return 3;
      } else {
        return value + 1;
      }
    }
  };

  return (
    <Pagination
      styles={{
        control: {
          fontSize: "1.4rem",
          width: "32px",
          "&[data-active]": {
            backgroundColor: "#5E96FC",
          },
          ":nth-of-type(2)": {
            display: value >= 3 ? "none" : "flex",
          },
          ":nth-of-type(3)": {
            display:
              value === 4 ||
              (value !== countMaxPage() && displayedVacancies.length % 4 !== 0)
                ? "none"
                : "flex",
          },
        },
        dots: {
          display: "none",
        },
      }}
      mt={location.pathname === "/favourites" ? "104px" : "40px"}
      mb="44px"
      size="3.2rem"
      spacing="0.8rem"
      position="center"
      value={value}
      boundaries={0}
      siblings={1}
      onChange={onChange}
      total={countMaxPage()}
    />
  );
}
