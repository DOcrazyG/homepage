import { MessageCircle } from 'lucide-react';

const Header = () => {
  const scrollToChat = () => {
    document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative container mx-auto px-4 py-12 md:py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white/80 text-sm rounded-full mb-6">
              AI 开发工程师
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            梁宇豪
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed font-light">
            专注于人工智能与大语言模型应用开发
          </p>
          
          <p className="text-base md:text-lg text-white/60 mb-10 max-w-lg mx-auto">
            在这里，你可以和我的 AI 分身聊聊天，了解我的工作、技术方向，或者随便聊聊~
          </p>
          
          <button
            onClick={scrollToChat}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a1628] font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
            开始聊天
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
