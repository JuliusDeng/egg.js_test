'use strict';

const Controller = require('egg').Controller;
let demo = [{
  id: 1,
  username: "用户1",
  nickname: "昵称1",
  sex: "男"
},
{
  id: 2,
  username: "用户2",
  nickname: "昵称2",
  sex: "男"
},
{
  id: 3,
  username: "用户3",
  nickname: "昵称3",
  sex: "男"
}]

class GirlController extends Controller {
  // 用户列表
  async index() {
    // 模拟拿到数据
    let result = demo
    // 响应
    this.ctx.body = {
      msg: 'ok',
      data: result
    }
  }
  // 读取某个用户数据
  async read() {
    let id = this.ctx.params.id
    let detail = demo.find(item => item.id == id)
    this.ctx.body = {
      msg: "ok",
      data: detail
    }
    this.ctx.status = 201
  }
}

module.exports = GirlController;
