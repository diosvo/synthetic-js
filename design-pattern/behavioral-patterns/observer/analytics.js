function sendToGoogleAnalytics(data) {
  console.log('Sent to Google analytics: ', data);
}

function sendToCustomAnalytics(data) {
  console.log('Sent to Custom analytics: ', data);
}

function sendToEmail(data) {
  console.log('Sent to Email: ', data);
}

window.Observable.subscribe(sendToGoogleAnalytics);
window.Observable.subscribe(sendToCustomAnalytics);
window.Observable.subscribe(sendToEmail);
