'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import { burgerStyle, burgetActiveStyle, buttonStyle, codeByStyle, copyrightStyle, dennisStyle, elStyle, headerButtonContainerStyle, headerStyle, indicatorStyle, logoStyle, nameStyle, navStyle, snellenbergStyle } from './style';

export default function Header() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"})}
            }
        })
    }, [])

    return (
        <>
        <div ref={header} className={headerStyle + " header"}>
            <div className={logoStyle}>
                <p className={copyrightStyle}>©</p>
                <div className={nameStyle}>
                    <p className={dennisStyle}>Hnin Thet Hmue</p>
                </div>
            </div>
            <div className={navStyle}>
                <Magnetic>
                    <div className={elStyle}>
                        <a>Work</a>
                        <div className={indicatorStyle}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={elStyle}>
                        <a>About</a>
                        <div className={indicatorStyle}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={elStyle}>
                        <a>Contact</a>
                        <div className={indicatorStyle}></div>
                    </div>
                </Magnetic>
            </div>
        </div>
        <div ref={button} className={headerButtonContainerStyle}>
            <Rounded onClick={() => {setIsActive(!isActive)}} className={`${buttonStyle}`}>
                <div className={`${burgerStyle} ${isActive ? burgetActiveStyle : ""}`}></div>
            </Rounded>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav />}
        </AnimatePresence>
        </>
    )
}
