/**
 * Netflix docudrama "Roman Empire" (2016–2019). Full spoilers on purpose.
 * Checked 2026-10-12: English titles = en.wikipedia "Roman Empire (TV series)";
 * Korean titles = netflix.com/kr/title/80096545 (Netflix KR lists the show as "로마 제국").
 * Plots follow the en.wikipedia summaries plus the main ancient sources the show narrates.
 */

export type Truth = "real" | "dramatized" | "fictional";

export type Person = {
  ko: string;
  en: string;
  /** family-tree node id, if the person is in the tree */
  tree?: string;
  /** ruler page slug on this site */
  ruler?: string;
  note: string;
};

export const PEOPLE = {
  commodus: { ko: "콤모두스", en: "Commodus", tree: "commodus", note: "180–192년 황제. 검투사로 직접 나선 황제." },
  marcus: { ko: "마르쿠스 아우렐리우스", en: "Marcus Aurelius", tree: "marcus", ruler: "marcus-aurelius", note: "콤모두스의 아버지. 180년 병으로 죽습니다." },
  faustina: { ko: "소 파우스티나", en: "Faustina the Younger", tree: "faustina-younger", note: "콤모두스의 어머니." },
  lucilla: { ko: "루킬라", en: "Lucilla", tree: "lucilla", note: "콤모두스의 누나. 182년 암살 음모." },
  crispina: { ko: "브루티아 크리스피나", en: "Bruttia Crispina", note: "콤모두스의 아내. 자식 없이 쫓겨납니다." },
  cleander: { ko: "클레안데르", en: "Cleander", note: "해방 노예 출신 측근. 190년 처형." },
  saoterus: { ko: "사오테루스", en: "Saoterus", note: "콤모두스의 시종이자 연인으로 전하는 사람." },
  marcia: { ko: "마르키아", en: "Marcia", note: "콤모두스의 정부. 암살에 가담합니다." },
  narcissus: { ko: "나르키소스", en: "Narcissus", note: "레슬링 선수. 콤모두스를 목 졸라 죽입니다." },
  dio: { ko: "카시우스 디오", en: "Cassius Dio", note: "원로원 의원이자 역사가. 이 시즌의 증인." },
  cassius: { ko: "아비디우스 카시우스", en: "Avidius Cassius", note: "175년 동방에서 황제를 자칭한 장군." },
  caesar: { ko: "율리우스 카이사르", en: "Julius Caesar", tree: "caesar", note: "공화정의 장군·독재관. 황제는 아닙니다." },
  crassus: { ko: "크라수스", en: "Crassus", note: "로마 최고 부자. 기원전 53년 카르하이에서 전사." },
  pompey: { ko: "폼페이우스", en: "Pompey", tree: "pompey", note: "카이사르의 사위였다가 적이 됩니다." },
  julia: { ko: "율리아", en: "Julia", tree: "julia-daughter", note: "카이사르의 딸, 폼페이우스의 아내. 기원전 54년 사망." },
  spartacus: { ko: "스파르타쿠스", en: "Spartacus", note: "노예 반란의 지도자. 기원전 71년 패배." },
  vercingetorix: { ko: "베르킨게토릭스", en: "Vercingetorix", note: "갈리아 연합의 지도자. 알레시아에서 항복." },
  cleopatra: { ko: "클레오파트라", en: "Cleopatra", tree: "cleopatra", note: "이집트 여왕. 카이사리온의 어머니." },
  antony: { ko: "마르쿠스 안토니우스", en: "Mark Antony", tree: "antony", note: "카이사르의 부하. 뒤에 클레오파트라와 손잡습니다." },
  brutus: { ko: "브루투스", en: "Brutus", note: "카이사르가 아낀 젊은이. 암살자." },
  servilia: { ko: "세르빌리아", en: "Servilia", note: "브루투스의 어머니, 카이사르의 연인." },
  cato: { ko: "카토", en: "Cato the Younger", note: "공화정의 고집 센 수호자. 기원전 46년 자결." },
  ptolemy: { ko: "프톨레마이오스 13세", en: "Ptolemy XIII", note: "클레오파트라의 남동생이자 공동 왕." },
  caligula: { ko: "칼리굴라", en: "Caligula", tree: "caligula", note: "37–41년 황제. 본명 가이우스." },
  tiberius: { ko: "티베리우스", en: "Tiberius", tree: "tiberius", ruler: "tiberius", note: "칼리굴라의 큰할아버지이자 양할아버지. 37년 사망." },
  claudius: { ko: "클라우디우스", en: "Claudius", tree: "claudius", ruler: "claudius", note: "칼리굴라의 삼촌. 다음 황제." },
  agrippina: { ko: "소 아그리피나", en: "Agrippina the Younger", tree: "agrippina-younger", note: "칼리굴라의 누이. 뒤에 네로의 어머니." },
  drusilla: { ko: "드루실라", en: "Drusilla", note: "칼리굴라가 가장 아낀 누이. 38년 사망." },
  livilla: { ko: "율리아 리빌라", en: "Julia Livilla", note: "막내 누이. 39년 유배." },
  gemellus: { ko: "티베리우스 게멜루스", en: "Tiberius Gemellus", note: "티베리우스의 손자. 공동 상속자." },
  macro: { ko: "마크로", en: "Macro", note: "근위대장. 세야누스의 뒤를 잇습니다." },
  sejanus: { ko: "세야누스", en: "Sejanus", note: "티베리우스의 근위대장. 31년 처형." },
  drusus: { ko: "드루수스 (티베리우스의 아들)", en: "Drusus Julius Caesar", note: "티베리우스의 친아들. 23년 사망." },
  chaerea: { ko: "카시우스 카이레아", en: "Cassius Chaerea", note: "근위대 장교. 칼리굴라를 죽입니다." },
  lepidus: { ko: "마르쿠스 레피두스", en: "Marcus Lepidus", note: "드루실라의 남편. 39년 음모로 처형." },
  caesonia: { ko: "카이소니아", en: "Caesonia", note: "칼리굴라의 마지막 아내." },
  germanicus: { ko: "게르마니쿠스", en: "Germanicus", tree: "germanicus", note: "칼리굴라의 아버지. 19년 사망." },
} satisfies Record<string, Person>;

export type PersonKey = keyof typeof PEOPLE;

export type Episode = {
  season: 1 | 2 | 3;
  ep: number;
  overall: number;
  en: string;
  ko: string;
  year: string;
  plot: string[];
  ending: string;
  history: { drama: string; real: string }[];
  cast: PersonKey[];
  scene: string;
};

export const EPISODES: Episode[] = [
  // Season 1: Reign of Blood (2016)
  {
    season: 1, ep: 1, overall: 1, en: "Born in the Purple", ko: "군주 세습", year: "161–180",
    plot: [
      "마르쿠스 아우렐리우스는 오현제의 마지막 황제입니다. 전 황제들과 달리 친아들 콤모두스를 후계자로 키웁니다. 누나 루킬라는 영리하지만 여자라서 황제가 될 수 없습니다.",
      "175년, 황제가 죽었다는 잘못된 소문이 돕니다. 동방 총독 아비디우스 카시우스가 황제를 자칭하고, 극은 어머니 파우스티나가 그를 밀었다고 보여 줍니다. 반란은 곧 무너집니다.",
    ],
    ending: "180년, 마르쿠스는 도나우 전선에서 병으로 죽습니다. 열여덟 살 콤모두스가 혼자 황제가 됩니다.",
    history: [
      { drama: "파우스티나가 카시우스의 반란을 도왔습니다.", real: "카시우스 디오가 전하는 소문입니다. 확실한 증거는 없고, 마르쿠스는 그녀를 끝까지 높였습니다." },
      { drama: "콤모두스는 ‘자줏빛 속에서 태어난’ 첫 황제입니다.", real: "재위 중인 황제에게서 태어나 자리를 이은 첫 황제라는 점은 사실입니다." },
    ],
    cast: ["marcus", "commodus", "lucilla", "faustina", "cassius", "dio"],
    scene: "병상의 마르쿠스가 아들에게 제국을 넘기는 장면. 해설은 이것을 ‘황금시대의 끝’이라 부릅니다.",
  },
  {
    season: 1, ep: 2, overall: 2, en: "The Making of an Emperor", ko: "즉위의 계단", year: "178–180",
    plot: [
      "콤모두스는 원로원 집안의 브루티아 크리스피나와 결혼합니다. 원로원과의 끈을 굳히려는 정략 결혼입니다.",
      "아버지가 죽자 측근 클레안데르와 사오테루스의 말을 듣고, 게르마니아 전쟁을 서둘러 끝내고 로마로 돌아갑니다.",
    ],
    ending: "콤모두스는 개선식처럼 로마에 들어옵니다. 마차에 사오테루스를 함께 태워 원로원을 화나게 합니다.",
    history: [
      { drama: "전쟁을 그냥 끝내고 돌아옵니다.", real: "콤모두스는 마르코만니 등과 평화 조약을 맺었습니다. 비싼 전쟁을 끝낸 현실적 선택으로 보는 학자도 있습니다." },
      { drama: "사오테루스가 마차에 함께 탑니다.", real: "『히스토리아 아우구스타』가 전하는 장면입니다. 이 책은 믿기 어려운 부분이 많습니다." },
    ],
    cast: ["commodus", "crispina", "cleander", "saoterus", "lucilla", "dio"],
    scene: "개선 마차 위의 콤모두스와 사오테루스. 원로원 의원들의 굳은 얼굴.",
  },
  {
    season: 1, ep: 3, overall: 3, en: "Enemy of the Senate", ko: "원로원과의 대립", year: "180–182",
    plot: [
      "콤모두스는 원로원에 세금을 걷어 검투 경기를 엽니다. 원로원은 분노합니다.",
      "루킬라는 황후 자리에서 밀려난 것에 화가 나서, 퀸티아누스 등과 동생을 죽일 음모를 꾸밉니다.",
    ],
    ending: "182년, 퀸티아누스가 칼을 들고 ‘원로원이 이것을 보낸다’고 외치다가 붙잡힙니다. 음모가 드러나고, 콤모두스는 원로원을 더 믿지 않게 됩니다.",
    history: [
      { drama: "암살 실패 장면.", real: "디오와 헤로디아누스가 전하는 사실입니다. 미리 소리친 탓에 경비가 막았다고 합니다." },
      { drama: "카시우스 디오가 원로원에서 지켜봅니다.", real: "디오는 이때 아직 젊었습니다. 원로원 의원이 된 것은 그 뒤입니다. 해설자 역할로 쓴 설정입니다." },
    ],
    cast: ["commodus", "lucilla", "dio", "crispina", "saoterus"],
    scene: "원형극장 통로에서 칼을 든 암살자가 너무 일찍 외치는 장면.",
  },
  {
    season: 1, ep: 4, overall: 4, en: "Rome is Burning", ko: "폭발하는 불만", year: "182–192",
    plot: [
      "콤모두스는 누나 루킬라를 카프리섬으로 유배 보내고, 뒤에 죽입니다. 아이를 낳지 못한 아내 크리스피나도 카프리로 쫓겨납니다.",
      "정치는 측근 클레안데르가 맡습니다. 그는 관직과 원로원 자리를 돈으로 팝니다. 콤모두스는 마르키아를 정부로 둡니다.",
      "곡물이 모자라자 로마 사람들은 클레안데르를 탓하며 들고 일어납니다.",
    ],
    ending: "190년, 콤모두스는 성난 군중에게 클레안데르의 머리를 내줍니다. 192년에는 큰불이 로마를 태웁니다.",
    history: [
      { drama: "클레안데르가 자리를 팝니다.", real: "디오는 그가 한 해에 집정관 25명을 세웠다고 씁니다. 사실로 받아들여집니다." },
      { drama: "루킬라와 크리스피나 모두 카프리로 갑니다.", real: "디오는 두 사람이 카프리로 유배되었다가 죽었다고 전합니다." },
    ],
    cast: ["commodus", "lucilla", "crispina", "cleander", "marcia", "dio"],
    scene: "곡물 폭동 속에서 클레안데르의 머리가 군중에게 던져지는 장면.",
  },
  {
    season: 1, ep: 5, overall: 5, en: "Fight for Glory", ko: "영광을 위한 싸움", year: "190–192",
    plot: [
      "콤모두스는 자신을 헤라클레스의 화신이라 부르고, 로마의 이름을 ‘콤모디아나’로 바꾸려 합니다.",
      "그는 레슬링 선수 나르키소스에게 훈련을 받고, 경기장에 검투사로 직접 나섭니다.",
    ],
    ending: "콤모두스는 원로원 의원들 앞에서 타조의 머리를 베어 들고 흔듭니다. 디오는 웃음이 터질까 봐 월계수 잎을 씹었다고 씁니다.",
    history: [
      { drama: "황제가 검투사로 싸웁니다.", real: "사실입니다. 디오가 직접 보았다고 씁니다. 상대는 대부분 무기를 제대로 못 든 사람이었다고 합니다." },
      { drama: "나르키소스가 훈련 상대입니다.", real: "나르키소스가 레슬링 상대였다는 것은 디오와 헤로디아누스가 전합니다." },
    ],
    cast: ["commodus", "narcissus", "marcia", "dio"],
    scene: "타조 머리를 든 황제와, 월계수 잎을 씹는 카시우스 디오.",
  },
  {
    season: 1, ep: 6, overall: 6, en: "14 Days of Blood", ko: "14일간의 사투", year: "192–193",
    plot: [
      "원로원은 언제 처형될지 몰라 떨고, 콤모두스는 14일 동안의 대경기에서 매일 싸웁니다.",
      "콤모두스가 새해에 검투사 옷을 입고 집정관이 되겠다고 하자, 마르키아와 측근들은 그를 죽이기로 합니다.",
    ],
    ending: "192년 12월 31일, 마르키아의 독이 듣지 않자 나르키소스가 목욕탕에서 콤모두스를 목 졸라 죽입니다. 다음 해 다섯 황제의 해가 시작됩니다. 디오는 살아남아 이 시대를 그리스어로 기록합니다.",
    history: [
      { drama: "독 다음 목 조르기.", real: "디오와 헤로디아누스가 같은 줄거리를 전합니다." },
      { drama: "나르키소스와 마르키아의 최후.", real: "193년 다음 황제들 아래에서 처형되었다고 전합니다(마르키아는 디디우스 율리아누스 때)." },
    ],
    cast: ["commodus", "marcia", "narcissus", "dio"],
    scene: "목욕탕에서 레슬링 상대가 황제를 쓰러뜨리는 마지막 장면.",
  },
  // Season 2: Julius Caesar: Master of Rome (2018)
  {
    season: 2, ep: 1, overall: 7, en: "The Triumvirate", ko: "삼두 정치", year: "기원전 71–59",
    plot: [
      "기원전 71년, 크라수스가 스파르타쿠스의 노예군을 무찌릅니다. 폼페이우스는 뒤늦게 와서 공을 나눠 갖습니다.",
      "빚더미의 젊은 정치가 카이사르는 크라수스의 돈과 폼페이우스의 명성을 묶어 비밀 동맹(삼두 정치)을 만듭니다. 딸 율리아를 폼페이우스와 결혼시킵니다.",
    ],
    ending: "기원전 59년 카이사르는 집정관이 되고, 다음에는 갈리아 총독 자리를 받습니다.",
    history: [
      { drama: "세 사람이 비밀 동맹을 맺습니다.", real: "사실입니다. 다만 ‘제1차 삼두 정치’라는 이름은 뒤의 역사가가 붙인 말입니다. 공식 관직이 아니었습니다." },
      { drama: "스파르타쿠스의 끝.", real: "크라수스가 6000명을 아피아 가도에 십자가형에 처했다고 아피아노스가 씁니다." },
    ],
    cast: ["caesar", "crassus", "pompey", "spartacus", "julia", "servilia", "cato"],
    scene: "아피아 가도에 끝없이 늘어선 십자가.",
  },
  {
    season: 2, ep: 2, overall: 8, en: "The Great Conqueror", ko: "위대한 정복자", year: "기원전 58–52",
    plot: [
      "카이사르는 갈리아에서 연이어 이깁니다. 베르킨게토릭스는 갈리아 부족을 하나로 묶어 맞섭니다.",
      "로마에서는 율리아가 죽고, 크라수스가 파르티아에서 전사합니다. 삼두 동맹의 끈이 풀립니다.",
    ],
    ending: "기원전 52년 알레시아. 카이사르는 성을 두 겹의 벽으로 에워싸고, 베르킨게토릭스는 무기를 내려놓습니다.",
    history: [
      { drama: "알레시아의 이중 포위.", real: "카이사르 자신의 『갈리아 전기』에 나옵니다. 숫자는 과장되었을 수 있습니다." },
      { drama: "베르킨게토릭스의 항복.", real: "그는 6년 동안 갇혀 있다가 기원전 46년 카이사르의 개선식 뒤 처형되었다고 전합니다." },
    ],
    cast: ["caesar", "vercingetorix", "pompey", "julia", "crassus", "antony"],
    scene: "말을 타고 와서 카이사르의 발 앞에 무기를 던지는 베르킨게토릭스.",
  },
  {
    season: 2, ep: 3, overall: 9, en: "Crossing the Rubicon", ko: "루비콘강을 건너다", year: "기원전 49–48",
    plot: [
      "원로원은 카이사르에게 군대를 내려놓으라고 합니다. 카이사르는 군대와 함께 루비콘강을 건넙니다. 내전입니다.",
      "로마 가까이에 군대가 없던 폼페이우스는 그리스로 가서 군대를 모읍니다.",
    ],
    ending: "기원전 48년 파르살루스. 수가 적은 카이사르가 폼페이우스를 이기고, 폼페이우스는 이집트로 달아납니다.",
    history: [
      { drama: "‘주사위는 던져졌다.’", real: "수에토니우스와 플루타르코스가 전하는 말입니다. 실제 말은 그리스어 속담이었다는 기록도 있습니다." },
      { drama: "파르살루스의 승리.", real: "사실입니다. 카이사르는 수가 절반 정도였다고 스스로 씁니다." },
    ],
    cast: ["caesar", "pompey", "antony", "cato", "brutus", "servilia"],
    scene: "강가에서 망설이다 말을 몰아 물을 건너는 카이사르.",
  },
  {
    season: 2, ep: 4, overall: 10, en: "Queen of the Nile", ko: "클레오파트라", year: "기원전 48–47",
    plot: [
      "알렉산드리아에 도착한 폼페이우스는 어린 왕 프톨레마이오스 13세의 신하들에게 죽습니다. 카이사르는 그 머리를 보고 웁니다.",
      "카이사르는 이집트 왕위 다툼에서 클레오파트라 편에 섭니다.",
    ],
    ending: "알렉산드리아 전쟁 끝에 프톨레마이오스 13세는 나일강에서 죽고, 클레오파트라가 여왕이 됩니다. 그녀는 카이사르의 아들을 낳습니다.",
    history: [
      { drama: "양탄자에 싸여 들어가는 클레오파트라.", real: "플루타르코스는 침구 자루에 숨어 들어갔다고 씁니다. 유명한 장면이지만 한 사람의 기록입니다." },
      { drama: "넷플릭스 한국어 제목은 ‘클레오파트라’.", real: "영어 제목은 Queen of the Nile입니다." },
    ],
    cast: ["caesar", "cleopatra", "ptolemy", "pompey"],
    scene: "폼페이우스의 머리를 받은 카이사르가 등을 돌리는 장면.",
  },
  {
    season: 2, ep: 5, overall: 11, en: "The Ides of March", ko: "3월 15일", year: "기원전 46–44",
    plot: [
      "로마로 돌아온 카이사르는 10년 임기 독재관이 되고, 곧 종신 독재관이 됩니다. 클레오파트라가 로마에 와서 아들 카이사리온을 카이사르의 아들이라 밝힙니다.",
      "카이사르는 크라수스가 진 파르티아를 치려고 준비합니다. 브루투스와 카시우스 등 원로원 의원들은 공화정을 지킨다며 음모를 꾸밉니다.",
    ],
    ending: "기원전 44년 3월 15일, 원로원 회의장에서 카이사르는 스물세 번 찔려 죽습니다. 그 뒤 내전이 다시 시작되고, 양자 옥타비아누스가 마지막에 이깁니다.",
    history: [
      { drama: "스물세 번의 칼.", real: "수에토니우스가 적은 숫자입니다. ‘브루투스 너마저’는 셰익스피어의 말이고, 수에토니우스는 그리스어 ‘너도냐, 아들아’를 소문으로 전합니다." },
      { drama: "카이사리온은 카이사르의 아들.", real: "클레오파트라가 그렇게 주장했고 카이사르는 공식 인정하지 않았습니다. 학자 대부분은 친아들로 봅니다." },
    ],
    cast: ["caesar", "brutus", "servilia", "cleopatra", "antony"],
    scene: "폼페이우스의 조각상 발치에 쓰러지는 카이사르.",
  },
  // Season 3: Caligula: The Mad Emperor (2019)
  {
    season: 3, ep: 1, overall: 12, en: "The Rightful Heir", ko: "제국의 계승자", year: "14–31",
    plot: [
      "티베리우스의 아들 드루수스가 후계자입니다. 하지만 23년 그는 갑자기 죽습니다. 근위대장 세야누스의 손이 의심됩니다.",
      "어린 가이우스(칼리굴라)는 아버지 게르마니쿠스를 잃고, 어머니와 형들이 세야누스의 고발로 쓰러지는 것을 봅니다.",
    ],
    ending: "카프리섬의 티베리우스는 31년 세야누스를 처형합니다. 살아남은 칼리굴라가 카프리로 불려 갑니다.",
    history: [
      { drama: "세야누스가 드루수스를 독살했습니다.", real: "타키투스가 전하는 이야기입니다. 세야누스가 죽은 뒤에 나온 고발이라 확실하지 않습니다." },
      { drama: "칼리굴라 가족의 몰락.", real: "사실입니다. 어머니 대 아그리피나와 형 둘은 유배나 감옥에서 죽습니다." },
    ],
    cast: ["tiberius", "drusus", "sejanus", "caligula", "germanicus"],
    scene: "카프리의 늙은 티베리우스 앞에 불려 온 젊은 칼리굴라. 살아남으려면 아무 감정도 보이지 않아야 합니다.",
  },
  {
    season: 3, ep: 2, overall: 13, en: "A New Hope", ko: "새로운 희망", year: "31–37",
    plot: [
      "티베리우스는 손자 게멜루스와 칼리굴라를 공동 상속자로 정합니다. 마크로가 세야누스의 자리를 잇습니다.",
      "37년 티베리우스가 죽고, 아버지 게르마니쿠스의 인기 덕에 칼리굴라는 큰 환영을 받으며 황제가 됩니다.",
    ],
    ending: "칼리굴라는 게멜루스를 죽이고 검투 경기를 되살립니다. 삼촌 클라우디우스와 함께 집정관이 되고, 세 누이 아그리피나·드루실라·리빌라가 궁정에서 힘을 얻습니다.",
    history: [
      { drama: "마크로가 티베리우스의 죽음을 앞당깁니다.", real: "타키투스와 수에토니우스는 베개로 질식시켰다는 소문을 전합니다. 확인되지 않습니다." },
      { drama: "누이들이 동전에 새겨집니다.", real: "사실입니다. 세 누이가 신처럼 새겨진 동전이 남아 있습니다." },
    ],
    cast: ["caligula", "tiberius", "gemellus", "macro", "claudius", "agrippina", "drusilla", "livilla"],
    scene: "칼리굴라가 환호 속에 로마에 들어오는 장면. 이 환영이 4년 만에 무너집니다.",
  },
  {
    season: 3, ep: 3, overall: 14, en: "In Search of an Heir", ko: "후계자를 찾아서", year: "37–39",
    plot: [
      "큰 병을 앓은 뒤 칼리굴라는 달라집니다. 그는 자신을 황제로 만든 마크로를 죽게 합니다.",
      "극은 칼리굴라가 세 누이와 잠자리를 했다고 보여 줍니다. 드루실라가 38년에 죽자 그는 그녀를 여신으로 선포합니다. 그는 카이소니아와 결혼하고 딸을 얻습니다.",
    ],
    ending: "드루실라의 남편 레피두스와 아그리피나, 리빌라가 칼리굴라를 없앨 음모(‘세 단검’)를 꾸밉니다.",
    history: [
      { drama: "누이들과의 근친.", real: "수에토니우스가 전하지만, 당시의 기록(세네카, 필론)에는 없습니다. 많은 학자가 뒤의 비방으로 봅니다." },
      { drama: "드루실라가 아이를 낳다 죽습니다.", real: "죽음의 원인은 기록에 없습니다. 아이를 가졌다는 것은 극의 설정입니다." },
      { drama: "드루실라의 신격화.", real: "사실입니다. 로마 여성으로 처음 신으로 선포되었습니다." },
    ],
    cast: ["caligula", "macro", "drusilla", "agrippina", "livilla", "lepidus", "caesonia", "claudius"],
    scene: "드루실라를 잃은 칼리굴라가 로마 전체에 애도를 명하는 장면.",
  },
  {
    season: 3, ep: 4, overall: 15, en: "Descent into Madness", ko: "광기의 나락", year: "39–41",
    plot: [
      "음모를 꾸민 아그리피나가 오히려 칼리굴라에게 음모를 알립니다. 레피두스는 처형되고, 아그리피나와 리빌라는 유배됩니다.",
      "칼리굴라는 원로원을 모욕하고 자신을 신이라 부릅니다. 근위대 장교 카이레아는 그의 놀림을 견디지 못합니다.",
    ],
    ending: "41년 1월, 카이레아와 근위대가 경기장 통로에서 칼리굴라를 죽이고 아내와 딸도 죽입니다. 극은 클라우디우스가 이를 알고 있었다고 보여 줍니다. 근위대는 커튼 뒤에 숨은 클라우디우스를 황제로 세웁니다.",
    history: [
      { drama: "아그리피나가 음모를 밀고합니다.", real: "창작에 가깝습니다. 사료는 그녀가 음모 때문에 유배되었다고만 합니다." },
      { drama: "클라우디우스가 암살을 승인합니다.", real: "증거가 없습니다. 수에토니우스와 요세푸스는 그가 놀라서 숨어 있었다고 씁니다." },
      { drama: "말을 집정관으로?", real: "수에토니우스는 그럴 ‘계획’이었다는 소문만 전합니다. 실제로 임명했다는 기록은 없습니다." },
    ],
    cast: ["caligula", "agrippina", "livilla", "lepidus", "chaerea", "claudius", "caesonia"],
    scene: "커튼 뒤에서 떨던 클라우디우스가 병사들에게 끌려 나와 황제가 되는 장면.",
  },
];

export type Season = {
  season: 1 | 2 | 3;
  year: string;
  en: string;
  koNetflix: string;
  lead: string;
  after: string[];
  links: { href: string; label: string }[];
};

export const SEASONS: Season[] = [
  {
    season: 1, year: "2016", en: "Reign of Blood", koNetflix: "콤모두스: 피의 지배",
    lead: "마르쿠스 아우렐리우스의 아들 콤모두스가 황제가 되어 검투사로 싸우다 목욕탕에서 죽기까지. 증인은 원로원 의원 카시우스 디오입니다.",
    after: [
      "193년은 ‘다섯 황제의 해’입니다. 페르티낙스는 석 달 만에 근위대에 죽고, 디디우스 율리아누스는 근위대가 경매에 붙인 황제 자리를 삽니다.",
      "셉티미우스 세베루스가 이기고 세베루스 왕조를 엽니다. 그는 콤모두스를 신으로 되돌려 자기 ‘형’으로 삼습니다.",
      "카시우스 디오는 뒤에 집정관이 되어 『로마사』를 씁니다. 이 시즌의 이야기는 대부분 그의 책에서 나옵니다.",
    ],
    links: [
      { href: "/rulers/marcus-aurelius", label: "마르쿠스 아우렐리우스" },
      { href: "/movies#gladiator", label: "글래디에이터" },
      { href: "/movies#fall-of-the-roman-empire", label: "로마제국의 멸망" },
    ],
  },
  {
    season: 2, year: "2018", en: "Julius Caesar: Master of Rome", koNetflix: "율리우스 카이사르: 로마의 정복자",
    lead: "스파르타쿠스의 패배에서 3월 15일까지. 카이사르가 삼두 동맹, 갈리아 정복, 내전, 클레오파트라를 거쳐 원로원에서 죽기까지입니다.",
    after: [
      "안토니우스, 옥타비아누스, 레피두스가 제2차 삼두 정치를 맺고, 기원전 42년 필리피에서 브루투스와 카시우스를 이깁니다.",
      "기원전 31년 악티움에서 옥타비아누스가 안토니우스와 클레오파트라를 이기고, 두 사람은 기원전 30년 스스로 목숨을 끊습니다. 카이사리온도 죽습니다.",
      "기원전 27년 옥타비아누스는 ‘아우구스투스’가 됩니다. 제정이 시작됩니다.",
    ],
    links: [
      { href: "/wars/gallic-war", label: "갈리아 전쟁" },
      { href: "/wars/caesar-civil-war", label: "카이사르 내전" },
      { href: "/cleopatra", label: "클레오파트라와 로마" },
      { href: "/wars/actium", label: "악티움" },
      { href: "/rulers/augustus", label: "아우구스투스" },
      { href: "https://nadoo-timeline.vercel.app/events/crossing-the-rubicon", label: "연표: 루비콘" },
      { href: "https://nadoo-timeline.vercel.app/events/assassination-of-caesar", label: "연표: 카이사르 암살" },
    ],
  },
  {
    season: 3, year: "2019", en: "Caligula: The Mad Emperor", koNetflix: "칼리굴라: 미치광이 황제",
    lead: "티베리우스의 후계 다툼에서 살아남은 칼리굴라가 사랑받는 황제로 시작해, 4년 만에 근위대에게 죽기까지입니다.",
    after: [
      "클라우디우스가 41–54년 다스리며 브리타니아를 정복합니다. 유배에서 돌아온 아그리피나는 그와 결혼합니다.",
      "54년 클라우디우스가 죽고(독살 소문), 아그리피나의 아들 네로가 황제가 됩니다. 네로는 59년 어머니를 죽입니다.",
      "68년 네로의 죽음으로 율리우스-클라우디우스 왕조가 끝납니다.",
    ],
    links: [
      { href: "/rulers/tiberius", label: "티베리우스" },
      { href: "/rulers/claudius", label: "클라우디우스" },
      { href: "/rulers/nero", label: "네로" },
      { href: "https://nadoo-timeline.vercel.app/events/caligula", label: "연표: 칼리굴라" },
    ],
  },
];

export const episodePath = (e: Pick<Episode, "season" | "ep">) => `/roman-empire/s${e.season}/e${e.ep}`;
export const seasonPath = (s: number) => `/roman-empire/s${s}`;
