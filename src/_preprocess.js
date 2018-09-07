//service-worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
      .then(e => {
          console.log('Service worker registered!');
      },
      e => {
          console.log('Service worker rejected!');
      });
}
