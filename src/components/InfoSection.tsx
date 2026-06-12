import { Heart, Coffee, Code2, Sparkles, Briefcase, Clock, Target } from 'lucide-react';
import { userInfo } from '../data/mockData';

const InfoSection = () => {
  const interests = [
    { icon: <Code2 className="w-4 h-4" />, text: '写代码' },
    { icon: <Heart className="w-4 h-4" />, text: '下围棋' },
    { icon: <Coffee className="w-4 h-4" />, text: '喝咖啡' },
    { icon: <Sparkles className="w-4 h-4" />, text: '打王者' },
  ];

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
      <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2a4a] px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" />
            <img
              src={userInfo.avatar}
              alt={userInfo.name}
              className="relative w-24 h-24 rounded-full object-cover border-4 border-white/30 shadow-lg"
            />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-1">{userInfo.name}</h2>
          <p className="text-white/70 text-sm">{userInfo.bio}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-8 h-8 bg-[#0a1628]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-4 h-4 text-[#0a1628]" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">职业</p>
              <p className="text-sm font-medium text-[#0a1628]">{userInfo.occupation}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-8 h-8 bg-[#0a1628]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4 text-[#0a1628]" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">最近</p>
              <p className="text-sm font-medium text-[#0a1628]">{userInfo.currentWork}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-8 h-8 bg-[#0a1628]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Target className="w-4 h-4 text-[#0a1628]" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">关注</p>
              <p className="text-sm font-medium text-[#0a1628]">{userInfo.skills.join('、')}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-400 mb-3">平时喜欢</p>
          <div className="flex flex-wrap gap-2">
            {interests.map((item, index) => (
              <span
                key={index}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0a1628]/5 text-[#0a1628] text-xs rounded-full hover:bg-[#0a1628]/10 transition-all duration-200"
              >
                {item.icon}
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
