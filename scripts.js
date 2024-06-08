todoObjects = [
  // { toDoTxt: 'texta4' },
  //test
];

const objectLists = {
  data() {
    return {
      listData: window.todoObjects,
      newToDo: { toDoTxt: null}, //  binding with v-model
    };
  },
  methods:{
    addNewItemOnToDoList: function() {
      if(this.newToDo.toDoTxt !== null && this.newToDo.toDoTxt.trim().length > 0){
        this.listData.push(this.newToDo)
        console.log(this.listData)
        this.newToDo = {toDoTxt: null} //passing a new object 
      }
    },
    
    eraseAllData: function(){
      if(this.listData.length > 0){
        this.listData = {}
        console.log(this.listData)

      }

    }
  }
};

Vue.createApp(objectLists).mount('#app');
