import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

/* Components ---------------------------*/
import SiteLogo from '../SiteLogo/SiteLogo.jsx';
import Hamburger from './Hamburger.jsx';

const Small = () => {

	const [isMenuShowing, isMenuShowingUpdate] = useState(false);

	const toggleMenu = () => {
		isMenuShowingUpdate(!isMenuShowing);
	};

	const hideMenu = () => {
		isMenuShowingUpdate(false);
	};

	useEffect(() => {
		if (isMenuShowing) {
			// add class model-open
			document.body.classList.add('modal-open');
		} else {
			// remove class model-open
			document.body.classList.remove('modal-open');
		}

		// on dismount clean up
		return () => {
			document.body.classList.remove('modal-open');
		};

	}, [isMenuShowing]);

	return (
		<SmallStyled className='Small'>
			<SiteLogo />

			<Hamburger toggleMenu={toggleMenu} />

			{isMenuShowing && (
				<nav className="mainMenu">
					<NavLink onClick={hideMenu} to={'/'} end>
						Home
					</NavLink>
					<NavLink onClick={hideMenu} to={'/staff'}>Staff</NavLink>
					<NavLink onClick={hideMenu} to={'/contact'}>Contact</NavLink>
					<NavLink onClick={hideMenu} to={'/course-work'}>Course</NavLink>
				</nav>)}
		</SmallStyled>
	);
};

export default Small;

const SmallStyled = styled.div`
    color: white;

    display: flex;
    //justify-content: center;

    .SiteLogo {
        height: 150px;
        padding: 20px;
        max-width: 330px;
    }

    .mainMenu {
        position: fixed;

        left: 0px;
        top: 150px;
        right: 0px;
        bottom: 0px;
		z-index: 100;


        background-color: #2C2E42;

        a{
            display: block;

            padding: 10px;
            border-bottom: 1px solid #F2EBE7;

            background-color: #2C2E42;

            color: #F2EBE7;
            text-decoration: none;
			font-weight: bold;

            &:hover,
            &:active,
            &:focus {
                background-color: #F49387;
            }
        }
    }
`;