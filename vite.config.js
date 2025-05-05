export default {
    root: "./src",
    build: {
        outDir: "dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: "./src/index.html",
                blog: "./src/experience.html",
                about: "./src/about.html",
                projects: "./src/projects.html",
            },
        },
    },
};