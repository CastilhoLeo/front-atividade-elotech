module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
    moduleNameMapper:{
        '\\.(gif|ttf|eot|svg|png)$':'<rootDir>/.jest/mocks/fileMock.js',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        
    },
    globals: {
        TextEncoder: require('util').TextEncoder,
        URL: require('url').URL,
      },
}