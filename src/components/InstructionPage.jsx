import React from "react";
import { useTranslation } from "react-i18next";

const InstructionPage = () => {
  const { t } = useTranslation();
  return (
    <div className="instruction-page fade-in">
      <h2>{t("HowtoUseThisTool")}</h2>
      <p>{t("Selectapreferredlanguageusingthebuttonsabove")}</p>
      <p>
        {t(
          "Afterselectingalanguagechooseasectionfromthesidebarthatyouwanttopracticewithyourchild"
        )}
      </p>
      <p>{t("Tap")}</p>
      <p>{t("After")}</p>
      <p>{t("If")}</p>
      <p>{t("Yours")}</p>
    </div>
  );
};

export default InstructionPage;
