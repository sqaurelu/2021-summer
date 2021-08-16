## vanlia javascript로 momentum 만들기

## 주요기능
- 현재시간 표시
setInterval()함수와 Date 객체를 사용했다. 숫자가 일의 자리수일 때는 padstart를 사용해서 두자리로 맞췄다.
- 로그인
Form 테그를 이용했다. input 태그에 입력하고 submit 버튼을 생성해서 제출한다. 사용자 이름은 localstorage에 저장한다. localstorage에 저장되어 있는 경우 getItem을 사용해서 불러온다.
- 배경, 명언
랜덤 함수를 사용해서 배열 안에 있는 요소를 랜덤하게 뽑는다.
- 할일 목록
이름과 마찬가지로 local storage에 있는 할일을 배열로 뽑아 목록으로 만든다. 
- 날씨 & 위치
https://openweathermap.org의 api 를 사용해서 날씨와 위치를 받아온다. fetch로 데이터가 받아올 때까지 then으로 기달려서 받아오는 비동기 처리를 했다.

## 새로 알게 된 점
local storage에서 filter를 통해서 새로 고침을 해도 삭제한 할일이 남아 있지 않는 기능의 알고리즘을 배웠다.
local storage 이론과 실습을 통해서 활용법을 알게 되었다.

## 더 공부할 내용
CSS를 인터랙티브하게 사용해보고 싶다. 조금 더 사용자 편의를 위해 CSS를 공부해서 적용해보고 싶다.
