import styles from './MessageBoard.module.css';
import {useState} from 'react'
import {postMessage} from '../../services/message.service';
function MessageBoard() {
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');
    let submitData = formData => {
        postMessage(formData);
        setMessage('');
        setEmail('');
    }
    return (
        <div className={['container', styles.MessageBoard].join(' ')}>
            <div className="row justify-content-center">
                <h4>Message Board</h4>
            </div>
            <div className={'row'}>
                <form className={styles.fullWidth}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" placeholder="name@example.com"
                            value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Your Messages</label>
                        <textarea className="form-control" rows="3"
                            value={message} onChange={e => setMessage(e.target.value)}/>
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