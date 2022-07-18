
export default /** @type {import('@web/dev-server').DevServerConfig} */ ({

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
