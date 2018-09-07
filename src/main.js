phina.globalize();

var QUERY           = QueryString.parse();
var SCREEN_WIDTH    = 960;
var SCREEN_HEIGHT   = 640;
var PIECE_SIZE      = 80;
var PIECE_SIZE_HALF = PIECE_SIZE/2;
var FLOOR_HEIGHT    = 128;
var FLOOR_Y         = SCREEN_HEIGHT-FLOOR_HEIGHT;
var SPEED           = 16;
var SCORE_BOX_HEIGHT= 100;
var TILE_WIDTH = 32;

var TOUCH_SE = 'data:audio/x-m4a;base64,AAAAHGZ0eXBNNEEgAAAAAE00QSBtcDQyaXNvbQAAA2ptb292AAAAbG12aGQAAAAAth9I0bYfSNEAAKxEAAA4AAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAB/HRyYWsAAABcdGtoZAAAAAG2H0jRth9I0QAAAAEAAAAAAAA4AAAAAAAAAAAAAAAAAAEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAZhtZGlhAAAAIG1kaGQAAAAAth9I0bYfSNEAAKxEAAA4AAAAAAAAAAAiaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAAAAAAABTm1pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAABEnN0YmwAAAB2c3RzZAAAAAAAAAABAAAAZm1wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAACsRAAAAAAAM2VzZHMAAAAAA4CAgCIAAAAEgICAFEAVABgAAAAAAAAA+gAFgICAAhIIBoCAgAECAAAAD3NidGQAAAAASTE2AAAAGHN0dHMAAAAAAAAAAQAAAA4AAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAAOAAAAAQAAAExzdHN6AAAAAAAAAAAAAAAOAAAABAAAALYAAADwAAABAAAAASoAAADJAAAAwAAAAL8AAADIAAAAxwAAAMQAAAD0AAAAmAAAACsAAAAUc3RjbwAAAAAAAAABAAAQAAAAAPp1ZHRhAAAA8m1ldGEAAAAAAAAAImhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAAMRpbHN0AAAAvC0tLS0AAAAcbWVhbgAAAABjb20uYXBwbGUuaVR1bmVzAAAAFG5hbWUAAAAAaVR1blNNUEIAAACEZGF0YQAAAAEAAAAAIDAwMDAwMDAwIDAwMDAwODQwIDAwMDAwMzlDIDAwMDAwMDAwMDAwMDJDMjQgMDAwMDAwMDAgMDAwMDAwMDAgMDAwMDAwMDAgMDAwMDAwMDAgMDAwMDAwMDAgMDAwMDAwMDAgMDAwMDAwMDAgMDAwMDAwMDAAAAxyZnJlZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoubWRhdADQQAcBApnIPbtcUlMJMRipw9/7X/M0y2v6ef/rn+9/r89D11/b9P3+PwBDqwN5eFSViEKWTQ0hEmbjypAITUcbkAB7f7B9/xzF/4MPygL+5U64bjM7SBzkm8M1HH2SGIRnA5x7P2uuJ5BCKLxgssFcLqLZ3FevPRr0F3CMT8hIpKv1/iCo84AHN04lIjwd9kfpgpvrRGSrJx66pB0UmcpyS5zIgZ/2F7mWnBaH8R0XWUXGotLa8kD34AEymT7cNCVuIxsJmTZIn8/x/x1+vToe79tePb6dax/T5/0/etzPgBsl0jTcJnog3BkMNCKTbr+5r0p4bc/sDeOY+7qyx0X3+gCp+xD4lT2RQcUW6PHjdb9dKqFg1ihiN0qJ0zkRmdKylaUWinNAsGLCtgnzVnzFfCagGkDCZVB2abPPcOsXMVAyIxAHmwnz+2ONbmbxLURmjfRJlxKbcIPQULNNRrsDDrEiEmAKVTF34xCNa/SV2mG4jACiWQoIRN3kQSh4QjXbI6spXAoIS5v+F2NNo7eAswHenljcvnriV9oy7p/wdJTgAum92sLfgAEemX7bQUTtIrUE2qf0/nqH2dGf215+OL+ZXwQHW8qT3OO8uSK1VbzV1dwE46/TmNW82Dx4Hpla7VX9663Ny0qi9rECFyTXRLg0Czy8f2qEJpdHWt1C0DrTjSuU8687eG+pbR/MtwJ7/fQJNI68I/RnQchTsKNDfVXepBs6812VmYos8KIKdGKLprTJZ4DDRhhVBeYjKbRa86iQlk0AINnXZFdxkqIkiyCzOAGFwoBuUL/Hsqn5pb2c50YTyWsU6Wvy5Zc9yNfx3TMZVJgMKe8TtbLjunUdjqu4qxWK4F7tVdFZ392s9+q3McTMs3svhqWzvu5xkjKt6Mc9/28ew4ABIJky2ymE7rRHahJzeTWoqV/x/jT+nt9DWv/H+VfPft1n0f9K/meaywz+ntx0oG/6V/n2ncCdbZABHWuQfDzk1L4Zz75t17oppOM4QjWM3GcHjlef9Ob+l4Y+/cDjzBho7azMcwnUU4xA+HlHe7g3iEjfkArAtok1lQYCctPiX1H4rj3h248L48krVmQM5uhO49orogwLtegS+6UKeOqAHx6xysF7lkL192jO0Bry75i3lQvmE+CSuimP/rzbc1R7ocwvwxobudLo/V2nmrtQ7aePhCaqkxH3BxrZQ7AYJQTonC8RLvK7y6GvvEf1dCDY/qeS2hm8rDGm/N/EwwtofVaBeJFa1di8T8uubGygLcxtsZSWTITi1UNC3BIU9XaveE5ARrCE3i/AASjVrUzEKYySJEK7bfPfOC8XNWnF35BIyCwRoH9hoEP8/VnrfwFvh+Q5bvrPva3gvO3emPxkDz+rNV/8rm7ca167uGOMOPX5v38MZmbdt0wJA4YV9vdIeM/avhu6ce3wwpc7TIyMgbvWZwVzFcQPbAGB/w8/YAAAAAKjDw92g1WdPkbPJtn0H2rLltIKIGwz+rwwvnxOxQE7A+IGBD9qibw4yTxIxE6VjlxX89tKdVmp/tveILDBOqbEWMIiNLKKZYK1rx6LMsQOASAVrExrGYmOo0IISSJjbuet14Jr1els6NuHxoICnAqSHf0MFyu18aaHydHZy5E7e/5e39ofZNUfq4J4VfvksKMQlvkx0MYMbNTMDFgKENOMYxIxiRjv39X3WyiSkuW7UdGqCmoQUFBQUF/4v/F+KmogrwgZg7iMmTM07zeplqxPirpfdsDOCYRDz5dnUgYq7bJe0C6ZzCBYzLxlD79qQ/5GeWtIqlWNVJ4ILznGPH9leUucWcknRLc8kapYvUBwARQVrCybIxUOThG8Kjt385vznLhadLuLAQpmoMAy7hum7vvqi2O2iotOUkz9cJwlveq848D7Ifv9/H4Pv/1PR8PblMVzqCO7yDTNbbMemMs4JHmEpC1dioWtHpPgBF7qzlSYsPupK5FuikIlvPfgSQpJ5TwHmW11KL2RZU2z9pjm2/bGwtEo/NQe5RQ1BY+a+tifT+10rSTFHW6g4OpFRumRZoTlazfTKYdhaQkEwJsjB9NoxDAAcXW6mPPK4HABGBWsNQIMEJgpeJXDt6Z79tHft00vVgRSAgsW1SUtPUoWs7HqzSc6xv/D8w/oLE6sOWTt/5COT4To2SgSmtFHZKj4XYmalkCPBbRWHaJfGeUnenMtWttxbvYVOvsJlN9AhMsBAzqxUuxlp0tduT4hdhl4UdzsWa0zrQyQYgW3j09a0HsdcOxOgkWmzw22j0dP8UqBmzJxlczG4qaDlilklaeSN5PISvTwwS5/ZHLDsnDJ2xTzOr9OniGKOCHkiWw1yysq73tEDgEeFakWUgwNiIIQoIioEiiZIp32dmrY0k06lC2IUBcpdr8uyym0C+tm0uuwpqzLq6pmTd6MSI2X3/2M0WQ+H8wqCdKpHzp6xzUmhhudzZd1XMixOaELFTatEjYa9nks8LZNNDRUIo9ZbgDIFpXaD0uzsLastI94EqsyM5g/Wyx5uVWw+N86yk+87bFlEqKm4MTQaz2zvVSzM1ZEppAbNSqb4/KghK1i8S2NP1LCdWC+JiIRfa7T5I7C1rVluhh0JyCW6engAcABAhWsMJsiEYpDMJFQgnZIfLv8t3OrX9LNkFAqG+glS9egZHrY5d5ve6+4fUjMv1h8nwmTg9t3aTs/XnFmKSA34upPCcQ04unDAGDtBkfDpGecMKK4yEz3M8TKBwwBTJaNdsJokOLqoYcjnP4D67Sq1J1Zk63OcK7OralT2jmtoL6j4PbSz3N+Nw7iLwq0xgFqaxB2mWRcEEUx2d1iViKjdgera+Q1uSySOgs3En3lwUTQnFWWnHKlcNgD2et3mtb17AOAAQQVrrAkETxGbkPtzt4PZq9eZ250AIhRYomzVMeR3D3Ni+i9ho3rcH5D+hGEEOTe40Bxzm3thvVOpc0/A+i0t2V0jjLz6oJkHghOycvbcY0S7nz+x4ZAtU5m4fzB9/7UyuH0aVBEwAzUQCGiDZ3YTWWgw5MIQOsg1hByiB0kCgwAPyHabDI4rgETAsxUt0+WMuF2VsvqRJKnBs6X+bdJla5/ae9Gz1gVOvW/C3mPAl+FKJ+htz8M5Qy85glEzrZLbCJYO9dgUs75KQA6N7r3MkRQgIEEjhsk7TUM/Pahik+3vbWKJhueONh2mA23Y02z6SWiBwEKFamEOBMUXAYQqed59lcttNJ1nF3rosyg9LlVIiGQ/4C9pjBzLVSSAKmkrEMUiTgflfbvHILa2WdjRLN8Z3HXHzqPKqu6pkUGyGho7W9osj4YduDu7u7u7u/8BjRNeNk/hgtkp+mLERGOtfhPyU2U7Rh1/t9Lft+G9gNeNTfha9YSSDXry7I01QtNlTRwiGrrryz8kQOAAQIVhJSA+B500MSlyrhYVDwAB815rOVLaRosDbLPGU+iprDZq7UoNgrWcA==';

var ASSETS = {
  image: {
    'ground': '../assets/ground.png',
    'background': '../assets/background.png',
    'tube1': '../assets/tube1.png',
    'tube2': '../assets/tube2.png',
    'character': '../assets/{0}.png'.format(QUERY.c || 'tomapiyo'),
  },

  spritesheet: {
    'character': '../assets/character.tmss',
  },

  sound: {
    'touch': TOUCH_SE,
    'damage': '../assets/damage.mp3'
  },
};


phina.define('MainScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });

    this.fromJSON({
      children: {
        bg: {
          className: 'Sprite',
          arguments: 'background',
          y: -FLOOR_HEIGHT,
          originX: 0,
          originY: 0,
        },
        tubeGroup: {
          className: 'DisplayElement',
        },
        scoreBoxGroup: {
          className: 'DisplayElement',
        },
        floor: {
          className: 'Floor',
          y: SCREEN_HEIGHT,
        },
        scoreLabel: {
          className: 'Label',
          text: '999',
          x: this.gridX.center(),
          y: this.gridX.span(1),
          fontSize: 32,
          fill: 'white',
          stroke: 'black',
          strokeWidth: 8,
        }
      },
    });

    this.score = 0;
    this.isStart = false;

    this.player = Player().addChildTo(this);
    this.player.setPosition(this.gridX.span(2), this.gridY.center());

    this.onpointstart = function() {
      if (!this.isStart) {
        this.player.physical.gravity.set(0, 1);
        this.isStart = true;
      }

      this.player.fly();
      SoundManager.play('touch');
    };

    this.player.onscreenout = this.hit.bind(this);
    this.player.onfall = this.gameover.bind(this);
  },

  update: function(app) {
    if (!this.isStart) {
      this.player.y = this.gridY.center();
      return ;
    }

    if (app.frame % 30 === 0) {
      this.createTube();
    }

    // スコアボックスとの衝突判定
    this.scoreBoxGroup.children.each(function(child) {
      if (this.player.hitTestElement(child)) {
        child.remove();
        this.score += 1;
      }
      else {
      }
    }, this);
    // チューブとの衝突判定
    this.tubeGroup.children.each(function(child) {
      if (this.player.hitTestElement(child)) {
        this.hit();
        this.update = null;
      }
    }, this);
  },

  hit: function() {
    this.tubeGroup.sleep();
    this.scoreBoxGroup.sleep();
    this.floor.sleep();
    this.player.fall();

    SoundManager.play('damage');
  },

  gameover: function() {

    var dialog = GameOverDialog({
      score: this.score,
    });
    this.app.pushScene(dialog);

    dialog.onexit = function() {
      this.exit('main');
    }.bind(this);
  },

  createTube: function() {
    var base = Math.randint(180, 360);
    var tube1 = Tube(1).addChildTo(this.tubeGroup);
    var tube2 = Tube(2).addChildTo(this.tubeGroup);

    tube1.left = this.gridX.width;
    tube2.left = this.gridX.width;

    tube1.originY = 1;
    tube2.originY = 0;
    tube1.y = base - SCORE_BOX_HEIGHT/2;
    tube2.y = base + SCORE_BOX_HEIGHT/2;

    // スコアボックスを生成
    var scoreBox = ScoreBox().addChildTo(this.scoreBoxGroup);
    scoreBox.left = this.gridX.width;
    scoreBox.y = base;
  },

  _accessor: {
    score: {
      get: function() { return this._score; },
      set: function(v) {
        this._score = v;
        this.scoreLabel.text = v;
      }
    }
  }
});

phina.define('Floor', {
  superClass: 'PlainElement',

  init: function() {
    this.superInit();

    this.canvas.width = SCREEN_WIDTH+64;
    this.canvas.height = FLOOR_HEIGHT;
    this.originX = 0;
    this.originY = 1;
    this.padding = 0;

    this.render();

    this.x = 0;
  },
  render: function() {
    var c = this.canvas;
    var ground = AssetManager.get('image', 'ground');
    var count = SCREEN_WIDTH/TILE_WIDTH+1;
    (count).times(function(i) {
      c.context.drawImage(ground.domElement, i*TILE_WIDTH, 0, TILE_WIDTH, FLOOR_HEIGHT);
    });
  },
  update: function() {
    this.x-=SPEED;

    if (this.x < -TILE_WIDTH) {
      this.x = 0;
    }
  }
});

phina.define('Player', {
  superClass: 'DisplayElement',

  init: function(index) {
    this.superInit({
      width: 32,
      height: 32,
    });

    this.sprite = Sprite('character').addChildTo(this);
    this.sprite.anim = FrameAnimation('character').attachTo(this.sprite);
    this.sprite.anim.gotoAndPlay('fly');

    this.lock = false;
  },

  update: function() {
    this.rotation = this.physical.velocity.y*2+5;

    if (this.bottom > FLOOR_Y) {
      this.bottom = FLOOR_Y;
      this.rotation = 0;
      this.sprite.anim.gotoAndPlay('die');
      this.flare('fall');
    }

    if (!this.lock && this.bottom < 0) {
      this.flare('screenout');
    }
  },

  fly: function() {
    if (this.lock) return ;
    this.physical.force(0, -12);
  },

  fall: function() {
    this.lock = true;
    this.physical.force(0, -5);

    this.sprite.anim.gotoAndPlay('damage');
  },
});

phina.define('Tube', {
  superClass: 'Sprite',

  init: function(type) {
    this.superInit('tube' + type);
  },
  update: function() {
    this.x-=SPEED;

    if (this.right < 0) {
      this.remove();
    }
  }
});

phina.define('ScoreBox', {
  superClass: 'DisplayElement',

  init: function() {
    this.superInit({
      width: 40,
      height: SCORE_BOX_HEIGHT,
    });
  },
  update: function() {
    this.x-=SPEED;

    if (this.right < 0) {
      this.remove();
    }
  }
});


phina.define('GameOverDialog', {
  superClass: 'DisplayScene',

  init: function(options) {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });

    this.backgroundColor = 'rgba(0, 0, 0, 0.2)';

    this.fromJSON({
      children: {
        frame: {
          className: 'RectangleShape',
          x: this.gridX.center(),
          y: this.gridY.center(),
          cornerRadius: 6,
          fill: 'hsl(50, 100%, 90%)',
          stroke: 'brown',
          width: 320,
          height: 220,
        },
        scoreText: {
          className: 'Label',
          fontSize: 22,
          x: this.gridX.center(),
          y: this.gridY.center(-1),
          fill: '#CFA551',
          text: 'SCORE',
        },
        scoreLabel: {
          className: 'Label',
          fontSize: 32,
          x: this.gridX.center(),
          y: this.gridY.center(1),
          fontSize: 48,
          fill: 'white',
          stroke: 'black',
          strokeWidth: 8,
          text: '4321',
        },
        btnOK: {
          className: 'Button',
          x: this.gridX.center(-1.5),
          y: this.gridY.center(4),
          width: this.gridX.span(2.5),
          height: this.gridY.span(1.5),
          fill: 'orange',
          stroke: 'brown',
          text: 'OK',
          fontSize: 26,
        },
        btnShare: {
          className: 'Button',
          x: this.gridX.center(1.5),
          y: this.gridY.center(4),
          width: this.gridX.span(2.5),
          height: this.gridY.span(1.5),
          fill: 'orange',
          stroke: 'brown',
          text: 'SHARE',
          fontSize: 26,
        },
      }
    });

    this.btnOK.onpush = function() {
      this.exit();
    }.bind(this);
    this.btnShare.onclick = function() {
      var url = Twitter.createURL({
        text: 'phina.js のマスコットキャラ素材が一通り揃ったので記念にゲーム作りました♪ SCORE: {score}'.format(options),
        hashtags: 'js,game,phina_js',
        url: location.href,
      });
      window.open(url, 'share window', 'width=480, height=320');
    }.bind(this);

    this.score = 0;
    this.tweener
      .to({score: options.score})
      ;
  },

  update: function() {
    this.scoreLabel.text = this.score|0;
  },
});


phina.main(function() {

  var app = GameApp({
    title: 'phinappy bird',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    assets: ASSETS,
    startLabel: location.search.substr(1).toObject().scene || 'main',
    startLabel: 'main',
  });

  app.enableStats();

  app.run();
  
});


