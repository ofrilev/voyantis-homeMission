import { useRef, useState } from "react";

import "./App.css";
import { fetchQueue, postQueue } from "./api";
import {
  ButtonsWrapper,
  CurrentMessage,
  GetMessgaeWrapper,
  MainWrapper,
  MessageInput,
  QueueInput,
  QueueInputWrapper,
  QueueManagementContainer,
  SendMessageWrapper,
  StatusFrame,
  StatusTitleWrapper,
  StatusWrapper,
  StyledButton,
  Title,
} from "./StyledComponents";

function App() {
  const [loading, setLoading] = useState(false);
  const [getMessage, setGetMessage] = useState("no message");
  const [postMessageStatus, setPostMessageStatus] = useState("no post status");

  const getQueueRef = useRef();
  const postQueueRef = useRef();
  const messageRef = useRef();

  const isLoading = (data: string): React.JSX.Element => {
    if (loading) {
      return <>Loading....</>;
    } else {
      return <>{data}</>;
    }
  };
  const handlePostClick = () => {
    setLoading(true);
    const queueName = postQueueRef.current;
    postQueue(queueName, messageRef.current).then((e) => {
      if (e) {
        setPostMessageStatus(e);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  };
  const handleGetClick = () => {
    setLoading(true);
    fetchQueue(getQueueRef.current).then((e) => {
      setGetMessage(e);
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const handleChange = (e: any, ref: any) => {
    ref.current = e.target.value;
  };

  return (
    <QueueManagementContainer>
      <Title>Queue management</Title>
      <MainWrapper>
        <GetMessgaeWrapper>
          <h2>Get messages</h2>
          <QueueInputWrapper>
            <QueueInput
              type="queue"
              placeholder="queue name"
              onChange={(e) => {
                handleChange(e, getQueueRef);
              }}
            />
          </QueueInputWrapper>
        </GetMessgaeWrapper>
        <SendMessageWrapper>
          <h2>Send messages</h2>
          <QueueInputWrapper>
            <QueueInput
              type="queue"
              placeholder="queue name"
              onChange={(e) => {
                handleChange(e, postQueueRef);
              }}
            />
            <SendMessageWrapper>
              <MessageInput
                type="messsage"
                placeholder="message"
                onChange={(e) => {
                  handleChange(e, messageRef);
                }}
              />
            </SendMessageWrapper>
          </QueueInputWrapper>
        </SendMessageWrapper>
      </MainWrapper>
      <ButtonsWrapper>
        <StyledButton onClick={() => handleGetClick()}>
          Get queue message
        </StyledButton>
        <StyledButton onClick={() => handlePostClick()}>
          Send message&queue
        </StyledButton>
      </ButtonsWrapper>
      <StatusFrame>
        <StatusTitleWrapper>
          <h4>Get status</h4>
          <h4>Send status</h4>
        </StatusTitleWrapper>
        <StatusWrapper>
          <CurrentMessage>{isLoading(getMessage)}</CurrentMessage>
          <CurrentMessage>{isLoading(postMessageStatus)}</CurrentMessage>
        </StatusWrapper>
      </StatusFrame>
    </QueueManagementContainer>
  );
}

export default App;
