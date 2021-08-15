const quotes = [
  {
    quote: "수강신청 잘하는 법 1 : 수강 과목 확인하기",
    author: "자신이 어떤 강의를 듣는지 먼저 파악을 하는 것이 중요합니다!",
  },
  {
    quote: "수강신청 잘하는 법 2 : 수강신청 순서 정하기",
    author: "먼저 제일 중요한 강의를 신청하고 중요한 순서대로 신청하는 걸 추천합니다.",
  },
  {
    quote: "수강신청 잘하는 법 3 : 강의 시간 확인하기",
    author: "주기적으로 약속이나 해야 할 일이 있다면 그 시간대에는 강의를 듣지 않는 것을 추천합니다.",
  },
  {
    quote: "수강신청 잘하는 법 4 : 공강 만들기",
    author: "물론 평일 중간에 공강이 있는 것도 시험기간이나 지친 학기 중에 정말 꿀이에요.",
  },
  {
    quote: "수강신청 잘하는 법 5 : 누구와 강의를 들을 것인가?",
    author: "자신과 맞는 사람들과 함께 강의를 듣게 되면 효율성이 증폭하겠죠?",
  },
  
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${todaysQuote.quote} \n`;
author.innerText = `- ${todaysQuote.author} -`;