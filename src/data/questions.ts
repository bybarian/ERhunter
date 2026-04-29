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
    scenario: "【警告：偵測到快速蔓延的腐蝕能量】\n55歲男性，無慢性病史，因左下肢傷口腫痛就醫。症狀在12小時內快速惡化，出現疼痛加劇與低血壓。理學檢查：局部腫脹但外觀變化不明顯，疼痛與外觀不成比例。檢驗如下圖所示。目前最有可能為下列何種類型的感染？",
    options: [
      { key: "A", text: "Type 1：多重菌種感染 (Polymicrobial)" },
      { key: "B", text: "Type 2：單一菌種感染 (Monomicrobial)" },
      { key: "C", text: "Type 3：產氣莢膜梭菌肌肉壞死" },
      { key: "D", text: "Type 4：真菌類感染" },
    ],
    correctAnswer: "B",
    explanation: "【系統解析】Type 2 壞死性筋膜炎通常由 Group A Streptococcus 引起，特色是『疼痛與外觀不成比例』。這是在戰場上極其致命的隱形偷襲。",
    imageUrl: 'q1.png',
  },
  {
    id: 2,
    category: "System Quest",
    topic: "中樞神經滲透",
    chapter: "Quest Rank: B",
    scenario: "【任務：找出隱藏的能量破壞者】\n65 歲男性，一周前因大腸癌進行化療。本次因發燒、頭痛與意識改變求診。近期曾食用農場自製的乳酪。理學檢查顯示頸部僵硬，懷疑細菌性腦膜炎。關於此病人的初始經驗性抗生素治療，何者最適當？",
    options: [
      { key: "A", text: "Ceftriaxone" },
      { key: "B", text: "Vancomycin + Ceftriaxone" },
      { key: "C", text: "Vancomycin + Ceftriaxone + Ampicillin" },
      { key: "D", text: "Meropenem" },
    ],
    correctAnswer: "C",
    explanation: "【系統解析】針對年長或化療（免疫低下）獵人，偵測到李斯特菌（Listeria）機率大幅上升。必須強制召喚『Ampicillin』能量來進行精準擊殺。",
  },
  {
    id: 3,
    category: "System Quest",
    topic: "腦部核心鑑定",
    chapter: "Quest Rank: B",
    scenario: "【緊急：顳葉區域遭到入侵】\n35 歲女性，因發燒、行為改變與癲癇發作至急診。CSF 分析顯示 lymphocytic pleocytosis，腦部 MRI 顯示 unilateral temporal lobe involvement。關於此病人的處置，何者最為優先？",
    options: [
      { key: "A", text: "等待病毒 PCR 確認診斷" },
      { key: "B", text: "立即給予 Acyclovir" },
      { key: "C", text: "給予抗生素治療" },
      { key: "D", text: "僅支持性治療" },
    ],
    correctAnswer: "B",
    explanation: "【系統解析】HSV 腦炎是高難度的影級威脅。在顳葉核心淪陷前，必須立刻注入 Acyclovir 能量，這是在對抗病毒暗殺時的最高優先級。",
  },
  {
    id: 4,
    category: "System Quest",
    topic: "免疫缺陷防衛",
    chapter: "Quest Rank: B",
    scenario: "【警報：肺部功能大幅下降】\n35 歲男性，HIV 感染，未規則服藥，CD4 count 80 cells/μL。近 2 週呼吸困難與乾咳。胸部 X 光顯示雙側瀰漫性浸潤。PaO₂ 60 mmHg (room air)。關於此病人的治療，何者最適當？",
    options: [
      { key: "A", text: "Ceftriaxone" },
      { key: "B", text: "Azithromycin" },
      { key: "C", text: "Trimethoprim-sulfamethoxazole (TMP-SMX)" },
      { key: "D", text: "TMP-SMX + Steroids (類固醇)" },
    ],
    correctAnswer: "D",
    explanation: "【系統解析】在 PCP 肺炎中，當氧氣存量（PaO2）低於 70 mmHg 時，若不搭配類固醇同步釋放，後續的能量反噬將摧毀獵人的呼吸系統。",
  },
  {
    id: 5,
    category: "System Quest",
    topic: "休克源頭控制",
    chapter: "Quest Rank: A",
    scenario: "【狀態：核心瀕臨崩潰】\n72 歲女性，因發燒與意識混亂送醫，血壓 82/48 mmHg，已給予 1000 mL 輸液。超音波顯示 IVC 直徑 >2 cm 且塌陷率 <50%。尚未建立中央靜脈導管。下一步處置何者最當？",
    options: [
      { key: "A", text: "再追加 1000 mL 輸液以達每公斤 30 mL" },
      { key: "B", text: "建立 central line 後再給升壓劑" },
      { key: "C", text: "立即經 peripheral IV 給予升壓劑" },
      { key: "D", text: "給予 Dobutamine 改善心輸出" },
    ],
    correctAnswer: "C",
    explanation: "【系統解析】能量池（IVC）已滿且無效，不應等待慢速的中央通道建設，應即刻經周邊通道啟動升壓劑，避免獵人核心因壓力過大而停機。",
  },
  {
    id: 6,
    category: "System Quest",
    topic: "氧氣防禦戰",
    chapter: "Quest Rank: A",
    scenario: "【狀態：防護系統失壓】\n65 歲男性，因肺炎入住。意識清楚，呼吸急促 (RR 28/min)，SpO₂ 88% (使用 nasal cannula 3 L/min)。胸部 X 光顯示雙側浸潤。下一步應啟動何種氧氣治療策略？",
    options: [
      { key: "A", text: "改為 non-rebreather mask (FiO2 100%)" },
      { key: "B", text: "立即氣管內插管" },
      { key: "C", text: "使用 high-flow nasal cannula (HFNC)" },
      { key: "D", text: "持續增加 nasal cannula 流量" },
    ],
    correctAnswer: "C",
    explanation: "【系統解析】對於嚴重肺炎導致的低血氧，HFNC（經鼻高流量氧氣）能提供穩定的 FiO2 與微量 PEEP，是防禦系統崩潰前的關鍵防護線。",
  },
  {
    id: 7,
    category: "System Quest",
    topic: "核心瓣膜入侵",
    chapter: "Quest Rank: B",
    scenario: "【警告：人工核心遭到滲透】\n65 歲男性，因發燒 7 天求診。曾接受人工瓣膜置換。理學檢查有心雜音。血液培養：SA 與 Streptococcus 各一組陽性。超音波未見贅生物 (Vegetation)。關於診斷何者正確？",
    options: [
      { key: "A", text: "符合 1 個 major，診斷為 definite IE" },
      { key: "B", text: "符合 1 個 major 與 2 個 minor，診斷為 possible IE" },
      { key: "C", text: "符合 3 個 minor，診斷為 possible IE" },
      { key: "D", text: "未見 vegetation，可排除 IE" },
    ],
    correctAnswer: "B",
    explanation: "【系統解析】根據 Duke 鑑定準則：血液培養陽性 (Major 1) + 瓣膜置換史與發燒 (Minor 1+2)，符合 Possible IE 的鑑定標準。",
  },
  {
    id: 8,
    category: "System Quest",
    topic: "腸道生態失衡",
    chapter: "Quest Rank: A",
    scenario: "【檢測：微環境崩潰】\n70 歲男性，因肺炎接受抗生素治療 8 天後，出現每日水樣腹瀉 6-10 次與腹部絞痛。WBC 18,000 /μL。關於此病人的治療，何者最適當？",
    options: [
      { key: "A", text: "Ciprofloxacin (口服)" },
      { key: "B", text: "Metronidazole (口服)" },
      { key: "C", text: "Vancomycin (口服)" },
      { key: "D", text: "Vancomycin (靜脈注射)" },
    ],
    correctAnswer: "C",
    explanation: "【系統解析】此為典型的『抗生素相關性腹瀉』。口服 Vancomycin 是目前清除 C. difficile 此類微環境詛咒的首選試劑。",
  },
  {
    id: 9,
    category: "System Quest",
    topic: "膽道封印解除",
    chapter: "Quest Rank: A",
    scenario: "【危險：膽道系統完全封鎖】\n72 歲男性，因發燒、右上腹痛及黃疸至急診。血壓 92/56 mmHg。超音波顯示膽囊無石，但膽管擴張。經輸液與升壓劑後仍不穩定。下一步處置？",
    options: [
      { key: "A", text: "持續抗生素治療並觀察" },
      { key: "B", text: "安排進行膽道引流" },
      { key: "C", text: "立即手術膽囊切除" },
      { key: "D", text: "給予第二線升壓劑維持血壓" },
    ],
    correctAnswer: "B",
    explanation: "【系統解析】這是高等級的『急症性膽管炎（Acute Cholangitis）』。單靠能量注入（藥物）無法突破物理封鎖，必須立即進行引流來解除壓力。",
  },
  {
    id: 10,
    category: "System Quest",
    topic: "終極防線判定",
    chapter: "Quest Rank: S",
    scenario: "【警告：偵測到海洋領主的詛咒】\n60 歲男性有肝硬化病史。食用生蠔後 24 小時內出現高燒、低血壓與下肢出血性血泡 (hemorrhagic bullae)。最可能的致病原是？",
    options: [
      { key: "A", text: "Group A Streptococcus" },
      { key: "B", text: "MRSA" },
      { key: "C", text: "Eschericia coli" },
      { key: "D", text: "Vibrio vulnificus (創傷弧菌)" },
    ],
    correctAnswer: "D",
    explanation: "【系統解析】創傷弧菌（Vibrio vulnificus）是海洋中的 S 級獵殺者。其標誌性的『出血性血泡』是它對肝硬化獵人留下的死亡印記。",
    imageUrl: 'q10.png',
  },
];
