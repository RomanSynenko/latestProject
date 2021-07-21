import React from 'react';

import './FullInfo.scss';

const FullInfo = () => {
  return (
    <section className="full-info-section">
      <div className="full-info-container">
        <div className="full-info-content">
          <h2 className="full-info-title first">Useful literature</h2>
          <ul className="full-info-list">
            <li className="full-info-item">
              <a href="https://codernet.ru/books/qa/testirovanie_dot_com_roman_savin_2007/">
                1. Testing dot.com Savin.
              </a>
            </li>
            <li className="full-info-item">
              <a href="https://habr.com/ru/post/248063/">
                2. A mental hospital in the hands of patients.
              </a>
            </li>
            <li className="full-info-item">
              <a href="https://www.mann-ivanov-ferber.ru/assets/files/bookparts/scrum/scrum_25-5-17_read_stamped.pdf">
                3. Scrum. J. Sutherland.
              </a>
            </li>
          </ul>
          <h2 className="full-info-title second">Useful resources</h2>
          <ul className="full-info-list">
            <li className="full-info-item">
              <a href="https://dou.ua/">1. dou.ua </a>
            </li>
            <li className="full-info-item">
              <a href="https://habr.com/ru">2. Habr</a>
            </li>
            <li className="full-info-item">
              <a href="https://www.facebook.com/groups/370496047446051/">
                3. facebook.com/QA
              </a>
            </li>
            <li className="full-info-item">
              <a href="https://goit.ua/">4. goit.ua</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FullInfo;
