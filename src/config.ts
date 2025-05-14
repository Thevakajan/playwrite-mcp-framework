const environments = {
    staging: {
        baseUrl: 'https://staging.saucedemo.com/',
        credentials: {
            username: 'staging_user',
            password: 'staging_pass',
        },
    },
    production: {
        baseUrl: 'https://www.saucedemo.com/',
        credentials: {
            username: 'production_user',
            password: 'production_pass',
        },
    },
};

const environment = process.env.TEST_ENV || 'production';

const config = environments[environment];

export { environments };
export default config;