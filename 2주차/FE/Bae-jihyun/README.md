1. 프로젝트 내용
   로그인을 하여 사용자 이름을 받고 Todo list 작성하기

2. 사용된 기술 정리

   ### todo.js

   localStorage에 Todo 데이터를 저장하고 데이터를 가져온다.
   localStorage에 array를 저장할 수 없기 때문에 JSON.stringify(), JSON.parse()를 한다.
   createElement로 element를 만들고 부모 element에 추가한다.
   같은 변수나 이름이 반복되면 상수로 만들어 관리한다.
   Array.forEach()는 array속 데이터의 모든 요소를 가져와 함수를 실행해준다.

   ### quote.js

   querySelector를 사용해 html요소를 .js에 가져온다.
   Math.floor()는 반내림함수이다.

   ### greeting

   요소에 classList.add로 class명을 추가 할 수 있다.

   ### clock

   date.getHours()는 현재 시간을 가져와준다.
   pad.Start(a,"asd")는 string이 가져야 할 길이가 a여야 하고 부족할 시 asd를 채운다.

   ### background

   Math.random()는 0과 1사이 난수를 생성해준다.
   (Math.random() _ 숫자)는 숫자보다 적은 수를 랜덤으로 만들어준다.
   Math.floor(Math.random() _ 숫자)는 숫자보다 작은 정수를 랜덤으로 만들어준다.

3. 새로 알게 된 내용
   js로 요소나 class를 추가할 수 있다는 것을 알게 되었다.
   localStorage에 데이터를 저장하고 가져올 수 있다.
   foreach를 통해 lodash에 대해 알게되었다.

4. 더 공부해야 할 내용
   페이지에 들어갈 때마다 background색이 변하게 하고 싶다.
   es6

5. prettier설정
   File > Preferences > Settings
   FormatOnSave 검색 후 체크되어있나 확인
   Default Formatter 검색 후 esbenp.prettier-vscode로 변경