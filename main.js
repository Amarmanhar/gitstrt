var form = document.getElementById('addForm');
var itemList= document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItem);

function addItem(e){
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item').value;
// create new list
var li = document.createElement('li');
li.className= 'list-group-item';
//add textNode
li.appendChild(document.createTextNode(newItem));

// create delete bttn
var deletebtn = document.createElement('button');
deletebtn.className = 'btn-danger btn-sm float-right delete';
// create TextNode

deletebtn.appendChild(document.createTextNode('X'));

li.appendChild(deletebtn);
// add li to list
itemList.appendChild(li);
}
//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure want to delete')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// filter 
function filterItem(e){
     // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
