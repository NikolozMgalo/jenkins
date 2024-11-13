import { downloadDir, mainConfig } from "../framework/configs/main.wdio.conf.js";

export const config = {
    ...mainConfig,
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }],
    ],
    ...{
        framework: 'cucumber',
        cucumberOpts: {
            require: ['./test/step-definitions/**/*.js'],
        },
        specs: [
            '../test/features/**/*.feature'
        ],
        capabilities: [
            {
                browserName: "chrome",
                "goog:chromeOptions": {
                    args: [
                        '--headless',
                        '--disable-gpu',
                        '--window-size=1920,1080',
                        '--no-sandbox', 
                        '--disable-dev-shm-usage' // Reduces memory usage issues
                    ],
                    prefs: {
                        "download.default_directory": downloadDir
                    }
                },
            },
        ],
    },
};