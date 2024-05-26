import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <main className="main-wrapper">
      <div className="main-buttons-wrapper">
        <div className="main-buttons">
          <button className="main-btn">Створити відправлення</button>
          <button className="main-btn">Інформація по відправленнях</button>
          <button className="main-btn">Історія відправлень</button>
          <button className="main-btn">Налаштування</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
