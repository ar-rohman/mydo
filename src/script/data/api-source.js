import ApiEndpoint from '../globals/api-endpoint';
import FetchApi from '../globals/fetch-api';

class ApiSource {
    static whoisLookup(parameter) {
        return FetchApi(ApiEndpoint.whois(parameter));
    }

    static domainAvailabilityLookup(parameter) {
        return FetchApi(ApiEndpoint.domainAvailability(parameter));
    }

    static ipGeolocationLookup(parameter) {
        return FetchApi(ApiEndpoint.ipGeolocation(parameter));
    }
}

export default ApiSource;
