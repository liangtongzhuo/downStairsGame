import Sprite from "../base/sprite";
// import DataBus from "../dataStatus/databus";
// 相关常量设置
const IMG_SRC = "./img/floor.png";
// 剪切的宽高
const WIDTH = 200;
const HEIGHT = 32;

export default class Floor extends Sprite {
  public frame = 0;
  // private dataBus = new DataBus();
  constructor() {
    super(IMG_SRC, WIDTH, HEIGHT);
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
  
  // 初始值
  public init(x = 0, y = 0, type = 0) {
    this.x = x;
    this.y = y;
    console.log(x, y, type);
  }

  // 更新动画
  public update() {
    this.frame += 1;
    this.frame %= 21;
  }
}
