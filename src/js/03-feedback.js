import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name=email]');
const message = document.querySelector('textarea[name=message]');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);


const STORAGE_KEY = "feedback-form-state";

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

onFormLoad();
// Устанавливаем поведение по умолчанию
// Убираем сообщение из хранилища
// Очищаем форму
function onFormSubmit(evt){
    evt.preventDefault();
    if (email.value.trim() === "" || message.value.trim() == ""){
      return alert("Please fill all fields!");
    };

evt.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
};
// Получаем значение поля
// Записываем в локал сторадж
// добавляем троттл
function onFormInput (evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));  
};
// Получаем значение из локал сторадж
// Если там что то было обновляем ДОМ
function onFormLoad() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
     if (savedMessage) {
        console.log(savedMessage);
        message.value = savedMessage.message;
        email.value = savedMessage.email;
     }
};

// =================================================================================
// import throttle from "lodash.throttle";

// const form = document.querySelector('.feedback-form');
// const email = document.querySelector('input[name=email]');
// const message = document.querySelector('textarea[name=message]');
// const STORAGE_KEY = "feedback-form-state";

// form.addEventListener('input', throttle(event =>{ 
// const formData = {
//     email = email.value,
//     message = message.value,
// };
// localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }, 500));

// заполнение формы при перезагрузке
// document.addEventListener('load', evt => {
//     const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//     if (savedData){
//         email.value = savedData.email;
//         message.value = savedData.message;
//     }
// });

// обратка сабмита формы
// form.addEventListener('submit', evt => {
//     evt.preventDefault();

// очищаем формы и локал сторадж
    // email.value = '';
    // message.value = '';
    // localStorage.removeItem(STORAGE_KEY);

// выведение данных в консоль
//     const formData = {
//         email = email.value,
//         message = message.value,
//     };
//     console.log(formData);
// });
// =====================================================================================

// import throttle from "lodash.throttle";

// const refs ={
// form: document.querySelector('.feedback-form'),
// message: document.querySelector('.feedback-form textarea'),
// email: document.querySelector('.feedback-form input'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.message.addEventListener('input', throttle(onMessageInput, 500));
// refs.email.addEventListener('input', throttle(onEmailInput, 500));

// messageOutput();
// emailOutput();

// // Устанавливаем поведение по умолчанию
// // Убираем сообщение из хранилища
// // Очищаем форму
// function onFormSubmit(evt){
// evt.preventDefault();
// evt.currentTarget.reset();
// localStorage.removeItem('message-text');
// localStorage.removeItem('email-text');
// };

// // Получаем значение поля
// // Записываем в локал сторадж
// // добавляем троттл
// function onEmailInput(evt){
//     const emailValue = evt.target.value;
//     localStorage.setItem('email-text', emailValue);  
// };

// // Получаем значение поля
// // Записываем в локал сторадж
// // добаваляем троттл
// function onMessageInput(evt){
//     const messageValue = evt.target.value;
//     localStorage.setItem('message-text', messageValue); 
    
// };

// // Получаем значение из локал сторадж
// // Если там что то было обновляем ДОМ
// function messageOutput() {
//     const savedMessage = localStorage.getItem('message-text');

//      if (savedMessage) {
//         console.log(savedMessage);
//         refs.message.value = savedMessage;
//      }
// };

// function emailOutput() {
//     const savedEmail = localStorage.getItem('email-text');

//      if (savedEmail) {
//         console.log(savedEmail);
//         refs.email.value = savedEmail;
//      }
// };