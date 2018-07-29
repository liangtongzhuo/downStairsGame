/**
 *
 * websocket
 */
import { BaseTool } from "../base/base-tool";
import DataBus from "../data-status/data-bus";
import FloorModel from "../model/floor-model";

const dataBus = new DataBus();
const userId = Date.now();
const url = "ws://192.168.0.101:3002?userId=" + userId;
let ws: WebSocket;

const initWs = () => {
  ws = new WebSocket(url);
  ws.onopen = e => {
    console.log("open:", e);
    // 向服务器发送状态
    ws.send(JSON.stringify({ mesName: "initMap" }));
  };

  /**
   * 服务器发送过来的状态
   * @param {* 事件} e
   */
  ws.onmessage = e => {
    if (!e.data) return;
    const data: any = JSON.parse(e.data);

    // 收到地图初始化，转换成模型储存
    if (data.mesName === "initMap") {
      dataBus.netDataFloors = FloorModel.init(data.floors);
      dataBus.date = data.date;
      return;
    }
  };

  /**
   * 向服务同步状态
   */
  setInterval(() => {
    // ws 未连接直接返回
    if (!ws || ws.readyState !== ws.OPEN) return;

    const data = {
      userId,
      x: dataBus.man.point.x / BaseTool.width,
      y: dataBus.man.point.y / BaseTool.height
    };
    ws.send(JSON.stringify(data));
  }, 30);

  /**
   * 服务器关闭
   */
  ws.onclose = e => {
    console.log("close:", e);
    setTimeout(() => {
      initWs();
    }, 3000);
  };

  /**
   * 报错
   */
  ws.onerror = e => {
    console.error("error:", e);
    setTimeout(() => {
      initWs();
    }, 3000);
  };
};

initWs();
