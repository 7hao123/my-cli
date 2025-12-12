// export const run = (args: string[]) => {
//     const [, , ...runArgs] = args
//     const [command, commandArgs] = runArgs
//     console.log(command, commandArgs)
//     switch (command) {
//         case "create": {
//             console.log("初始化项目", commandArgs)
//             break
//         }
//         case "build": {
//             console.log("打包项目", commandArgs)
//             break
//         }
//         case "serve": {
//             console.log("打包项目", commandArgs)
//             break
//         }
//     }
//     console.log(args)
// }
// 上面这种写法太过于复杂，通过commander来做

import { program } from "commander"
import "./commands"
import "./utils/loadTemplate"

// program.version("1.0.0").name("my-cli")

// program.command("create").description("初始化项目").action(create)

// program.command("build").description("打包项目").action(build)

// program.command("serve").description("启动项目").action(serve)

// program.command("greet").description("欢迎使用我的CLI工具").action(greet)

// program.command("info").description("显示项目信息").action(info)

// 为什么这个parse就行了呢？ 为什么register是怎么操作的？？
export const run = (args: string[]) => {
    program.parse(args)
}
