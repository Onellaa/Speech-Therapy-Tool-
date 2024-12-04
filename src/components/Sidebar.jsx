// src/components/Sidebar.js
import React from "react";
import { useTranslation } from "react-i18next";

const Sidebar = ({ onSelectCategory }) => {
  const { t } = useTranslation();
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => onSelectCategory("family")}>{t("family")}</li>
        <li onClick={() => onSelectCategory("vehicles")}>{t("vehicles")}</li>
        <li onClick={() => onSelectCategory("furniture")}>{t("furniture")}</li>
        <li onClick={() => onSelectCategory("kitchen")}>{t("kitchen")}</li>
        <li onClick={() => onSelectCategory("animal")}>{t("animal")}</li>

        <li onClick={() => onSelectCategory("clothing")}>{t("clothing")}</li>
        <li onClick={() => onSelectCategory("schoolSupplies")}>
          {t("schoolSupplies")}
        </li>
        <li onClick={() => onSelectCategory("sports")}>{t("sports")}</li>
        <li onClick={() => onSelectCategory("technology")}>
          {t("technology")}
        </li>
        <li onClick={() => onSelectCategory("nature")}>{t("nature")}</li>
      </ul>
    </div>
  );
};

export default Sidebar;
