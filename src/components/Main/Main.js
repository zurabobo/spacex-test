import React from 'react';

import './Main.css';
import line from '../../images/line.png';
// import rocket from '../../images/rocket.png';

function Main() {
  return (
    <section className="main">
      <img alt="линия" className="line" src={line} />
      <div className="main__title-container">
        <h1 className="main__title">Путешествие
          <span className="main__title-span"><br />на красную планету</span> </h1>
        <div className="start-journey__btn-container">
          <div className="start-journey__btn-corner"></div>
          <div className="start-journey__btn-corner"></div>
          <button className="start-journey__btn">Начать путешествие</button>
          {/* <img alt="рокета" className="rocket" src={rocket} /> */}
          {/* <img alt="линия" className="line" src={line} /> */}
        </div>
      </div>
      <ul className="main__benefits-container">
        <li className="main__benefits-item">
          <a className="main__benefits-item-text" href="1">мы
            <span className="main__benefits-item-number"><br />1</span>
            <br />на рынке</a>
        </li>
        <li className="main__benefits-item">
          <a className="main__benefits-item-text" href="1">гарантируем
            <span className="main__benefits-item-number"><br />50%</span>
            <br />безопасность</a>
        </li>
        <li className="main__benefits-item">
          <a className="main__benefits-item-text" href="1">календарик за
            <span className="main__benefits-item-number"><br />2001</span><span className="main__benefits-item-year">г.</span>
            <br />в подарок</a>
        </li>
        <li className="main__benefits-item">
          <a className="main__benefits-item-text" href="1">путешествие
            <span className="main__benefits-item-number"><br />597</span>
            <br />дней</a>
        </li>
      </ul>
    </section>
  )
}

export default Main;
