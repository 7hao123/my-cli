import { logger } from "../../utils/loggers"
import { Command } from "commander"
import { spawn } from "node:child_process"
// 为什么不直接使用commander里面的program

// build的dev都是执行npm run dev npm run build 用exec 或spawn去执行
export default function build(program: Command) {
    return program
        .createCommand("build")
        .description("Build the project")
        .action(() => {
            logger.info("Building the project...")

            const command = "npm"
            const params = ["run", "build"]

            const child = spawn(command, params, {
                stdio: "inherit",
                shell: true,
            })

            child.on("close", code => {
                logger.log(`Build process exited with code ${code}`)
            })
        })
}
