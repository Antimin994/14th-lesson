var descBlock = document.querySelectorAll('.pane');

descBlock.forEach(function(imgDelete, i, descBlock) {
var imgDelete = document.createElement('img');
imgDelete.setAttribute('src', 'delete.gif');
imgDelete.setAttribute('style', 'display: block');
descBlock[i].appendChild(imgDelete);
console.log(descBlock[i]);
imgDelete.addEventListener("click", function (e) {
    descBlock[i].setAttribute('style', 'display: none');
});
});








