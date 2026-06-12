import Header from '../components/Header';
import InfoSection from '../components/InfoSection';
import ChatSection from '../components/ChatSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* 左侧：个人信息 */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              <InfoSection />
            </div>
          </div>
          
          {/* 右侧：聊天区 */}
          <div id="chat-section" className="lg:col-span-8">
            <ChatSection />
          </div>
        </div>
      </main>
      <footer className="bg-[#0a1628] text-white/60 py-6 px-4 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 梁宇豪 - AI 开发工程师</p>
        </div>
      </footer>
    </div>
  );
}
