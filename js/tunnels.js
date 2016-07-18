(function() {
  /**
   * @constructor TunnelsGame An instance of the Tunnels game.
   * @param {HTMLCanvasElement} canvas The canvas to render the game on.
   * @param {LevelPlan} levelPlans The plans for the levels.
   * @param {object=} opt_config Optional game setting configuration.
   */

  function TunnelsGame(canvas, levelPlans, opt_config) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.levelPlans = levelPlans;
    this.config = opt_config || this.config;

    this.resize();
    this.init();
  }

  TunnelsGame.prototype = {
    canvasWidth: 800,
    canvasHeight: 500,

    config: {

    },

    resize: function() {

    }
  };
})();