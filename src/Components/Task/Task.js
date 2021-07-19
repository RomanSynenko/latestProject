import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Vector } from '../../img/Vector.svg';
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
            <div className='home-page_text-container'>
                <p className='home-page-container_text'>“Regression testing. What is it? If the system compiles, that's good, if it boots, that's great!”</p>
                <p className='home-page-container_text_autor'>Linus Torvalds</p>
                <p className='home-page-container_text_creator'>Linux kernel creator, hacker, 1969</p>
            </div>
            <div className='test-container'>
                <button className='test-container-bth' type="button" onClick={handleClickQa}>
                    <p>
                        QA technical training
                        <Vector />
                    </p>
                </button>
                <button className='test-container-bth color-orange' type="button" onClick={hadleClickTheory}>
                    <p>
                        Testing theory
                        <Vector />
                    </p>
                </button>
            </div>
        </div>
    );
};

export default Task;
