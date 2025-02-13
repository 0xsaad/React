import { useCallback ,useState } from "react"; 
import Todos from "../components/Todos";

const Callbackhook = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    const increment = () => {
        setCount(count + 1);
    }

    const addTodo = useCallback(() => {
        setTodos((prev) => [ ...prev, `new Entry`]);
    }, [todos]);
   
    return (
        <>
        <Todos todos = {todos} addTodos = {addTodo} />
        <hr />
        <div>
          Count: {count}
          <button onClick= {increment} > + </button>
        </div>
        </>
    );
};

export default Callbackhook;