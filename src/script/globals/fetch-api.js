const FetchApi = async (url, options = null) => {
    const response = await fetch(url, options);
    const responseJson = await response.json();
    return responseJson;
};

export default FetchApi;
