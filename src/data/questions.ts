export interface Question {
  id: number;
  category: string;
  topic: string;
  scenario: string;
  options: {
    key: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation: string;
  chapter: string;
  imageUrl?: string;
  rankReq?: string;
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    category: "System Quest",
    topic: "軟組織感染鑑定",
    chapter: "Quest Rank: A",
    scenario: "【警告：偵測到快速蔓延的腐蝕能量】\n一名55歲獵人，12小時前遭攻擊後傷口快速惡化，出現劇痛與血壓下降。系統掃描（超音波）顯示皮下出現異常干擾信號（如下圖）。此為哪一型感染？",
    options: [
      { key: "A", text: "Type 1：多重菌種感染 (Polymicrobial)" },
      { key: "B", text: "Type 2：單一菌種感染 (Monomicrobial)" },
      { key: "C", text: "Type 3：產氣莢膜梭菌肌肉壞死" },
      { key: "D", text: "Type 4：真菌類侵蝕" },
    ],
    correctAnswer: "B",
    explanation: "【系統解析】Type 2 壞死性筋膜炎通常由 Group A Streptococcus 引起，特色是疼痛與外觀不成比例（Pain out of proportion）。這是在 S 級門戶外最常見的致命偷襲。",
    imageUrl: 'q1.png',
    rankReq: "Double Dungeon Survival",
  },
  {
    id: 2,
    category: "System Quest",
    topic: "中樞神經滲透",
    chapter: "Quest Rank: B",
    scenario: "【任務：找出隱藏的李斯特菌】\n一名65歲獵人正處於免疫低下狀態，食用農場乳酪後出現發燒與意識模糊。系統懷疑細菌性腦膜炎。對於此種級別的威脅，經驗性抗生素應如何配置？",
    options: [
      { key: "A", text: "Ceftriaxone" },
      { key: "B", text: "Vancomycin + Ceftriaxone" },
      { key: "C", text: "Vancomycin + Ceftriaxone + Ampicillin" },
      { key: "D", text: "Meropenem 單點突破" },
    ],
    correctAnswer: "C",
    explanation: "【系統解析】針對年長或免疫低下個體，偵測到李斯特菌（Listeria）機率大幅上升。必須強制召喚『Ampicillin』能量來進行精準擊殺。",
  },
  {
    id: 3,
    category: "System Quest",
    topic: "病毒性腦炎演習",
    chapter: "Quest Rank: B",
    scenario: "【緊急：顳葉區域遭到入侵】\n一名35歲女性獵人，出現行為改變與癲癇。腦部掃描（MRI）顯示單側顳葉受損。在鑑定結果（PCR）揭曉前，何者為最高優先行動？",
    options: [
      { key: "A", text: "等待病毒 PCR 鑑定結果" },
      { key: "B", text: "立即啟動 Acyclovir 治療" },
      { key: "C", text: "先以廣效抗生素防禦" },
      { key: "D", text: "採取防守姿態（支持性治療）" },
    ],
    correctAnswer: "B",
    explanation: "【系統解析】HSV 腦炎是高難度的影級威脅。在顳葉淪陷前，必須立刻使用 Acyclovir，任何遲疑都會導致等級刪除（死亡）。",
  },
  {
    id: 4,
    category: "System Quest",
    topic: "免疫缺陷增幅器",
    chapter: "Quest Rank: B",
    scenario: "【警報：肺部功能大幅下降】\n一名 CD4 數據極低的獵人出現雙側肺部瀰漫性浸潤，PaO2 低至 60 mmHg。鑑定為 PCP 肺炎。治療配置應為？",
    options: [
      { key: "A", text: "Ceftriaxone" },
      { key: "B", text: "Azithromycin" },
      { key: "C", text: "Trimethoprim-sulfamethoxazole (TMP-SMX)" },
      { key: "D", text: "TMP-SMX + Corticosteroids (類固醇)" },
    ],
    correctAnswer: "D",
    explanation: "【系統解析】當氧氣存量（PaO2）低於 70 時，若不搭配類固醇同步釋放，後續的能量反噬（發炎）將徹底摧毀獵人的肺部系統。",
  },
  {
    id: 5,
    category: "System Quest",
    topic: "休克源頭控制",
    chapter: "Quest Rank: A",
    scenario: "【狀態：核心瀕臨崩潰】\n一名敗血性休克獵人，大量水分灌注後血壓仍低，超音波顯示能量池（IVC）已飽和。下一步的等級提升行動是？",
    options: [
      { key: "A", text: "繼續追加水分灌注" },
      { key: "B", text: "等待開啟中央通道" },
      { key: "C", text: "立即從周邊靜脈啟動升壓劑能量" },
      { key: "D", text: "使用 Dobutamine 強化" },
    ],
    correctAnswer: "C",
    explanation: "【系統解析】能量池已滿，不應等待慢速的通道建設，應即刻釋放升壓劑來維持系統運作，避免獵人核心（心臟）過載。",
  },
  {
    id: 10,
    category: "System Quest",
    topic: "終極 Boss 判定",
    chapter: "Quest Rank: S",
    scenario: "【警告：偵測到海洋領主的詛咒】\n一名有肝硬化病史的獵人，食用生蠔後 24 小時內出現高燒、低血壓與下肢出血性血泡（如下圖）。此 Boss 的真名是？",
    options: [
      { key: "A", text: "Group A Streptococcus" },
      { key: "B", text: "MRSA" },
      { key: "C", text: "Eschericia coli (大腸桿菌)" },
      { key: "D", text: "Vibrio vulnificus (創傷弧菌)" },
    ],
    correctAnswer: "D",
    explanation: "【系統解析】創傷弧菌（Vibrio vulnificus）是海洋中的 S 級獵殺者。其標誌性的『出血性血泡』是它留下的死亡印記。",
    imageUrl: 'q10.png',
  },
];
