require('esbuild').buildSync({
    entryPoints: ['app.js'],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ['chrome58'],
    define: {
        'process.env.NODE_ENV': '"development"',
    },
    outfile: 'build/out.js',
})
