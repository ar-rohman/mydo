import logoText from '../images/logoText.png';

function myDoApp() {
	document.addEventListener("DOMContentLoaded", () => {
		const lookupDomainInput = document.querySelector("#lookupDomainInput");
        const lookupDomainButton =  document.querySelector("#lookupDomainButton");
        
        lookupDomainButton.addEventListener("click",  () => {
			const domainText = lookupDomainInput.value;
			getDomainInfo(domainText);
        });
    });

	const getDomainInfo = (domainString) => {
        const url = new URL('https://www.whoisxmlapi.com/whoisserver/WhoisService')
        url.search = new URLSearchParams({
            apiKey: "at_sVKWc7ce8A6XbtuEEf8U25xs2EUSo",
			outputFormat: "JSON",
			ip: 1,
			domainName: domainString
        });

        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.WhoisRecord) {
                if(responseJson.WhoisRecord.dataError) {
                    badResponse("Couldn\'t find the domain name")
                }
                else {
                    goodResponse(responseJson.WhoisRecord);
                }
            } else {
                badResponse(responseJson.ErrorMessage.msg)
            }
        })
        .catch(errorMessage => {
            badResponse(errorMessage);
        })
    };
    
    const lookupDomainDetail = document.querySelector("domain-info");

    const goodResponse = results => {
        lookupDomainDetail.domain = results;
    };

    const badResponse = message => {
        lookupDomainDetail.renderError(message);
    };

    /**
     * brand logo (header)
     */
    const logo = document.querySelector("#logoText");
    const brandIcon = new Image();
    brandIcon.src = logoText;
    brandIcon.height = 40;
    brandIcon.alt = "MyDo";
    logo.appendChild(brandIcon);
}

export default myDoApp;