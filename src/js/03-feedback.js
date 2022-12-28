import throttle from 'lodash.throttle';

const formEL = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';
let formData = {};
loadForm();

formEL.addEventListener('submit', onSubmitForm);
formEL.addEventListener('input', throttle(saveForm, 1000));

function saveForm(e) {
  if (localStorage.getItem(STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  }
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(event) {
  event.preventDefault();

  console.log('Storage:', JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  formData = {};
}

function loadForm() {
  const loadData = localStorage.getItem(STORAGE_KEY);
  if (loadData) {
    emailEl.value = JSON.parse(loadData).email || '';
    messageEl.value = JSON.parse(loadData).message || '';
  }
}
