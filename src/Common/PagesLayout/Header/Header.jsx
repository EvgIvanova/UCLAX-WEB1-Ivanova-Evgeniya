import styled from 'styled-components';

/* Media Query ---------------------------*/
import { useMediaQuery } from "@/Common/useMediaQuery";

/* Components ---------------------------*/
import MediumLarge from './MediumLarge';
import Small from './Small';



const Header = () => {
    const { isMediumAndUp } = useMediaQuery();

    return (
        <HeaderStyled className="Header">
            {isMediumAndUp ? <MediumLarge /> : <Small />}
        </HeaderStyled>
    );
};

export default Header;

const HeaderStyled = styled.header`
    color: white;

    .logo {
        .SiteLogo {
            width: 25%;
            margin: auto;
            padding: 20px 0px;
        }
    }

    nav.mainMenu {
        text-align: center;
        a {
            width: 80px;
            display: inline-block;

            line-height: 30px;
            margin: 0px 0px 20px 5px;
            border-bottom: solid 3px #84d4d4;

            text-align: center;
            font-size: 12px;
            opacity: 0.8;
            color: #84d4d4;
            font-weight: bold;
            text-decoration: none;
            text-transform: uppercase;

            &:hover,
            &:active,
            &:focus {
                opacity: 1;
            }

            &.active {
                color: white;
                border-bottom-color: white;
            }
        }
    }
`;
