import { useRef, useState } from "react";

import "./App.css";
import { fetchQueue, postQueue } from "./api";

function App() {
  const [currentMessages, setcurrentMessages] = useState();

  const queueRef = useRef();
  const messageRef = useRef();

  // const handlePostClick = () => {
  //   postQueue(queueRef.current as string).then((e) => {
  //     e.stat

  // }
  const handleGetClick = () => {
    queueRef.current;
  };
  const handleChange = (e: any, ref: any) => {
    ref.current = e.target.value;
  };
  fetchQueue("queue");
  postQueue("queue", "hello");

  return (
    <div>
      <title>Queue management</title>
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
        <button
        //  onClick={() => handlePostClick()}
        ></button>
      </div>

      <div>
        Send message to queue
        <button
        // onClick={() => handlePostClick()}
        ></button>
      </div>
    </div>
  );
}

export default App;
