(function() {
  /**
   * @constructor TunnelsGame An instance of the Tunnels game.
   * @param {canvas: HTMLCanvasElement} elements
   *  The canvas argument is canvas to render the game on. TODO -- document other elements.
   * @param {Array.<LevelPlan>} levelPlans The plans for the levels.
   * @param {object=} opt_config Optional game setting configuration.
   */

  function TunnelsGame(elements, levelPlans, opt_config) {
    this.canvas = elements.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.levelPlans = levelPlans;
    this.config = opt_config || this.config;

    this.resizeCanvas();
    window.addEventListener('resize', this.resizeCanvas.bind(this));
    this.init();
  }

  TunnelsGame.prototype.canvasWidth = 800;
  TunnelsGame.prototype.canvasHeight = 500;
  TunnelsGame.prototype.canvasWidthToHeightRatio = 8 / 5;

  TunnelsGame.prototype.config = {

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

  };

  /**
   * @constructor GameControls The key codes for which keys to which actions.
   * @param {up: object=, down: object=, left: object=, right: object=,
   *   shift: object=, attack1: object=, attack2: object=, action1: object=,
   *   action2: object=} controls The key data for the controls in the form of
   *   {key: string, code: number}.
   */
  function GameControls(controls) {
    for (var i in controls) if (i in this) {
      this[i] = controls[i];
    }
  }

  GameControls.prototype = {
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
})();