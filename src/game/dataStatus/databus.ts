/**
 * 全局状态管理器，单例
 */
export default class DataBus {
  private static instance = new DataBus();
  
  constructor() {
    return DataBus.instance;
  }
}
