let lists = document.getElementsByClassName('list');

let rightBox = document.getElementById('right');

let leftBox = document.getElementById('left');
document.get
let canDrop = true;
function restablecerCanDrop() {
    canDrop = true;
}

for (list of lists){
    list.addEventListener('dragstart', function(e){
        let selected = e.target;

        if(canDrop){
            rightBox.addEventListener('dragover', function(e){
                e.preventDefault();
            });
            rightBox.addEventListener('drop', function(e){
                rightBox.appendChild(selected);
                selected= null;
                canDrop = false;
            });
        }

        leftBox.addEventListener('dragover', function(e){
            e.preventDefault();
        });
        leftBox.addEventListener('drop', function(e){
        leftBox.appendChild(selected);
            selected= null;
            canDrop = true;
        });
    })
}