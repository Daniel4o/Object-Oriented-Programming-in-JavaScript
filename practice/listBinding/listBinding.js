class ListBinding {
    constructor(element) {
        this.listElement = element;
        this.textList = [];
    }

    static createListItem(text) {
        const li = document.createElement('li');
        li.textContent = text;
        return li;
    }

    update() {
        //removes all the existing li tags from the list element
        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild)
        }

        for (const text of this.textList) {
            this.listElement.appendChild(ListBinding.createListItem(text))
        }
    }

    add(text) {
        this.textList.push(text);
        this.update();
    }

    removeLast(index) {
        //removes last added item
        this.textList.pop(index, 1);
        this.update();
    }

    removeFirst(index) {
        //removes first added element
        this.textList.splice(index, 1);
        this.update();
    }

    removeAll(index) {
        this.textList.splice(index)
        this.update();
    }
}