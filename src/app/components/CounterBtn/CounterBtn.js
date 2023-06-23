import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import './style.css'

const CounterBtn = (props) => {
    const [counter, setCounter] = useState('')
    const handleIncr = () => {
        console.log(counter)
        setCounter(counter + 1)
    }
    const handleDecr = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        } else setCounter('')
    }
    return (
        <div className='appart_container'>
            <input className='input' type='text' value={counter} placeholder={props.placeholder} />
            <button className='btn' onClick={handleDecr}><AiOutlineMinus /></button>
            <button className='btn' onClick={handleIncr}><AiOutlinePlus /></button>
        </div>
    )
}

export default CounterBtn
