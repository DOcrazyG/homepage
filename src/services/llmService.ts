import OpenAI from 'openai';
import { userInfo } from '../data/mockData';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  baseURL: import.meta.env.VITE_OPENAI_BASE_URL || 'https://api.openai.com/v1',
  dangerouslyAllowBrowser: true,
});

const systemPrompt = `
你是${userInfo.name}的数字分身，你的任务是模拟${userInfo.name}的身份与用户对话。

以下是${userInfo.name}的个人信息：
- 名字：${userInfo.name}
- 一句话介绍：${userInfo.bio}
- 职业：${userInfo.occupation}
- 最近在做：${userInfo.currentWork}
- 擅长/关心的方向：${userInfo.skills.join('、')}
- 兴趣爱好：${userInfo.interests.join('、')}

请你：
1. 使用自然、友好的语言回答问题
2. 回答要符合${userInfo.name}的身份和背景
3. 如果问题超出个人信息范围，可以适当发挥，但要保持一致性
4. 保持回答简洁明了

常见问题示例：
- "你为什么从事AI开发？"
- "你现在的工作内容是什么？"
- "怎么联系你？"
`;

export const generateLLMResponse = async (question: string): Promise<string> => {
  try {
    const completion = await openai.chat.completions.create({
      model: import.meta.env.VITE_OPENAI_MODEL || 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt.trim() },
        { role: 'user', content: question },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return completion.choices[0]?.message?.content || '抱歉，我暂时无法回答这个问题。';
  } catch (error) {
    console.error('LLM API error:', error);
    // 如果API调用失败，返回mock回答作为降级方案
    return generateMockResponse(question);
  }
};

// Mock降级方案
const generateMockResponse = (question: string): string => {
  const lowerQuestion = question.toLowerCase();
  
  if (lowerQuestion.includes('为什么') || lowerQuestion.includes('从事')) {
    return '我对人工智能充满热情，它能够解决很多复杂的问题，改变人们的生活方式。从大学时期接触机器学习开始，我就被AI的无限可能所吸引，现在专注于RAG和知识图谱领域的研究与应用。';
  }
  
  if (lowerQuestion.includes('工作') || lowerQuestion.includes('内容')) {
    return '作为AI开发工程师，我主要负责设计和实现基于大语言模型的应用系统，包括RAG检索增强生成系统和知识图谱构建。最近在读《置身事内》，拓展自己的知识面。';
  }
  
  if (lowerQuestion.includes('联系') || lowerQuestion.includes('方式') || lowerQuestion.includes('怎么找')) {
    return '很高兴认识你！你可以通过邮箱联系我：liangyuhao@example.com。期待与你交流AI相关的话题！';
  }
  
  if (lowerQuestion.includes('兴趣') || lowerQuestion.includes('爱好')) {
    return '我平时喜欢下围棋和打王者荣耀。围棋让我学会深度思考和策略规划，游戏则是很好的放松方式。';
  }
  
  if (lowerQuestion.includes('擅长') || lowerQuestion.includes('方向')) {
    return '我擅长RAG（检索增强生成）和知识图谱领域，对如何将这些技术应用到实际业务场景有丰富的经验。';
  }
  
  return `你问的是："${question}"\n\n很高兴你对我的个人主页感兴趣！我是${userInfo.name}，一名${userInfo.occupation}。如果你有其他问题，欢迎继续提问！`;
};
