# [Akhremenko Grigorii's cv.](https://grigorii.akhremenko.com "cv website") 
# Current status: ***in developing (~5% completed)***

## Introduction
    The most likely reason, that you're here, is redirecting from my cv website. If it's not true, then you're still able to visit it by link above.
    
    Doesn't matter who you are, I want to say hello and tell you a little bit about developing my cv.
    Right now cv website is in developing, so following topics currently are about future plans. I'll try keeping readme document in actual state. 
    
###  About cv website implementation
    I've implemented it as SPA, using react framework. 
    As css preprocessor sass library was chosen. 
    Webpack was extended by MiniCssExtractPlugin and HtmlWebpackPlugin plugins.
    Webpack-dev-server is used for development purpose, hot reload is enabled for all significant parts.
    On pre-commit hook eslint, prettier, stylelint are executing (implemented via husky).
    Right after code was committed on github, local instance of Teamcity server is triggering build. In a case of release branch it causes, that artificats from hosting server side will been updated.
    
