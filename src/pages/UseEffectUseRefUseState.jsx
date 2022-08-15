import React from 'react'
import { useRef, useEffect, useState } from 'react'

const UseEffectUseRefUseState = () => {

    const [input, setInput] = useState('')
    const ref = useRef(0)
    const inputRef = useRef()
    const pRef = useRef()

    useEffect(() => {
        console.log(pRef.current);
        console.log(ref.current);
        ref.current = ref.current + 1   
    })

    function selectInput() {
        inputRef.current.focus()
        inputRef.current.value = "Hi Samuel"
        setInput(inputRef.current.value)
    }

    return (
        <div>
            <input 
                ref={inputRef}
                onChange={(e) => {setInput(e.target.value)}}
                value={input}
            />
            <p>Input name is : {input} </p>
            <button onClick={selectInput}>Focus Input</button>
            <p>This page has been re-rendered {ref.current} times</p>
            <p ref={pRef}>TESTING</p>
        </div>
    )
}

export default UseEffectUseRefUseState