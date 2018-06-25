/**
 * 全局状态管理器，单例
 */
import Floor from "../player/floor";
import Pool from "./pool";

enum Direction {
  Top = 0,
  Left,
  Right,
  Down,
  Stand
}

export default class DataBus {
  private static instance = new DataBus();
  public pool = new Pool();
  public floors: Floor[] = [];
  public man = {
    horizontal: Direction.Stand,
    vertical: Direction.Down
  };
  public frame = 0;
  constructor() {
    return DataBus.instance;
  }

  /**
   * 总数据找出对象，加入缓存池
   */
  public removeFloor(floor: Floor) {
    this.floors.forEach((item, index) => {
      if (item === floor) {
        this.floors.splice(index, 1);
        this.pool.recover("Floor", floor);
      }
    });
  }
}
