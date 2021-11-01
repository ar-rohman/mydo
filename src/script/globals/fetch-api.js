const FetchApi = async (url, options = null) => {
    const response = await fetch(url, options);
    const responseJson = await response.json();
    return responseJson;
    // try {
    //     const response = await fetch(url, options);
    //     if (response.error) {
    //         throw new Error(`Status code: ${response.status}`);
    //     }
    //     const responseJson = await response.json();
    //     return responseJson;
    // } catch (error) {
    //     const errorResult = {
    //         error: true,
    //         message: `Something went wrong, please try again later!<br>${error}`,
    //     };
    //     return errorResult;
    // }
};

export default FetchApi;
