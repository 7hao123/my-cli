import { Command } from "commander"
import { logger } from "../../utils/loggers"
import { loadTemplate } from "../../utils/loadTemplate"

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
        .action(() => {
            loadTemplate("vue-ts")
            logger.info("Creating a new project...")
        })
}
