import { program, Command } from "commander"

type Fn = (p: Command) => Command

// export function registerCommand(command: Command) {
//     console.log(`Registering command: ${command.name} - ${command.description}`)
// }
export function registerCommand(fn: Fn) {
    program.addCommand(fn(program))
}

/**
 *
 */
