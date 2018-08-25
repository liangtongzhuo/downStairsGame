/**
 * 基础信息
 */
export class BaseTool {
  public static width = window.innerWidth;
  public static height = window.innerHeight;
}

/**
 * 每一帧渲染图
 */
export const RequestAnimationFrame = window.requestAnimationFrame;

/**
 * 方向
 */
export enum Direction {
  Top = 0,
  Right,
  Down,
  Left,
  Stand
}
