import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Components ---------------------------*/
import Inset from '../Inset.jsx';
import SiteLogo from '../SiteLogo/SiteLogo.jsx';

const MediumLarge = () => {
    return (
        <MediumLargeStyled className='MediumLarge'>
            <Inset>
                <div className="inset">
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

`;