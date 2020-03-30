let data = [];

let html = document.getElementsByTagName('tr');

console.log(html.length);

for(let i=0;i<html.length;i++){
    let childs = html[i].childNodes;
    let img = childs[1].childNodes[0].childNodes[0];
    let name = childs[2].childNodes[0].innerText;
    if(img !== undefined && (name !== undefined || name !== "")){
        let row = {"nom":name,"image":img.attributes[5].value};
        data.push(row);
    }
    
   
}

var body = document.getElementsByTagName('body');
var parent = body[0].parentNode;
parent.removeChild(body[0]);
parent.append(JSON.stringify(data));
