import Sprite from "../base/sprite";
import DataBus from "../dataStatus/databus";
import Floor from "./floor";

// 相关常量设置
const IMG_SRC = "./img/man.png";
// 剪切的宽高
const WIDTH = 64;
const HEIGHT = 64;

export default class Man extends Sprite {
  public frame = 0;
  private dataBus = new DataBus();
  private xSpeed = 4;
  private ySpeed = 2;

  constructor() {
    super(IMG_SRC, WIDTH, HEIGHT);
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

    this.horizontal();
    this.vertical();

    this.dataBus.man.vertical = 3;
  }
  /**
   * 地板碰撞
   * @param{Floor} floor: Floor 的实例
   */
  public collisionDetectionFloor(floor: Floor) {
    if (!this.visible || !floor.visible) return false;

    return !!(
      floor.y <= this.y + this.height &&
      floor.y + floor.height >= this.y + this.height &&
      floor.x <= this.x + this.width &&
      floor.x + floor.width >= this.x
    );
  }
  /**
   * 水平移动
   */
  private horizontal() {
    if (this.dataBus.man.horizontal === 2) {
      if (this.x > 0) this.x -= this.xSpeed;
      if (this.frame === 10) this.sx = 3 * WIDTH;
      if (this.frame === 20) this.sx = 4 * WIDTH;
    } else if (this.dataBus.man.horizontal === 3) {
      if (this.x < window.innerWidth - this.width) {
        this.x += this.xSpeed;
      }

      if (this.frame === 10) this.sx = 5 * WIDTH;
      if (this.frame === 20) this.sx = 6 * WIDTH;
    }
  }
  /**
   * 上下移动
   */
  private vertical() {
    if (this.dataBus.man.vertical === 1) {
      // 向上
      this.sx = 2 * WIDTH;
    } else if (this.dataBus.man.vertical === 3) {
      // 向下
      this.y += this.ySpeed;
      this.sx = 1 * WIDTH;
    } else if (this.dataBus.man.vertical === 4) {
      // 站立
      this.y--;
      if (this.dataBus.man.horizontal === 4) this.sx = 0 * WIDTH;
    }
  }
}
