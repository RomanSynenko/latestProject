import React from 'react';
import { useHistory } from 'react-router-dom';

const MainPage = () => {
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
        <>
            <div className='home-page-container'>
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
        </>
    );
};

export default MainPage;
