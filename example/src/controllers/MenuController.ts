module example {

  export class MenuController {

    protected gui;

    start() {
      var theme = bosco.config.theme;
      
      this.gui = EZGUI.create(bosco.config.ezgui.menu, theme);
      this.gui.on('play', (event, btn) => bosco.controller('game'));
      this.gui.on('options', (event, btn) => bosco.controller('game'));
      bosco.viewContainer.addChild(this.gui);

    }

    stop() {
      bosco.viewContainer.removeChild(this.gui);
    }

    update(delta:number) {
    }
  }
}