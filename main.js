let list;

axios.get('http://localhost:3000/todo')
  .then(function (response) {
      console.log(response.data);
        list = new ListItem(response.data);
    })
    .catch((error =>{
        console.error(error);
    }))

    
    class ListItem {
        constructor(data){
            this.ul = document.querySelector(".list");
            this.data = data;
            this.arr =[];
            this.data.map(item=>{
                this.arr.push(new Item(item,this.ul))                
            })
        }

        addNewItem(item){
            console.log(item);
            this.arr.push(new Item(item,this.ul));
        }
      }

    class Item {
        constructor(data,ul){
            this.id = data._id;
            this.ul = ul;
            this.data = data;
            this.li = document.createElement("li");
            this.dltBtn = document.createElement("button");
            this.dltBtn.textContent = "Delete";
            this.li.textContent = this.data.name;
            this.dltBtn.addEventListener('click',this.hendleDeleteBtn.bind(this));
            this.dltBtn.setAttribute("type","button");
            this.li.setAttribute("id",this.data._id);
            this.li.setAttribute("class",this.data.completed? "task done" : "task");
            this.li.append(this.dltBtn);
            this.ul.append(this.li);
            this.li.addEventListener('click',this.hendleClick)
        }

        hendleDeleteBtn(event){
            event.preventDefault();
            const url = `http://localhost:3000/todo/${this.data._id}`;
            axios.delete(url);
            this.li.remove();
            this.dltBtn.remove();
        }

        hendleClick = (event) => {
            this.data.completed = !this.data.completed;
            this.li.setAttribute("class",this.data.completed? "task done" : "task");
            axios.patch(`http://localhost:3000/todo/${this.data._id}`,this.data);
            
        }
    }
  
const input = document.getElementById('todoInput');
input.addEventListener('keypress',(event)=>{
    if(event.key == 'Enter'){
        const item = {
            completed : false,
            creted_at : new Date(),
            name : input.value,
            __v : 0,
            _id : Math.random().toString()
        }
        list.addNewItem(item);
        axios.post('http://localhost:3000/todo/',item).then(res => console.log(res));
    }
});