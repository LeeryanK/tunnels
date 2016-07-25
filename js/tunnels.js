(function() {
  /**
   * @constructor TunnelsGame An instance of the Tunnels game.
   * @param {HTMLElement} parentElement The parent element to contain the
   *   elements used in the game.
   * @param {object=} opt_config Optional game setting configuration. This
   *   includes but is not limited to level data and game controls.
   */

  function TunnelsGame(parentElement, opt_config) {
    this.parentElement = parentElement;
    this.config = opt_config || this.getDefaultConfig();
    this.input = new KeyboardInput(this.config.gameControls);

    this.addInitialElements();
    this.resizeCanvas();
    window.addEventListener('resize', this.resizeCanvas.bind(this));
    this.init();
  }

  TunnelsGame.prototype.canvasWidth = 800;
  TunnelsGame.prototype.canvasHeight = 500;
  TunnelsGame.prototype.canvasWidthToHeightRatio = 8 / 5;

  /**
   * @enum Screens The screens there are.
   * Use intervals of 100 because there may be many screens required for one
   *   purpose (e.g., the tutorial).
   */
  TunnelsGame.prototype.Screens = {
    START_SCREEN: 0,
    TUTORIAL_0: 100,
    LEVEL_SELECT_0: 200,
    LEVEL_PLAY: 300
  };

  TunnelsGame.prototype.backgroundScreenURLs = {
    START_SCREEN: 'images/backgrounds/start.png'
  };

  TunnelsGame.prototype.getDefaultConfig = function() {
    return {
      // FIXME -- Add the config data.
    };
  };

  TunnelsGame.prototype.addInitialElements = function() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
    this.ctx = this.canvas.getContext('2d');
    this.parentElement.appendChild(this.canvas);
  };

  TunnelsGame.prototype.resizeCanvas = function() {
    var windowWidthToHeightRatio = window.innerWidth / window.innerHeight;

    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;

    this.canvas.style.padding = 0;
    this.canvas.style.border = 0;
    this.canvas.style.margin = 0;
    this.canvas.style.position = 'absolute';

    if (windowWidthToHeightRatio > this.canvasWidthToHeightRatio) {
      var scaledWidth = (window.innerWidth *
        this.canvasWidthToHeightRatio) + 'px';
      var remainingWidth = window.innerWidth - scaledWidth;

      this.canvas.style.height = window.innerHeight + 'px';
      this.canvas.style.width = scaledWidth;
      this.canvas.style.top = 0;
      this.canvas.style.left = ((remainingWidth / 2)|0) + 'px';
    } else {
      var scaledHeight = (window.innerHeight /
        this.canvasWidthToHeightRatio) + 'px';
      var remainingHeight = window.innerHeight - scaledHeight;

      this.canvas.style.width = window.innerWidth + 'px';
      this.canvas.style.height = scaledHeight;
      this.canvas.style.left = 0;
      this.canvas.style.top = ((remainingHeight / 2)|0) + 'px';
    }
  };

  TunnelsGame.prototype.init = function() {
    this.level = 0;
    this.setBackgroundImage('START_SCREEN');
    this.navOptions = this.createVerticalOptionList([
      {
        text: 'Play',
        ifChosen: function() {
          this.goToScreen('LEVEL_SELECT_0');
        }.bind(this)
      },
      {
        text: 'Help',
        ifChosen: function() {
          this.goToScreen('TUTORIAL_0');
        }.bind(this)
      }
    ]);
  };

  /**
   * createVerticalOptionList() Creates a vertical list of buttons that the
   *   user can click or tap.
   * @param {Array.<{text: string, ifChosen: function}>} options
   *   The list of buttons.
   * @return {void}
   */
  TunnelsGame.prototype.createVerticalOptionList = function(options) {

  };

  /**
   * goToScreen() Goes to a certain screen and performs all the predefined
   *   set up that is needed.
   * @param {string} screen The screen to go to.
   * @return {void}
   */
  TunnelsGame.prototype.goToScreen = function(screen) {

  };

  /**
   * setBackgroundImage() Sets the background image of the game.
   * @param {string} screen Which screen's background image to use.
   * @return {void}
   */
  TunnelsGame.prototype.setBackgroundImage = function(screen) {
    var image = document.createElement('img');
    image.src = this.backgroundImageURLs[screen];
    this.ctx.drawImage(image, 0, 0, 800, 500);
  };

  /**
   * @constructor GameControls The key codes for which keys to which actions.
   * @param {up: {key: string, code: number}, down: {key: string, code: number,
   *   left: {key: string, code: number}, right: {key: string, code: number},
   *   shift: {key: string, code: number}, attack1: {key: string, code: number},
   *   attack2: {key: string, code: number}, action1: {key: string, code:
   *   number}, action2: {key: string, code: number}}
   *   controls
   *   The key data for the controls in the form of
   *   {key: string, code: number}.
   */
  function GameControls(controls) {
    var i, control, myControl;

    for (i in controls) {
      control = controls[i];

      if (typeof control.key === 'string' && typeof control.code === 'number') {
        myControl = this[i] = {};
        myControl.key = control.key;
        myControl.code = control.code;
      }
    }
  }

  GameControls.leftyControls = {
    up: {
      key: 'w',
      code: 87
    },

    down: {
      key: 's',
      code: 83
    },

    left: {
      key: 'a',
      code: 65
    },

    right: {
      key: 'd',
      code: 68
    },

    shift: {
      key: 'q',
      code: 81
    },

    attack1: {
      key: 'e',
      code: 69
    },

    attack2: {
      key: 'r',
      code: 82
    },

    action1: {
      key: 'f',
      code: 70
    },

    action2: {
      key: 'c',
      code: 67
    }
  };

  GameControls.rightyControls = {
    up: {
      key: 'i',
      code: 73
    },

    down: {
      key: 'k',
      code: 75
    },

    left: {
      key: 'j',
      code: 74
    },

    right: {
      key: 'l',
      code: 76
    },

    shift: {
      key: 'p',
      code: 80
    },

    attack1: {
      key: 'u',
      code: 85
    },

    attack2: {
      key: 'y',
      code: 89
    },

    action1: {
      key: 'h',
      code: 72
    },

    action2: {
      key: 'n',
      code: 78
    }
  };

  /**
   * @constructor KeyboardInput An object which will hold booleans telling
   *   whether a key is being pressed.
   * @param {GameControls} controls The game controls to use.
   */
  function KeyboardInput(controls) {
    if (!(controls instanceof GameControls)) {
      throw new TypeError('The controls argument was not a GameControls object.');
    }

    this.detectors = {};

    function getFunctionToSetAllTriggeredDetectorsTo(value) {
      return (function(event) {
        for (var i in controls) {
          var control = controls[i];

          if (control.keyCode === event.keyCode || control.key === event.key) {
            this.detectors[i] = value;
          }
        }
      }).bind(this);
    }

    window.addEventListener('keydown',
        getFunctionToSetAllTriggeredDetectorsTo(true));
    window.addEventListener('keyup',
        getFunctionToSetAllTriggeredDetectorsTo(false));

    for (var i in controls) {
      this.detectors[i] = false;
    }
  }
})();