import styled from 'styled-components';
import { useState } from 'react';
import sunSrc from './images/sun.png';
import moonSrc from './images/moon.png';

const SunAndMoon = () => {


    //JavaScript

    const [imgSrc, imgSrcUpdate] = useState(sunSrc);

    const changeToMoon = () => {
        //console.log('MOON');
        imgSrcUpdate(moonSrc);
    };

    const changeToSun = () => {
        //console.log('SUN');
        imgSrcUpdate(sunSrc);
    };



    // HTML
    return (
        <SunAndMoonStyled>
            <h2>Sun And Moon</h2>
            <div className="SunMoonImage">
                <img
                    src={imgSrc}
                    onMouseEnter={changeToMoon}
                    onMouseLeave={changeToSun}
                />
            </div>
        </SunAndMoonStyled>
    );
};

export default SunAndMoon;

//Styles
const SunAndMoonStyled = styled.div`
    .SunMoonImage {
        text-align: center;



        img {
            border: solid 20px teal;
            margin: 30px;
            padding: 20px;
            background-color: #61d5c0;
        }
    }
`;