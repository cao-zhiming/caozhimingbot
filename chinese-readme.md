
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


这个翻译文件基于[原始英文版README.md的11d29c2号commit](https://github.com/cao-zhiming/caozhimingbot/commit/11d29c21fa075381e45df5f914620af361db9e98)作出翻译。
