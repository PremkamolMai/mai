//Todo class
class Todo{
    static runningId=1 //เริ่มจาก1
    constructor(description){ 
        this.id=Todo.runningId++ //idจะ+เพิ่ม เมื่อถูกเรียก
        this.description=description
    }

    getTodo (){ //return opject คือเอาidใส่ในidของตัวเอง
        return {
            id: this.id,
            description: this.description
        }
    }
    setDescription (newDescription){ //เอาค่าdescriptionใหม่ ไปใส่ในตัวมันเอง
        this.description = newDescription
    }
}
function TodoListManagement(){
    let todos =[] //สร้างarrayมาเก็บข้อมูล

function addTodo(description){
        todos.push(new Todo(description)) //สร้างtodoใหม่โดยdescription ไปเก็บในarray
        return  todos.length 
    }
function removeTodo(removeId){
    return todos=todos.filter(e => e.id != removeId) //จะกรองตัวที่เป็นtrue เอาไปในarray
    }
function findTodo(searchId){
    return todos.find(e => e.id === searchId) //จะเอาไว้หาidที่ต้องการ โดยจะเจอตัวแรกแล้วเอามาตอบ และไม่เอาตัวที่2มาตอบ
}
function getTodos(){
    return todos //return []
}
return { //return object ที่เก็บ function เพื่อเอาไปทำ destructuring 
    addTodo,
    removeTodo,
    findTodo,
    getTodos
}//destructuring คือfunctionซ้อนfunction และจะreturn functionออกมา**
}//ชื่อattribute ต้องเท่ากัน (let=functionทั้งหมด)
let {addTodo,removeTodo,findTodo,getTodos} = TodoListManagement()
addTodo("piwpiw")
addTodo("jiwjiw")
removeTodo(1)
//console.log(findTodo(2));
findTodo(2).setDescription('tiwtiw')
console.log(getTodos());