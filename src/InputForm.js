// src/InputForm.js
import React, { useState } from 'react';
import axios from 'axios';

const InputForm = () => {
    const [inputData, setInputData] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5014/api/v1/data', { inputData });
            setResponseMessage(response.data.message);
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('An error occurred while sending data to the server.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="inputData">Enter some data:</label>
                <input
                    type="text"
                    id="inputData"
                    name="inputData"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {responseMessage && <div id="result">{responseMessage}</div>}
        </div>
    );
};

export default InputForm;
