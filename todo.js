const eInput = document.querySelector('.eInput input');
const submit = document.querySelector('.submit #add_btn')
const ListDiv = document.querySelector('.todo_content .list')
const delete_btn = document.querySelector('.del')
const check_btn = document.querySelector('#check_btn')

import{initializeApp} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js"
import{getAnalytics} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js"
import{getFirestore} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js"
import{getDatabase, ref, push, set} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js"

const firebaseConfig = {
    apiKey: "AIzaSyC6uATTmPH6wtkOl1pRMkEfDqbaEJ04UVs",
    authDomain: "taskify-664bd.firebaseapp.com",
    projectId: "taskify-664bd",
    storageBucket: "taskify-664bd.appspot.com",
    messagingSenderId: "995171632396",
    appId: "1:995171632396:web:01a04431a1c92244bcb529",
    measurementId: "G-S2YY0ZT4T4"
  };

  //Initialize the Firebase//

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore();
  const database = getDatabase(app);

  submit.addEventListener("click", (e) =>{
    let input = eInput.value;

    let new_Element = document.createElement("li");

    ListDiv.appendChild(new_Element);
    new_Element.textContent = input

    delete_btn.style.display = 'block';
    check_btn.style.display = 'block';
    delete_btn.addEventListener("click", (e) =>{
        removeElements(document.querySelectorAll('li'));
        function removeElements(newElement){
            for( var i = 0; i < newElement.length; i++){
                newElement[i].parentNode.removeChild(newElement[i])
            }
        }
        delete_btn.style.display = 'none';
        check_btn_btn.style.display = 'none';
    })
    check_btn.addEventListener('click', (e) => {
        sta(document.querySelectorAll('li'))
        function sta(newElement){
            for( var i = 0; i < newElement.length; i++){
                newElement[i].style.color = '#a6a6a6'
                newElement[i].classList.add("active")
            }
        }
    })
    writeUserData();
    function writeUserData(userId, name, email){
        const db = getDatabase();
        set(ref(db, 'Todo_list/'),{//setting the database and referencing the TodoList form data into realtime database as a side data named Todo and putting that value into the realtime database as a todolist form data into the apprended todo
            Todo:eInput.value
        })
    }
  })