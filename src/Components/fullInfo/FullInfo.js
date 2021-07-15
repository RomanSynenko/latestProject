import React from 'react';

import './FullInfo.scss';

const FullInfo = () => {
  return (
    <div className="full-info-container">
      <div className="full-info-content">
        <h2 className="full-info-title">Полезная литература</h2>
        <ul className="full-info-list">
          <li className="full-info-item">
            <a href="/"> 1. Тестирование dot.com Савин.</a>
          </li>
          <li className="full-info-item">
            <a href="/"> 2. Психбольница в руках пациентов.</a>
          </li>
          <li className="full-info-item">
            <a href="/"> 3. Scrum. Дж. Сазерленд.</a>
          </li>
        </ul>
        <h2 className="full-info-title">Полезные ресурсы</h2>
        <ul className="full-info-list">
          <li className="full-info-item">
            <a href="https://dou.ua/">1. dou.ua</a>
          </li>
          <li className="full-info-item">
            <a href="https://habr.com/ru">2. Habr</a>
          </li>
          <li className="full-info-item">
            <a href="/">3. facebook.com/QA</a>
          </li>
          <li className="full-info-item">
            <a href="https://goit.ua/">4. goit.ua</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FullInfo;
