/**
 * Marcus Aurelius, Meditations (명상록). English passages are verbatim excerpts from
 * George Long's translation (public domain; Project Gutenberg eBook #15877,
 * "Thoughts of Marcus Aurelius Antoninus"). "…" marks a cut. Korean renderings are ours.
 * Section numbers follow Long (the standard modern numbering).
 */

export type Passage = { ref: string; en: string; ko: string };

export type MedBook = {
  n: number;
  title: string;
  en: string;
  summary: string;
  themes: string[];
  context: string;
  passages: Passage[];
  today: string;
};

export const MED_BOOKS: MedBook[] = [
  {
    n: 1, title: "고마운 사람들", en: "Debts and lessons",
    summary: "가족과 스승에게서 무엇을 배웠는지 한 사람씩 적은 감사 목록입니다. 할아버지, 어머니, 스승 루스티쿠스, 아폴로니오스, 섹스투스, 그리고 양아버지 안토니누스 피우스가 나옵니다. 마지막은 신들에게 감사하는 글입니다.",
    themes: ["감사", "본받을 사람", "겸손"],
    context: "1권 끝에 ‘콰디족 땅, 그라누아 강가에서’라는 한 줄이 있습니다. 도나우 강 북쪽 콰디족과 싸우던 170년대 전쟁 중이라는 뜻입니다. 옛 판본에서는 이 줄이 2권 첫머리에 붙어 있기도 합니다.",
    passages: [
      { ref: "1.7", en: "From Rusticus I received the impression that my character required improvement and discipline", ko: "루스티쿠스에게서, 내 성품은 고치고 다듬어야 한다는 것을 깨달았다." },
      { ref: "1.7", en: "I am indebted to him for being acquainted with the discourses of Epictetus", ko: "에픽테토스의 강의를 알게 된 것도 그 덕분이다." },
      { ref: "1.8", en: "to be always the same, in sharp pains, on the occasion of the loss of a child, and in long illness", ko: "심한 고통 속에서도, 아이를 잃었을 때도, 오랜 병 속에서도 늘 같은 사람으로 있는 것." },
      { ref: "1.17", en: "To the gods I am indebted for having good grandfathers, good parents, a good sister, good teachers, good associates, good kinsmen and friends, nearly everything good.", ko: "좋은 조부모, 좋은 부모, 좋은 누이, 좋은 스승, 좋은 동료와 친척과 친구. 거의 모든 좋은 것을 나는 신들에게 빚졌다." },
    ],
    today: "오늘 나에게 무언가를 가르쳐 준 사람 한 명과, 배운 것 한 줄을 적어 보세요.",
  },
  {
    n: 2, title: "아침의 다짐", en: "Morning resolve",
    summary: "‘오늘 나는 무례한 사람을 만날 것이다’로 시작합니다. 그래도 그들은 나와 같은 이성을 나눈 형제이니 화내지 말자고 다짐합니다. 삶은 짧고, 지금 이 순간만이 우리가 잃을 수 있는 것이라는 생각이 이어집니다.",
    themes: ["다른 사람 대하기", "시간의 짧음", "지금 이 순간"],
    context: "2권 끝에 ‘이것은 카르눈툼에서’라고 적혀 있습니다. 카르눈툼은 도나우 강가의 로마 군단 기지(지금의 오스트리아)입니다. 마르코만니 전쟁 때 황제가 머문 본부였습니다.",
    passages: [
      { ref: "2.1", en: "Begin the morning by saying to thyself, I shall meet with the busybody, the ungrateful, arrogant, deceitful, envious, unsocial.", ko: "아침에 스스로에게 말하라. 오늘 나는 참견하는 사람, 고마움을 모르는 사람, 거만한 사람, 속이는 사람, 시기하는 사람, 어울리지 못하는 사람을 만날 것이다." },
      { ref: "2.11", en: "Since it is possible that thou mayest depart from life this very moment, regulate every act and thought accordingly.", ko: "바로 지금 삶을 떠날 수도 있으니, 모든 행동과 생각을 그에 맞추어라." },
      { ref: "2.14", en: "no man loses any other life than this which he now lives, nor lives any other than this which he now loses.", ko: "누구도 지금 사는 이 삶 말고 다른 삶을 잃지 않고, 지금 잃어 가는 이 삶 말고 다른 삶을 살지 않는다." },
      { ref: "2.17", en: "Of human life the time is a point, and the substance is in a flux", ko: "사람의 삶에서 시간은 한 점이고, 몸은 흘러가는 물과 같다." },
    ],
    today: "출근길에 ‘오늘 짜증 나는 사람을 만날 수 있다’고 미리 말해 두세요. 만났을 때 덜 놀랍니다.",
  },
  {
    n: 3, title: "남은 시간", en: "The time that is left",
    summary: "나이가 들면 판단력이 먼저 무너질 수 있으니 서두르라고 말합니다. 남의 일을 궁금해하며 시간을 버리지 말고, 지금 앞에 있는 일을 이성에 따라 차분히 하라고 합니다.",
    themes: ["서두름", "남의 일에 휘둘리지 않기", "지금 할 일"],
    context: "2권 끝의 ‘카르눈툼에서’라는 줄은 옛 판본에서 3권 머리에 붙어 있습니다. 그래서 3권도 카르눈툼에서 쓴 것으로 소개되곤 합니다. 정확히 어느 권이 어디서 쓰였는지는 확실하지 않습니다.",
    passages: [
      { ref: "3.4", en: "Do not waste the remainder of thy life in thoughts about others, when thou dost not refer thy thoughts to some object of common utility.", ko: "모두에게 쓸모 있는 일과 관계없다면, 남은 삶을 남에 대한 생각으로 허비하지 마라." },
      { ref: "3.10", en: "every man lives only this present time, which is an indivisible point", ko: "사람은 누구나 지금 이 시간, 나눌 수 없는 한 점만을 산다." },
      { ref: "3.12", en: "If thou workest at that which is before thee, following right reason seriously, vigorously, calmly, without allowing anything else to distract thee", ko: "눈앞의 일을 바른 이성에 따라, 진지하고 힘 있고 차분하게, 다른 것에 흔들리지 않고 해 나간다면" },
    ],
    today: "SNS에서 남의 소식을 확인하기 전에, 지금 하던 일 하나를 먼저 끝내 보세요.",
  },
  {
    n: 4, title: "마음속 쉼터", en: "The inner retreat",
    summary: "가장 긴 권 가운데 하나입니다. 시골 별장이나 바닷가로 쉬러 가지 않아도, 언제든 내 마음 안으로 물러날 수 있다고 합니다. 상처는 일 자체가 아니라 내 판단에서 온다는 것, 죽음은 가까이 있으니 지금 좋은 사람이 되라는 것이 이어집니다.",
    themes: ["마음속 쉼", "판단이 상처를 만든다", "죽음 기억하기"],
    context: "쓴 곳은 적혀 있지 않습니다. 대체로 170년대 전쟁 시기로 봅니다.",
    passages: [
      { ref: "4.3", en: "it is in thy power whenever thou shalt choose to retire into thyself.", ko: "네가 원할 때면 언제든 너 자신 안으로 물러날 수 있다." },
      { ref: "4.7", en: "Take away thy opinion, and then there is taken away the complaint, \"I have been harmed.\" Take away the complaint, \"I have been harmed,\" and the harm is taken away.", ko: "네 생각을 치워라. 그러면 ‘나는 해를 입었다’는 불평이 사라진다. 그 불평을 치워라. 그러면 해도 사라진다." },
      { ref: "4.17", en: "Do not act as if thou wert going to live ten thousand years. Death hangs over thee. While thou livest, while it is in thy power, be good.", ko: "만 년을 살 것처럼 행동하지 마라. 죽음이 네 위에 걸려 있다. 살아 있는 동안, 할 수 있는 동안 선하게 살아라." },
      { ref: "4.49", en: "Be like the promontory against which the waves continually break, but it stands firm and tames the fury of the water around it.", ko: "파도가 끝없이 부딪쳐도 꿋꿋이 서서 주위의 성난 물을 잠재우는 곶처럼 되어라." },
    ],
    today: "억울한 일이 생기면 ‘일어난 일’과 ‘내가 붙인 판단’을 두 줄로 나눠 적어 보세요.",
  },
  {
    n: 5, title: "이불 밖으로", en: "Getting up",
    summary: "아침에 일어나기 싫은 마음과 싸우는 장면으로 시작합니다. 나는 사람의 일을 하려고 태어났지, 이불 속에서 따뜻하려고 태어나지 않았다고 말합니다. 마음은 늘 하는 생각에 물든다는 말도 이 권에 있습니다.",
    themes: ["일의 의미", "습관이 된 생각", "보답을 바라지 않는 선행"],
    context: "쓴 곳은 적혀 있지 않습니다.",
    passages: [
      { ref: "5.1", en: "In the morning when thou risest unwillingly, let this thought be present,--I am rising to the work of a human being.", ko: "아침에 일어나기 싫을 때 이 생각을 떠올려라. 나는 사람의 일을 하러 일어난다." },
      { ref: "5.16", en: "Such as are thy habitual thoughts, such also will be the character of thy mind; for the soul is dyed by the thoughts.", ko: "늘 하는 생각이 곧 네 마음의 모양이 된다. 영혼은 생각으로 물들기 때문이다." },
      { ref: "5.6", en: "he is like a vine which has produced grapes, and seeks for nothing more after it has once produced its proper fruit.", ko: "그는 포도를 맺고 나서 더 바라는 것이 없는 포도나무와 같다." },
    ],
    today: "알람이 울리면 ‘오늘 내가 할 사람의 일’ 하나를 떠올리고 일어나 보세요.",
  },
  {
    n: 6, title: "황제가 되지 않기", en: "Not becoming a Caesar",
    summary: "가장 좋은 복수는 나에게 잘못한 사람처럼 되지 않는 것이라고 말합니다. 고기와 포도주와 자줏빛 옷을 ‘죽은 물고기, 포도즙, 조개 피로 물들인 양털’로 다시 보는 연습도 나옵니다. 권력에 물들지 말라는 경고가 황제 자신에게 향합니다.",
    themes: ["복수하지 않기", "있는 그대로 보기", "공동체"],
    context: "쓴 곳은 적혀 있지 않습니다.",
    passages: [
      { ref: "6.6", en: "The best way of avenging thyself is not to become like [the wrong-doer].", ko: "가장 좋은 복수는 [잘못한 사람]처럼 되지 않는 것이다." },
      { ref: "6.13", en: "this purple robe some sheep's wool dyed with the blood of a shell-fish", ko: "이 자줏빛 옷은 조개의 피로 물들인 양털일 뿐이다." },
      { ref: "6.30", en: "Take care that thou art not made into a Caesar, that thou art not dyed with this dye", ko: "카이사르(황제)로 변해 버리지 않도록, 그 물감에 물들지 않도록 조심하라." },
      { ref: "6.54", en: "That which is not good for the swarm, neither is it good for the bee.", ko: "벌 떼에 좋지 않은 것은 벌 한 마리에게도 좋지 않다." },
    ],
    today: "누가 무례하게 굴면, 같은 말투로 되갚지 않는 것 하나만 지켜 보세요.",
  },
  {
    n: 7, title: "안을 파라", en: "Dig within",
    summary: "짧은 문장이 많은 권입니다. 좋은 것의 샘은 내 안에 있다는 것, 미래를 미리 걱정하지 말라는 것, 잘못한 사람도 사랑하는 것이 사람만의 일이라는 것을 말합니다. 하루하루를 마지막 날처럼 살라는 말도 여기에 있습니다.",
    themes: ["내면", "미래 걱정", "용서"],
    context: "쓴 곳은 적혀 있지 않습니다.",
    passages: [
      { ref: "7.8", en: "Let not future things disturb thee, for thou wilt come to them, if it shall be necessary, having with thee the same reason which now thou usest for present things.", ko: "미래 일로 흔들리지 마라. 그때가 오면 지금 쓰는 그 이성을 들고 맞이하게 될 것이다." },
      { ref: "7.22", en: "It is peculiar to man to love even those who do wrong.", ko: "잘못한 사람까지 사랑하는 것은 사람만이 할 수 있는 일이다." },
      { ref: "7.59", en: "Look within. Within is the fountain of good, and it will ever bubble up, if thou wilt ever dig.", ko: "안을 보라. 안에 좋은 것의 샘이 있다. 계속 파면 계속 솟아오른다." },
      { ref: "7.69", en: "The perfection of moral character consists in this, in passing every day as the last", ko: "성품의 완성은 하루하루를 마지막 날처럼 보내는 데 있다." },
    ],
    today: "내일 걱정이 크면, ‘그때도 지금의 나와 같은 머리로 생각하면 된다’고 적고 잠드세요.",
  },
  {
    n: 8, title: "판단은 지울 수 있다", en: "Wipe out the judgment",
    summary: "나를 괴롭히는 것은 바깥 일이 아니라 그 일에 대한 내 판단이고, 그 판단은 지금 지울 수 있다고 합니다. 삶 전체를 한꺼번에 걱정하지 말고 지금 견딜 만한지만 물으라고 합니다. 마음은 무너지지 않는 성채라는 비유가 나옵니다.",
    themes: ["판단", "한 번에 하나씩", "사람은 서로를 위해"],
    context: "쓴 곳은 적혀 있지 않습니다.",
    passages: [
      { ref: "8.47", en: "If thou art pained by any external thing, it is not this thing that disturbs thee, but thy own judgment about it. And it is in thy power to wipe out this judgment now.", ko: "바깥의 무엇 때문에 괴롭다면, 너를 흔드는 것은 그것이 아니라 그것에 대한 네 판단이다. 그리고 그 판단은 지금 지울 수 있다." },
      { ref: "8.36", en: "Do not disturb thyself by thinking of the whole of thy life.", ko: "삶 전체를 생각하며 스스로를 흔들지 마라." },
      { ref: "8.48", en: "the mind which is free from passions is a citadel", ko: "격정에서 자유로운 마음은 성채다." },
      { ref: "8.59", en: "Men exist for the sake of one another. Teach them then, or bear with them.", ko: "사람은 서로를 위해 있다. 그러니 가르치거나, 참아 주어라." },
    ],
    today: "큰일이 몰려오면 ‘지금 이 한 시간은 견딜 만한가?’만 물어보세요.",
  },
  {
    n: 9, title: "무엇을 기도할까", en: "What to pray for",
    summary: "일이 일어나지 않게 해 달라고 빌기보다, 그 일을 두려워하지 않는 힘을 달라고 빌라고 합니다. 뻔뻔한 사람을 보면 ‘세상에 뻔뻔한 사람이 없을 수 있는가’ 물어보라고 합니다. 플라톤의 이상 국가를 바라지 말고 작은 진전에 만족하라는 말도 있습니다.",
    themes: ["기도", "있을 수 없는 것을 요구하지 않기", "작은 진전"],
    context: "쓴 곳은 적혀 있지 않습니다.",
    passages: [
      { ref: "9.40", en: "why dost thou not pray for them to give thee the faculty of not fearing any of the things which thou fearest", ko: "왜 신들에게, 네가 두려워하는 것을 두려워하지 않는 힘을 달라고 빌지 않는가?" },
      { ref: "9.42", en: "Is it possible, then, that shameless men should not be in the world? It is not possible. Do not, then, require what is impossible.", ko: "세상에 뻔뻔한 사람이 없을 수 있는가? 없을 수 없다. 그러니 불가능한 것을 요구하지 마라." },
      { ref: "9.29", en: "nor yet expect Plato's Republic", ko: "플라톤의 이상 국가를 기대하지도 마라." },
    ],
    today: "‘이런 일이 안 생기면 좋겠다’ 대신 ‘생겨도 덜 흔들리게 해 달라’로 바꿔 말해 보세요.",
  },
  {
    n: 10, title: "말하지 말고 되어라", en: "Be, don't discuss",
    summary: "좋은 사람이 어떠해야 하는지 더 이야기하지 말고 그냥 그런 사람이 되라고 합니다. 칭찬하는 사람도 욕하는 사람도 모두 떨어지는 나뭇잎 같다고 합니다. 좋은 이름을 붙였으면 그 이름을 지키라는 말도 있습니다.",
    themes: ["실천", "칭찬과 비난", "이름에 맞게 살기"],
    context: "쓴 곳은 적혀 있지 않습니다.",
    passages: [
      { ref: "10.16", en: "No longer talk at all about the kind of man that a good man ought to be, but be such.", ko: "좋은 사람은 어떠해야 하는지 더는 말하지 말고, 그런 사람이 되어라." },
      { ref: "10.34", en: "Leaves, also, are thy children; and leaves, too, are they who cry out as if they were worthy of credit and bestow their praise", ko: "네 아이들도 나뭇잎이고, 믿을 만한 척 소리치며 칭찬하는 사람들도 나뭇잎이다." },
      { ref: "10.8", en: "if thou shouldst lose them, quickly return to them.", ko: "그 이름들을 잃었다면, 빨리 다시 돌아가라." },
    ],
    today: "‘좋은 사람 되기’ 계획을 세우는 대신, 오늘 할 수 있는 친절 하나를 지금 하세요.",
  },
  {
    n: 11, title: "잘린 가지", en: "The cut branch",
    summary: "이성적인 영혼은 자기를 보고 다듬는다고 말합니다. 남을 미워하면 이웃에게서 떨어져 나간 가지처럼 공동체 전체에서 떨어진다고 합니다. 누가 나를 화나게 했을 때 떠올릴 생각들을 하나씩 셉니다.",
    themes: ["공동체", "분노 다스리기", "이성적 영혼"],
    context: "쓴 곳은 적혀 있지 않습니다.",
    passages: [
      { ref: "11.1", en: "These are the properties of the rational soul: it sees itself, analyzes itself, and makes itself such as it chooses", ko: "이성적 영혼의 성질은 이것이다. 자기를 보고, 자기를 살피고, 스스로 고른 모습으로 자기를 만든다." },
      { ref: "11.8", en: "A branch cut off from the adjacent branch must of necessity be cut off from the whole tree also.", ko: "옆 가지에서 잘린 가지는 나무 전체에서도 잘려 나갈 수밖에 없다." },
      { ref: "11.18", en: "What is my relation to men, and that we are made for one another", ko: "나는 사람들과 어떤 관계인가. 우리는 서로를 위해 만들어졌다." },
    ],
    today: "누군가와 사이가 틀어졌다면, 먼저 한 문장으로 연락해 보세요. 가지는 다시 붙을 수 있다고 그도 말합니다(11.8).",
  },
  {
    n: 12, title: "무대에서 내려오기", en: "Leaving the stage",
    summary: "마지막 권입니다. 사람은 자기를 가장 사랑하면서도 남의 평가를 더 무겁게 여긴다고 꼬집습니다. 끝없는 시간 속에서 내 몫이 얼마나 작은지 돌아보고, 마지막에는 배우를 무대에서 내보내는 비유로 죽음을 받아들입니다.",
    themes: ["남의 시선", "작음", "죽음 받아들이기"],
    context: "쓴 곳은 적혀 있지 않습니다. 이 책은 처음부터 열두 권으로 나뉘어 있었는지도 확실하지 않습니다.",
    passages: [
      { ref: "12.4", en: "every man loves himself more than all the rest of men, but yet sets less value on his own opinion of himself than on the opinion of others.", ko: "사람은 누구나 다른 누구보다 자기를 사랑하면서도, 자기에 대한 자기 생각보다 남의 생각을 더 무겁게 여긴다." },
      { ref: "12.32", en: "How small a part of the boundless and unfathomable time is assigned to every man", ko: "끝없고 헤아릴 수 없는 시간 가운데, 사람마다 받은 몫은 얼마나 작은가." },
      { ref: "12.36", en: "the same as if a praetor who has employed an actor dismisses him from the stage.", ko: "배우를 고용한 관리가 그를 무대에서 내보내는 것과 같다." },
    ],
    today: "남의 평가가 신경 쓰이면, 내가 나를 어떻게 보는지 먼저 한 줄로 적어 보세요.",
  },
];

export const TEACHERS: { name: string; en: string; ref: string; note: string; href?: string }[] = [
  { name: "에픽테토스", en: "Epictetus", ref: "1.7", note: "노예 출신 스토아 철학자. 직접 만나지는 않았습니다. 루스티쿠스가 빌려준 강의록으로 읽었습니다.", href: "https://philosophy-stories.vercel.app/people/epictetus" },
  { name: "루스티쿠스", en: "Junius Rusticus", ref: "1.7", note: "스토아 스승. 수사학보다 철학으로 이끌었습니다." },
  { name: "아폴로니오스", en: "Apollonius", ref: "1.8", note: "스토아 스승. 고통 속에서도 같은 사람으로 있는 법." },
  { name: "섹스투스", en: "Sextus of Chaeronea", ref: "1.9", note: "플루타르코스의 조카로 전합니다. 자연에 따라 사는 법." },
  { name: "디오그네토스", en: "Diognetus", ref: "1.6", note: "어릴 적 스승. 철학과 소박한 생활을 처음 보여 줌." },
  { name: "프론토", en: "Fronto", ref: "1.11", note: "수사학 스승. 편지가 많이 남아 있습니다." },
  { name: "막시무스", en: "Claudius Maximus", ref: "1.15", note: "스토아 철학자. 늘 쾌활하고 서두르지 않는 사람." },
  { name: "안토니누스 피우스", en: "Antoninus Pius", ref: "1.16", note: "양아버지이자 앞선 황제. 1권에서 가장 길게 칭찬하는 사람." },
];

export const QUIZ: { q: string; options: string[]; answer: number; why: string }[] = [
  { q: "『명상록』은 원래 어떤 언어로 쓰였을까요?", options: ["라틴어", "그리스어", "이집트어"], answer: 1, why: "로마 황제였지만 철학은 그리스어로 썼습니다. 원래 제목은 ‘자기 자신에게’로 전합니다." },
  { q: "이 책은 누구에게 보여 주려고 쓴 글일까요?", options: ["원로원", "백성", "자기 자신"], answer: 2, why: "자기를 다잡기 위한 메모입니다. 출판하려던 책이 아닙니다." },
  { q: "1권 끝에 적힌 장소는?", options: ["콰디족 땅 그라누아 강가", "로마 콜로세움", "아테네"], answer: 0, why: "도나우 강 북쪽 전쟁터입니다(1권 끝)." },
  { q: "2권 끝에 적힌 장소 카르눈툼은 어디일까요?", options: ["이집트의 항구", "도나우 강가의 군단 기지", "로마의 궁전"], answer: 1, why: "지금의 오스트리아에 있던 로마 기지입니다." },
  { q: "마르쿠스가 에픽테토스의 강의를 알게 된 것은 누구 덕분일까요?", options: ["프론토", "루스티쿠스", "콤모두스"], answer: 1, why: "1.7에 적혀 있습니다." },
  { q: "‘가장 좋은 복수는 ○○○ 되지 않는 것’(6.6). 빈칸은?", options: ["부자가", "잘못한 사람처럼", "황제가"], answer: 1, why: "되갚지 말고, 그 사람과 닮지 말라는 뜻입니다." },
  { q: "4.49에서 마르쿠스는 자신을 무엇에 비유하자고 할까요?", options: ["파도를 맞는 곶", "날아가는 새", "타오르는 불"], answer: 0, why: "파도가 부딪쳐도 서 있는 바위 곶입니다." },
  { q: "스토아에서 ‘내 힘 안에 있는 것’은?", options: ["날씨", "남의 평가", "내 판단"], answer: 2, why: "에픽테토스의 구분입니다. 판단과 선택은 내 몫입니다." },
];

export const STOIC_BASICS: { title: string; body: string }[] = [
  { title: "내 힘 안의 것, 밖의 것", body: "판단, 선택, 욕구는 내 몫이고 몸, 재산, 평판, 날씨는 아닙니다. 걱정은 내 몫인 것에만 쓰라는 것이 출발점입니다. 에픽테토스의 『편람』 1장이 가장 유명한 정리입니다." },
  { title: "덕만이 좋은 것", body: "지혜, 정의, 용기, 절제. 스토아는 이 덕만이 참으로 좋고, 돈이나 건강은 ‘좋지도 나쁘지도 않은 것’이라고 봅니다. 그래도 고를 수 있으면 고르는 편이 낫다고 합니다." },
  { title: "판단이 감정을 만든다", body: "일 자체가 아니라 그 일에 대한 판단이 괴로움을 만든다고 봅니다(명상록 4.7, 8.47). 판단을 바꾸면 감정도 바뀝니다." },
  { title: "자연(이성)에 따라 살기", body: "세계에는 질서(로고스)가 있고, 사람은 그 이성을 나눠 가졌다고 봅니다. 그래서 모든 사람은 서로 형제이고, 함께 일하도록 태어났다고 합니다(2.1)." },
  { title: "죽음 기억하기", body: "삶이 짧다는 것을 자주 떠올려, 지금 할 일을 미루지 않게 합니다(4.17, 7.69). 슬퍼하라는 것이 아니라 서두르라는 것입니다." },
  { title: "스토아의 흐름", body: "기원전 300년 무렵 아테네의 제논이 ‘채색 주랑(스토아)’에서 가르쳐서 이름이 붙었습니다. 로마 시대에는 세네카, 에픽테토스, 마르쿠스 아우렐리우스가 대표입니다." },
];
