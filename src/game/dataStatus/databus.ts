/**
 * 全局状态管理器，单例
 */
import Floor from "../player/floor";
import Pool from "./pool";

enum Direction {
  Up = 0,
  Down,
  Left,
  Right
}
export default class DataBus {
  private static instance = new DataBus();
  public pool = new Pool();
  public floors: Floor[] = [];
  public man = {
    direction: Direction.Left
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
