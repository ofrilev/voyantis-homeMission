import { useRef, useState } from "react";

import "./App.css";
import { fetchQueue, postQueue } from "./api";

function App() {
  const [currentMessages, setcurrentMessages] = useState();

  const queueRef = useRef();
  const messageRef = useRef();

  const handlePostClick = () => {
    const queueName = queueRef.current;
    postQueue(queueName, messageRef).then((e) => {});
  };
  const handleGetClick = () => {
    queueRef.current;
    fetchQueue("queue").then((e) => {
      //@ts-ignore
      setcurrentMessages(e);
    });
  };
  const handleChange = (e: any, ref: any) => {
    ref.current = e.target.value;
  };
  fetchQueue("queue");
  postQueue("queue", "hello");

  return (
    <div>
      <title>Queue management</title>
      <div>
        CurrnetMessgae
        {currentMessages}
      </div>
      <input
        type="queue"
        onChange={(e) => {
          handleChange(e, queueRef);
        }}
      />
      <input
        type="messsage"
        onChange={(e) => {
          handleChange(e, messageRef);
        }}
      />

      <div>
        Get queue and message
        <button onClick={() => handleGetClick()}></button>
      </div>

      <div>
        Send message to queue
        <button onClick={() => handlePostClick()}></button>
      </div>
    </div>
  );
}

export default App;
