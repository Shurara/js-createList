let data = {
    items: [
        {id: 1, label: 'First item'},
        {
            id: 2, label: 'Second item', items: [
                {id: 3, label: 'Sub Second item 1'},
                {id: 4, label: 'Sub Second item 2'},
                {id: 5, label: 'Sub Second item 3',items: [
                        {id: 6, label: 'Third item'},
                        {id: 7, label: 'Fourth item'}
                    ]},
            ]
        },
        {id: 8, label: 'Third item'},
        {id: 9, label: 'Fourth item'},
    ]
}

/*let data = {
    items: [
        {id: 1, label: 'First item'},
        {id: 2, label: 'Second item'},
        {id: 3, label: 'Sub Second item 1'},
        {id: 4, label: 'Sub Second item 2'},
        {id: 5, label: 'Sub Second item 3'},
        {id: 6, label: 'Third item'},
        {id: 7, label: 'Fourth item'},
    ]
}*/


let array = data.items;
console.log(data);
console.log(array);


let getList = (array) => {

    // array.filter(x => !x.hasOwnProperty('items')).forEach(x => createSimpleElement(x))

    for (let i = 0; i < array.length; i++) {
        let item = array[i]
        // console.log(item.id)
        if (!item.hasOwnProperty('items')) {
            createSimpleElement(item)
        } else {
            createComplexElement(item);
        }
    }
}


getList(array);


function createSimpleElement(item) {
    let container = document.getElementsByClassName('container')[0];
    let elementId = item.id;
    let elementLabel = item.label;
    let uList = document.createElement('ul');
    uList.className = ('list');
    let li = document.createElement('li');
    li.append(document.createTextNode(elementId + " " + elementLabel));
    uList.appendChild(li);
    container.appendChild(uList);
    return uList;
}

function createComplexElement(item) {
    let base = createSimpleElement(item);
    while (item.hasOwnProperty('items')) {
        let elementItems = item.items;
        let innerList = document.createElement('ul');
        let innerLi = document.createElement('li');
        innerLi.append(createComplexElement(elementItems));
        innerList.append(innerLi);
        base.appendChild(innerList);
        return base;
    }

}




