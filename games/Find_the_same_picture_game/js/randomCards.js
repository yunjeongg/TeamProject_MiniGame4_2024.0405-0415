


const cards = [
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="1" class="back" style="background-image: url(./img/0001.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="2" class="back" style="background-image: url(./img/0002.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="3" class="back" style="background-image: url(./img/0003.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="4" class="back" style="background-image: url(./img/0004.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="5" class="back" style="background-image: url(./img/0005.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="6" class="back" style="background-image: url(./img/0006.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="7" class="back" style="background-image: url(./img/0007.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="8" class="back" style="background-image: url(./img/0008.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="9" class="back" style="background-image: url(./img/0009.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="10" class="back" style="background-image: url(./img/0010.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="11" class="back" style="background-image: url(./img/0011.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="12" class="back" style="background-image: url(./img/0012.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="13" class="back" style="background-image: url(./img/0013.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="14" class="back" style="background-image: url(./img/0014.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="15" class="back" style="background-image: url(./img/0015.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="16" class="back" style="background-image: url(./img/0016.jpg);"></div>',
];

let gameLevel = game.level;
//상, 중, 하 난이도에 따른 카드 개수
function cardNumber(gameLevel) {
  let temp = [];
  if (gameLevel === "high") {
    // 상
    return (temp = [...cards.slice(), ...cards.slice()]);
  } else if (gameLevel === "middle") {
    // 중
    return (temp = [...cards.slice(0, 12), ...cards.slice(0, 12)]);
  } else if (gameLevel === "low") {
    // 하
    return (temp = [...cards.slice(0, 8), ...cards.slice(0, 8)]);
  }
}

// // 32개의 숫자가 든 배열 생성
// total = [];
// for (let i = 0; i < 32; i++) {
//   total[i] = i;
// }

// 32개의 숫자배열 랜덤정렬
let num = [];
let i = 0;
while (i < 32) {
  let random = Math.floor(Math.random() * total.length);
  if (!num.includes(total[random])) {
    // 중복카드 배열에 넣지않기
    num.push(total[random]);
    i++;
  }
}
// console.log(temp);
// // 태그 랜덤정렬
// let newNumber =[];
// while (i < 33) {
//     let random = Math.floor(Math.random() * total.length);
//     if (!num.includes(total[random])) { // 중복카드 배열에 넣지않기
//         num.push(total[random]);
//         i++;
//     } for (let j = 0; j < 33; j++) {
//       newNumber[j] = temp[num];
//     }newNumber.push(temp[num]);
//   }
//   console.log(newNumber);

// let originalCards = temp.slice();

// 카드를 배열에 랜덤 배치
function shuffleCard() {
  for (i = 0; i < temp.length; i++) {
    originalCards[parseInt(num[i])] = temp[i];
  }
}

// shuffleCard();

// 랜덤 배치된 카드들을 채워넣는 함수.
function random () {
const cardsBox = [...document.querySelectorAll(".flipBox .main-imgbox")];
for (i = 0; i < originalCards.length; i++) {
  cardsBox[i].innerHTML = originalCards[i];
}
}

//  random();

