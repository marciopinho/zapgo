const sendMessage = (phone) => {
  window.open(`https://wa.me/55${phone}`);
};

console.log('sendMessage loaded');

export { sendMessage };
