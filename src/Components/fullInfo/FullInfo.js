import React from 'react';

import './FullInfo.scss';

const FullInfo = () => {
  return (
    <div class="full-info-container">
      <div class="full-info-content">
        <h2 class="full-info-title">Полезная литература</h2>
        <ul class="full-info-list">
          <li class="full-info-item">
            <a href=""> 1. Тестирование dot.com Савин.</a>
          </li>
          <li class="full-info-item">
            <a href=""> 2. Психбольница в руках пациентов.</a>
          </li>
          <li class="full-info-item">
            <a href=""> 3. Scrum. Дж. Сазерленд.</a>
          </li>
        </ul>
        <h2 class="full-info-title">Полезные ресурсы</h2>
        <ul class="full-info-list">
          <li class="full-info-item">
            <a href="https://dou.ua/">1. dou.ua</a>
          </li>
          <li class="full-info-item">
            <a href="https://habr.com/ru/">2. Habr</a>
          </li>
          <li class="full-info-item">
            <a href="">3. facebook.com/QA</a>
          </li>
          <li class="full-info-item">
            <a href="https://goit.ua/">4. goit.ua</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FullInfo;
