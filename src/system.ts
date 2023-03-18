export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `- 由 [OpenAI API (gpt-3.5-turbo)](https://platform.openai.com/docs/guides/chat)提供支持。
- 由 [XirZati](https://www.xirzati.icu/)开发
- 访问费用由XirZati承担，请勿频繁访问。
- 您在使用的过程中，应遵守所在地相关法规政策、用户协议、规则规范。
- 如果要选择人物预设 请按[[空格]]，电脑上换行请按[[Shift]] + [[Enter]]，出现报错请点右下角清空对话。
- 如要买私人版，请联系微信：lIIlIIlIIIlIIlIIIll

export type Setting = typeof setting

export const resetContinuousDialogue = false
