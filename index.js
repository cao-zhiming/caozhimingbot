const Bot = require('../../lib/index.js')

const bot = new Bot()

async function main() {
  try {
    const username = 'caozhimingbot'
    const paperkey = '' // No, I won't tell you my real paper key!!!
    await bot.init(username, paperkey)
    const info = bot.myInfo()
    console.log(`Bot initialized with username ${info.username}.`)

    await bot.chat.clearCommands()
    await bot.chat.advertiseCommands({
      advertisements: [
        {
          type: 'public',
          commands: [
            {
              name: 'ceclia sourcecode',
              description: 'Gets the source code of this bot.',
              usage: '!cecilia sourcecode',
            },
          ],
        },
      ],
    })

    const onMessage = async message => {
      if (message.content.type !== 'text') {
        return
      }

      if (message.content.text.body.startsWith('!cecilia sourcecode ')) {
        bot.chat.send(message.conversationId, {
          body: `There, my source code is open at github.com/cao-zhiming/caozhimingbot , forks and issues are always welcomed!!`,
      })
      }

if (message.content.text.body.startsWith('!cecilia sourcecode ')) {
        bot.chat.send(message.conversationId, {
          body: `There, my source code is open at github.com/cao-zhiming/caozhimingbot , forks and issues are always welcomed!!`,
      })
      }

     
    }

    const onError = e => console.error(e)
    console.log(`Listening for messages...`)
    await bot.chat.watchAllChannelsForNewMessages(onMessage, onError)
  } catch (error) {
    console.error(error)
  }
}

async function shutDown() {
  await bot.deinit()
  process.exit()
}

process.on('SIGINT', shutDown)
process.on('SIGTERM', shutDown)

main()
