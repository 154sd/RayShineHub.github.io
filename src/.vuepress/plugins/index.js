/*
 * @Author: pengfei.shao 570165036@qq.com
 * @Date: 2022-06-17 15:24:10
 * @LastEditors: pengfei.shao 570165036@qq.com
 * @LastEditTime: 2022-06-29 14:01:30
 * @FilePath: \RayShineHub\src\.vuepress\plugins\index.js
 * @Description: 统一插件（plugins）管理中心
 * 
 * Copyright (c) 2022 by pengfei.shao 570165036@qq.com, All Rights Reserved. 
 */
module.exports = {
    "dynamic-title":
		{
        showIcon: "http://cdn.rayshine.site/blog/home/favicon.ico",
        showText: "Welcome Back！",
        hideIcon: "http://cdn.rayshine.site/blog/home/favicon.ico",
        hideText: "Wait ...",
        recoverTime: 2000
    },
    "vuepress-plugin-nuggets-style-copy":
       {
         copyText: "复制",
         tip: {
             content: "复制成功!"
        }
     },
    "vuepress-plugin-boxx":{},
}