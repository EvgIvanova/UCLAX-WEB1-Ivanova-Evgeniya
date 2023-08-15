import styled from 'styled-components';
import EssaysText from './EssaysText';

/* Component ---------------------------*/
import Essay from './Essay.jsx';

const Essays = () => {
	const essayAnswer = EssaysText;
	return (
		<EssaysStyled className='Essays'>
			<h2>Essays</h2>
			<Essay question='Q1: Explain the difference between HTML, CSS and JavaScript.'>
				{essayAnswer[0]}
			</Essay>
			<Essay question='Q2: What is the difference between Git and Github?'>
				{essayAnswer[1]}
			</Essay>
			<Essay question='Q3: What is the difference between JQuery and React?'>
				{essayAnswer[2]}
			</Essay>
			<Essay question='Q4: What is the difference between a Front-End and Back-End Developer?'>
				{essayAnswer[3]}
			</Essay>
			<Essay question='Q5: What is the difference between Absolute, Root and Document Relative linking?'>
				{essayAnswer[4]}
			</Essay>
			<Essay question='Q6: What is the difference between jpg, gif, png and svg images?'>
				{essayAnswer[5]}
			</Essay>
			<Essay question='Q7: Define the following Agile roles: Product Owner, Product Manager, Business Analyst, Scrum Master, UX designer, Developer/Engineer, QA/SDET, and DevOps.'>
				{essayAnswer[6]}
			</Essay>

		</EssaysStyled>
	);
};

export default Essays;

const EssaysStyled = styled.div`

`;