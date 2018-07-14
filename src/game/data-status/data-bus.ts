/**
 * 全局状态管理器，单例
 */
import { Direction } from "../base/base-tool";
import FloorModel from "../model/floor-model";
import Floor from "../player/floor";
import Pool from "./pool";

export default class DataBus {
  private static instance = new DataBus();
  public pool = new Pool();
  public floors: Floor[] = [];
  public man = {
    horizontal: Direction.Stand,
    vertical: Direction.Down
  };
  public frame = 0;
  // 网络数据
  public netDataFloors: FloorModel[] = [];

  constructor() {
    return DataBus.instance;
  }

  /**
   * 总数据找出对象，加入缓存池
   */
  public floorAddPool(floor: Floor) {
    this.floors.forEach((item, index) => {
      if (item === floor) {
        this.floors.splice(index, 1);
        this.pool.recover("Floor", floor);
      }
    });
  }
}
