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
