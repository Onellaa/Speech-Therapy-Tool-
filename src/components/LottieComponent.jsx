// src/components/LottieComponent.js
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

const LottieComponent = ({
  //   animationData,
  //   word,
  //   wordSinhala,
  //   onCorrect,
  //   activeMic,
  //   setActiveMic,
  // }) => {
  //   const { t } = useTranslation();
  //   const { transcript, listening, resetTranscript } = useSpeechRecognition();
  //   const [isCorrect, setIsCorrect] = useState(false);

  //   useEffect(() => {
  //     if (transcript.toLowerCase().includes(word.toLowerCase())) {
  //       setIsCorrect(true);
  //       onCorrect(word, "en");
  //       SpeechRecognition.stopListening();
  //       setActiveMic(null);
  //     }
  //   }, [transcript, word, onCorrect, setActiveMic]);

  //   const speak = (text, lang) => {
  //     const utterance = new SpeechSynthesisUtterance(text);
  //     utterance.lang = lang;
  //     window.speechSynthesis.speak(utterance);
  //   };

  //   const playSound = () => {
  //     speak(word, "en-US");
  //     setTimeout(() => speak(wordSinhala, "si-LK"), 1000);
  //   };

  //   const toggleListening = () => {
  //     if (listening && activeMic === word) {
  //       SpeechRecognition.stopListening();
  //       setActiveMic(null);
  //     } else {
  //       resetTranscript();
  //       SpeechRecognition.startListening({ continuous: false });
  //       setActiveMic(word);
  //     }
  //   };

  //   return (
  //     <div className="card">
  //       <Lottie animationData={animationData} onClick={playSound} />
  //       <div className="word-and-mic">
  //         <button
  //           onClick={toggleListening}
  //           className="mic-button"
  //           disabled={activeMic && activeMic !== word}
  //         >
  //           {listening && activeMic === word ? (
  //             <FaMicrophone />
  //           ) : (
  //             <FaMicrophoneSlash />
  //           )}
  //         </button>
  //         <p>{t(word)}</p>
  //       </div>
  //       {isCorrect && <div className="tick">✓</div>}
  //     </div>
  //   );
  // };

  mediaData,
  word,
  wordSinhala,
  onCorrect,
  activeMic,
  setActiveMic,
}) => {
  const { t } = useTranslation();
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (transcript.toLowerCase().includes(word.toLowerCase())) {
      setIsCorrect(true);
      onCorrect(word, "en");
      SpeechRecognition.stopListening();
      setActiveMic(null);
    }
  }, [transcript, word, onCorrect, setActiveMic]);

  const speak = (text, lang) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
  };

  const playSound = () => {
    speak(word, "en-US");
    setTimeout(() => speak(wordSinhala, "si-LK"), 1000);
  };

  const toggleListening = () => {
    if (listening && activeMic === word) {
      SpeechRecognition.stopListening();
      setActiveMic(null);
    } else {
      resetTranscript();
      SpeechRecognition.startListening({ continuous: false });
      setActiveMic(word);
    }
  };

  return (
    <div className="card">
      {mediaData.endsWith(".json") ? (
        <Lottie animationData={mediaData} onClick={playSound} />
      ) : (
        <img src={mediaData} alt={word} onClick={playSound} />
      )}
      <div className="word-and-mic">
        <button
          onClick={toggleListening}
          className="mic-button"
          disabled={activeMic && activeMic !== word}
        >
          {listening && activeMic === word ? (
            <FaMicrophone />
          ) : (
            <FaMicrophoneSlash />
          )}
        </button>
        <p>{t(word)}</p>
      </div>
      {isCorrect && <div className="tick">✓</div>}
    </div>
  );
};
export default LottieComponent;
