let minute = 0;
let second = 0;
let milli = 0;

const min = document.getElementById("minute")
const sec = document.getElementById("second")
const mil = document.getElementById("milli")
const start = document.getElementById("startBtn")
const stop = document.getElementById("stopBtn")
const reset = document.getElementById("resetBtn")
let intervalId; //setInterval로 반복되는 정수의 값을 담은 ID
//시작버튼 - 클릭시 timer 함수 시작
start.onclick = function() {
    clearInterval(intervalId) //id의 중복생성을 막기위해 시작버튼에도 id초기화 만들어준다.
    intervalId = setInterval(timer, 10)
}
//스탑버튼 - 클릭시 위의 timer 함수를 멈춰줌
stop.onclick = function() {
    clearInterval(intervalId) //clearInterval로 id를 멈춰줄 수 있다.
}
//리셋버튼 - 클릭시 시간을 0으로 만든다.
reset.onclick = function() {
    clearInterval(intervalId) 
    milli = 0; second = 0; minute = 0; //시간을 0으로 만들고
    mil.textContent = "00"// 표시되는 시간도 00으로 만든다.
    sec.textContent = "00"
    min.textContent = "00"
}

//10ms마다 시간이 증가하는 기본함수
function timer() {
    milli++; 
    mil.textContent = milli > 9 ? milli : '0' + milli //삼항연산자를 이용 숫자가 두자리로 표시될 수 있게 00,01,,,
    if(milli > 99) {
        second++; //밀리초가 초단위를 넘어가면 초를 바꿔주는 조건문
        sec.textContent = second > 9 ? second : '0' + second
        milli = 0 //초가 바뀌기때문에 밀리초는 초기화가 됨
        mil.textContent = "00" //초기화되기에 숫자도 00으로 바꿔준다.
    }
    if(second > 59) {
        minute++; //초가 분단위를 넘어가면 분을 바꿔주는 조건문
        min.textContent = minute > 9 ? minute : '0' + minute
        second = 0
        sec.textContent = "00"
    }
}