import Man from "./player/man";

/**
 * 游戏主函数
 */
export default class Main {
  private canvas = document.getElementById("canvas") as HTMLCanvasElement;
  private ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;

  private man = new Man();

  // 开始
  public start() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.loop();
  }

  // 重新开始
  // private restart() {
  //   console.log(666)
  // }

  // 全局碰撞检测
  // private collisionDetection() {
  //   console.log(666)
  // }

  // 游戏结束后的触摸事件处理逻辑
  // private touchEventHandler(e: TouchEvent) {
  //   e.preventDefault();
  // }

  /**
   * 更新数据状态
   */
  private update() {
    // console.log("666");
  }
  /**
   * canvas重绘函数
   * 每一帧重新绘制所有的需要展示的元素
   */
  private render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.man.drawToCanvas(this.ctx);
  }

  // 实现游戏帧循环
  private loop() {
    this.update();
    this.render();

    window.requestAnimationFrame(this.loop.bind(this));
  }
}