import styled from 'styled-components';
import catIconurl from './Cat_icon.png';

const ThankYouMessage = () => {
	return (
		<ThankYouMessageStyled className='ThankYouMessage'>
			<img src={catIconurl} />
			<h3>Thank you for reaching out,</h3>
			<h3> we'll be in touch soon!</h3>
		</ThankYouMessageStyled>
	);
};

export default ThankYouMessage;

const ThankYouMessageStyled = styled.div`



	img {
		display: block;
		width: 150px;
		margin: 30px auto 20px;

	}

	h3 {
		text-align: center;
	}

`;