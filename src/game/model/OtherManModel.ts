import { BaseTool } from "../base/baseTool";
import DataBus from "../dataStatus/dataBus";
import OtherMan from "../player/OtherMan";
/**
 * 其它用户的数据
 */
export default class OtherManModel {
  /**
   * 创建或更新其它角色
   * @param dataBus 全局数据
   */
  public static createOtherManOrUpdate(dataBus: DataBus) {
    for (const userId in dataBus.users) {
      if (dataBus.users.hasOwnProperty(userId)) {
        const otherMan = dataBus.otherMans[userId];
        if (!otherMan) {
          dataBus.otherMans[userId] = dataBus.pool.getItemByClass<OtherMan>(
            "OtherMan",
            OtherMan
          );
        }
        const user = dataBus.users[userId];
        dataBus.otherMans[userId].x = user.x * BaseTool.width;
        dataBus.otherMans[userId].y = user.y - dataBus.map.y;
      }
    }
  }

  public userId: string;
  public x: number;
  public y: number;

  constructor(userId: string, x: number, y: number) {
    this.userId = userId;
    this.x = x;
    this.y = y;
  }
}
