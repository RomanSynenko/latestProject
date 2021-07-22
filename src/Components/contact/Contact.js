import React from 'react';
import './Contact.scss';

import balashov from '../../img/balashov.jpg';
import dera from '../../img/dera.JPG';
import novalenko from '../../img/novalenko.jpg';
import sinenco from '../../img/sinenko.jpg';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact">
        <h2 className="contact-title">Our team</h2>
        <ul className="contact-list">
          <li className="contact-item">
            <div className="thumb">
              <img className="contact-img" src={balashov} alt="balashov"></img>
            </div>
            <h3 className="contact-item-title">Alexandr Balashov</h3>
            <h4 className="contact-item-job">Fullstack Developer</h4>
            <p className="contact-text">
              I'm a full stack developer. Using Node.js and React.js
            </p>
          </li>
          <li className="contact-item">
            <div className="thumb">
              <img className="contact-img" src={dera} alt="dera"></img>
            </div>
            <h3 className="contact-item-title">Mukola Dera</h3>
            <h4 className="contact-item-job">Front-End Developer</h4>
            <p className="contact-text">
              I'm front-end developer with 1 year experience. Using React.js
            </p>
          </li>
          {/* <li className="contact-item">
            <div className="thumb">
              <img className="contact-img" src="#" alt=""></img>
            </div>
            <h3 className="contact-item-title">Sasha Pashuk</h3>
            <h4 className="contact-item-job">Front-End Developer</h4>
            <p className="contact-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a
              error tenetur ad totam dolore ut recusandae itaque harum, corrupti
              expedita veritatis impedit quia eum, in nemo iste veniam enim!
            </p>
          </li> */}
          <li className="contact-item">
            <div className="thumb">
              <img
                className="contact-img"
                src={novalenko}
                alt="novalenko"
              ></img>
            </div>
            <h3 className="contact-item-title">Vlad Novalenko</h3>
            <h4 className="contact-item-job">Fullstack Developer</h4>
            <p className="contact-text">
              I am a full stack developer, writing software for NodeJs and
              React.
            </p>
          </li>
          <li className="contact-item">
            <div className="thumb">
              <img className="contact-img" src={sinenco} alt="sinenco"></img>
            </div>
            <h3 className="contact-item-title">Roman Sinenko</h3>
            <h4 className="contact-item-job">Front-End Developer</h4>
            <p className="contact-text">
              I'm front-end developer with over 1 year experience. Have solid
              understanding of js code profiling and optimizing.
            </p>
          </li>
          {/* <li className="contact-item">
            <div className="thumb">
              <img className="contact-img" src="#" alt=""></img>
            </div>
            <h3 className="contact-item-title">Misha Golovchuk</h3>
            <h4 className="contact-item-job">Front-End Developer</h4>
            <p className="contact-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quos
              sapiente debitis consectetur veniam, illum temporibus voluptatibus
              illo magni totam saepe, eius maxime repellat iusto distinctio eum
              facere eligendi facilis.
            </p>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
