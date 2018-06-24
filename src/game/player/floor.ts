import Sprite from "../base/sprite";
// import DataBus from "../dataStatus/databus";
// 玩家相关常量设置
const MAN_IMG_SRC = "./img/floor.png";
// 剪切的宽高
const MAN_WIDTH = 200;
const MAN_HEIGHT = 32;

export default class Man extends Sprite {
  public frame = 0;
  // private dataBus = new DataBus();
  constructor() {
    super(MAN_IMG_SRC, MAN_WIDTH, MAN_HEIGHT);
    // 动画剪切位置
    this.sx = 0;
    this.sy = 0;
    // 显示到屏幕的宽高
    this.width = 100;
    this.height = 16;
    // 显示屏幕的位置
    this.x = 0;
    this.y = 0;
  }
  // 更新动画
  public update() {
    this.frame += 1;
    this.frame %= 21;
  }
}
