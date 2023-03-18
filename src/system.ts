export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `- 由 [OpenAI API (gpt-3.5-turbo)](https://platform.openai.com/docs/guides/chat) 和 [Vercel](http://vercel.com/) 提供支持。
- 由 [@ourongxing](https://github.com/ourongxing) 基于 [chatgpt-demo](https://github.com/ddiu8081/chatgpt-demo) 开发，查看 [源码](https://github.com/ourongxing/chatgpt-vercel)，欢迎自部署。
- 您在使用的过程中，应遵守所在地相关法规政策、用户协议、规则规范。
- 如果本项目对你有所帮助，可以给小猫 [买点零食](https://cdn.jsdelivr.net/gh/ourongxing/chatgpt-vercel/assets/reward.gif)，但不接受任何付费功能请求。
- 
- 

export type Setting = typeof setting

export const resetContinuousDialogue = false
