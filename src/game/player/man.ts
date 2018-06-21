import Sprite from "../base/sprite";

// 玩家相关常量设置 
const MAN_IMG_SRC = "./img/man.png";

const MAN_WIDTH = 64;
const MAN_HEIGHT = 64;

export default class Man extends Sprite {
  public frame = 0;
  constructor() {
    super(MAN_IMG_SRC, MAN_WIDTH, MAN_HEIGHT);
    // 动画剪切位置
    this.sx = 0;
    this.sy = 0;
    // 使用宽高
    this.width = 64;
    this.height = 64;
  }

  public update() {
    this.frame += 1;
    this.frame %= 21;

    if (this.frame === 10) {
      this.sx = 5 * MAN_WIDTH;
    }
    if (this.frame === 20) {
      this.sx = 6 * MAN_WIDTH;
    }
  }
  /**
   * 玩家响应手指的触摸事件
   * 改变人物的位置
   */
  public initEvent() {
    // console.log()
  }
}
