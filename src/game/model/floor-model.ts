import { BaseTool } from "../base/base-tool";
import DataBus from "../data-status/data-bus";
import Floor from "../player/floor";

export default class FloorModel {
  // 工厂方法，生成数据模型
  public static init(arr: any): FloorModel[] {
    const floorModels: FloorModel[] = [];
    arr.forEach((item: any) => {
      const model = new FloorModel(item.widthRandom, item.y, item.type);
      floorModels.push(model);
    });
    return floorModels;
  }

  public widthRandom = 0;
  public y = 0;
  public type = 0;
  // 标记这个 mode 已经渲染了
  public isUsed = false;

  constructor(widthRandom: number, y: number, type: number) {
    this.widthRandom = widthRandom;
    this.y = y;
    this.type = type;
  }

  /**
   * 根据数据与当前时间创建显示对象
   */
  public createShow(dataBus: DataBus, currentDate: number) {
    // 时间差
    const diffTime = currentDate - dataBus.date;
    // 计算 y 的位置，每 16.666 毫秒 1 像素
    const y = this.y - (diffTime / 16.6666) * 1;
    
    if (y > 0 && y < BaseTool.height && !this.isUsed) {
      const floor = dataBus.pool.getItemByClass<Floor>("Floor", Floor);
      floor.init(
        this.widthRandom * (BaseTool.width - floor.width),
        this.y,
        this.type
      );
      this.isUsed = true;
      dataBus.floors.push(floor);
    }
  }
}
