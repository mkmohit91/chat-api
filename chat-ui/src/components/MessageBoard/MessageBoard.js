import styles from './MessageBoard.module.css';
import {useState} from 'react'
import {postMessage} from '../../services/message.service';
import {validateEmail} from '../../utils/utils';

function MessageBoard({setMessageList, messageList}) {
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');
    let [emailInvalid, setEmailInvalid] = useState(false);
    let [messageInvalid, setMessageInvalid] = useState(false);
    let submitData = formData => {
        let isFormValid = validateForm(formData);
        if(isFormValid){
            postMessage(formData);
            setMessage('');
            setEmail('');
            const email = formData.email, content = formData.message;
            let newMessages = [{email, content}, ...messageList];
            setMessageList(newMessages);
        }
    }

    let validateForm = formData => {
        console.log('Validate form ', formData);
        let isEmailInValid = !validateEmail(formData?.email);
        let isMessageEmpty;
        setEmailInvalid(isEmailInValid);

        if(!(formData?.message)){
            isMessageEmpty = true;
            setMessageInvalid(true);
        }
        return !(isEmailInValid || isMessageEmpty);
    };



    return (
        <div className={['container', styles.MessageBoard].join(' ')}>
            <div className="row justify-content-center">
                <h4>Message Board</h4>
            </div>
            <div className={'row'}>
                <form className={'fullWidth'}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className={["form-control", emailInvalid ? "is-invalid" : "" ].join(" ")} placeholder="name@example.com"
                            value={email} onChange={e => setEmail(e.target.value)}
                               onClick={() => setEmailInvalid(false)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Your Messages</label>
                        <textarea className={["form-control", messageInvalid ? "is-invalid" :""].join(' ')} rows="3" maxLength={500}
                            value={message} onChange={e => setMessage(e.target.value)}
                             onClick={() => setMessageInvalid(false)}
                        />
                    </div>
                    <div className={styles.actionButtons}>
                        <button type="button" className="btn btn-primary"
                        onClick={() => submitData({email, message})}>Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MessageBoard;