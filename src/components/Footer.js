import React from "react";
import { translate, Trans } from "react-i18next";
import { NavLink } from "react-router-dom";

const FilterLink = ({ filter, children }) => (
  <NavLink
    to={`/${filter}`}
    isActive={(match, location) =>
      (location.pathname === "/" && filter === "all") ||
      location.pathname === "/" + filter
    }
    activeStyle={{
      textDecoration: "none",
      color: "black"
    }}
  >
    {children}
  </NavLink>
);

const Footer = ({ t, i18n }) => (
  <div>
    <FilterLink filter="completed">{t("COMPLETED")}</FilterLink>{" "}
    <FilterLink filter="all">t("footer:ALL")</FilterLink>{" "}
    <FilterLink filter="active">PENDING</FilterLink>
  </div>
);

export default translate(["translations", "footer"])(Footer);
