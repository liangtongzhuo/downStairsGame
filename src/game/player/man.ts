import { BaseTool, Direction } from "../base/baseTool";
import Sprite from "../base/sprite";
import DataBus from "../dataStatus/dataBus";
import Floor from "./Floor";

// 相关常量设置
const IMG_SRC = "./img/man.png";
// 剪切的宽高
const WIDTH = 64;
const HEIGHT = 64;

export default class Man extends Sprite {
  public frame = 0;
  private dataBus = new DataBus();
  private xSpeed = 3;
  private ySpeed = 2;
  // 暂持存储状态，强制更新画面用
  private horizontalStatus: Direction = Direction.Stand;

  constructor() {
    super(IMG_SRC, WIDTH, HEIGHT);
    // 动画剪切位置
    this.sx = 0;
    this.sy = 0;
    // 显示到屏幕的宽高
    this.width = 40;
    this.height = 40;
    // 显示屏幕的位置
    this.x = (BaseTool.width - this.width) / 2;
    this.y = 0;
  }

  // 更新动画
  public update() {
    this.frame += 1;
    this.frame %= 21;

    this.horizontal();
    this.vertical();

    this.dataBus.man.vertical = Direction.Down;
    this.dataBus.man.point.x = this.x;
    this.dataBus.man.point.y = this.y;
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
    // 更新状态瞬间刷新界面
    if (this.horizontalStatus !== this.dataBus.man.horizontal) {
      if (this.dataBus.man.horizontal === Direction.Left) this.sx = 3 * WIDTH;
      if (this.dataBus.man.horizontal === Direction.Right) this.sx = 5 * WIDTH;
    }
    this.horizontalStatus = this.dataBus.man.horizontal;

    if (this.dataBus.man.horizontal === Direction.Left) {
      if (this.x > 0) this.x -= this.xSpeed;
      if (this.frame === 10) this.sx = 3 * WIDTH;
      if (this.frame === 20) this.sx = 4 * WIDTH;
    } else if (this.dataBus.man.horizontal === Direction.Right) {
      if (this.x < BaseTool.width - this.width) this.x += this.xSpeed;
      if (this.frame === 10) this.sx = 5 * WIDTH;
      if (this.frame === 20) this.sx = 6 * WIDTH;
    }
  }
  /**
   * 上下移动
   */
  private vertical() {
    // 向上
    if (this.dataBus.man.vertical === Direction.Top) {
      this.sx = 2 * WIDTH;
      // 向下
    } else if (this.dataBus.man.vertical === Direction.Down) {
      this.y += this.ySpeed;
      this.sx = 1 * WIDTH;
      // 站立
    } else if (this.dataBus.man.vertical === Direction.Stand) {
      this.y--;
      if (this.dataBus.man.horizontal === Direction.Stand) this.sx = 0 * WIDTH;
    }
  }
}
