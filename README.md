# ChatGPT-Vercel

![](assets/preview-light.png#gh-light-mode-only)
![](assets/preview-dark.png#gh-dark-mode-only)

> 本项目有XirZati开发。

## 部署一个你自己的 ChatGPT 网站（免费）

如果你只需要部署一个你自己用的网站，而不需要定制，那么你完全不需要在本地跑起来，你可以直接点击下面的按钮，然后按照提示操作，然后在 Vercel 中填入环境变量即可。vercel.app 域名已经被墙，但 vercel 本身没有被墙，所以你绑定自己的域名就可以了。


如果你需要部署给更多人用，需要修改一些代码，那么你可能需要将上面创建的你自己的仓库 `git clone` 到本地。改完了 `git commit & push` 即可重新部署，vscode 上点几下就可以了。也可以用 vercel 的 cli，`vercel deploy --prod`。

如果你需要在本地开发和调试，有点麻烦：

1. 升级到 `node18`，要用到原生的 `fetch`。
2. API 被墙了，自己想办法开代理，不然要报错。可以设置 OpenAI 的代理 API，也可以直接 `vercel deploy` 部署到 vercel 开发环境上调试。
3. `pnpm i` 安装依赖。
4. `pnpm dev` 启动项目。

### 更多部署方案

Astro 提供了很多部署方案，自行 [查看设置方法](https://docs.astro.build/zh-cn/guides/server-side-rendering/)，本项目主要针对 Vercel，故不多做解释.

- [Cloudflare](https://github.com/withastro/astro/tree/main/packages/integrations/cloudflare)
- [Deno](https://github.com/withastro/astro/tree/main/packages/integrations/deno)
- [Netlify](https://github.com/withastro/astro/tree/main/packages/integrations/netlify)
- [Node.js](https://github.com/withastro/astro/tree/main/packages/integrations/node)
- [Vercel](https://github.com/withastro/astro/tree/main/packages/integrations/vercel)

### 环境变量

| 环境变量                           | 说明                                                                                                                                                                                                                    | 默认值                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `OPENAI_API_KEY`                   | OpenAI API Key，可以填写多个，用 \| 或者 换行 隔开，随机调用。最好是多填几个，API 有并发上的限制。如果用户不填自己的 key，那么就会使用你的 key。                                                                        | 无                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `DEFAULT_MESSAGE`                  | 默认提示信息                                                                                                                                                                                                            | - 由 [OpenAI API (gpt-3.5-turbo)](https://platform.openai.com/docs/guides/chat) 提供技术支持。- 要同款网站源码，请联系QQ：2078641806- 可帮忙搭建- 如果本项目对你有所帮助，可以给👉 [XirZati](https://i.328888.xyz/2023/03/19/PfZob.png) 打赏。- 请节约访问公益网站，访问费用由XirZati承担。建议使用私人版，以免资金不足关闭网站。- 如果要选择人物预设 请按[[空格]]，电脑上换行请按[[Shift]] + [[Enter]]，出现报错请点右下角清空对话。- ChatGPT是一个超强的AI，它会创作、写论文、答辩、编程等。- 👇👇👇私人版的优点👇👇👇- 专属你的ChatGPT,访问速度极快，提供OpenAI官方账号，内含APIKEY- 如要买私人版，请联系QQ：2078641806 |
| `DEFAULT_SETTING`                  | 默认设置                                                                                                                                                                                                                | {<br/> "continuousDialogue": true,<br/> "archiveSession": false,<br/> "openaiAPIKey": "",<br /> "openaiAPITemperature": 60,<br/> "systemRule": ""<br/> "password": ""<br />}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `RESET_CONTINUOUS_DIALOGUE_OPTION` | 刷新时重置 `开启连续对话` 选项，在分享给很多人用的时候可以有效避免大量消耗。                                                                                                                                            | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `OPENAI_API_BASE_URL`              | 本地开发时可以填写 OpenAI 的代理服务器，但是 Vercel 不需要。                                                                                                                                                            | api.openai.com                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `PASSWORD`                         | 网站密码                                                                                                                                                                                                                | 无                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `MAX_INPUT_TOKENS`                 | 输入的 token 最大值，如果开启 `连续对话`，将计算之前的所有对话内容。OpenAI 限制 token 最大值为 4096，但这是输入和输出之和，所以可以将这个值设置为 3072， 留 1024 作为输出。如果不想被滥用，可以将这个值设置的再小一点。 | 3072                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `SENDKEY`                          | 使用 [Server 酱](https://sct.ftqq.com/sendkey) 推送帐号余额以及可用状态到微信，如果需要自行获取。推送时间为早上 8 点和晚上 8 点，在 vercel.json 文件中修改。如果 key 太多，超过 20 个，有可能失败。                     | 无                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `SENDCHANNEL`                      | [Server 酱](https://sct.ftqq.com/sendkey) 的推送通道，默认微信服务号。                                                                                                                                                  | 9                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

有两种设置方式

1. 将 `.env.example` 文件修改为 `.env`，在 `.env` 中设置。
2. Vercel 中设置 `Environment Variables`。尽量使用这种方式，比较方便。会在下次部署时生效。
   ![](assets/environment.png)

### 默认设置

> 记得删除注释，或者直接复制上面表格里的。

```json5
{
  continuousDialogue: true, // 开启连续对话，每次都需要将上下文传给 API，比较费钱，而且同样有 4096 token 的限制
  archiveSession: false, // 记录对话内容，刷新后不会清空对话
  openaiAPIKey: "", // 默认填写的 key，不需要填写，否则其他人看得到。
  password: "", // 默认填写的密码，不需要填写，否则其他人看得到。
  openaiAPITemperature: 60, // 0-100 越高 ChatGPT 思维就越发散，开始乱答
  systemRule: "" // 系统角色指令，会在每次提问时添加。主要用于对 ChatGPT 的语气，口头禅这些进行定制。
}
```

## 提交你的 Prompts

1. Fork 本项目。
2. 修改 `prompts.md`。
3. Pull Request 即可。



### 要求

- 把需要输入的内容放在最后，可以提示 ChatGPT 开始输入了，比如 “我的第一句话是：”。
- 尽可能去优化已有的 Prompts，而不是重复添加。
- 添加到结尾，我会定期整理。

## License

[MIT](./LICENSE)
