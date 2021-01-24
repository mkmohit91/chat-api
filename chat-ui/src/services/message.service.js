import axios from 'axios';
const serviceUrl = `http://localhost:8080`;
export const messagesList = [];

export const postMessage = async ({email, message}) => {
    axios.post(`${serviceUrl}/messages`, {email, content: message});
    messagesList.push({email, message});
}

export const fetchMessages = async() => {
    const messages = await axios.get(`${serviceUrl}/messages`);
    messagesList.push(...messages);
}