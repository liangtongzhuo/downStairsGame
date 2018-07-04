/**
 *
 * web socket
 */
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

