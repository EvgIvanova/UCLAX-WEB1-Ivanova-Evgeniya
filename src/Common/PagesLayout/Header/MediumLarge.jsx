import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Components ---------------------------*/
import Inset from '../Inset.jsx';
import SiteLogo from '../SiteLogo/SiteLogo.jsx';

const MediumLarge = () => {
	return (
		<MediumLargeStyled className='MediumLarge'>
			<Inset>
				<div className="row">
					<div className="logo">
						<SiteLogo />
					</div>
					<div className="menus">
						<nav className="mainMenu">
							<NavLink to={'/'} end>
								Home
							</NavLink>
							<NavLink to={'/staff'}>Staff</NavLink>
							<NavLink to={'/contact'}>Contact</NavLink>
							<NavLink to={'/course-work'}>Course</NavLink>
						</nav>
					</div>
				</div>
			</Inset>
		</MediumLargeStyled>
	);
};

export default MediumLarge;

const MediumLargeStyled = styled.div`

.row {
    display: grid;
    grid-template-columns: 25% 75%;

    .logo { }
    .menus {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }
}

color: white;

.logo {
    .SiteLogo {
        width: 180%;
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
            border-bottom: solid 3px #2C2E42;

            text-align: center;
            font-size: 14px;
            opacity: 0.8;
            color: #2C2E42;
            font-weight: bold;
            text-decoration: none;
            text-transform: uppercase;

            &:hover,
            &:active,
            &:focus {
                opacity: 1;
            }

            &.active {
                color: #F49387;
                border-bottom-color: #F49387;
        }
    }
}

`;