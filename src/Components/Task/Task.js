import React from 'react';
import { useHistory } from 'react-router-dom';

import './TaskStyle.scss';

const Task = () => {
    const history = useHistory();
    const handleClickQa = () => {
        history.push({
            pathname: '/tests',
            state: {
                toGo: 'QA technical training',
            },
        });
    };

    const hadleClickTheory = () => {
        history.push({
            pathname: '/tests',
            state: {
                toGo: 'Testing theory',
            },
        });
    };
    return (
        <div className='home-page-container'>
            <div>
                <p className='home-page-container_text'>“Regression testing. What is it? If the system compiles, that's good, if it boots, that's great!”</p>
                <p className='home-page-container_text_autor'>Linus Torvalds</p>
                <p className='home-page-container_text_creator'>Linux kernel creator, hacker, 1969</p>
            </div>
            <ul>
                <li>
                    <button type="button" onClick={handleClickQa}>
                        QA technical training
                    </button>
                </li>
                <li>
                    <button type="button" onClick={hadleClickTheory}>
                        Testing theory
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Task;
