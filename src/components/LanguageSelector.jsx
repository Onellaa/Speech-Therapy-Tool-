// src/components/LanguageSelector.js
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = ({ onLanguageChange }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="language-selector">
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("si")}>සිංහල</button>
    </div>
  );
};

export default LanguageSelector;
