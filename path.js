const { resolve } = require("path")

const resolveApp = src => resolve(process.cwd(), src)
console.log(resolveApp("app/components"), resolveApp("./app/components"))

module.exports = {
  appComponents: resolveApp("app/components")
}
