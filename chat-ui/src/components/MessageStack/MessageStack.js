import styles from './MessageStack.module.css';
import {useEffect} from 'react';
import {fetchMessages} from "../../services/message.service";
import PostedMessage from "../PostedMessage/PostedMessage";

function MessageStack({messageList, setMessageList}) {

    useEffect(() => {
        fetchMessages().then(messages => {
            setMessageList([...messages]);
        });
    }, [])

    return (
        <div className={['container', styles.MessageStack].join(' ')}>
            <div className="row justify-content-center">
                <h4>Messages</h4>
            </div>

            {messageList.map(({email, content}, index) =>
                (<div className={'row'} key = {index} >
                    <PostedMessage message={content} email={email}/>
                </div>)
            )
            }
        </div>
    );
}

export default MessageStack;