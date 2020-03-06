/**
 * The purpose of this plugin is to configure webpack however is needed for a dev enviroment.
 * It was created because the source maps webpack was generated were too sparse for debugging
 * so the config needed to change to product more in depth source maps.
 */
module.exports = function(context, options) {
    return {
        name: "custom-docusaurus-plugin",
        configureWebpack(config, isServer, utils) {
            if (config.mode && config.mode.toLowerCase() == "development") {
                return {
                    devtool: "eval-source-map",
                    devServer: {
                        compress: false,
                    },
                };
            }

            return {};
        },
    };
};
