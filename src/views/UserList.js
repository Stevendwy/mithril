// src/views/UserList.js 视图模块 进行展示 一个组件只有一个view 方法
var m = require("mithril")
var User = require("../models/User")

module.exports = {
    oninit: User.loadList,
    view: function() {
        return m(".user-list", User.list.map(function(user) {
            return m("a.user-list-item", {href: "/edit/" + user.id, oncreate: m.route.link}, user.firstName + " " + user.lastName)
        }))
    }
}