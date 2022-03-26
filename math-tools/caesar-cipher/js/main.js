/*
 * Makes a new DOM element and assigns a given value
 *
 * TAKES:
 *  tag_name : string
 *  value : number/string/DOM object
 *
 * RETURNS:
 *  A DOM element with the given value
 */
function make_element(tag_name, value){
    let elt = document.createElement(tag_name);
    (typeof value === 'object') ? elt.appendChild(value) : elt.innerHTML = value;
    return elt;
}

function make_row(...args){
    let row = document.createElement('tr');
    for(let elt of args){
        let data = make_element('td', elt);
        row.appendChild(data);
    }
    return row;
}

function caesar(text, key, en_or_de, step){
    let result = ``;
    key = parseInt(key);
    let table = document.createElement('table');
    table.setAttribute("id", "TBL");

    for(let ch of text){
        if(ch == ' '){
            result = `${result} `;
            continue;
        }
        if(en_or_de == 'e'){
            let char_code = ch.charCodeAt(0) - 64;
            let new_char_code = (char_code + key)%26;
            result = `${result}${String.fromCharCode(new_char_code + 64)}`;
        }else{
            let char_code = ch.charCodeAt(0) - 64;
            let new_char_code = Math.abs(char_code - key)%26;
            result = `${result}${String.fromCharCode(new_char_code + 64)}`;
        }
    }

    if(step){
        for(let ch of text){
            if(en_or_de == 'e'){
                let char_code = ch.charCodeAt(0) - 64;
                let new_char_code = (char_code + key)%26;
                let row = make_row(ch, char_code, `(${char_code} + ${key}) % 26`, new_char_code, String.fromCharCode(new_char_code + 64));
                table.appendChild(row);
            }else{
                let char_code = ch.charCodeAt(0) - 64;
                let new_char_code = Math.abs(char_code - key)%26;
                let row = make_row(ch, char_code, `(${char_code} - ${key}) % 26`, new_char_code, String.fromCharCode(new_char_code + 64));
                table.appendChild(row);
            }
        }
        if(step) document.getElementById("TABLE").appendChild(table);
    }

    return 0;
}

export default function resolve(text, type, key, en_or_de, step){
    console.log(caesar(text.toUpperCase(), key, en_or_de, step));
}
