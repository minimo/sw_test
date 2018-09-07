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

phina.globalize();

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
      .setPosition(300, 500);

    shape.tweener.clear()
      .to({scaleX: 3, scaleY: 3}, 1000, "easeOutQuad")
      .to({scaleX: 1, scaleY: 1}, 1000, "easeOutBounce")
      .setLoop(true);
  },

  update: function() {

  },
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9wcmVwcm9jZXNzLmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicGhpbmFfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9zZXJ2aWNlLXdvcmtlclxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3N3LmpzJylcbiAgICAgIC50aGVuKGUgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlIHdvcmtlciByZWdpc3RlcmVkIScpO1xuICAgICAgfSxcbiAgICAgIGUgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlIHdvcmtlciByZWplY3RlZCEnKTtcbiAgICAgIH0pO1xufVxuIiwicGhpbmEuZ2xvYmFsaXplKCk7XG5cbnBoaW5hLm1haW4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFwcCA9IEdhbWVBcHAoe1xuICAgIHN0YXJ0TGFiZWw6ICdtYWluJyxcbiAgfSk7XG4gIC8vIGFwcC5lbmFibGVTdGF0cygpO1xuICBhcHAucnVuKCk7XG59KTtcblxuXG5waGluYS5kZWZpbmUoXCJNYWluU2NlbmVcIiwge1xuICBzdXBlckNsYXNzOiAnRGlzcGxheVNjZW5lJyxcbiAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdXBlckluaXQoKTtcblxuICAgIGNvbnN0IHNoYXBlID0gUmVjdGFuZ2xlU2hhcGUoKVxuICAgICAgLmFkZENoaWxkVG8odGhpcylcbiAgICAgIC5zZXRQb3NpdGlvbigzMDAsIDUwMCk7XG5cbiAgICBzaGFwZS50d2VlbmVyLmNsZWFyKClcbiAgICAgIC50byh7c2NhbGVYOiAzLCBzY2FsZVk6IDN9LCAxMDAwLCBcImVhc2VPdXRRdWFkXCIpXG4gICAgICAudG8oe3NjYWxlWDogMSwgc2NhbGVZOiAxfSwgMTAwMCwgXCJlYXNlT3V0Qm91bmNlXCIpXG4gICAgICAuc2V0TG9vcCh0cnVlKTtcbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uKCkge1xuXG4gIH0sXG59KTtcbiJdfQ==
