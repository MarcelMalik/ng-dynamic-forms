const path        = require("path"),
      utils       = require(path.join(__dirname, "../../build/utils")),
      packageJson = require(path.join(__dirname, "package.json"));

const format  = utils.getRollupFormat(process.argv),
      globals = utils.getRollupGlobals(),
      minify  = utils.hasMinifyFlag(process.argv);

export default {

    input: utils.getRollupInputPath(packageJson),
    output: {
        file: utils.getRollupOutputPath(packageJson, format, minify),
        format: format,
        name: "ngDF.basicUI",
        globals: globals,
        sourcemap: true,
        exports: "named",
        banner: utils.getBanner(packageJson)
    },
    context: "this",
    external: Object.keys(globals),
    plugins: utils.getRollupPlugins(minify)
};