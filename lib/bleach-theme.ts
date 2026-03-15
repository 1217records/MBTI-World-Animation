import type { ThemeContent, ThemeMeta } from "@/types";

export const BLEACH_THEME_KO: ThemeMeta = {
  id: "bleach",
  label: "블리치",
  emoji: "🗡️",
  gradient: "from-[#050505] via-[#5b5b5b] to-[#f5f5f5]",
  accentColor: "#050505",
  tags: ["사신", "참백도", "영압"],
};

export const BLEACH_CONTENT_KO: ThemeContent = {
  questions: [
    {
      axis: "EI",
      prompt: "호정 13대 입대 첫날, 대원들이 모여 환영회를 열어준다면?",
      options: [
        { value: "E", label: "\"반갑습니다! 11번대 신입입니다!\" 술잔을 돌리며 금방 형, 동생 사이가 된다." },
        { value: "I", label: "\"잘 부탁드립니다.\" 짧게 인사한 뒤, 구석에서 조용히 분위기를 살피며 술을 마신다." },
      ],
    },
    {
      axis: "EI",
      prompt: "현세 파견 임무를 나갔을 때 당신이 선호하는 방식은?",
      options: [
        { value: "E", label: "인간들과 어울려 맛집도 가고 대화하며 활기차게 조사한다." },
        { value: "I", label: "눈에 띄지 않게 지붕 위나 어두운 곳에서 은밀하게 적을 추적한다." },
      ],
    },
    {
      axis: "EI",
      prompt: "만해를 마침내 습득했다. 이 사실을 누구에게 먼저 알릴까?",
      options: [
        { value: "E", label: "친한 동료들에게 바로 자랑하며 \"한판 붙자!\"고 대결을 신청한다." },
        { value: "I", label: "비장의 카드로 숨겨 두고, 결정적인 위기 순간에만 꺼내 보여준다." },
      ],
    },
    {
      axis: "EI",
      prompt: "휴일에 루콘가에서 보내는 완벽한 하루는?",
      options: [
        { value: "E", label: "시끌벅적한 축제 현장에 나가 사람 구경과 체험을 즐긴다." },
        { value: "I", label: "툇마루에 앉아 차를 마시며 참백도와 대화하는 정적인 시간을 보낸다." },
      ],
    },
    {
      axis: "SN",
      prompt: "강력한 적의 영압이 느껴질 때 당신이 먼저 파악하는 것은?",
      options: [
        { value: "S", label: "적과의 거리, 지형, 무기의 형태 같은 물리적 정보부터 확인한다." },
        { value: "N", label: "영압의 본질, 숨겨진 술책, 전투의 결말에 대한 예감을 먼저 읽는다." },
      ],
    },
    {
      axis: "SN",
      prompt: "대장이 \"참백도의 진정한 이름을 찾아라\"라고 명한다면?",
      options: [
        { value: "S", label: "매일 수천 번 칼을 휘두르며 몸의 감각으로 칼과 하나가 되려 한다." },
        { value: "N", label: "명상을 통해 정신세계로 들어가 칼의 형상과 상징을 해석한다." },
      ],
    },
    {
      axis: "SN",
      prompt: "복잡한 미로 같은 가르간타 안에서 길을 찾아야 한다면?",
      options: [
        { value: "S", label: "벽에 표시를 남기거나 도구를 써서 확실한 경로를 확인하며 전진한다." },
        { value: "N", label: "\"이쪽에서 흐름이 느껴져.\" 보이지 않는 영력을 감지하며 직관적으로 움직인다." },
      ],
    },
    {
      axis: "SN",
      prompt: "새로운 귀도를 배울 때 가장 즐거운 지점은?",
      options: [
        { value: "S", label: "정확한 영창과 위력을 반복해 완성도를 수치로 증명할 때." },
        { value: "N", label: "원리를 응용해 나만의 영창 파기나 변형술을 떠올릴 때." },
      ],
    },
    {
      axis: "TF",
      prompt: "법도를 어긴 동료가 처형될 위기에 처했다면?",
      options: [
        { value: "T", label: "\"법은 법이다.\" 질서 유지를 위해 냉정하게 상황을 수용한다." },
        { value: "F", label: "\"사람의 생명이 먼저야.\" 위험을 감수하고서라도 구하러 간다." },
      ],
    },
    {
      axis: "TF",
      prompt: "적을 쓰러뜨린 뒤 상대가 유언을 남기려 한다면?",
      options: [
        { value: "T", label: "\"전장에서 자비는 사치다.\" 망설임 없이 확실하게 마무리한다." },
        { value: "F", label: "\"무슨 사연이 있었던 거지...\" 잠시 칼을 거두고 마지막 말을 들어준다." },
      ],
    },
    {
      axis: "TF",
      prompt: "부하 대원이 임무 중 부상을 입고 돌아왔다면?",
      options: [
        { value: "T", label: "치료를 지시한 뒤, 부상 원인과 전술적 실수를 먼저 분석한다." },
        { value: "F", label: "얼마나 아팠는지부터 묻고, 살아 돌아온 것을 진심으로 다독인다." },
      ],
    },
    {
      axis: "TF",
      prompt: "아이젠 소스케의 배신 소식을 들었을 때 당신의 첫 생각은?",
      options: [
        { value: "T", label: "그의 목적과 전력 공백을 계산하며 논리적으로 대응책을 세운다." },
        { value: "F", label: "믿음을 배신한 사실 자체에 크게 분노하고 상처받는다." },
      ],
    },
    {
      axis: "JP",
      prompt: "웨코문드 원정 임무 전날, 당신은?",
      options: [
        { value: "J", label: "보급품과 의약품 리스트를 정리하고 작전 지도를 외울 때까지 검토한다." },
        { value: "P", label: "\"현장은 가봐야 안다.\" 칼 한 자루 챙기고 일찍 쉬며 컨디션을 맞춘다." },
      ],
    },
    {
      axis: "JP",
      prompt: "대장이 맡긴 서류 업무가 산더미처럼 쌓여 있다면?",
      options: [
        { value: "J", label: "오전 중 마감 계획을 세워 순서대로 깔끔하게 처리한다." },
        { value: "P", label: "미루다가 마감 직전에 엄청난 속도로 몰아서 끝낸다." },
      ],
    },
    {
      axis: "JP",
      prompt: "전투 중 예상치 못한 지원군이 적에게 붙었다면?",
      options: [
        { value: "J", label: "미리 생각해 둔 플랜 B에 따라 퇴각 또는 대응 지시를 신속히 내린다." },
        { value: "P", label: "\"재밌어지는데?\" 즉흥적으로 허점을 읽고 변칙 공격을 시도한다." },
      ],
    },
    {
      axis: "JP",
      prompt: "약속된 사신 협회 회의 시간, 당신은 언제 도착하는가?",
      options: [
        { value: "J", label: "시작 10분 전에 도착해 자료를 훑으며 정좌하고 기다린다." },
        { value: "P", label: "회의 시작 후 슬그머니 나타나 상황에 맞는 변명을 덧붙인다." },
      ],
    },
  ],
  results: {
    ISTJ: {
      name: "쿠치키 뱌쿠야",
      desc: "법과 긍지를 끝까지 지키는 정석의 사신.",
      longDesc: "뱌쿠야는 소울 소사이어티의 법도와 귀족의 긍지를 자신의 감정보다 앞세우는 ISTJ입니다. 감정보다 책임과 질서를 우선하며, 한번 맡은 원칙은 쉽게 흔들리지 않습니다. 냉정해 보여도 그 단단함은 공동체를 지키기 위한 자기 통제에서 나옵니다.",
      episodeNote: "핵심: \"법을 지켜야 하는 자가 법을 어긴다면, 누가 법을 지키겠는가.\"",
    },
    INTJ: {
      name: "아이젠 소스케",
      desc: "수백 년 앞을 설계하는 완벽주의 전략가.",
      longDesc: "아이젠은 장기 목표를 위해 모든 변수를 설계하는 INTJ형입니다. 감정 노출을 최소화하고, 원하는 미래를 만들기 위해 사람과 사건을 구조적으로 배치합니다. 통찰과 계획성, 냉철한 실행력이 극단적으로 결합된 타입입니다.",
      episodeNote: "핵심: \"내가 하늘에 서겠다.\"",
    },
    INFJ: {
      name: "이치마루 긴",
      desc: "미소 뒤에 거대한 진심을 숨긴 통찰형.",
      longDesc: "긴은 속을 쉽게 드러내지 않지만, 내면에는 단 하나의 목적과 깊은 감정이 자리한 INFJ입니다. 사람을 읽는 감각이 뛰어나고, 긴 시간 동안 자신의 의도를 감춘 채 움직일 수 있습니다. 조용한 희생과 복합적인 진심이 이 유형의 핵심입니다.",
      episodeNote: "핵심: \"내일 너는 뱀이 되어 사람을 잡아먹기 시작하겠지.\"",
    },
    INTP: {
      name: "우라하라 키스케",
      desc: "상상을 현실로 바꾸는 천재 조력자.",
      longDesc: "우라하라는 호기심과 분석력이 강한 INTP입니다. 권위보다 문제 해결 자체에 끌리고, 복잡한 상황일수록 더 기발한 해결책을 떠올립니다. 느슨해 보이는 태도와 달리 머릿속에서는 언제나 수많은 가설과 대비책이 돌아갑니다.",
      episodeNote: "핵심: \"천 번의 대비를 하고 한 번의 실행을 한다.\"",
    },
    ISTP: {
      name: "아바라이 렌지",
      desc: "몸으로 부딪혀 한계를 넘는 실전형 사신.",
      longDesc: "렌지는 이론보다 실전과 반복 수련으로 성장하는 ISTP입니다. 말보다 행동이 앞서고, 한 번 목표를 정하면 몸으로 부딪히며 감각을 끌어올립니다. 패배와 한계를 경험해도 기술을 더 날카롭게 다듬는 집요함이 강점입니다.",
      episodeNote: "핵심: \"내 영혼에 불을 지펴라. 짖어라, 사미환!\"",
    },
    ISFP: {
      name: "사도 야스토라",
      desc: "조용하지만 소중한 것을 위해 끝까지 버티는 보호자.",
      longDesc: "차드는 말수는 적지만 내면 신념이 뚜렷한 ISFP입니다. 누구를 위해 힘을 쓸 것인지 스스로 분명히 정하고, 그 기준에 따라 조용히 행동합니다. 과시보다 묵묵한 헌신과 진심 어린 보호 본능이 중심에 있습니다.",
      episodeNote: "핵심: \"나는 너를 위해 주먹을 휘두르겠다고 맹세했어.\"",
    },
    INFP: {
      name: "쿠치키 루키아",
      desc: "섬세한 신념과 희생정신을 지닌 이상주의자.",
      longDesc: "루키아는 내면의 가치와 도덕적 신념을 깊게 품은 INFP입니다. 상처와 죄책감을 오래 안고 가지만, 누군가를 지키기 위해서는 자신을 기꺼이 내어줄 정도로 진심이 강합니다. 차가워 보일 때조차 중심에는 따뜻한 정의감이 있습니다.",
      episodeNote: "핵심: \"사람은 마음을 누군가에게 맡기고 죽는 거야.\"",
    },
    ISFJ: {
      name: "우노하나 레츠",
      desc: "자애로움과 규율을 함께 지닌 수호자.",
      longDesc: "우노하나는 타인을 돌보는 책임감과 조용한 강단을 가진 ISFJ입니다. 겉으로는 온화한 치유자지만, 필요할 때는 누구보다 단호하게 규율과 역할을 지켜 냅니다. 배려와 절제가 동시에 깊은 신뢰를 만듭니다.",
      episodeNote: "핵심: \"치료는 정숙하게, 싸움은 화끈하게.\"",
    },
    ESTP: {
      name: "자라키 켄파치",
      desc: "싸움 그 자체를 즐기는 순수 전투형.",
      longDesc: "켄파치는 현재의 자극과 강한 상대와의 승부에서 에너지를 얻는 ESTP입니다. 복잡한 계산보다 몸이 먼저 반응하고, 위기일수록 더 살아 있음을 느낍니다. 본능적 전투 감각과 압도적인 실행력이 특징입니다.",
      episodeNote: "핵심: \"중요한 건 베는 맛이지.\"",
    },
    ESFP: {
      name: "쿠로사키 이치고",
      desc: "뜨거운 추진력으로 모두를 구하러 달리는 주인공형.",
      longDesc: "이치고는 눈앞의 사람과 상황에 즉각적으로 반응하는 ESFP입니다. 머리로 오래 계산하기보다 몸으로 먼저 움직이며, 소중한 사람을 지키는 일에는 망설임이 거의 없습니다. 강한 생동감과 진심이 사람들을 끌어당깁니다.",
      episodeNote: "핵심: \"내가 지키고 싶은 건 오직 내 손이 닿는 곳의 평화다.\"",
    },
    ENFP: {
      name: "마츠모토 란기쿠",
      desc: "자유롭고 사람 냄새 나는 에너지 메이커.",
      longDesc: "란기쿠는 낙천성과 사교성으로 주변 분위기를 풀어 주는 ENFP입니다. 겉으로는 가볍고 자유로워 보여도 사람의 감정을 읽는 감각이 뛰어나며, 가까운 이들의 상처를 그냥 지나치지 못합니다. 감정과 활력이 자연스럽게 퍼지는 타입입니다.",
      episodeNote: "핵심: \"뭐 어때, 가끔은 이렇게 즐겁게 보내는 게 인생이지!\"",
    },
    ENFJ: {
      name: "히라코 신지",
      desc: "독특한 화법으로 사람을 묶는 통찰형 리더.",
      longDesc: "신지는 가벼워 보이는 태도 속에 사람과 판을 읽는 감각이 깊은 ENFJ입니다. 팀의 분위기를 유연하게 잡고, 개성 강한 구성원들도 자연스럽게 묶어 냅니다. 관계 감각과 리더십이 동시에 드러나는 유형입니다.",
      episodeNote: "핵심: \"거꾸로 선 세상에서 나만은 똑바로 서 있다.\"",
    },
    ESTJ: {
      name: "야마모토 겐류사이",
      desc: "질서와 위계를 체현하는 절대 관리자.",
      longDesc: "야마모토는 조직의 규율과 체계를 최우선으로 여기는 ESTJ입니다. 흔들리는 상황에서도 기준을 세우고, 모두가 따라야 할 질서를 직접 몸으로 보여 줍니다. 강한 카리스마와 실행력, 책임감이 핵심입니다.",
      episodeNote: "핵심: \"내가 여기 있는 것이 곧 소울 소사이어티의 법이다.\"",
    },
    ENTJ: {
      name: "시호인 요루이치",
      desc: "목표를 정하면 즉시 길을 여는 전장형 리더.",
      longDesc: "요루이치는 빠른 결단과 압도적 실행력을 갖춘 ENTJ입니다. 복잡한 판에서도 바로 해법을 제시하고, 사람을 가장 효율적인 위치에 배치해 흐름을 바꿉니다. 강한 주도성과 전략 감각이 함께 작동합니다.",
      episodeNote: "핵심: \"따라와라. 진정한 힘을 손에 넣는 법을 알려주지.\"",
    },
    ENTP: {
      name: "쿠로츠치 마유리",
      desc: "상식을 부수며 새 답을 만드는 광기 어린 혁신가.",
      longDesc: "마유리는 고정관념을 혐오하고 새로운 실험 자체에서 즐거움을 느끼는 ENTP입니다. 논쟁과 발상을 통해 기존 체계를 뒤흔들고, 완벽을 부정하며 계속 더 나은 변형을 만듭니다. 독창성과 위험한 호기심이 동시에 폭발합니다.",
      episodeNote: "핵심: \"과학자에게 완벽이란 절망이다.\"",
    },
    ESFJ: {
      name: "이노우에 오리히메",
      desc: "모두의 안녕을 바라며 끝까지 돕는 평화주의자.",
      longDesc: "오리히메는 타인의 상처와 분위기를 민감하게 살피는 ESFJ입니다. 누구 하나 소외되거나 다치지 않기를 바라며, 자신의 힘을 보호와 치유에 자연스럽게 씁니다. 다정함과 헌신이 공동체를 안정시키는 중심이 됩니다.",
      episodeNote: "핵심: \"나는 모두와 함께 웃으면서 돌아가고 싶어.\"",
    },
  },
};

export const BLEACH_THEME_EN: ThemeMeta = {
  id: "bleach",
  label: "Bleach",
  emoji: "🗡️",
  gradient: "from-[#050505] via-[#5b5b5b] to-[#f5f5f5]",
  accentColor: "#050505",
  tags: ["Soul Reaper", "Zanpakuto", "Reiatsu"],
};

export const BLEACH_CONTENT_EN: ThemeContent = {
  questions: [
    {
      axis: "EI",
      prompt: "It is your first day in the Gotei 13, and the squad throws you a welcome party. You...",
      options: [
        { value: "E", label: "Introduce yourself loudly, toast everyone, and get close fast." },
        { value: "I", label: "Keep it brief, then watch the room quietly from the side." },
      ],
    },
    {
      axis: "EI",
      prompt: "On a mission in the Human World, which style fits you best?",
      options: [
        { value: "E", label: "Blend in with people, talk a lot, and investigate actively." },
        { value: "I", label: "Track the target quietly from rooftops and blind spots." },
      ],
    },
    {
      axis: "EI",
      prompt: "You finally learned Bankai. What do you do with that fact?",
      options: [
        { value: "E", label: "Tell close allies right away and challenge them to spar." },
        { value: "I", label: "Keep it hidden as a final card for a decisive crisis." },
      ],
    },
    {
      axis: "EI",
      prompt: "Your ideal day off in Rukongai looks like...",
      options: [
        { value: "E", label: "Joining a lively festival and jumping into everything happening." },
        { value: "I", label: "Sitting quietly with tea and listening to your Zanpakuto." },
      ],
    },
    {
      axis: "SN",
      prompt: "When you sense a powerful enemy reiatsu, what do you read first?",
      options: [
        { value: "S", label: "Distance, terrain, and the visible shape of their weapon." },
        { value: "N", label: "The nature of their pressure, hidden intent, and battle outcome." },
      ],
    },
    {
      axis: "SN",
      prompt: "Your captain says, \"Find the true name of your Zanpakuto.\" You...",
      options: [
        { value: "S", label: "Train with endless swings until body and blade move as one." },
        { value: "N", label: "Enter deep meditation and interpret the spirit's symbolism." },
      ],
    },
    {
      axis: "SN",
      prompt: "You have to navigate a maze-like Garganta. You...",
      options: [
        { value: "S", label: "Mark the route and rely on concrete direction cues." },
        { value: "N", label: "Follow the invisible flow of spiritual pressure by instinct." },
      ],
    },
    {
      axis: "SN",
      prompt: "When learning a new Kido spell, what is most satisfying?",
      options: [
        { value: "S", label: "Perfect chanting and proving output with precision." },
        { value: "N", label: "Twisting the theory into your own custom variation." },
      ],
    },
    {
      axis: "TF",
      prompt: "A comrade broke Soul Society law and faces execution. You...",
      options: [
        { value: "T", label: "Accept it coldly because order must hold." },
        { value: "F", label: "Risk yourself to save them because life comes first." },
      ],
    },
    {
      axis: "TF",
      prompt: "After defeating an enemy, they try to leave final words. You...",
      options: [
        { value: "T", label: "Finish the fight cleanly. Mercy in battle is a luxury." },
        { value: "F", label: "Hold back for a moment and hear their story." },
      ],
    },
    {
      axis: "TF",
      prompt: "A subordinate returns from a mission badly injured. Your first response is...",
      options: [
        { value: "T", label: "Send them to treatment, then analyze the cause immediately." },
        { value: "F", label: "Ask how they are and thank them for coming back alive." },
      ],
    },
    {
      axis: "TF",
      prompt: "You hear about Aizen's betrayal. Your mind goes first to...",
      options: [
        { value: "T", label: "His objective and how to fill the strategic gap." },
        { value: "F", label: "The emotional shock of that betrayal itself." },
      ],
    },
    {
      axis: "JP",
      prompt: "The night before a major Hueco Mundo expedition, you...",
      options: [
        { value: "J", label: "Check supplies, medicine, and the battle map until everything is clear." },
        { value: "P", label: "Trust the field, grab your blade, and rest early." },
      ],
    },
    {
      axis: "JP",
      prompt: "If captain-level paperwork piles up on your desk, you...",
      options: [
        { value: "J", label: "Make a morning plan and process it in clean order." },
        { value: "P", label: "Delay it, then finish all of it in one explosive burst." },
      ],
    },
    {
      axis: "JP",
      prompt: "Unexpected reinforcements join the enemy mid-battle. You...",
      options: [
        { value: "J", label: "Switch to plan B and issue clear commands immediately." },
        { value: "P", label: "Adapt on the fly and exploit the new opening." },
      ],
    },
    {
      axis: "JP",
      prompt: "For the Soul Reaper Association meeting, when do you arrive?",
      options: [
        { value: "J", label: "Ten minutes early, already reviewing the material." },
        { value: "P", label: "After it starts, with an excuse ready on the spot." },
      ],
    },
  ],
  results: {
    ISTJ: {
      name: "Byakuya Kuchiki",
      desc: "A principled aristocrat who values law and pride above all.",
      longDesc: "Byakuya reflects ISTJ discipline at its sharpest. He puts order, duty, and inherited responsibility ahead of personal emotion, and his restraint becomes the backbone of his authority.",
      episodeNote: "Core line: \"If those who uphold the law break it, who will protect it?\"",
    },
    INTJ: {
      name: "Sosuke Aizen",
      desc: "A long-range strategist who designs the board itself.",
      longDesc: "Aizen is an INTJ built around future control. He reads systems, hides intent, and moves people like pieces toward a distant goal without emotional hesitation.",
      episodeNote: "Core line: \"I will stand in the heavens.\"",
    },
    INFJ: {
      name: "Gin Ichimaru",
      desc: "A quiet schemer whose smile hides one immense truth.",
      longDesc: "Gin fits INFJ through layered motives, emotional secrecy, and long-term sacrifice. He reads people well and can bury his real purpose under a mask for years.",
      episodeNote: "Core line: \"Tomorrow you will become a snake and begin eating people.\"",
    },
    INTP: {
      name: "Kisuke Urahara",
      desc: "A curious genius who turns ideas into reality.",
      longDesc: "Urahara embodies INTP inventiveness. He is driven less by status than by puzzles, mechanisms, and the thrill of finding an elegant answer no one else can see.",
      episodeNote: "Core line: \"Prepare a thousand times, execute once.\"",
    },
    ISTP: {
      name: "Renji Abarai",
      desc: "A practical fighter who grows through direct action.",
      longDesc: "Renji is an ISTP who learns by doing, failing, and sharpening. He trusts repetition, instinct, and battle-tested growth more than polished theory.",
      episodeNote: "Core line: \"Light my soul on fire. Roar, Zabimaru!\"",
    },
    ISFP: {
      name: "Yasutora Sado",
      desc: "A quiet protector whose strength serves what matters most.",
      longDesc: "Chad matches ISFP through calm presence, deep loyalty, and action rooted in personal values. He does not need to speak much for his convictions to be clear.",
      episodeNote: "Core line: \"I swore to use my fists for you.\"",
    },
    INFP: {
      name: "Rukia Kuchiki",
      desc: "A delicate idealist with quiet moral strength.",
      longDesc: "Rukia carries the INFP pattern of inner values, guilt, and sacrifice. She feels deeply, judges herself harshly, and still steps forward when others need hope.",
      episodeNote: "Core line: \"People die by entrusting their hearts to someone.\"",
    },
    ISFJ: {
      name: "Retsu Unohana",
      desc: "A gentle healer with hidden steel and discipline.",
      longDesc: "Unohana reflects ISFJ care fused with duty. Her warmth protects others, but beneath it sits a powerful commitment to role, order, and responsibility.",
      episodeNote: "Core line: \"Healing should be quiet. Battle should be fierce.\"",
    },
    ESTP: {
      name: "Kenpachi Zaraki",
      desc: "A pure combat instinct who lives for the clash.",
      longDesc: "Kenpachi is ESTP in raw form: immediate action, physical intensity, and joy in testing himself against stronger opposition. He trusts the moment over the plan.",
      episodeNote: "Core line: \"The only thing that matters is the joy of cutting.\"",
    },
    ESFP: {
      name: "Ichigo Kurosaki",
      desc: "A fiery protector who runs straight toward the people he must save.",
      longDesc: "Ichigo fits ESFP through emotional immediacy, courage, and visible commitment. He responds to what is happening right now and throws himself fully into protecting others.",
      episodeNote: "Core line: \"I only want to protect the peace within my reach.\"",
    },
    ENFP: {
      name: "Rangiku Matsumoto",
      desc: "A free spirit who brightens the room and feels people deeply.",
      longDesc: "Rangiku brings classic ENFP warmth: social ease, emotional awareness, and a light exterior that still holds deep concern for the people close to her.",
      episodeNote: "Core line: \"Sometimes enjoying life like this is exactly the point.\"",
    },
    ENFJ: {
      name: "Shinji Hirako",
      desc: "An unconventional leader who reads people and guides the group.",
      longDesc: "Shinji shows ENFJ leadership through social intuition and flexible influence. Even when he looks casual, he is tracking the room and holding people together.",
      episodeNote: "Core line: \"In an upside-down world, I'm the one still standing straight.\"",
    },
    ESTJ: {
      name: "Genryusai Yamamoto",
      desc: "The embodiment of rank, order, and command authority.",
      longDesc: "Yamamoto represents ESTJ structure at full scale. He preserves the system through force of will, clear hierarchy, and an unshakable belief in discipline.",
      episodeNote: "Core line: \"My presence itself is Soul Society's law.\"",
    },
    ENTJ: {
      name: "Yoruichi Shihoin",
      desc: "A decisive commander with speed, strategy, and presence.",
      longDesc: "Yoruichi fits ENTJ through bold leadership and immediate execution. She reads the field quickly, assigns roles naturally, and pushes people toward power efficiently.",
      episodeNote: "Core line: \"Follow me. I'll show you how to gain real power.\"",
    },
    ENTP: {
      name: "Mayuri Kurotsuchi",
      desc: "A disruptive innovator who treats convention as a toy.",
      longDesc: "Mayuri is ENTP in his most dangerous form: fascinated by experimentation, eager to challenge assumptions, and always looking for a more extreme idea to test.",
      episodeNote: "Core line: \"Perfection is despair to a scientist.\"",
    },
    ESFJ: {
      name: "Orihime Inoue",
      desc: "A wholehearted caretaker who wants everyone to come back smiling.",
      longDesc: "Orihime reflects ESFJ warmth, visible concern, and protective devotion. Her strength exists to shield, heal, and keep human connection intact.",
      episodeNote: "Core line: \"I want everyone to return together, smiling.\"",
    },
  },
};
