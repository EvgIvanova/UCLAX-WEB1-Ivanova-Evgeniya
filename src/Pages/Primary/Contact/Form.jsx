import { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

/* Components ---------------------------*/
import ThankYouMessage from './thankYouMessage';



const Form = ({ getSubmissions }) => {

	// NAME
	const [inputName, inputNameUpdate] = useState('');
	const inputNameOnChange = (e) => {
		const theValue = e.target.value;
		inputNameUpdate(theValue);
	};

	// EMAIL
	const [inputEmail, inputEmailUpdate] = useState('');
	const inputEmailOnChange = (e) => {
		const theValue = e.target.value;
		inputEmailUpdate(theValue);
	};

	// MESSAGE
	const [inputMessage, inputMessageUpdate] = useState('');
	const inputMessageOnChange = (e) => {
		const theValue = e.target.value;
		inputMessageUpdate(theValue);
	};

	const [isSubmitted, isSubmittedUpdate] = useState(false);

	const onSubmit = async (e) => {
		e.preventDefault();

		const postData = {
			id: uuidv4(),
			name: inputName,
			email: inputEmail,
			message: inputMessage
		};

		await axios.post('http://localhost:4059/submissions', postData);
		getSubmissions();
		// console.log({ postData });

		isSubmittedUpdate(true);


	};

	return (
		<FormStyled className='Form' onSubmit={onSubmit}>
			{/* Name */}
			<div className='control-group'>
				<label htmlFor='name'>Name:</label>
				<input type='text' id='name' value={inputName} onChange={inputNameOnChange} />
			</div>

			{/* Email */}
			<div className='control-group'>
				<label htmlFor='email'>Email:</label>
				<input type='text' id='email' value={inputEmail} onChange={inputEmailOnChange} />
			</div>

			{/* Message */}
			<div className='control-group'>
				<label htmlFor='message'>Message:</label>
				<textarea id='message' value={inputMessage} onChange={inputMessageOnChange} />
			</div>

			<button type='submit'>Send</button>

			{isSubmitted ? <ThankYouMessage /> : null}
		</FormStyled>
	);
};

export default Form;

const FormStyled = styled.form`
    .control-group {
        margin-bottom: 20px;

    }

	h3 {
		color: #2C2E42;
	}

    label {
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
		color: #2C2E42;
    }

    input, textarea {
        font-size: 20px;
        padding: 10px;
        width: 100%;
        background-color: white;
        border: solid 1px #F49387;
		border-radius: 15px;


        &:focus {
            background-color: white;
        }
    }

    textarea {
        height: 150px;
    }

    button {
        background-color: #2C2E42;
        padding: 10px 5px;
        color: #F4F3F2;
        width: 150px;
        border: none;
        outline: none;
		border-radius: 20px;

        cursor: pointer;

        &:hover, &:focus {
            background-color: #F49387;
        }

        &:active {
            background-color: #F4D1CB;
        }
    }

	margin-bottom: 250px;
`;