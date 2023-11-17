// KnowQuest - 当插件安装后，添加右键菜单项
chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        "id": "createKnowledge",
        "title": "Create knowledge",
        "contexts": ["selection"]
    });
});

// 定义右键菜单项点击时的行为
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "createKnowledge") {
        // 获取选中的文本
        var selectedText = info.selectionText;

        // 将选中的文本编码为URL的一部分
        var encodedText = encodeURIComponent(selectedText);

        // 创建新标签页，并将选中文本作为参数传递
        chrome.tabs.create({ url: "https://portal.teamsfirm.com/idocument/fastindex?txt=" + encodedText });
    }
});

// 当点击浏览器动作图标时
chrome.action.onClicked.addListener(function (tab) {
    // 直接打开指定的URL
    chrome.tabs.create({ url: "https://portal.teamsfirm.com/idocument/fastindex" });
});
  