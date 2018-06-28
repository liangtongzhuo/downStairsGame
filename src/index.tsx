// dom 操作
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./react/App";
import "./react/index.css";
ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);

// 加载 canvas 绘制游戏
import Game from "./game/main";
const game = new Game();
game.start();
