export const userInfo = {
  name: '梁宇豪',
  bio: '一个闷骚低调，没啥趣味的人',
  avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20photo%20of%20a%20young%20asian%20male%20software%20engineer%20wearing%20casual%20clothes%20clean%20background&image_size=square_hd',
  occupation: 'AI开发工程师',
  currentWork: '读《置身事内》',
  skills: ['RAG', '知识图谱'],
  interests: ['围棋', '王者荣耀'],
  commonQuestions: [
    '你为什么从事AI开发？',
    '你现在的工作内容是什么？',
    '怎么联系你？'
  ]
};

export const generateResponse = (question: string): string => {
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
  
  return `你问的是："${question}"\n\n很高兴你对我的个人主页感兴趣！我是梁宇豪，一名AI开发工程师。如果你有其他问题，欢迎继续提问！`;
};
