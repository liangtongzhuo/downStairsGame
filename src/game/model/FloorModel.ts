import { BaseTool } from "../base/baseTool";
import DataBus from "../dataStatus/dataBus";
import Floor from "../player/Floor";

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
   * 根据数据与当前时间创建显示地板对象
   */
  public createShow(dataBus: DataBus) {
    if (!dataBus.map.y) return;
    const y = this.y - dataBus.map.y;
    if (y > 0 && y < BaseTool.height && !this.isUsed) {
      this.isUsed = true;
      const floor = dataBus.pool.getItemByClass<Floor>("Floor", Floor);
      floor.init(
        this.widthRandom * (BaseTool.width - floor.width),
        y,
        this.type
      );
      dataBus.floors.push(floor);
    }
  }
}
