const form = document.querySelector('form');
const inputValue = document.getElementById('input');
const listContainer = document.getElementById('list-container');

let listArray=[];
class ListObjects{
    constructor(list,complete,id){
       this.list=list;
       this.complete=complete;
       this.id=id;
    }
}

if(form){form.addEventListener('submit',(e) =>{
    e.preventDefault();
    //addList();
    UI.displayDatas();
    UI.cleanInputs();
  })
}

  const addList = (list,complete,id) => {
    // id = listArray.length+1;
    // list = inputValue.value;
    // complete = false;
    const listObject = new ListObjects(list,complete,id);
    listArray= [...listArray,listObject];
    localStorage.setItem('listStorage', JSON.stringify(listArray));
  }
  
  class UI {
    static displayDatas() {
      let data =listArray.map((items) => {
        return`<div class="lists" id=${items.id}>
          <span><input class="form-check-input" type="checkbox"> <span>${items.list}</span></span>
          <span><i class="fa fa-ellipsis-v"></i></span>
        </div>`;
      });
      listContainer.innerHTML = data.join('');
    }
  
    static cleanInputs(){
      inputValue.value="";
    }
  }
  
  window.addEventListener('load',() =>{
    if(localStorage.getItem('listStorage')){
      listArray= JSON.parse(localStorage.getItem('listStorage'));
      UI.displayDatas();
    }
  });
  
  if(listContainer){listContainer.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fa-ellipsis-v')){
      e.target.classList.remove('fa-ellipsis-v');
      e.target.classList.add('fa-trash');
      e.target.parentElement.parentElement.style.backgroundColor='#95577546';
    }
    else if (e.target.classList.contains('fa-trash')) {
      const idValue = e.target.parentElement.parentElement.id;
      
      const index = idValue-1;
      listArray.splice(index, 1);
      for (let i = 0; i < listArray.length; i += 1) {
        listArray[i].id = i + 1;
      }
    
      localStorage.setItem('listStorage', JSON.stringify(listArray));
      UI.displayDatas();
    }
  })
}
  

  export {addList};
  