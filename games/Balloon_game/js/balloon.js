//풍선 하나 만들기
function makeBalloon() {
    let num = 50;
    for (let j = 1; j <= num; j++) {
        const top = Math.floor(Math.random() * 600);
        const left = Math.floor(Math.random() * 700);
        const $newDiv = document.createElement("div");
        const $balloonWrap = document.querySelector(".balloon_wrap");
        $newDiv.classList.add("balloon");
        let randomColor = Math.floor(Math.random()*5)+1
        $newDiv.innerHTML = `
      <div class="balloon" style="outline: 3px solid transparent; z-index: ${num - j}; top: ${top}px; left: ${left}px;">
        <img src="img/balloon_${randomColor}.png" alt="balloon" class="balloon_img">
        <span class="balloon_number">${j}</span>
      </div>
      `;
      $balloonWrap.appendChild($newDiv);
    }
  }
  makeBalloon();
  
  //=========================
  
  let balloons = document.querySelectorAll('.balloon');
  for(let i = 0; i < balloons.length; i++){
    console.log(i);
    balloons[i];
  
    console.log(top);
    console.log(left);
  
    balloons[i].style.top = `${top}px`
    balloons[i].style.left = `${left}px`
  
  }
