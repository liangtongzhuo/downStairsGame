/**
 * 游戏基础的精灵类
 */
export default class Sprite {
  public visible = true;
  // 剪切位置
  public sx: number;
  public sy: number;
  // 控制切出来的大小
  public swidth: number;
  public sheight: number;
  // 画布上位置
  public x = 0;
  public y = 0;
  // 要使用的宽高
  public width: number;
  public height: number;

  private img = new Image() as HTMLImageElement;

  constructor(imgSrc = "", swidth = 0, sheight = 0) {
    this.img.src = imgSrc;
    this.swidth = swidth;
    this.sheight = sheight;
  }

  /**
   * 将精灵图绘制在canvas上
   */
  public drawToCanvas(ctx: CanvasRenderingContext2D) {
    if (!this.visible) {
      return;
    }
    if (this.sx || this.sx === 0) {
      ctx.drawImage(
        this.img,
        this.sx,
        this.sy,
        this.swidth,
        this.sheight,
        this.x,
        this.y,
        this.width,
        this.height
      );
    } else {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }

  /**
   * 简单的碰撞检测定义：
   * 另一个精灵的中心点处于本精灵所在的矩形内即可
   * @param{Sprite} sp: Sptite的实例
   */
  public isCollideWith(sprite: any) {
    const sp = sprite as this;
    const spX = sp.x + sp.width / 2;
    const spY = sp.y + sp.height / 2;

    if (!this.visible || !sp.visible) {
      return false;
    }

    return !!(
      spX >= this.x &&
      spX <= this.x + this.width &&
      spY >= this.y &&
      spY <= this.y + this.height
    );
  }
}
