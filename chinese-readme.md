**如果你需要[English（英文）](https://github.com/cao-zhiming/caozhimingbot/) 版本请前往查看。**

这是一个Keybase机器人， [CaozhimingBot，也被称作Cecilia Keybot](https://keybase.io/caozhimingbot)的JS内核。

这个机器人通过直接在它所在的服务器中安装的Keybase本地软件终端操作，来获取和接收消息。以下是中文版使用文档。

![运行情况](https://img.shields.io/uptimerobot/status/m788744221-4681e999eb1f7e09c855f2c4)

# 使用

首先，请确保你已经安装了版本号>=12的 [node](https://nodejs.org)。

## 1. 在你的服务器上安装[Keybase软件](https://keybase.io/download)让该软件运行。
## 2. 安装[Keybase-bot](https://github.com/keybase/keybase-bot)依赖库：

``` bash
npm install keybase-bot
```

## 3. [Fork本仓库](https://github.com/cao-zhiming/caozhimingbot/fork)。
## 4. 将代码中的**username**和**paperkey**变量改为你自己的**Keybase用户名**和你自己的**Keybase Paper Key**（你可以在Keybase软件上创建一个Paper Key）。
我刚才所指的那两个变量在[这几行](https://github.com/cao-zhiming/caozhimingbot/blob/main/index.js#L7-L8)，你只需要这样修改它们：

```javascript
const username = 'caozhimingbot' //改成你的用户名
const paperkey = 'maybe this bot is the greatest bot a middle school student can ever build' //只要把你的Paper Key复制粘贴过来就好
```
## 5. 把这个修改后的JS文件放在你的那个安装了Keybase软件和Keybase-bot依赖库的服务器上。
## 6. 运行以下指令：

```bash
cd <装了你的JS文件的文件夹路径> //如果你把文件存储在了根目录下，请跳过这一步
node <文件名>.js
```

# 贡献

欢迎！Pull Requests，Issues以及Discussions我们都热烈欢迎！也欢迎你对本翻译版本的不足之处加以指正与修改！


这个翻译文件基于[原始英文版README.md的ec61cc7号commit](https://github.com/cao-zhiming/caozhimingbot/commit/ec61cc7246ed953684fda9cfc292c5410a07522e)作出翻译。

# 常见问题

## 1. 你能否推荐一些可用的服务器？

*服务器？？！* 你不会是认真的吧？ 目前，**我自己**都没有自己独立的服务器，我还在使用[@Ella1102-Python](https://github.com/Ella1102-Python)的呢。（顺便对她提供那台服务器表示感谢）。

不过，我还是会给你提供一些我觉得可以很好地运行我的程序的服务器商。

- [Godaddy](https://sg.godaddy.com/zh/hosting)
- [Dell（戴尔）](https://www.dell.com/zh-cn/work/shop/dell-poweredge-servers/sc/servers)

或者是中国本土的服务器，请注意，**若要使用以下的任意一个服务器商的服务器，你必须拥有中国公民身份证件**：

- [阿里云](https://aliyun.com)
- [腾讯云](https://cloud.tencent.com)
- [华为云](https://huaweicloud.com)

其实什么服务器都行，**只要能访问互联网，能安装node，命令行你能正常使用就可以**。

## 2. 我可以把你的程序做些修改并发布为我的吗？

我不太明白你的意思。如果你只是想fork这个程序并做些改动的话，本仓库的[LICENSE](https://github.com/cao-zhiming/caozhimingbot/blob/main/LICENSE)已经标明了。它是**GPL-v3.0开源的**。所以你可以随意修改，但请注意修改后仍必须是至少2.0版本的GPL开源的。

但是，你说的*发布为你的*，是想说希望申请著作权或者专利吗？如果是，抱歉，那些对于开源程序是**禁止的**。

## 3. 这安全吗？我的数据会去哪里？

😥这还用问？所有消息均已经被Keybase严格加密了，想入侵都难。而我本人自然也不会让我的机器人把你的隐私或者个人信息发送到我这里或者任何第三方平台。如果你仍感担忧，你可以把每一行这里的代码都翻开看看！！眼见为实嘛。

你的消息会先到Keybase的服务器上并转为无人能解的密文。然后它会被另一服务器上的这个机器人所接收。然后机器人会细细品味你发来的话并思考该说点什么，接着把她的消息扔给Keybase软件，这消息再次在Keybase服务器被加密，然后被你接收到。

## 4. 这完全是你做的吗？

额……不完全100%是。**准确地说，我把几乎全部代码给写了并弄没了大部分bug（但总会还有很多bug的）**，但是服务器是由[@Ella1102-Python](https://github.com/Ella1102-Python)提供的，且Keybase软件与Keybase-bot依赖库由[@Keybase](https://github.com/Keybase)提供。对他们深表感谢。
