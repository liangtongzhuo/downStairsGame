This project was bootstrapped with [Man App](http://liangtongzhuo.com).

# Start
```
npm i
npm run start
```

# Design principles

- 状态首先考虑存储到自己对象内，如果有其它对象共享此状态提升到 databus 内。
- 内部的状态与动作方法，首先考虑写在局部对象内，如果不行则一步一步向上提升，最顶到达全局方法。
- 需要频繁创建与销毁的对象用 pool 缓存起来。
- 每间隔 33ms 向服务器同步状态，服务器初步定每 33ms 向每一个 client 发送状态。



# todo

- Floor position creation
- Map rolling
- Floor style
- The person collides with the floor
- Networking follow-up