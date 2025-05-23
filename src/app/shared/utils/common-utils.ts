/**
 * 简单的睡眠函数，返回一个在指定时间后解决的 Promise
 * @param {number} ms - 毫秒数
 * @returns {Promise<void>}
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
