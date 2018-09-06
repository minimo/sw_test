phina.globalize();

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

phina.main(function() {
  const app = GameApp({
    startLabel: 'main',
  });
  // app.enableStats();
  app.run();
});


phina.define("MainScene", {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit();

    const shape = RectangleShape()
      .addChildTo(this)
      .setPosition(100, 100);

    shape.tweener.clear()
      .to({scaleX: 3, scaleY: 3}, 1000, "easeOutQuad")
      .wait(500)
      .to({scaleX: 1, scaleY: 1}, 1000, "easeOutBounce")
      .setLoop(true);
  },

  update: function() {

  },
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicGhpbmFfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsicGhpbmEuZ2xvYmFsaXplKCk7XG5cbi8vc2VydmljZS13b3JrZXJcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzdy5qcycpXG4gICAgICAudGhlbihlID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZSB3b3JrZXIgcmVnaXN0ZXJlZCEnKTtcbiAgICAgIH0sXG4gICAgICBlID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZSB3b3JrZXIgcmVqZWN0ZWQhJyk7XG4gICAgICB9KTtcbn1cblxucGhpbmEubWFpbihmdW5jdGlvbigpIHtcbiAgY29uc3QgYXBwID0gR2FtZUFwcCh7XG4gICAgc3RhcnRMYWJlbDogJ21haW4nLFxuICB9KTtcbiAgLy8gYXBwLmVuYWJsZVN0YXRzKCk7XG4gIGFwcC5ydW4oKTtcbn0pO1xuXG5cbnBoaW5hLmRlZmluZShcIk1haW5TY2VuZVwiLCB7XG4gIHN1cGVyQ2xhc3M6ICdEaXNwbGF5U2NlbmUnLFxuICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN1cGVySW5pdCgpO1xuXG4gICAgY29uc3Qgc2hhcGUgPSBSZWN0YW5nbGVTaGFwZSgpXG4gICAgICAuYWRkQ2hpbGRUbyh0aGlzKVxuICAgICAgLnNldFBvc2l0aW9uKDEwMCwgMTAwKTtcblxuICAgIHNoYXBlLnR3ZWVuZXIuY2xlYXIoKVxuICAgICAgLnRvKHtzY2FsZVg6IDMsIHNjYWxlWTogM30sIDEwMDAsIFwiZWFzZU91dFF1YWRcIilcbiAgICAgIC53YWl0KDUwMClcbiAgICAgIC50byh7c2NhbGVYOiAxLCBzY2FsZVk6IDF9LCAxMDAwLCBcImVhc2VPdXRCb3VuY2VcIilcbiAgICAgIC5zZXRMb29wKHRydWUpO1xuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgfSxcbn0pO1xuIl19
