import styled from 'styled-components';

/* Components ---------------------------*/
import Inset from './Inset.jsx';
import SiteLogo from './SiteLogo/SiteLogo.jsx';

const Footer = () => {
	return (
		<FooterStyled className='Footer'>
			<Inset>
				<div className="logo">
					<SiteLogo />
				</div>
				<h2>
					Happy Cat :: Where Cats Find Happiness and Homes :: San Diego, CA
				</h2>
				<div className="copyright">
					&copy; 2023. All rights reserved.
				</div>
			</Inset>
		</FooterStyled>
	);
};

export default Footer;

const FooterStyled = styled.footer`
    color: white;

    padding: 20px 0px;

    text-align: center;

    .logo {
        display: flex;
        justify-content: center;
        .SiteLogo {
            margin-bottom: 10px;
            width: 300px;
        }
    }

    h2 {
        color: #F49387;
        margin: 5px 0px;
        font-size: 14px;
		font-weight: normal;
    }

    .copyright {
        font-size: 12px;
        color: #F49387;
    }

`;