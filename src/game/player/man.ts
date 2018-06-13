import Sprite from "../base/sprite";

// 玩家相关常量设置
const MAN_IMG_SRC = "./img/man.png";

const MAN_WIDTH = 80;
const MAN_HEIGHT = 80;

export default class Man extends Sprite {
  constructor() {
    super(MAN_IMG_SRC, MAN_WIDTH, MAN_HEIGHT);
  }

  /**
   * 玩家响应手指的触摸事件
   * 改变人物的位置
   */
  public initEvent() {
    // console.log()
  }
}
