const flexContainer = document.getElementById('flex-container');

function setFlexDirection(direction) {
    flexContainer.style.flexDirection = direction;
}

function setJustifyContent(justifyContent) {
    flexContainer.style.justifyContent = justifyContent;
}

function setAlignItems(alignItems) {
    flexContainer.style.alignItems = alignItems;
}

function setGap(gap) {
    flexContainer.style.gap = `${gap}px`;
}

function setFlexGrow(item, value) {
    const flexItem = flexContainer.children[item - 1];
    flexItem.style.flexGrow = value;
}

function resetFlexbox() {
    flexContainer.style.flexDirection = 'row';
    flexContainer.style.justifyContent = 'flex-start';
    flexContainer.style.alignItems = 'flex-start';
    flexContainer.style.gap = '10px';
    
    document.getElementById('flex-grow-1').value = 0;
    document.getElementById('flex-grow-2').value = 0;
    document.getElementById('flex-grow-3').value = 0;
    for (let i = 0; i < flexContainer.children.length; i++) {
        flexContainer.children[i].style.flexGrow = 0;
    }
    
    document.getElementById('gap').value = 10;
}
