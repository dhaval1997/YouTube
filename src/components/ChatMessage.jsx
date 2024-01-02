import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <div>
      <div className="bg-gray-50 rounded-md p-2 flex items-center space-x-2 m-1">
        <div className="text-2xl">
          <FaUserCircle />
        </div>

        <div>
          <span className="font-semibold text-sm text-gray-800">{name}:</span>
          <span className="text-sm">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
