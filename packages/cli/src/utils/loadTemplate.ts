// 既然是本地的模版 ,用fs来操作
import { readFile, copy } from "fs-extra"
import { join } from "node:path"
import { downloadTemplate } from "giget"
// __dirname指向的是dist下面的目录
// readFile(join(__dirname, "../package.json")).then(data => {
//     console.log(data.toString())
// })

interface loadTemplateParams {
    projectName: string
    templateName: string
    local?: boolean
}

export const loadLocalTemplate = async (
    projectName: string,
    templateName: string,
) => {
    // 复制模版，第一个地址是源模版的地址，第二个是终端的目录，通过pnpm link来？
    copy(
        join(__dirname, `../templates/${templateName}`),
        `${process.cwd()}/${projectName}`,
    )
}

export const loadRemoteTemplate = async (
    params: Omit<loadTemplateParams, "local">,
) => {
    // 远程下载模版，
    const { dir } = await downloadTemplate(
        "https://github.com/nik26788/create-template-cli/archive/refs/heads/master.zip",
        {
            dir: `${process.cwd()}/.temp`,
        },
    )
    // const repo = 'https://github.com/nik26788/create-template-cli.git'
}

export const loadTemplate = async (params: loadTemplateParams) => {
    const { local } = params
    if (local) {
        await loadLocalTemplate(params.projectName, params.templateName)
    } else {
        await loadRemoteTemplate({
            projectName: params.projectName,
            templateName: params.templateName,
        })
    }
}
