import { BaseTool, Direction } from "../base/baseTool";
import Sprite from "../base/sprite";

// 相关常量设置
const IMG_SRC = "./img/man.png";
// 剪切的宽高
const WIDTH = 64;
const HEIGHT = 64;

export default class Man extends Sprite {
  public frame = 0;
  public horizontal: Direction.Stand;
  public point: {
    x: 0;
    y: 0;
  };
  public vertical: Direction.Down;
  // private xSpeed = 3;
  // private ySpeed = 2;
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
  }

  // 更新动画
  public update() {
    this.frame += 1;
    this.frame %= 21;

    this.horizontalFun();
    this.verticalFun();
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
