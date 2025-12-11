import { logger } from "../../utils/loggers"

export default function build(...args: any) {
    logger.log("打包项目", args)
}
