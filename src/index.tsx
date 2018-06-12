import * as React from "react";
import * as ReactDOM from "react-dom";
// 加载 dom
import App from "./App";
// 加载游戏
import Game from "./game/main";
// 加载 css
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);

const game = new Game();
game.start();