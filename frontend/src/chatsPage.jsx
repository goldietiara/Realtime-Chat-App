import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

// MultiChatSocket    = websocket that lets the user to connect all of their chats
// MultiChatWindow    = UI that folds and lets the user type new massages and see new massages etc
// useMultiChatLogic  = state management and API calls that makes the chat app work

//import the props
const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "9d530be6-233e-465b-bce5-cb10cec9f445",
    props.user.username,
    props.user.secret
  );

  //rendering the chat UI
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100vh" }} />
    </div>
  );
};

export default ChatsPage;
