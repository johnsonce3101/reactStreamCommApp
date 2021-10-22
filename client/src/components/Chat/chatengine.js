import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './ChatFeed';
import '../Chat/Chat.css';
import LoginForm from './Login';

const Chat = () =>{
    if(!localStorage.getItem('userName')) return <LoginForm />


    return(
        <ChatEngine 
        height="90vh"
        projectID="e5a9bea3-1320-49c7-90dd-a9a4b7b6d048"
        userName="TNSÍ"
        userSecret="TNSI310123#"
        renderChat={(chatAppProps) => <ChatFeed {...chatAppProps} />}


        
        />
    );
}

export default Chat;