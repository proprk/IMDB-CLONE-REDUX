import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset} from '../redux/counterSlice'


const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <>
            <div className="">
                <h1 className="">Counter:{count}</h1>
                <button  onClick={()=>{dispatch(increment())}} className="">+</button>
                <button  onClick={()=>{dispatch(decrement())}} className="">-</button>
                <button  onClick={()=>{dispatch(reset())}} className="">Reset</button>
            </div>
        </>
    )

}

export default Counter;