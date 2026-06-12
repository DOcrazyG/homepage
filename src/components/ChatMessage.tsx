import { ChatMessage as ChatMessageType } from '../hooks/useChat';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      <div className={`flex items-end gap-2 max-w-[85%] ${message.isUser ? 'flex-row-reverse' : ''}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          message.isUser ? 'bg-[#0a1628]' : 'bg-gray-100'
        }`}>
          <div className={`w-3 h-3 rounded-full ${
            message.isUser ? 'bg-white' : 'bg-[#0a1628]'
          }`} />
        </div>
        <div className={`px-4 py-2.5 rounded-xl ${
          message.isUser
            ? 'bg-[#0a1628] text-white rounded-br-sm'
            : 'bg-gray-50 text-gray-800 rounded-bl-sm'
        }`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
