const phoneForm = document.getElementById('phone-form');

const sendMessage = (phone) => {
  window.open(`https://wa.me/55${phone}`);
};

phoneForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const phone = document.getElementById('inputPhone').value.replace(/\D/g, '');
  sendMessage(phone);
});
