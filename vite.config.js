export default {
    root: "./src",
    build: {
        outDir: "dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: "./src/experience.html",
                blog: "./src/index.html",
                about: "./src/projects.html",
            },
        },
    },
};