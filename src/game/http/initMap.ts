/**
 *
 * websocket
 */
import axios from "axios";
import DataBus from "../dataStatus/dataBus";
import FloorModel from "../model/floor-model";

const dataBus = new DataBus();
const userId = Date.now();

// 请求地图初始化数据，转换成模型储存
export default async () => {
  try {
    const result = await axios.get(`/mapInit?${userId}`);
    dataBus.netDataFloors = FloorModel.init(result.data.floors);
    dataBus.map.date = result.data.date;
  } catch (error) {
    console.log("地图初始化失败");
  }
};
