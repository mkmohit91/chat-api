import styles from './PostedMessage.module.css';

const PostedMessage = ({email, message}) => (<div className={["card fullWidth", styles.PostedMessage].join(' ')}>
    <div className="card-body">
        <h6 className={["card-subtitle mb-2 text-muted",
            styles.postTextHeading].join(' ')}>{email}</h6>
        <span className={styles.postTextBody}>{message}</span>
    </div>
</div>);

export default PostedMessage;