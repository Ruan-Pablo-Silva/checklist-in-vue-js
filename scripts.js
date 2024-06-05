todoObjects = [
  // { toDoTxt: 'texta4' },
];

const objectLists = {
  data() {
    return {
      listData: window.todoObjects,
      newToDo: {
        toDoTxt: null
      },
    };
  },
  methods:{
    addToDo: function() {
      todoObjects.push(this.newToDo)
    },

    addNewItemOnToDoList: function() {
      if(this.newToDo.toDoTxt !== null){
        this.listData.push(this.newToDo)
      }

    }
  }
};

Vue.createApp(objectLists).mount('#app');
