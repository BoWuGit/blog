---
layout: single
title: "win10更新build版本失败回退方案【科技】"
categories: technology
#excerpt:
#tags: []
header:
    teaser: /assets/images/restore.jpg
image:
#   feature: /teaser/xxx
    teaser: /teaser/restore.jpg
#   thumb:
date: 2016-10-19T21:44:03+08:00
---

最近一阵win10有个build版本（1607）更新，不知怎么搞的，导致电脑几次都升级失败，所以我想这个可能还是个普遍现象，把解决办法记录下来，供大家参考。

开机后进入启动的高级选项，这一步跟电脑的主板型号有关，开机后看系统提示即可。

以下是后边的操作步骤：

**疑难解答：**

![alt text]({{ "/assets/images/technology/solve.png" | absolute_url }} "疑难解答")

**高级选项：**

![alt text]({{ "/assets/images/technology/advance.png" | absolute_url }} "高级选项")

**回滚到以前的版本：**

![alt text]({{ "/assets/images/restore.jpg" | absolute_url }} "回滚到以前的版本"){: .align-center}

这样等一会系统就自动回到以前的build版本了，正常运行。之后，为防止再次很快更新，导致升级失败，建议推迟升级：

![alt text]({{ "/assets/images/technology/defer_update.png" | absolute_url }} "推迟升级")



