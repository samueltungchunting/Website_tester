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
        height: "40vh",
        position: "relative",
        textAlign: "center"
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
        backgroundColor: "#C48574",
    }

    const sectionStyle4 = {
        ...sectionStyle,
        backgroundColor: "#3204",
    }


    return (
        <div>
            <div className="section1" style={sectionStyle1}  ref={line2Ref}>
                <div style={{}}>
                    <h4>Section 3 News</h4>
                    <p style={{maxWidth: "400px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium laborum maiores eaque, vitae in dignissimos recusandae quam asperiores soluta illum.</p>
                </div>
            </div>

            <div className="section2" style={sectionStyle2}>
                <div className="box2" style={{position: "absolute"}}>
                    Box 2
                </div>
                <div style={{}}>
                    <h4>Section 3 News</h4>
                    <p style={{maxWidth: "400px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium laborum maiores eaque, vitae in dignissimos recusandae quam asperiores soluta illum.</p>
                </div>
            </div>
            
            <div className="section3" style={sectionStyle3} ref={line1Ref}>
                <div style={{}}>
                    <h4>Section 3 News</h4>
                    <p style={{maxWidth: "400px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium laborum maiores eaque, vitae in dignissimos recusandae quam asperiores soluta illum.</p>
                </div>
            </div>

            <div className="section4" style={sectionStyle4} ref={line1Ref}>
                <div style={{}}>
                    <h4>Section 3 News</h4>
                    <p style={{maxWidth: "400px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium laborum maiores eaque, vitae in dignissimos recusandae quam asperiores soluta illum.</p>
                </div>
            </div>
        </div>
    )
}

export default UseInView