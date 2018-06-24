This project was bootstrapped with [Man App](http://liangtongzhuo.com).

# Start
```
npm i
npm run start
```

# 游戏设计原则
- 1.状态首先考虑存储到自己对象内，如果有其它对象共享此状态提升到 databus 内。
- 2.内部的状态与动作方法，首先考虑写在局部对象内，如果不行则一步一步向上提升，最顶到达全局方法。
- 3.需要频繁创建与销毁的对象用 pool 缓存起来。
- 4.每间隔 33ms 向服务器同步状态，服务器初步定每 33ms 向每一个 client 发送状态。



需要完成的任务

- 地板位置生成，根据地图滚动
- 地板的样式
- 人物与地板的碰撞状态
- 联网状态同步