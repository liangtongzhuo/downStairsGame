/**
 * 全局状态管理器，单例
 */

enum Direction {
  Up = 0,
  Down,
  Left,
  Right
}
export default class DataBus {
  private static instance = new DataBus();
  public man = {
    direction: Direction.Left
  };
  constructor() {
    return DataBus.instance;
  }
}
