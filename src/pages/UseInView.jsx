import React from 'react'
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const UseInView = () => {
    
    // Normal 
    const line1Ref = useRef()
    const [isVisible, setIsVisible] = useState()
    useEffect(() => {
        const viewPortTester = new IntersectionObserver((entries) => {
            setIsVisible(entries[0].isIntersecting)
        })
        viewPortTester.observe(line1Ref.current)
    }, [])

    // Use useInView --> just 1 line of code...
    const { ref: line2Ref, inView: line2IsVisible } = useInView()

    // Just styles
    const sectionStyle = {
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const sectionStyle1 = {
        ...sectionStyle,
        backgroundColor: "#239873",
    }

    const sectionStyle2 = {
        ...sectionStyle,
        backgroundColor: "#987352"
    }

    const sectionStyle3 = {
        ...sectionStyle,
        backgroundColor: "#C48574"
    }

    return (
        <div>
            <div className="section1" style={sectionStyle1}  ref={line2Ref}>
                Section 1
            </div>
            <div className="section2" style={sectionStyle2}>
                <p style={{fontSize: line2IsVisible? "16px": "40px"}}>{isVisible? "*---------------------*": "Section 2"}</p>
            </div>
            <div className="section3" style={sectionStyle3} ref={line1Ref}>
                Section 3
            </div>
        </div>
    )
}

export default UseInView