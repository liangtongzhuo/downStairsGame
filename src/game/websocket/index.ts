/**
 *
 * websocket
 */
import { BaseTool } from "../base/base-tool";
import DataBus from "../data-status/data-bus";
import Floor from "../player/floor";

const dataBus = new DataBus();
const ws = new WebSocket("ws://localhost:3002");

ws.onopen = e => {
  console.log("open:", e);
};

/**
 * 服务器发送过来的状态
 * @param {* 事件} e
 */
ws.onmessage = e => {
  if (!e.data) return;
  const data: any = JSON.parse(e.data);

  // 缓存里面取
  const floor = dataBus.pool.getItemByClass<Floor>("Floor", Floor);
  floor.init(
    data.widthRandom * (BaseTool.width - floor.width),
    BaseTool.height,
    1
  );
  dataBus.floors.push(floor);

  console.log(data);
};

ws.onclose = e => {
  console.log("close:", e);
};

ws.onerror = e => {
  console.error("error:", e);
};

// 向服务器发送状态
// setInterval(() => {
//   ws.send(JSON.stringify({ aaa: 666 }));
// }, 1000);
