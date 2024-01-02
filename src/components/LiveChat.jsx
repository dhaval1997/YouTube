import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, randomNameGenerate } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API polling
      console.log("api polling");
      dispatch(
        addMessage({
          name: randomNameGenerate(),
          message: generateRandomMessage(),
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="h-[520px] w-full mx-4 rounded-lg flex flex-col-reverse bg-white overflow-y-scroll px-2 py-2 border border-gray-600">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <div className="flex border rounded-lg bg-gray-100 shadow ml-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Dhaval",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
          className="flex-1"
        >
          <input
            type="text"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            className="border border-gray-400 px-2 py-1 rounded mr-2 w-full"
            placeholder="Type your message..."
          />
        </form>
        <button
          className="bg-gray-500 text-white font-bold rounded px-3 py-1"
          onClick={() => {
            dispatch(
              addMessage({
                name: "Dhaval",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default LiveChat;
