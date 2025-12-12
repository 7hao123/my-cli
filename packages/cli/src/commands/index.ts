import build from "./base/build"
import create from "./base/create"
import serve from "./base/serve"
import greet from "./base/greet"
import info from "./base/info"
// export { build, create, serve, greet, info }

import { registerCommand } from "./registerCommand"

registerCommand(build)
registerCommand(create)
registerCommand(serve)
registerCommand(greet)
registerCommand(info)
