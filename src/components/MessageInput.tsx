import { useState, KeyboardEvent } from 'react';

interface MessageInputProps {
  onSend: (message: string) => void;
}

const MessageInput = ({ onSend }: MessageInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      onSend(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-gray-100 p-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="输入问题..."
          className="flex-1 px-4 py-2.5 bg-gray-50 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1628]/20"
        />
        <button
          onClick={handleSend}
          disabled={!inputValue.trim()}
          className="px-4 py-2.5 bg-[#0a1628] text-white text-sm rounded-xl hover:bg-[#0a1628]/90 disabled:bg-gray-200 disabled:text-gray-400 transition-colors"
        >
          发送
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
