import ApiEndpoint from '../globals/api-endpoint';
import FetchApi from '../globals/fetch-api';

class ApiSource {
    static whoisLookup(parameter) {
        return FetchApi(ApiEndpoint.whois(parameter));
    }
}

export default ApiSource;
