
const user = {
    name : 'valera',
    id : 1,
    logname(greeting){
        console.log(greeting + " " +this.name);
    }

};

user.logname();

console.log(Object.keys(user));    
console.log(Object.values(user));    
console.log(Object.entries(user));   

console.log('***********************************************************');

const func = user.logname;

// func();
// выводит 
// undefined undefined

console.log('-');
func.call( {
    name:"Borya",
}, 'Hello');

console.log('-');
func.apply( {
    name:"Kostya",
},['Hello']);

console.log('-');
const f = func.bind( {
    name:"Masha",
},['Hello']);

f();

console.log('***********************************************************');

class BaseTodo {
    constructor(text, done) {
        this.id = Date.now();
        this.text = text;
        this.done = done;
    }

    logText(){
        console.log(this.text);
    }
}

class TodoWithDeadLine extends BaseTodo{
    constructor(text, done,time) {
        super(text, done);
        this.time = time;
    }

}

const baseTodo = new BaseTodo('Same Text', false);
const todoWithDeadLine = new TodoWithDeadLine('Same Text', false,2);

console.log(baseTodo);
todoWithDeadLine.logText();