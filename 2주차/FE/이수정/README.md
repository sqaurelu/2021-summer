# 2주차 과제

VSCode 플러그인 사용법 정리
> <https://sujeong-11.tistory.com/48>


- 프로젝트 내용
    - 노마드 코더의 강의를 참고해 ToDoList로 해야 할 일을 입력해 추가하고 일이 끝나면 삭제시킬 수 있는 페이지를 만들었습니다. 

- 사용된 기술 정리
    - greeting.js: 이름을 입력받아 상태를 체크해 클래스 이름을 추가/삭제하여 환영 문구로 변환하는 것이다.

    - clock.js: Date 객체의 메소드와 padStart 메소드를 이용해 항상 자릿수를 2개로 만들어 현재 시간을 구한다. setInterval 메소드로 계속 업데이트를 하는 것이다.

    - calendar.js: Date 객체의 메소드로 현재 날짜를 구하고 padStart 메소드를 이용해 항상 자릿수를 2개로 만들어 주는 것이다.

    - todolist.js: 사용자가 todolist에 추가한 내용을 localStorage에 저장하고 .createElement('태그')로 JS파일에서 HTML태그를 추가, todolist의 내용을 추가했을 때 Date.now() 값으로 id 값을 줘서 삭제할 때 filter 메소드로 이 id을 이용해 삭제할 id 값을 빼고 새 배열을 반환받는 것이다.

- 새로 알게 된 내용
    
    1. .getElementById, .querySelector, .getElementsByClassName으로 HTML을 활용할 수 있다는 것이다.

    2. JS파일에서 .createElement("태그")로 HTML태그를 생성하고, .appendChild(태그)로 HTML에 자식 요소를 만들어 주는 것이다.

    3. .addEventListener('이벤트 종류', 이벤트 실행 함수)

    4. localStorage로 값을 계속 저장할 수 있다. JSON.stringify(x)로 문자열로 변환, JSON.parse(x)로 배열로 변환할 수 있다는 것이다.

    5. 이벤트가 발생해 함수가 실행되면 이 함수에는 이벤트와 관련된 정보가 자동으로 전달된다. .preventDefault()로 이벤트의 기본 동작을 막는다는 것이다.

    6. .classList.add('클래스이름'), .classList.remove('클래스이름')으로 HTML의 클래스를 추가/삭제할 수 있다는 것이다. 

4. 더 공부해야 할 내용
    
    - css의 flex, JS를 더 자세하게 공부