import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import MediaComponent from "./MediaComponent";

// Vehicle animations
import carAnimation from "../assets/lotties.json";
import busAnimation from "../assets/bus.json";
import truckAnimation from "../assets/truck.json";
import trainAnimation from "../assets/train.json";
import vanAnimation from "../assets/van.json";
import airplaneAnimation from "../assets/airplane.json";

// Family images
import fatherImage from "../assets/father.png";
import motherImage from "../assets/mother.png";
import brotherImage from "../assets/bro.png";
import sisterImage from "../assets/sister.png";
import grandfatherImage from "../assets/grandfather.png";
import grandmotherImage from "../assets/granny.png";

const Content = ({ selectedCategory }) => {
  const { t } = useTranslation();
  const [vehicleScoreEn, setVehicleScoreEn] = useState(0);
  const [vehicleScoreSi, setVehicleScoreSi] = useState(0);
  const [familyScoreEn, setFamilyScoreEn] = useState(0);
  const [familyScoreSi, setFamilyScoreSi] = useState(0);
  const [activeMic, setActiveMic] = useState(null);

  const [correctAnswers, setCorrectAnswers] = useState({
    vehicles: {
      car: { en: false, si: false },
      truck: { en: false, si: false },
      bus: { en: false, si: false },
      train: { en: false, si: false },
      van: { en: false, si: false },
      airplane: { en: false, si: false },
    },
    family: {
      father: { en: false, si: false },
      mother: { en: false, si: false },
      brother: { en: false, si: false },
      sister: { en: false, si: false },
      GrandFather: { en: false, si: false },
      Granny: { en: false, si: false },
    },
  });

  const handleCorrectAnswer = (word, language, category) => {
    if (!correctAnswers[category][word][language]) {
      setCorrectAnswers((prev) => ({
        ...prev,
        [category]: {
          ...prev[category],
          [word]: { ...prev[category][word], [language]: true },
        },
      }));
      if (language === "si") {
        if (category === "vehicles") {
          setVehicleScoreSi((prevScore) => prevScore + 1);
        } else {
          setFamilyScoreSi((prevScore) => prevScore + 1);
        }
      } else {
        if (category === "vehicles") {
          setVehicleScoreEn((prevScore) => prevScore + 1);
        } else {
          setFamilyScoreEn((prevScore) => prevScore + 1);
        }
      }
    }
  };

  const renderVehicleContent = () => (
    <div className="content">
      <div className="scores">
        <div className="score">English: {vehicleScoreEn} / 6</div>
        <div className="score">සිංහල: {vehicleScoreSi} / 6</div>
      </div>
      <h2>{t("vehicleCategory")}</h2>
      <div className="grid-container">
        <MediaComponent
          mediaData={carAnimation}
          word="car"
          wordSinhala="මෝටර් රථ"
          onCorrect={(word, language) =>
            handleCorrectAnswer(word, language, "vehicles")
          }
          activeMic={activeMic}
          setActiveMic={setActiveMic}
        />
        <MediaComponent
          mediaData={truckAnimation}
          word="truck"
          wordSinhala="ට්‍රක්"
          onCorrect={(word, language) =>
            handleCorrectAnswer(word, language, "vehicles")
          }
          activeMic={activeMic}
          setActiveMic={setActiveMic}
        />
        <MediaComponent
          mediaData={busAnimation}
          word="bus"
          wordSinhala="බස් රථය"
          onCorrect={(word, language) =>
            handleCorrectAnswer(word, language, "vehicles")
          }
          activeMic={activeMic}
          setActiveMic={setActiveMic}
        />
        <MediaComponent
          mediaData={trainAnimation}
          word="train"
          wordSinhala="දුම්රිය"
          onCorrect={(word, language) =>
            handleCorrectAnswer(word, language, "vehicles")
          }
          activeMic={activeMic}
          setActiveMic={setActiveMic}
        />
        <MediaComponent
          mediaData={vanAnimation}
          word="van"
          wordSinhala="වෑන්"
          onCorrect={(word, language) =>
            handleCorrectAnswer(word, language, "vehicles")
          }
          activeMic={activeMic}
          setActiveMic={setActiveMic}
        />
        <MediaComponent
          mediaData={airplaneAnimation}
          word="airplane"
          wordSinhala="ගුවන් යානය"
          onCorrect={(word, language) =>
            handleCorrectAnswer(word, language, "vehicles")
          }
          activeMic={activeMic}
          setActiveMic={setActiveMic}
        />
      </div>
    </div>
  );

  const renderFamilyContent = () => (
    <div className="content">
      <div className="scores">
        <div className="score">English: {familyScoreEn} / 6</div>
        <div className="score">සිංහල: {familyScoreSi} / 6</div>
      </div>
      <h2>{t("familyCategory")}</h2>
      <div className="grid-container">
        <MediaComponent
          mediaData={fatherImage}
          word="father"
          wordSinhala="තාත්තා"
          onCorrect={(word, language) =>
            handleCorrectAnswer(word, language, "family")
          }
          activeMic={activeMic}
          setActiveMic={setActiveMic}
        />
        <MediaComponent
          mediaData={motherImage}
          word="mother"
          wordSinhala="අම්මා"
          onCorrect={(word, language) =>
            handleCorrectAnswer(word, language, "family")
          }
          activeMic={activeMic}
          setActiveMic={setActiveMic}
        />
        <MediaComponent
          mediaData={brotherImage}
          word="brother"
          wordSinhala="අයියා"
          onCorrect={(word, language) =>
            handleCorrectAnswer(word, language, "family")
          }
          activeMic={activeMic}
          setActiveMic={setActiveMic}
        />
        <MediaComponent
          mediaData={sisterImage}
          word="sister"
          wordSinhala="නංගි"
          onCorrect={(word, language) =>
            handleCorrectAnswer(word, language, "family")
          }
          activeMic={activeMic}
          setActiveMic={setActiveMic}
        />
        <MediaComponent
          mediaData={grandfatherImage}
          word="GrandFather"
          wordSinhala="සීයා"
          onCorrect={(word, language) =>
            handleCorrectAnswer(word, language, "family")
          }
          activeMic={activeMic}
          setActiveMic={setActiveMic}
        />
        <MediaComponent
          mediaData={grandmotherImage}
          word="Granny"
          wordSinhala="අන්නා"
          onCorrect={(word, language) =>
            handleCorrectAnswer(word, language, "family")
          }
          activeMic={activeMic}
          setActiveMic={setActiveMic}
        />
      </div>
    </div>
  );

  return selectedCategory === "vehicles" ? (
    renderVehicleContent()
  ) : selectedCategory === "family" ? (
    renderFamilyContent()
  ) : (
    <div>{t(selectedCategory)}</div>
  );
};

export default Content;
