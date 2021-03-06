import Config from './config';
import Regex from '../helper/regex';

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
    ipGeolocation(parameter) {
        const url = new URL(Config.ipGeolocationUrl);
        if (Regex.isEmail(parameter)) {
            url.search = new URLSearchParams({
                email: parameter,
                apiKey: Config.key,
                reverseIp: 1,
                outputFormat: 'JSON',
            });
        } else if (Regex.isUrl(parameter)) {
            url.search = new URLSearchParams({
                domain: parameter,
                apiKey: Config.key,
                reverseIp: 1,
                outputFormat: 'JSON',
            });
        } else {
            url.search = new URLSearchParams({
                ipAddress: parameter,
                apiKey: Config.key,
                reverseIp: 1,
                outputFormat: 'JSON',
            });
        }
        return url;
    },
    emailVerification(keyword, isChecked) {
        const freshResult = isChecked ? 1 : 0;
        const url = new URL(Config.emailVerificationUrl);
        url.search = new URLSearchParams({
            emailAddress: keyword,
            validateDns: 1,
            validateSMTP: 1,
            _hardRefresh: freshResult,
            apiKey: Config.key,
            outputFormat: 'JSON',
        });
        return url;
    },
};

export default ApiEndpoint;
