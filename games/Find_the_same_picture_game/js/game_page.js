// 제한시간 ---> 1분안에 게임 클리어시
// 시간 초과 or 다 뒤집었을 경우 성공 여부에 따른 (성공, 실패)모달창 생성   (다 뒤집는건 빼고)

// ===== 제한시간 1분 설정하기 ===== //

//제한시간 태그 위치 전역변수
const $headerContents = document.getElementById("header-contents");
// console.log($headerContents);

const $timeText = document.querySelector("#header-contents .time-text");
// console.log($timeText);

const $time = document.querySelector("#header-contents .time");
// console.log($time);


//기본시간 01:00분, 00:00분이 될 때까지 매 초당 1초 줄어들게 하기
let time = 120000; //1초 1000, 60초 60000
let min = 2; // 분 기본시간 1분
let sec = 60; // 초 기본시간 60초

$time.textContent = `0${min} : 00`; // 기본시작시간 입력하기

function timer () { // 60초에서 0초까지 시간이 줄어드는 함수
    gameStart = setInterval (()=> {
        time = time - 1000; // 시간 매 초당 1000씩 줄어듬
        min = time / 120000; // 분은 시간(60000) / 600000;
        sec = time / 1000
    
        if (sec > 0) { // 초가 0보다 클 경우 -1씩 줄어든다
            sec = sec -1;
            $time.textContent = `0${Math.floor(min)} : ${sec}`;
            if (min = 0) {
                if (sec < 10 || sec === 0) { // 초가 0-9사이일때 앞에 0붙여서 자리수맞추기
                    $time.textContent = `0${Math.floor(min)} : 0${sec}`;
                    $time.style.color = 'red';
                    $timeText.style.color = 'red';
                }
            }
        }
        if (Math.floor(min) === 0 && sec === 0) { // 0분이면서 0초일때 초기화
            sec = 60;
            min = 1;
            $time.textContent = `0${min} : 00`;
            $time.style.color = 'rgb(241, 194, 91)'; // 색상 초기화
            $timeText.style.color = 'rgb(241, 194, 91)'; // 색상 초기화
            $BadModal.style.zIndex = 1500; // 창 위치 초기화
            $BadModal.style.display = 'block'; // 창 위치 초기화
            clearTimeout(gameStart);
        } 
    }, 1000);
}

// ===== 시작 누르면 타이머 시작 이벤트 ===== //
// 시작버튼 태그 위치 전역변수
const $startBtn = document.querySelector(".startBtn");
// console.log($startBtn);

//timer함수 호출부분
// 시작 버튼 눌렀을 때 게임페이지 타이머 이벤트효과
$startBtn.addEventListener ("click",()=> {
    timer();
});



//gameStart = setInterval 종료시키면서 불러올 게임결과 태그위치 전역변수
const $GoodModal = document.querySelector("#modal .good"); // 잘했을때
// console.log($GoodModal);

const $BadModal = document.querySelector("#modal .bad"); // 못했을때
// console.log($BadModal);

//gameStart = setInterval 종료시키기
// setTimeout(()=> {
//     clearInterval(gameStart)
//     if (Math.floor(min) === 0 && sec === 0) { // 0분이면서 0초일때 초기화
//         sec = 60;
//         min = 1;
//         $time.textContent = `0${min} : 00`;
//         $BadModal.style.zIndex = 1500;
//         $BadModal.style.display = 'block';
//         $time.style.color = 'rgb(241, 194, 91)';
//         clearTimeout(gameStart);
//     }
// }, 60000)



// ===== 나가기 누르면 이 게임 메인페이지로 이동 ===== //
// 나가기버튼 태그 위치 전역변수
const $close = document.querySelector(".close");
// console.log($close);

//메인페이지 태그 위치 전역변수
const $StartContainer = document.querySelector(".container"); // 메인 페이지
const $modalNamdAndDifficulity = document.querySelector(".container .modal"); // 닉네임, 난이도선택 페이지
const $GameContainer = document.getElementById("container"); // 게임 페이지
// $GoodModal // 잘했을때 페이지
// $BadModal // 못했을때 페이지

// 시작페이지로 갈수있는 인덱스값 원상복구 함수
const closeAndStart = () => {
    // $StartContainer.style.display = 'block';
    //$modalNamdAndDifficulity.style.display = 'block';
    // $GameContainer.style.display = 'block';
    // $GoodModal.style.display = 'block';
    // $BadModal.style.display = 'block';



    $StartContainer.style.zIndex = 1500;
    $StartContainer.style.display = 'block';

    $modalNamdAndDifficulity.style.zIndex = 1400;
    $modalNamdAndDifficulity.style.display = 'none';

    $GameContainer.style.zIndex = 1300;

    $GoodModal.style.zIndex = 1200;
    $GoodModal.style.display = 'none';

    $BadModal.style.zIndex = 1100;
    $BadModal.style.display = 'none';
};

// 나가기 버튼 눌렀을 때 시작페이지로 이동하는 이벤트효과
// $close.onclick = function () {
//     closeAndStart();
// }
cclose = $close.addEventListener('click', () => {
    closeAndStart();
});



// 다시하기버튼 태그 위치 전역변수
const $replay = document.querySelector(".replay");
console.log($replay);
cclose = $replay.addEventListener('click', () => {
    closeAndStart();
});

//닉네임입력 태그 위치 전역변수
// const $modalNamdAndDifficulity // 닉네임, 난이도선택 페이지
// const $GameContainer // 게임 페이지
// $GoodModal // 잘했을때 페이지
// $BadModal // 못했을때 페이지
// const $StartContainer // 메인 페이지

// 닉네임 입력창으로 갈수있는 인덱스값 원상복구 함수
const closeAndName = () => {
    $StartContainer.style.zIndex = 1100;

    $modalNamdAndDifficulity.style.zIndex = 1500;
    $modalNamdAndDifficulity.style.display = 'none';

    $GameContainer.style.zIndex = 1400;

    $GoodModal.style.zIndex = 1300;
    $GoodModal.style.display = 'none';

    $BadModal.style.zIndex = 1200;
    $BadModal.style.display = 'none';
};

// 다시하기 버튼 눌렀을 때 닉네임입력페이지로 이동하는 이벤트효과
 $replay.addEventListener('click', () => {
    closeAndName();
 });
