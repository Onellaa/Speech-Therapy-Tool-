// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          speechTherapyTool: "SPEECH THERAPY TOOL",
          speechTherapyGame: "Speech Therapy Game",
          speechToTextConverter: "Speech To Text Converter",
          family: "Family",
          furniture: "Furniture",
          kitchen: "Kitchen",
          animal: "Animal",
          vehicles: "Vehicles",
          clothing: "Clothing",
          schoolSupplies: "School Supplies",
          sports: "Sports",
          technology: "Technology",
          nature: "Nature",
          car: "Car",
          truck: "Truck",
          bus: "Bus",
          train: "Train",
          vehicleCategory: "Vehicles",
          HowtoUseThisTool: "How to Use This Tool",
          Selectapreferredlanguageusingthebuttonsabove:
            "Select a preferred language using the buttons above.",
          Afterselectingalanguagechooseasectionfromthesidebarthatyouwanttopracticewithyourchild:
            "After selecting a language, choose a section from the sidebar that you want to practice with your child (e.g., Family).",
          Tap: 'Tap on the picture to hear the sound associated with it (e.g., tap on the picture of "mother" to hear a voice saying "mother").',
          After:
            "After listening, encourage your child to say the word using the microphone.",
          If: "If your child pronounces the word correctly, the picture will get a tick mark and they will earn a point.",
          Yours:
            "Your child can keep trying to say the word until they get it right.",
          WelcometoTheSpeechTherapyTool: "Welcome to The Speech Therapy Tool",
          ShowInstructions: "Show Instructions",
          HideInstructions: "Hide Instructions",
        },
      },
      si: {
        translation: {
          speechTherapyTool: "කතාබහ පරීක්ෂණ මෙවලම",
          speechTherapyGame: "කතාබහ පරීක්ෂණ ක්‍රීඩාව",
          speechToTextConverter: "කතා-දෙබස් මාරුකරණය",
          family: "පවුල",
          furniture: "ගෘහ භාණ්ඞ",
          kitchen: "මුළුතැන්ගෙයි උපකරණ",
          animal: "සතුන්",
          vehicles: "වාහන",
          clothing: "ඇඳුම්",
          schoolSupplies: "පාසල් උපකරණ",
          sports: "ක්‍රීඩා",
          technology: "තාක්ෂණික උපකරණ",
          nature: "පරිසරය",
          car: "මෝටර් රථය",
          truck: "ට්‍රක්",
          bus: "බස් රථය",
          train: "දුම්රිය",
          vehicleCategory: "වාහන",
          HowtoUseThisTool: "මෙම මෙහෙයුම භාවිතා කිරීමට නියමිත ක්‍රමය",
          Selectapreferredlanguageusingthebuttonsabove:
            "පහත බොත්තම් භාවිතා කර ඔබට පහසු භාෂාවක් තෝරාගන්න",
          Afterselectingalanguagechooseasectionfromthesidebarthatyouwanttopracticewithyourchild:
            "⁠⁠භාෂාවක් තෝරා ගත් පසු පහත side bar ඔබගේ දරුවාට පහසු කාණ්ඩයක් තෝරාගන්න (උදා:- පවුල)",
          Tap: "කාණ්ඩයක් තෝරා ගත් පසු පහත පින්තූරය එබීමෙන් එම පින්තූරයට අදාළ ශබ්දය ලබා ගත හැක",
          After:
            "පින්තූරයට අදාළ ශබ්දය ලබා ගත් පසු දරුවාට එම  පින්තූරයට අදාළ වචනය පහත  මයික්‍රොෆෝනය භාවිතා කර උච්චාරණය කිරීමට සලස්වන්න",
          If: "ඔබගේ දරුවා එම වචනය නිවැරදිව පැවසූයේ නම් එම පින්තූරය ඉදිරියෙන් හරියක සංකේතයක් නිරූපනය වේ",
          Yours: "ඔබගේ දරුවා එම වචනය නිවැරදිව පවසන තෙක් මෙය කිරීමට සලස්වන්න.",
          airplane: "ගුවන් යානය",
          van: "වෑන්",
          mother: "අම්මා",
          father: "තාත්තා",
          sister: "නංගි",
          GrandFather: "සීයා",
          Granny: "ආච්චි",
          brother: "අයියා",
          WelcometoTheSpeechTherapyTool:
            "SpeechTherapyTool වෙත සාදරයෙන් පිළිගනිමු",
          ShowInstructions: "උපදෙස් පෙන්වන්න",
          HideInstructions: "උපදෙස් ඉවත් කරන්න",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
