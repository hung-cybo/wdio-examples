exports.config = {
    runner: 'local',
    services: ['selenium-standalone'],
    // host: 'localhost',
    // port: 4444,
    // path: '/wd/hub',
    baseUrl: '',
    logLevel: 'silent',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 900000,
    },
    capabilities: [{
        browserName: 'chrome',
        maxInstances: 1,
    },
    ],
    specs: ['tests/*.spec.js'],
    sync: true,
    reporters: [
        'spec',
        [
            require('wdio-video-reporter'),
            {
                videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
            },
        ],
    ],
    // beforeCommand: (commandName, args) => {
    //     console.log('beforeCommand', commandName);
    // },
    afterCommand: (commandName) => {
        console.log('afterCommand', commandName);
    },
};
