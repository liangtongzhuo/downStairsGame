import { BaseTool } from "../base/base-tool";
import DataBus from "../data-status/data-bus";
import Floor from "../player/floor";

export default class FloorModel {
  // 工厂方法，生成数据模型
  public static init(arr: any): FloorModel[] {
    const floorModels: FloorModel[] = [];
    arr.forEach((item: any) => {
      const model = new FloorModel(item.drawTime, item.widthRandom, item.type);
      floorModels.push(model);
    });
    return floorModels;
  }

  public drawTime = 0;
  public widthRandom = 0;
  public type = 0;
  public isUsed = false;

  constructor(drawTime: number, widthRandom: number, type: number) {
    this.drawTime = drawTime;
    this.widthRandom = widthRandom;
    this.type = type;
  }

  /**
   * 根据数据与当前时间创建显示对象
   */
  public createShow(dataBus: DataBus, currentDate: number) {
    if (
      this.drawTime > currentDate &&
      this.drawTime - 1000 < currentDate &&
      !this.isUsed
    ) {
      const floor = dataBus.pool.getItemByClass<Floor>("Floor", Floor);
      floor.init(
        this.widthRandom * (BaseTool.width - floor.width),
        BaseTool.height,
        this.type
      );
      this.isUsed = true;
      dataBus.floors.push(floor);
    }
  }
}
