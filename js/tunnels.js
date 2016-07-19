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
})();