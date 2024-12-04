// src/components/Header.js
import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector";
import { useState } from "react";
import InstructionPage from "../components/InstructionPage";

const Header = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };
  const { t } = useTranslation();
  return (
    <header className="header">
      <button className="instruction-btn" onClick={toggleInstructions}>
        {showInstructions ? t("HideInstructions") : t("ShowInstructions")}
      </button>
      {showInstructions && <InstructionPage />}
      <h1>{t("WelcometoTheSpeechTherapyTool")}</h1>
      <LanguageSelector />
    </header>
  );
};

export default Header;
