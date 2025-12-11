import { logger } from "../../utils/loggers"

export default function create(...args: any) {
    logger.log("创建项目", args)
}
