// 既然是本地的模版 ,用fs来操作
import { readFile, copy } from "fs-extra"
import { join } from "node:path"
// __dirname指向的是dist下面的目录
// readFile(join(__dirname, "../package.json")).then(data => {
//     console.log(data.toString())
// })

export const loadTemplate = async (templateName: string) => {
    copy(
        join(__dirname, `../templates/${templateName}`),
        `${process.cwd()}/template-demo`,
    )
}
