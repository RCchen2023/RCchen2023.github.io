function toggleDropdown(id) {
    var dropdownContent = document.getElementById(`dropdown-content-${id}`);
    dropdownContent.classList.toggle('show');

    // 取得被點擊項目的高度
    var clickedItemHeight = dropdownContent.offsetHeight;

    // 遍歷所有項目，從被點擊的項目後開始調整位置
    for (var i = id + 1; i <= 4; i++) {
        var item = document.getElementById(`dropdown-content-${i}`);

        if (item) {
            // 將後續項目往下移動
            item.style.marginTop = `${clickedItemHeight}px`;
        }
    }
}
