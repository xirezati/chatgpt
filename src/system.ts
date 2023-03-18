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
- 您在使用的过程中，应遵守所在地相关法规政策、用户协议、规则规范。
- 如果要选择人物预设 请按[[空格]]，电脑上换行请按[[Shift]] + [[Enter]]，出现报错请点右下角清空对话。
- 该预览页面域名由 [@AUDI_GUZZ](https://m.okjike.com/users/4af3cfb4-1291-4a8b-b210-f515c86934a9) 和 [@Airyland](https://m.okjike.com/users/C6C8DE3A-E89D-4978-9E7D-B2E167D835A9) 免费提供，API Key 由 [@AUDI_GUZZ](https://m.okjike.com/users/4af3cfb4-1291-4a8b-b210-f515c86934a9) 和 [@ourongxing](https://github.com/ourongxing) 免费提供，感谢。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
