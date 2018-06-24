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
  public floors: Floor[];
  public man = {
    direction: Direction.Left
  };
  public frame = 0;
  constructor() {
    return DataBus.instance;
  }

  /**
   * 边界判断回收 floor 进入对象池
   * 此后不进入帧循环
   */
  public removeFloor() {
    //
  }
}
