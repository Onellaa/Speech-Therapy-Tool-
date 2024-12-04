// src/components/AnimatedCharacter.js
import React from "react";
import { useTranslation } from "react-i18next";

const AnimatedCharacter = () => {
  const { t } = useTranslation();
  return (
    <div className="animated-character">
      <h2>{t("animatedCharacter")}</h2>
      {/* Add animated character components here */}
    </div>
  );
};

export default AnimatedCharacter;
