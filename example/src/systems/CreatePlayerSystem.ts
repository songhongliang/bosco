module example {

  import Pool = entitas.Pool;
  import Group = entitas.Group;
  import Entity = entitas.Entity;
  import Matcher = entitas.Matcher;
  import Exception = entitas.Exception;
  import TriggerOnEvent = entitas.TriggerOnEvent;
  import IInitializeSystem = entitas.IInitializeSystem;
  import ISetPool = entitas.ISetPool;

  export class CreatePlayerSystem implements IInitializeSystem, ISetPool {
    protected pool:Pool;

    /**
     * Create the Player
     */
    public initialize() {
      this.pool.createEntity("Player")
        .addResource("Player")
        .addPosition(100, 0)
        .addMove(0, 25)
        .setAcceleratable(true)
        .setPlayer(true)
        .addScore(0);
    }
    
    public setPool(pool:Pool) {
      this.pool = pool;
    }
  }
}