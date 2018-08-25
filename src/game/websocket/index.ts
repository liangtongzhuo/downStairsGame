/**
 *
 * websocket
 */
import { BaseTool } from "../base/baseTool";
import DataBus from "../dataStatus/dataBus";

const dataBus = new DataBus();
const userId = Date.now();
const url = "ws://127.0.0.1:3002?userId=" + userId;
let ws: WebSocket;

const initWs = () => {
  ws = new WebSocket(url);
  ws.onopen = e => {
    console.log("open:", e);
  };

  /**
   * 服务器发送过来的状态
   * @param {* 事件} e
   */
  ws.onmessage = e => {
    if (!e.data) return;
    // const data: any = JSON.parse(e.data);
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
    }, 5000);
  };

  /**
   * 报错
   */
  ws.onerror = e => {
    console.error("error:", e);
    setTimeout(() => {
      initWs();
    }, 5000);
  };
};

initWs();
