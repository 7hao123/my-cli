import { Command } from "commander"
import { logger } from "../../utils/loggers"
import { loadTemplate } from "../../utils/loadTemplate"
import prompts from "prompts"
/**
 * 解析参数
 * 匹配技术栈
 * 匹配模版，本地or远程
 * 对模版进行加工（如修改package.json name等等）
 * 完成创建
 */

export default function create(program: Command) {
    return program
        .createCommand("create")
        .description("创建项目")
        .argument("<name>", "项目名称")
        .option("-t, --template <template>", "指定项目模版")
        .option("-n, --name <name>", "指定项目名称")
        .action(async (projectName, options) => {
            let { template } = options

            if (!template) {
                const templateName = await prompts({
                    type: "select",
                    name: "template",
                    message: "请选择一个项目模版",
                    choices: [{ title: "Vue + TypeScript", value: "vue-ts" }],
                })
                template = templateName.template
            }

            logger.info(
                `Creating a new project... Name: ${projectName}, Template: ${JSON.stringify(
                    options,
                )}`,
            )
            loadTemplate({
                projectName,
                templateName: template || "vue-ts",
                local: true,
            })
        })
}
