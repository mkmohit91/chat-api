import axios from 'axios';
const serviceUrl = `http://localhost:8080`;

export const postMessage = async ({email, message}) => {
    axios.post(`${serviceUrl}/messages`, {email, content: message});
}

export const fetchMessages = async() => {
    const messages = (await axios.get(`${serviceUrl}/messages`)).data;
    return messages;
}