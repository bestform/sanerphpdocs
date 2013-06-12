chrome.contextMenus.removeAll();
chrome.contextMenus.create({"title":"Extract Product Data", "contexts":["page"], "onclick":function(info, tab){
    chrome.tabs.sendRequest(tab.id, {
        'action': 'startToExtract',
        'data'  : {showcontentinoverlay: getShownewcontent()}
    });
}});

function getShownewcontent(){
    return localStorage['showcontentinoverlay'] === "true";
}
