/** dijkstra 邻接表节点类型 */
class Pair {
  /** 连结点 */
  to
  /** 权重 */
  val
  /**
   * 
   * @param {Number} to 
   * @param {Number} val 
   */
  constructor(to, val) {
    this.to = to
    this.val = val
  }
}

module.exports = {
  Pair
}