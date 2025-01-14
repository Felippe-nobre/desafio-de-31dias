function diretorios(caminho) {
    for (let item of caminho) {
        if (Array.isArray(item)) {
            diretorios(item);
        }else{
            console.log(item);
        }
    }
    
}

let arquivos = [["index.html"], ["css","style.css"], ["js", "script.js"]];
diretorios(arquivos);