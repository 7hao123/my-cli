import { logger } from "../../utils/loggers"
import { Command } from "commander"
// 为什么不直接使用commander里面的program
export default function build(program: Command) {
    return program
        .createCommand("build")
        .description("Build the project")
        .action(() => {
            logger.info("Building the project...")
        })
}
