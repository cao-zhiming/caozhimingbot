
**See the [中文（简体）(Simplified Chinese)](https://github.com/cao-zhiming/caozhimingbot/blob/main/chinese-readme.md) version if you need**.

This is a JS software for a Keybase Bot [CaozhimingBot, also known as Cecilia Keybot](https://keybase.io/caozhimingbot).

This bot functions by directly operating to the Keybase CLI on the server so it gets and sends messages.
Here is the docs for using.

![Status](https://img.shields.io/uptimerobot/status/m788744221-4681e999eb1f7e09c855f2c4)

# Usage

Firstly, make sure you have installed [node](https://nodejs.org) (version>=12).

## 1. Install [the Keybase app](https://keybase.io/download) on your server and make sure it's running.
## 2. Install the [Keybase-bot](https://github.com/keybase/keybase-bot) dependecies:

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
## 5. Put it on your server which has the Keybase app and the Keybase-bot dependecies.
## 6. Run the command shown below:

```bash
cd <the-folder-you-stored-your-js-file> //Skip this step if you put the file into the root directory.
node <the-file-name>.js
```

# Contributions

Welcome! Pull requests, Issues and Discussions are all, always welcomed!!
