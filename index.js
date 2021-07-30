const Bot = require('../../lib/index.js')

const bot = new Bot()

async function main() {
  try {
    const username = 'caozhimingbot'
    const paperkey = '' // No, I won't tell you my real paper key!!!
    await bot.init(username, paperkey)
    const info = bot.myInfo()
    console.log(`Bot initialized with username ${info.username}.`)

// To advertise the commands so users can know what to say.
    await bot.chat.clearCommands()
    await bot.chat.advertiseCommands({
      advertisements: [
        {
          type: 'public',
          commands: [
            {
              name: '!ceclia sourcecode',
              description: 'Gets the source code of this bot.',
              usage: '!cecilia sourcecode',
            },
            {
              name: '!ceclia help',
              description: 'Gets the commands list of this bot.',
              usage: '!cecilia help',
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
          body: `There, my source code is open at https://github.com/cao-zhiming/caozhimingbot , forks and issues are always welcomed!!`,
      })
      }

if (message.content.text.body.startsWith('!cecilia help ')) {
        bot.chat.send(message.conversationId, {
          body: `My commands are shown here:\n!cecilia help - Shows this.\n!cecilia sourcecode - Shows my source code.\nWho are you?\nHow old are you?\nWhat is your gender?\nWhy you are a girl?\nI want to contact your developer.`,
      })
      }

if (message.content.text.body='Who are you?' || message.content.text.body='What is your name?') {
        bot.chat.send(message.conversationId, {
          body: `I am Cecilia Keybot. My developer chooses Cecilia as my name because it is very important for him, and Keybot is short for "Keybase Bot".`,
      })
      }

if (message.content.text.body='How old are you?') {
        bot.chat.send(message.conversationId, {
          body: `Uhhh...don't you know I am a GIRL?? And haven't anyone told you it is very IMPOLITE to ask a girl her age??? Ooops, sorry, my developer told me to be nice. Fine... I am setted as 13 years old.`,
      })
      }

if (message.content.text.body='Are you a boy or a girl?' || message.content.text.body='What is your gender?') {
        bot.chat.send(message.conversationId, {
          body: `I am a girl...yes, really. And my name had already clearly shown it.`,
      })
      }

// Apple Siri, Microsoft Cortana are all defaultly setted as a girl, so why can't my bot be also a girl?

if (message.content.text.body='Why you are a girl?') {
        bot.chat.send(message.conversationId, {
          body: `My developer says,"Apple Siri, Microsoft Cortana are all defaultly setted as a girl, so why can't my bot be also a girl?" in my source code, but I am not satisfied. Probably he likes girls better than boys(don't tell him I said that).`,
      })
      }

if (message.content.text.body='I want to contact your developer.') {
        bot.chat.send(message.conversationId, {
          body: `OK. Send him an email to caozhiming[at]caozhiming[dot]tk, or chat him on Keybase, he's @caozhiming . `,
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
