import { useRef, useState } from "react";

import "./App.css";
import { fetchQueue, postQueue } from "./api";
import {
  ButtonsWrapper,
  CurrentMessage,
  CurrentMessageWrapper,
  GetQueueButton,
  GetQueueButtonWrapper,
  MessageInput,
  PostMessageButton,
  PostMessageButtonWrapper,
  PostMessageStatus,
  PostMessageStatusWrapper,
  QueueInput,
  QueueInputWrapper,
  QueueManagementContainer,
  Title,
} from "./StyledComponents";

function App() {
  const [currentMessages, setcurrentMessages] = useState();
  const [postMessageStatus, setPostMessageStatus] = useState("");
  const queueRef = useRef();
  const messageRef = useRef();

  const handlePostClick = () => {
    const queueName = queueRef.current;
    postQueue(queueName, messageRef.current).then((e) => {
      if (e) {
        setPostMessageStatus(e);
      }
    });
  };
  const handleGetClick = () => {
    fetchQueue(queueRef.current).then((e) => {
      setcurrentMessages(e);
    });
  };
  const handleChange = (e: any, ref: any) => {
    ref.current = e.target.value;
  };

  return (
    <QueueManagementContainer>
      <Title>Queue management</Title>
      <CurrentMessageWrapper>
        CurrnetMessgae
        <CurrentMessage>{currentMessages}</CurrentMessage>
      </CurrentMessageWrapper>
      <QueueInputWrapper>
        <QueueInput
          type="queue"
          placeholder="queue name"
          onChange={(e) => {
            handleChange(e, queueRef);
          }}
        />
        <MessageInput
          type="messsage"
          placeholder="message"
          onChange={(e) => {
            handleChange(e, messageRef);
          }}
        />
      </QueueInputWrapper>
      <ButtonsWrapper>
        <GetQueueButtonWrapper>
          <GetQueueButton onClick={() => handleGetClick()}>
            Get queue and message
          </GetQueueButton>
        </GetQueueButtonWrapper>

        <PostMessageButtonWrapper>
          <PostMessageButton onClick={() => handlePostClick()}>
            Send message to queue
          </PostMessageButton>
        </PostMessageButtonWrapper>
      </ButtonsWrapper>

      <PostMessageStatusWrapper>
        Post message status
        <PostMessageStatus>{postMessageStatus}</PostMessageStatus>
      </PostMessageStatusWrapper>
    </QueueManagementContainer>
  );
}

export default App;
