
function openModal(){
    let container = document.getElementById('modal_open');
    container.style.display = 'block';
    return;

}

function closeModal(){
    let container = document.getElementById('modal_open');
    container.style.display = 'none';
    return;
}

function showBtn(btnId){
    let btn = document.getElementById(btnId)
    btn.style.display = 'block'
}

function hiddenBtn(btnId){
    let btn = document.getElementById(btnId)
    btn.style.display = 'none'
}