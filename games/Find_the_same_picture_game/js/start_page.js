
// 난이도 버튼 선택시 강조효과 클래스 만들기!!
// html에 자바스크립트 연결하기!!!!
// 카드 생성을 어떻게 할지 결정!



// 메인페이지 Start! 버튼 클릭 이벤트 핸들러
document.getElementById('openModal').addEventListener('click', e => {
  const $modal = document.querySelector('.container .modal');
  // 클릭 시 모달창의 display를 block으로!
  $modal.style.display = "block";
});

// 모달창의 X 버튼 클릭 이벤트 핸들러
document.getElementById('closeModal').addEventListener('click', e => {
  const $modal = document.querySelector('.container .modal');
  // 클릭 시 모달창의 display를 none으로!
  $modal.style.display = "none";
})

// 난이도 선택 버튼 클릭시 강조 효과 
document.querySelector('.levelBtn').addEventListener('click', e => {
  // 버블링효과로 인해 버튼 옆의 공간을 클릭해도 이벤트 발생 X
  if(!e.target.matches('.levelBtn button')) return; 
  
  // 1. 버튼 클릭시 모든 버튼의 강조 효과 제거
  for(let $level of [...document.querySelector('.levelBtn').children]) {
    $level.classList.remove('test');
  }
  // 2. 클릭한 버튼만 강조 효과 주기 (클래스 이름과 효과는 다시 설정)
  e.target.classList.add('test');

  // 레벨에 따른 카드 갯수 설정
  selectLevel(e.target);

});

// 레벨에 따른 카드 갯수 설정
// 난이도에 따른 게임페이지에 카드 갯수 표시
// 카드를 어떻게 추가, 제거 할지 정하면 다시 만들기로
const $mainContents = document.getElementById("main-contents");
const $box1 = document.querySelector(".box1");
const $box2 = document.querySelector(".box2");
const $box3 = document.querySelector(".box3");
const $box4 = document.querySelector(".box4");


function selectLevel(level) {
  const $totalCardNum = document.getElementById('header-contents').lastElementChild.lastElementChild;

  if(level.id === 'high') {
    console.log('상 난이도 선택');
    $totalCardNum.textContent = 32;

  } else if (level.id === 'mid') {
    console.log('중 난이도 선택');
    $totalCardNum.textContent = 24;
    $mainContents.removeChild($box1);
    $mainContents.removeChild($box2);

  } else {
    console.log('하 난이도 선택');
    $totalCardNum.textContent = 16;
    $mainContents.removeChild($box1);
    $mainContents.removeChild($box2);
    $mainContents.removeChild($box3);
    $mainContents.removeChild($box4);

}}

// 시작 버튼 클릭 이벤트 핸들러
document.querySelector('.startBtn').addEventListener('click', e => {
  const $nickNameInput = document.getElementById('nickName');
  const $levelBtn = [...document.querySelector('.levelBtn').children];
  //  닉네임 미입력 or 10글자 초과시 경고창 표시
  if($nickNameInput.value.trim() === '') {
    return alert('닉네임을 입력해 주세요.');
  } else if ($nickNameInput.value.trim().length > 10) {
    return alert('닉네임을 10글자 이하로 입력해 주세요.');
  } else {
    for(let $level of $levelBtn) {
      // 난이도를 선택 안하면 경고창 표시 
      if($level.classList.contains('test')) {
        // 닉네임 조건 만족 and 난이도 선택 시
        // 게임페이지가 나타나도록, 닉네임을 게임페이지에 표시
        document.querySelector('.container').style.display = 'none';
        document.getElementById('header-contents').firstElementChild.lastElementChild.textContent = $nickNameInput.value;
        $nickNameInput.value = '';
        return;
      }  
      }
    alert('난이도를 선택해 주세요.')
    }

});
