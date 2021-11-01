import Config from './config';

const ApiEndpoint = {
    whois(parameter) {
        const url = new URL(Config.whoisUrl);
        url.search = new URLSearchParams({
            ip: 1,
            domainName: parameter,
            apiKey: Config.key,
            outputFormat: 'JSON',
            ignoreRawTexts: 1,
        });
        return url;
    },
};

export default ApiEndpoint;
