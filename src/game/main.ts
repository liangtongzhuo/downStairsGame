import Databus from "./dataStatus/databus";
import Man from "./player/man";

/**
 * 游戏主函数
 */
export default class Main {
  private canvas = document.getElementById("canvas") as HTMLCanvasElement;
  private ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;

  // 自己人物
  private man = new Man();
  private databus = new Databus();

  // 开始
  public start() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.canvas.addEventListener("touchstart", this.touchstart.bind(this));
    this.canvas.addEventListener("touchmove", this.touchmove.bind(this));
    this.canvas.addEventListener("touchend", this.touchend.bind(this));

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

  /**
   * 点击接触调用
   */
  private touchstart(e: TouchEvent) {
    e.preventDefault();
    const { clientX, clientY } = e.touches[0];
    console.log(clientX, clientY);
  }
  /**
   * 点击之后滑动持续调用
   */
  private touchmove(e: TouchEvent) {
    e.preventDefault();
    const { clientX, clientY } = e.touches[0];
    if (clientX < window.innerWidth/2) {
      this.databus.direction = 1
    }else {
      this.databus.direction = 3
    }
    console.log(clientX, clientY, this.databus.direction);
  }

  /**
   * 手抬起来会调用
   */
  private touchend(e: TouchEvent) {
    e.preventDefault();
    const { clientX, clientY } = e.changedTouches[0];

    console.log(clientX, clientY);
  }

  /**
   * 更新数据状态
   */
  private update() {
    // console.log("666");
    this.man.update();
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
