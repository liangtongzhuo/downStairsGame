import Sprite from "../base/sprite";
import DataBus from "../dataStatus/databus";
// 玩家相关常量设置
const MAN_IMG_SRC = "./img/man.png";
// 剪切的宽高
const MAN_WIDTH = 64;
const MAN_HEIGHT = 64;

export default class Man extends Sprite {
  public frame = 0;
  private dataBus = new DataBus();

  constructor() {
    super(MAN_IMG_SRC, MAN_WIDTH, MAN_HEIGHT);
    // 动画剪切位置
    this.sx = 0;
    this.sy = 0;
    // 显示到屏幕的宽高
    this.width = 40;
    this.height = 40;
    // 显示屏幕的位置
    this.x = (window.innerWidth - this.width) / 2;
    this.y = 0;
  }

  // 更新动画
  public update() {
    this.frame += 1;
    this.frame %= 21;

    if (this.dataBus.man.direction === 1) {
      if (this.frame === 10) {
        this.sx = 3 * MAN_WIDTH;
      }
      if (this.frame === 20) {
        this.sx = 4 * MAN_WIDTH;
      }
    } else if (this.dataBus.man.direction === 3) {
      if (this.frame === 10) {
        this.sx = 5 * MAN_WIDTH;
      }
      if (this.frame === 20) {
        this.sx = 6 * MAN_WIDTH;
      }
    }
  }
}
