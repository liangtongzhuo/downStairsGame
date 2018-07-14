/**
 *
 * websocket
 */
import DataBus from "../data-status/data-bus";
import FloorModel from "../model/floor-model";

const dataBus = new DataBus();
const ws = new WebSocket("ws://localhost:3002");

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
    return;
  }
};

ws.onclose = e => {
  console.log("close:", e);
};

ws.onerror = e => {
  console.error("error:", e);
};
