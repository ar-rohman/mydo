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
    domainAvailability(parameter) {
        const url = new URL(Config.domainAvailabilityUrl);
        url.search = new URLSearchParams({
            domainName: parameter,
            mode: 'DNS_AND_WHOIS ',
            credits: 'DA', // DA WHOIS
            apiKey: Config.key,
            outputFormat: 'JSON',
        });
        return url;
    },
};

export default ApiEndpoint;
