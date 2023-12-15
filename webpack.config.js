module.exports = {
    // ...
    module: {
        rules: [
            // ... other rules
            {
                test: /\.mp4$/,
                use: 'file-loader',
            },
        ],
    },
};
