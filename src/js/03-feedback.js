import throttle from "lodash.throttle";

const refs ={
form: document.querySelector('.feedback-form'),
message: document.querySelector('.feedback-form textarea'),
email: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.message.addEventListener('input', throttle(onMessageInput, 500));
refs.email.addEventListener('input', throttle(onEmailInput, 500));

messageOutput();
emailOutput();

// Устанавливаем поведение по умолчанию
// Убираем сообщение из хранилища
// Очищаем форму
function onFormSubmit(evt){
evt.preventDefault();
evt.currentTarget.reset();
localStorage.removeItem('message-text');
localStorage.removeItem('email-text');
};

// Получаем значение поля
// Записываем в локал сторадж
// добавляем троттл
function onEmailInput(evt){
    const emailValue = evt.target.value;
    localStorage.setItem('email-text', emailValue);  
};

// Получаем значение поля
// Записываем в локал сторадж
// добаваляем троттл
function onMessageInput(evt){
    const messageValue = evt.target.value;
    localStorage.setItem('message-text', messageValue); 
    
};

// Получаем значение из локал сторадж
// Если там что то было обновляем ДОМ
function messageOutput() {
    const savedMessage = localStorage.getItem('message-text');

     if (savedMessage) {
        console.log(savedMessage);
        refs.message.value = savedMessage;
     }
};

function emailOutput() {
    const savedEmail = localStorage.getItem('email-text');

     if (savedEmail) {
        console.log(savedEmail);
        refs.email.value = savedEmail;
     }
};