const pinkBtn = document.getElementById('pink-btn');
const blueBtn = document.getElementById('blue-btn');
const unsubscribeBtn = document.getElementById('unsubscribe-btn');

pinkBtn.addEventListener('click', () => {
  const data = '🎀 Pink button! 🎀';
  // sendToGoogleAnalytics(data);
  // sendToCustomAnalytics(data);
  // sendToEmail(data);
  window.Observable.notify(data);
});

blueBtn.addEventListener('click', () => {
  const data = '🦋 Blue button! 🦋';
  // sendToGoogleAnalytics(data);
  // sendToCustomAnalytics(data);
  // sendToEmail(data);
  window.Observable.notify(data);
});

unsubscribeBtn.addEventListener('click', () => {
  window.Observable.unscubscribe(sendToEmail);
  console.log('⭕️ Unsubscribed from Email notifications');
});
