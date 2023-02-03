import { useState } from "react";

function Counter(){
    let count = 0;
    const [plus,setPlus] = useState('')
    const [minus,setMinus] = useState('')

    const plusChangeHandler = ()=> {
        if(plus == '+'){
            setPlus(count + 1)
        }
    }
    const minusChangeHandler = ()=> {
        if(minus == '-'){
            setMinus(count - 1)
        }
    }

    // const span0 = ()=> {
    //     if(plus == '+'){
    //         setPlus(count + 1)
    //     } else if(minus == 0){
    //         setMinus(count - 1)
    //     }
    // }
    return <div>
        <button onClick={plusChangeHandler }>+</button>
        <h2>{count}</h2>
        <button onClick={minusChangeHandler }>-</button>
    </div>
}
export default Counter;