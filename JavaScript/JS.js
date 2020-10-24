let editor = document.getElementById("editor")   
let previewer = document.getElementById("preview")

editor.onkeyup = () => {
    previewer.innerHTML = marked(editor.value);
};

window.onload = () => {
    previewer.innerHTML = marked(editor.value);
};

