import MessageBoard from "../MessageBoard/MessageBoard";
import MessageStack from "../MessageStack/MessageStack";
import {useState} from 'react';
function App() {
  const [messageList, setMessageList] = useState([]);
  return (
    <div>
      <MessageBoard setMessageList = {setMessageList} messageList = {messageList}/>
      <MessageStack messageList = {messageList} setMessageList = {setMessageList} />
    </div>
  );
}

export default App;
