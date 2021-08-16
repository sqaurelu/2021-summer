let memos = JSON.parse(localStorage.getItem('memo'));

function printMemos() {
    const memoList = document.querySelector('.memo-list');
    if (memos === null) {
        const memoListEmpty = document.createElement('div');
        memoListEmpty.textContent = '아직 작성된 메모가 없습니다!';
        memoListEmpty.classList.add('memo-list-empty');

        memoList.appendChild(memoListEmpty);
    }
    else {        
        for (let i = 0; i < memos.length; i++) {
            const title = document.createElement('div');
            title.textContent = memos[i].title;
            title.classList.add('memo-item-title');

            const content = document.createElement('div');
            content.textContent = memos[i].content;
            content.classList.add('memo-item-content');

            const left = document.createElement('div');
            left.appendChild(title);
            left.appendChild(content);
            left.classList.add('memo-item-left');

            const deleteMemo = document.createElement('button');
            deleteMemo.textContent = '삭제하기';
            deleteMemo.classList.add('delete-memo');

            const right = document.createElement('div');
            right.textContent = memos[i].date;
            right.classList.add('memo-item-right');
            // right.appendChild(deleteMemo);

            const memoItem = document.createElement('div');
            memoItem.appendChild(left);
            memoItem.appendChild(right);
            memoItem.classList.add('memo-item');

            memoList.appendChild(memoItem);
        }
    }
}

printMemos();

const deleteMemo = document.querySelector('.delete-memo');
deleteMemo.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});

let modal = document.querySelector('.modal');

// 메모 추가 버튼
let openModal = document.getElementById('add-memo');
openModal.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

// 모달 끄기
let modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// 메모 추가
let modalForm = document.querySelector('.modal-form');
let modalTitle = document.querySelector('.modal-title');
let modalContent = document.querySelector('.modal-content');

// 현재 날짜
function getCurrentDate() {
    let date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`;
}

modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let tmp = [];
    if (localStorage.length > 0) tmp = JSON.parse(localStorage.getItem('memo'));
    
    let inputOjb = {
        title: modalTitle.value,
        content: modalContent.value,
        date: getCurrentDate(),
    };
    let { title, content } = inputOjb;
    
    if (title === '') alert('제목을 입력해주세요!');
    else if (content === '') alert('내용을 입력해주세요!');
    else if (title === '' && content === '') alert('제목과 내용을 입력해주세요!');
    else {
        tmp.push(inputOjb);
        localStorage.setItem('memo', JSON.stringify(tmp));
        location.reload();
    }
});