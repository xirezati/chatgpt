export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `- 由 [OpenAI API (gpt-3.5-turbo)](https://platform.openai.com/docs/guides/chat)提供支持。
- 由 [XirZati](https://www.xirzati.icu) 基于 [chatgpt-demo](https://github.com/ddiu8081/chatgpt-demo) 开发
- 公益网站访问费用由XirZati承担，请勿频繁访问，哪天没钱了就关闭了，推荐用私人版。
- 您在使用的过程中，应遵守所在地相关法规政策、用户协议、规则规范。
- 如果要选择人物预设 请按[[空格]]，电脑上换行请按[[Shift]] + [[Enter]]，出现报错请点右下角清空对话。
- ChatGPT是一个超强的AI，它会创作、写论文、答辩、编程等
- <span class="text-transparent font-extrabold bg-clip-text bg-gradient-to-r dark:from-yellow-300 from-yellow-600 dark:to-red-700 to-red-700 mr-1">ChatGPT</span>
- 如要买私人版，请联系微信：lIIlIIlIIIlIIlIIIll`

export type Setting = typeof setting

export const resetContinuousDialogue = false
