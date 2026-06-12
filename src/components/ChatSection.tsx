import { useChat } from '../hooks/useChat';
import ChatMessage from './ChatMessage';
import MessageInput from './MessageInput';
import { Smile, MessageCircle, MessageSquarePlus, Zap } from 'lucide-react';

const ChatSection = () => {
  const { messages, isTyping, sendMessage, messagesEndRef } = useChat();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
      <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2a4a] px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-white font-semibold text-lg">宇豪的 AI 分身</h2>
              <p className="text-white/60 text-sm flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                随时在线，等你来聊
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-white/80 text-xs">AI</span>
          </div>
        </div>
      </div>
      
      <div className="h-80 md:h-96 lg:h-[520px] overflow-y-auto p-6 bg-gradient-to-b from-gray-50/50 to-white">
        {messages.length === 0 && !isTyping && (
          <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-[#0a1628]/10 rounded-full blur-xl" />
              <div className="relative w-20 h-20 bg-gradient-to-br from-[#0a1628]/10 to-[#1a2a4a]/10 rounded-full flex items-center justify-center">
                <Smile className="w-10 h-10 text-[#0a1628]" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#0a1628] mb-2">有什么想聊的吗？</h3>
            <p className="text-gray-500 text-sm mb-6 max-w-sm">
              我是宇豪的 AI 分身，可以陪你聊聊工作、技术、兴趣，或者随便聊聊~
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-4 py-2 bg-[#0a1628]/5 text-[#0a1628] text-sm rounded-full hover:bg-[#0a1628]/10 transition-colors cursor-pointer">
                工作内容
              </span>
              <span className="px-4 py-2 bg-[#0a1628]/5 text-[#0a1628] text-sm rounded-full hover:bg-[#0a1628]/10 transition-colors cursor-pointer">
                技术方向
              </span>
              <span className="px-4 py-2 bg-[#0a1628]/5 text-[#0a1628] text-sm rounded-full hover:bg-[#0a1628]/10 transition-colors cursor-pointer">
                兴趣爱好
              </span>
            </div>
          </div>
        )}
        
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="flex items-end gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-[#0a1628]/10 to-[#1a2a4a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <div className="w-3.5 h-3.5 bg-[#0a1628] rounded-full" />
              </div>
              <div className="px-5 py-3 bg-[#0a1628]/5 rounded-xl rounded-bl-sm">
                <div className="flex gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t border-gray-100 p-4 bg-white">
        <MessageInput onSend={sendMessage} />
      </div>
    </div>
  );
};

export default ChatSection;
