

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


let data = {
    items: [
        {id: 1, label: 'First item'},
        {
            id: 2, label: 'Second item', items: [
                {id: 3, label: 'Sub Second item 1'},
                {id: 4, label: 'Sub Second item 2'},
                {
                    id: 5, label: 'Sub Second item 3', items: [
                        {id: 6, label: 'Third item'},
                        {id: 7, label: 'Fourth item'}
                    ]
                },
            ]
        },
        {id: 8, label: 'Third item'},
        {id: 9, label: 'Fourth item'},
    ]
};


function listToTree(data, options) {
    options = options || {};
    let ID_KEY = options.id || 'id';
    let LABEL_KEY = options.label || 'label';
    let ITEMS_KEY = options.items || 'items';

    let map = {};
    for (let i = 0; i < data.length; i++) {
        if (data[i][ID_KEY]) {
            map[data[i][ID_KEY]] = data[i];
            data[i][ITEMS_KEY] = [];
        }
    }
    for (let i = 0; i < data.length; i++) {
        if (data[i][LABEL_KEY]) {
            if (map[data[i][LABEL_KEY]]) {
                map[data[i][LABEL_KEY]][ITEMS_KEY].push(data[i]);
                data.splice(i, 1);
                i--;
            } else {
                data[i][LABEL_KEY] = 0;
            }
        }
    }
    return data;
}


let tree = listToTree(JSON.parse(JSON.stringify(data)));


/*
function deleteElementById(data, id) {
    let array = data.items;
    let newData = array.filter(x => x.id !== id);
    return newData;
}
*/

const removeById = (data, id) =>
    Array.isArray(data) ? data.filter(x => x.id != id).map(x => removeById(x)) :
        typeof(data) == 'object'
            ? Object.entries(data).reduce((r, [k,v]) => (r[k] = removeById(v), r), {})
            : data

let deleted2 = removeById(data, 3);


//document.getElementsByClassName("treeData")[0].innerHTML = JSON.stringify(tree, null, 2);
document.getElementsByClassName("treeData")[0].innerHTML = JSON.stringify(deleted2, null, 2);



