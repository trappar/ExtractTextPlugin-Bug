# ExtractTextPlugin bug example

There is an issue with the Webpack ExtractTextPlugin.

When you have two or more files which require the same file in such a way that it yields a shared chunk, the ExtractTextPlugin will fail to correctly render files for each of the original files. Instead it will render one file (for the one chunk) and randomly name it based on one of its parents.

## How to replicate this issue

1. Run `npm install`
2. Delete the `output` directory
3. Run `webpack`