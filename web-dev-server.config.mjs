import rollupJson from "@rollup/plugin-json";
import { fromRollup } from '@web/dev-server-rollup';
const json = fromRollup(rollupJson);

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  mimeTypes: {
    'node_modules/**/*.json': 'js',
    '**/*.module.css': 'js',
  },
  plugins: [json({})],

  watch: true,
  /** Resolve bare module imports */
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },
  preserveSymlinks: true,

  middleware: [function rewriteMethod(context, next) {
    // convert every request to a get request
    context.req.method = "GET"
    return next();
  },
  ],

});
