# Dev-Immersion 2주차 과제

[VSCode 플러그인 정리](https://velog.io/@sqaurelu/VSCode-%EC%9C%A0%EC%9A%A9%ED%95%9C-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8#beautify)

## 1. 프로젝트 내용

2주차 과제로 메모앱을 만들었습니다. 메모를 추가하거나 모두 삭제할 수 있습니다.

<p align="center"><img alt='memo-app' src='https://user-images.githubusercontent.com/55270881/129132529-634bd147-4b10-4c54-8248-f9a28546165e.gif' width='500px' /></p>

## 2. 사용된 기술

HTML, CSS, JavaScript

## 3. 새로 알게된 내용

### localStrage에 데이터 저장하기

사용자가 입력하는 메모를 localStorage에 저장하기로 했다. 메모를 추가할 때마다 배열 형식으로 localStorage에 저장되어야 한다. localStorage는 같은 키 값을 가지는 데이터가 존재할 때, `setItem`을 쓰면 이전 값을 덮어쓴다.

나는 localStorage의 'memo' 키 값에 메모들을 저장하려고 했다. 메모앱은 localStorage에 저장된 입력 값과 새로 추가된 입력 값을 모두 저장해야 한다. 따라서, 사용자가 새로운 입력을 제출했을 때 이전에 존재하던 값과 새로 들어온 입력을 합쳐 localStorage에 저장했다.

```javascript
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let tmp = [];
  // 로컬 스토리지에 'memo'키 값에 해당하는 데이터가 존재한다면 tmp 배열에 저장
  if (localStorage.length > 0) tmp = JSON.parse(localStorage.getItem("memo"));

  let inputOjb = {
    title: modalTitle.value,
    content: modalContent.value,
    date: new Date(),
  };

  let { title, content } = inputOjb;

  if (title === "") alert("제목을 입력해주세요!");
  else if (content === "") alert("내용을 입력해주세요!");
  else if (title === "" && content === "") alert("제목과 내용을 입력해주세요!");
  else {
    // 새로운 입력 값을 tmp 배열에 push
    tmp.push(inputOjb);
    // 로컬 스토리지에 저장
    localStorage.setItem("memo", JSON.stringify(tmp));
    location.reload();
  }
});
```

- 로컬 스토리지에 데이터를 저장할 때, 자바스크립트의 객체 형태로 저장할 수 없다. 저장하기 위해서는 string 형태로 바꾸어 주어야 한다.

  ```javascript
  localStorage.setItem("key", JSON.stringfy(memos));
  ```

- 로컬 스토리지에 저장된 데이터를 가져올 때는 string 형태를 객체 형태로 바꾸어 주어야 한다.
  ```javascript
  JSON.parse(localStorage.getItem("key"));
  ```

### JavaScript에서 DOM 조작하기

- 자바스크립트에서 DOM의 특정 class를 선택하는 방법

  ```javascript
  document.querySelector(selectors);

  // ex
  document.querySelector(".delete-btn");
  ```

- 자바스크립트에서 DOM의 특정 id를 선택하는 방법

  ```javascript
  document.getElementById(id);

  // ex
  document.getElementById("add-memo");
  ```

### button 태그의 type 속성

button 태그의 type 속성의 기본값은 submit로 되어있다. 사용자가 메모작성 form에서 완료 버튼을 누를 때 제목이나 내용을 빠뜨린 경우 경고창을 통해 사용자에게 알려주도록 만들었는데, 취소 버튼을 눌렀을 때도 경고창이 떴다. 취소 버튼의 type을 따로 지정하지 않아 submit으로 되어있었기 때문에 메모작성 form의 submit 이벤트리스너가 작동하게 되어 경고창이 띄어졌다. 그래서 취소 버튼의 type을 button으로 바꾸어 주었다.

<p align="center">
  <img width="600px" alt="스크린샷 2021-08-12 오후 1 10 42" src="https://user-images.githubusercontent.com/55270881/129137133-9ffdb202-980f-473b-881d-67643c9cc17e.png">
</p>

```javascript
modalForm.addEventListener("submit", (e) => {
  // ...

  if (title === "") alert("제목을 입력해주세요!");
  else if (content === "") alert("내용을 입력해주세요!");
  else if (title === "" && content === "") alert("제목과 내용을 입력해주세요!");

  // ...
});
```

## 4. 추가하고 싶은 기능

- 메모별 삭제\/수정 기능
