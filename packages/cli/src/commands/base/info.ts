// ESM
// import { consola, createConsola } from "consola"

import { logger } from "../../utils/loggers"
import pc from "picocolors"
import pkg from "../../../package.json"
export default function info(...args: any) {
    logger.info("Using consola 3.0.0")
    logger.start("Building project...")
    logger.warn("A new version of consola is available: 3.0.1")
    logger.success("Project built!")
    logger.error(new Error("This is an example error. Everything is fine!"))
    logger.box("I am a simple box")

    logger.log(pc.bgGreen(`CLI Tool Version: ${pkg.version}`))
    logger.log(pc.blue(`Author: ${pkg.author}`))
    logger.log(pc.underline(`Website:https://www.12385.com`))
}
