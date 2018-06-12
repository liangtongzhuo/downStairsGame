const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const a = 11;
console.log(a);
// let ctx = canvas.getContext("2d");

/**
 * 游戏主函数
 */
export default class Main {
  // constructor() {

  // }

  // 开始
  public start() {
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
   * canvas重绘函数
   * 每一帧重新绘制所有的需要展示的元素
   */
  private render() {
    console.log("666");
  }

  // 游戏逻辑更新主函数
  private update() {
    // console.log("666");
  }

  // 实现游戏帧循环
  private loop() {
    this.update();
    this.render();

    window.requestAnimationFrame(this.loop.bind(this));
  }
}
