import { Command } from "commander"
import { logger } from "../../utils/loggers"

export default function serve(program: Command) {
    return program
        .createCommand("serve")
        .description("启动项目")
        .action(() => {
            logger.info("Starting the project...")
        })
}
