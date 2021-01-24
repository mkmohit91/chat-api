import styles from './MessageBoard.module.css';
function MessageBoard() {
    return (
        <div className={['container', styles.MessageBoard].join(' ')}>
            <div className="row justify-content-center">
                <h4>Message Board</h4>
            </div>
            <div className={'row'}>
                <form className={styles.fullWidth}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Your Messages</label>
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                    <div className={styles.actionButtons}>
                        <button type="submit" className="btn btn-primary">Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MessageBoard;