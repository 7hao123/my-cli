import { logger } from "../../utils/loggers"
import prompts from "prompts"
export default async function greet(...args: any) {
    logger.log("欢迎使用我的CLI工具")
    const nameRes = await prompts({
        type: "text",
        name: "name",
        message: "请输入你的名字",
    })
    logger.log(`你好，${nameRes.name}`)
    const hobbyRes = await prompts({
        type: "multiselect",
        name: "hobbies",
        choices: [
            { title: "编程", value: "coding" },
            { title: "阅读", value: "reading" },
            { title: "写作", value: "writing" },
        ],
        message: "请选择你的爱好",
    })
    logger.log(`你的爱好是：${hobbyRes.hobbies.join(", ")}`)
}
