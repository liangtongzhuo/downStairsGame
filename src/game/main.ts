import { BaseTool, Direction, RequestAnimationFrame } from "./base/baseTool";
import DataBus from "./dataStatus/dataBus";
import "./http";
import initMap from "./http/initMap";
import OtherManModel from "./model/OtherManModel";
import Man from "./player/Man";
import "./websocket";

/**
 * 游戏主函数
 */
export default class Main {
  private canvas = document.getElementById("canvas") as HTMLCanvasElement;
  private ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;

  private dataBus = new DataBus();
  // 自己人物
  private man = new Man();

  // 开始
  public start() {
    this.canvas.width = BaseTool.width;
    this.canvas.height = BaseTool.height;

    this.canvas.addEventListener("touchstart", this.touchstart.bind(this));
    this.canvas.addEventListener("touchmove", this.touchmove.bind(this));
    this.canvas.addEventListener("touchend", this.touchend.bind(this));

    this.loop();

    // 请求初始化地图
    initMap();
  }

  /**
   * 重新开始
   */
  public restart() {
    console.log("重新开始");
  }

  /**
   * 点击接触调用
   */
  private touchstart(e: TouchEvent) {
    e.preventDefault();
    // const { clientX, clientY } = e.touches[0];
    // alert(clientX+clientY)
    // console.log(clientX, clientY);
  }

  /**
   * 点击之后滑动持续调用
   */
  private touchmove(e: TouchEvent) {
    e.preventDefault();
    // const { clientX, clientY } = e.touches[0];
    // alert(clientX+clientY)
    // console.log(clientX, clientY);
  }

  /**
   * 手抬起来会调用
   */
  private touchend(e: TouchEvent) {
    e.preventDefault();
    const { clientX } = e.changedTouches[0];
    if (clientX < BaseTool.width / 2) {
      this.dataBus.man.horizontal = Direction.Left;
    } else {
      this.dataBus.man.horizontal = Direction.Right;
    }
  }

  /**
   * 碰撞检测
   */
  private collisionDetection() {
    this.dataBus.floors.forEach(floor => {
      if (this.man.collisionDetectionFloor(floor)) {
        this.dataBus.man.vertical = Direction.Stand;
      }
    });
  }

  /**
   * 根据数据生成显示对象
   */
  private create() {
    this.dataBus.netDataFloors.forEach(dataFloor =>
      dataFloor.createShow(this.dataBus)
    );
    OtherManModel.createOtherManOrUpdate(this.dataBus);
  }

  /**
   * 更新数据状态
   */
  private update() {
    this.dataBus.update();
    this.dataBus.floors.forEach(floor => floor.update());
    this.man.update();
    // 更新其它用户
    for (const userId in this.dataBus.otherMans) {
      if (this.dataBus.otherMans.hasOwnProperty(userId)) {
        const otherMan = this.dataBus.otherMans[userId];
        otherMan.update();
      }
    }
    this.collisionDetection();
  }

  /**
   * canvas重绘函数
   * 每一帧重新绘制所有的需要展示的元素
   */
  private render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.dataBus.floors.forEach(floor => floor.drawToCanvas(this.ctx));
    this.man.drawToCanvas(this.ctx);
    // 更新其它用户
    for (const userId in this.dataBus.otherMans) {
      if (this.dataBus.otherMans.hasOwnProperty(userId)) {
        const otherMan = this.dataBus.otherMans[userId];
        otherMan.drawToCanvas(this.ctx);
      }
    }
  }

  // 实现游戏帧循环
  private loop() {
    this.create();
    this.update();
    this.render();

    RequestAnimationFrame(this.loop.bind(this));
  }
}
