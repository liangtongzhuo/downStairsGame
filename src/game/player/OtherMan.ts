import { BaseTool, Direction } from "../base/baseTool";
import Sprite from "../base/sprite";

// 相关常量设置
const IMG_SRC = "./img/man.png";
// 剪切的宽高
const WIDTH = 64;
const HEIGHT = 64;

export default class OtherMan extends Sprite {
  public frame = 0;
  public horizontal: Direction = Direction.Stand;
  public point: {
    x: 0;
    y: 0;
  };
  public vertical: Direction.Down;
  private xSpeed = 3;
  private ySpeed = 2;
  private xNear = 0;
  private yNear = 0;
  // 暂持存储状态，强制更新画面用
  // private horizontalStatus: Direction = Direction.Stand;

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
    // 存储渐进坐标
    this.xNear = this.x;
    this.yNear = this.y;
  }

  /**
   * 动画
   */
  public update() {
    this.frame += 1;
    this.frame %= 21;

    // 计算成渐进式，动画看起来顺畅
    this.computeNearXY();
    this.horizontalFun();
    this.verticalFun();
  }

  /**
   * 计算 XY 渐进式坐标
   */
  private computeNearXY() {
    const xNear = this.x - this.xNear;
    let xDistance;
    if (xNear >= 0) {
      xDistance = xNear < this.xSpeed ? xNear : this.xSpeed;
    } else {
      xDistance = -this.xSpeed < xNear ? xNear : -this.xSpeed;
    }
    this.x = xDistance + this.xNear;
    this.xNear = this.x;

    const yNear = this.y - this.yNear;
    const yDistance = yNear < this.ySpeed ? yNear : this.ySpeed;
    this.y = yDistance + this.yNear;
    this.yNear = this.y;
  }
  /**
   * 水平移动
   */
  private horizontalFun() {
    console.log();
  }
  /**
   * 上下移动
   */
  private verticalFun() {
    console.log();
  }
}
