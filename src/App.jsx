import React, { useState } from "react";
import Header from "./components/Header";
import LanguageSelector from "./components/LanguageSelector";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("vehicles");
  const [activeMic, setActiveMic] = useState(null);

  return (
    <div className="App">
      <Header />
      {/* <LanguageSelector /> */}
      <div className="main-content">
        <Sidebar onSelectCategory={setSelectedCategory} />
        <Content
          selectedCategory={selectedCategory}
          activeMic={activeMic}
          setActiveMic={setActiveMic}
        />
      </div>
    </div>
  );
}

export default App;
