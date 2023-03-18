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

export type Setting = typeof setting

export const resetContinuousDialogue = false
