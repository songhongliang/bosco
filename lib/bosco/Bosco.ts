/**
 * Bosco.ts
 *
 * Game Shell
 *
 *     __  __         ___                            ___  ___
 *    / /_/ /  ___   / _ \___ _    _____ ____  ___  / _/ / _ )___  ___ _______
 *   / __/ _ \/ -_) / ___/ _ \ |/|/ / -_) __/ / _ \/ _/ / _  / _ \(_-</ __/ _ \
 *   \__/_//_/\__/ /_/   \___/__,__/\__/_/    \___/_/  /____/\___/___/\__/\___/
 *
 */
module bosco {

  declare var Stats;
  declare var viewContainer;
  declare var foreContainer;
  declare var dat;

  import Sprite = PIXI.Sprite;
  import Texture = PIXI.Texture;
  import Container = PIXI.Container;
  import SystemRenderer = PIXI.SystemRenderer;
  import Input = bosco.utils.Input;

  export enum ScaleType {
    FILL, // fill to fit screen
    FIXED // scale fixed size to fit the screen
  }

  export var config;
  export var delta:number;
  export var fps:number=0;

  /**
   * Load assets and start
   */
  export function start(config) {
    if (Properties && config.properties) {
      Properties.init(config.namespace, config.properties);
    }

    for (var asset in config.assets) {
      PIXI.loader.add(asset, config.assets[asset]);
    }
    PIXI.loader.load((loader, resources) => new Game(config, resources));
  }

  class DummyStats {
    begin() {}
    end() {}
  }
  export class Game {


    stage:Container;
    sprites:Container;
    fore:Container;
    renderer:SystemRenderer;
    stats;
    config;
    resources;
    controllers;
    previousTime:number;
    private totalFrames:number=0;
    private elapsedTime:number=0;

    /**
     * Create the game instance
     * @param resources
     */
    constructor(config, resources) {

      this.config = bosco.config = config;
      this.resources = resources;
      this.previousTime = 0;
      var controllers = this.controllers = [];
      var renderer = this.renderer = PIXI.autoDetectRenderer(config.width, config.height, config.options);

      renderer.view.style.position = 'absolute';
      renderer.view.style.top = '0px';
      renderer.view.style.left = '0px';

      var stage = this.stage = new Container();
      viewContainer = this.sprites = new Container();
      foreContainer = this.fore = new Container();

      this.resize();

      document.body.appendChild(renderer.view);

      if (config.stats) {
        var stats = this.stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
      }

      window.addEventListener('resize', this.resize, true);
      window.onorientationchange = this.resize;
      stage.addChild(this.sprites);
      stage.addChild(this.fore);

      for (var className of config.controllers) {
        var Class:any = window[config.namespace][className];
        controllers.push(new Class());
      }

      for (var controller of controllers) {
        controller.start();
      }
      requestAnimationFrame(this.update);

    }

    /**
     * Game Loop
     * @param time
     */
    update = (time:number) => {
      var stats = this.stats;
      if (stats) stats.begin();

      var temp = this.previousTime || time;
      this.previousTime = time;
      var delta = bosco.delta = (time - temp) * 0.001;

      this.totalFrames++;
      this.elapsedTime += delta;
      if (this.elapsedTime > 1) {
        bosco.fps = this.totalFrames;
        this.totalFrames = 0;
        this.elapsedTime = 0;
      }

      var controllers = this.controllers;
      for (var i=0, l=controllers.length; i<l; i++) {
        controllers[i].update(delta);
      }
      this.renderer.render(this.stage);
      Input.update();
      TWEEN.update();
      requestAnimationFrame(this.update);

      if (stats) stats.end();
    };


    /**
     * Resize window
     */
    resize = () => {
      var ratio = Math.min(window.innerWidth/this.config.width,
        window.innerHeight/this.config.height);

      this.config.scale = ratio;
      this.stage.scale.x = this.stage.scale.y = ratio;
      this.renderer.resize(Math.ceil(this.config.width * ratio),
        Math.ceil(this.config.height * ratio));


    };

  }
}

