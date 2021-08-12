//DOM
const shelf = document.querySelector(".shelf > ul");
//Setting
const column = 4;
const row = 8;

item=[
    {
        "id": "b1",
        "title" : "effective c++",
        "publisher" : "Addison-Wesley Professional"
    },
    {
        "id": "b2",
        "title" : "Java 프로그래밍 입문",
        "publisher" : "북스홀릭"
    }
]



init();
function init(){
    for (let i =0 ; i<row ; i++){
        const ul = document.createElement("ul");
        const li = document.createElement("li"); 
        for(let j=0 ; j< column; j++){
            const matrix = document.createElement("li");
            ul.appendChild(matrix);
        }
        li.appendChild(ul);
        shelf.appendChild(li);
    }
}


const s =shelf.querySelector("li >ul").childNodes[0];
s.classList.add(item[0].id);
let textNode = document.createTextNode(item[0].title);
s.append(textNode);

const s1 =shelf.querySelector("li >ul").childNodes[1];
console.log(s1);
s1.classList.add(item[1].id);
let textNode2 = document.createTextNode(item[1].title);
s1.append(textNode2);
