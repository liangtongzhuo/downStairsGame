/**
 * 游戏基础的精灵类
 */
export default class Sprite {
  public visible: boolean;
  private img = new Image() as HTMLImageElement;
  private width: number;
  private height: number;
  private x: number;
  private y: number;

  constructor(
    imgSrc = "",
    width = 0,
    height = 0,
    x = 0,
    y = 0,
    visible = true
  ) {
    this.img.src = imgSrc;

    this.width = width;
    this.height = height;

    this.x = x;
    this.y = y;

    this.visible = visible;
  }

  /**
   * 将精灵图绘制在canvas上
   */
  public drawToCanvas(ctx: CanvasRenderingContext2D) {
    if (!this.visible) {
      return;
    }

    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
