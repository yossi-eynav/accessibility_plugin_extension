chrome.webRequest.onBeforeRequest.addListener(
    (request) => {
        if(request.url.match('nagich')) {
            return {cancel: true};
        }
    },
    {
        urls: ["*://*/*"],
    },
    ["blocking"]
);