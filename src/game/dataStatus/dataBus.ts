/**
 * 全局状态管理器，单例
 */
import { Direction } from "../base/baseTool";
import FloorModel from "../model/FloorModel";
import OtherManModel from "../model/OtherManModel";
import Floor from "../player/Floor";
import OtherMan from "../player/OtherMan";
import Pool from "./pool";

export default class DataBus {
  private static instance = new DataBus();
  public pool = new Pool();
  public floors: Floor[] = [];
  // 地图坐标
  public map = {
    date: 0,
    y: 0
  };

  public man = {
    horizontal: Direction.Stand,
    point: {
      x: 0,
      y: 0
    },
    vertical: Direction.Down
  };
  public frame = 0;
  // 网络数据
  public netDataFloors: FloorModel[] = [];
  // 其他用户数据
  public users: {
    [key: string]: OtherManModel;
  } = {};
  // otherMan
  public otherMans: {
    [key: string]: OtherMan;
  } = {};
  // userId
  public userId = Date.now() + "";
  constructor() {
    return DataBus.instance;
  }

  /**
   * 更新当前地图 y 值
   */
  public update() {
    this.frame++;
    // 根据时间计算地图 Y
    if (this.map.date) {
      const currentDate = Date.now();
      const diffTime = currentDate - this.map.date;
      // 计算 y 的位置，每 16.666 毫秒 1 像素
      this.map.y = diffTime / 16.6666;
    }
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
  /**
   * TODO 总数据找出对象，加入缓存池
   */
  public otherManAddPool(floor: Floor) {
    this.floors.forEach((item, index) => {
      if (item === floor) {
        this.floors.splice(index, 1);
        this.pool.recover("Floor", floor);
      }
    });
  }
}
