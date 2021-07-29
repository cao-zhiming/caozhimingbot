
**See the [中文（简体）(Simplified Chinese)](https://github.com/cao-zhiming/caozhimingbot/blob/main/chinese-readme.md) version if you need**.

This is a JS software for a Keybase Bot [CaozhimingBot, also known as Cecilia Keybot](https://keybase.io/caozhimingbot).

This bot functions by directly operating to the Keybase CLI on the server so it gets and sends messages.
Here is the docs for using.

![Status](https://img.shields.io/uptimerobot/status/m788744221-4681e999eb1f7e09c855f2c4)

# Usage

Firstly, make sure you have installed [node](https://nodejs.org) (version>=12).

## 1. Install [the Keybase app](https://keybase.io/download) on your server and make sure it's running.
## 2. Install the [Keybase-bot](https://github.com/keybase/keybase-bot) dependencies:

``` bash
npm install keybase-bot
```

## 3. [Fork this repo](https://github.com/cao-zhiming/caozhimingbot/fork).
## 4. Edit the **username** and **paperkey** variables to your **Keybase username** and your **Keybase paperkey**(you can create one on the Keybase app).
The lines are [here](https://github.com/cao-zhiming/caozhimingbot/blob/main/index.js#L7-L8), just edit them like this:

```javascript
const username = 'caozhimingbot'
const paperkey = 'maybe this bot is the greatest bot a middle school student can ever build' // Suppose your paper key is that, just copy and paste here.
```
## 5. Put it on your server which has the Keybase app and the Keybase-bot dependencies.
## 6. Run the command shown below:

```bash
cd <the-folder-you-stored-your-js-file> //Skip this step if you put the file into the root directory.
node <the-file-name>.js
```

# Contributions

Welcome! Pull requests, Issues and Discussions are all, always welcomed!!

# FAQ

## 1. Could you recommend me some servers to run this?

*Servers??!* Are you serious? Currently, **I myself** still haven't got my own servers yet and I am still using @Ella1102-Python 's sever(and by the way, thanks to her for providing that server).

Anyway, I am going to provide you with some servers I think may go well with my program.

- [Godaddy](https://sg.godaddy.com/zh/hosting)
- [Dell](https://www.dell.com/en-us/work/shop/dell-poweredge-servers/sc/servers)

Or the Chinese ones shown below, note you **must have a Chinese citizen ID to use one of these**:

- [Aliyun](https://aliyun.com)
- [Tencent Cloud](https://cloud.tencent.com)
- [Huawei Cloud](https://huaweicloud.com)

Any servers else will be OK, **if the Internet could be accessed, node could be installed and the CLI could be operated by you**.

## 2. Could I edit your program and publicize as mine?

I'm not sure what you mean. If you mean you just want to fork this and do some modifications...ever seen the [LICENSE](https://github.com/cao-zhiming/caozhimingbot/blob/main/LICENSE) of this repo? It is **GPL-v3.0 open-sourced**. So just edit anything you want, but make sure your project's still a GPL (version>=2.0)licensed open-source one.

But if you mean *as yours*, maybe I can suppose you want to apply for © copyrights or even a patent. That is **banned** for an open-source program.

## 3. Is this safe? Where will my data go?

😥Why are you asking this? All messages are being crypto-ed by Keybase and it's hard to hack. And I of course won't let my bot send me or any third-party services your privacy or self-data. And you don't need to send your self-data, too. If you are still concerned, the source code is just here!! Seeing is believing.

Your messages data will go to the Keybase servers as secret words no one could understand. Then it will be recieved by the bot on its server on its server. Then the bot will have a good look at your message and think of what to reply, then throws her message to the Keybase app, which then gets crypto-ed and goes to the Keybase servers again, and you now recieve it.

## 4. Is this a production all by yourself?

Nahhhh... not 100% really. **Technically, I coded most of the commands and programs and fixed most of the bugs(because there will still be many)**, but the server is by @Ella1102-Python , the app and the Keybase-bot dependencies are from @Keybase . Thanks a lot.
