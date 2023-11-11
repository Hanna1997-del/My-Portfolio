import React, { ReactNode } from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from '../Magnetic';
import { circleStyle, roundedButtonStyle } from './style';
import { cn } from '@/lib/utils';

interface RoundedButtonProps {
  children: ReactNode | ReactNode[];
  backgroundColor?:string;
  className?: string;
  onClick?: () => void;
}
 


const RoundedButton: React.FC<RoundedButtonProps> = ({children, backgroundColor="#455CE9", className, ...attributes}) =>  {

  const circle = useRef<any>(null);
  let timeline = useRef<any>(null);
  let timeoutId:any = null;
  useEffect( () => {
    timeline.current = gsap.timeline({paused: true})
    timeline.current
      .to(circle.current, {top: "-25%", width: "150%", duration: 0.4, ease: "power3.in"}, "enter")
      .to(circle.current, {top: "-150%", width: "125%", duration: 0.25}, "exit")
  }, [])
  
  const manageMouseEnter = () => {
    if(timeoutId) clearTimeout(timeoutId)
    timeline.current.tweenFromTo('enter', 'exit');
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout( () => {
      timeline.current.play();
    }, 300)
  }

  return (
    <Magnetic>
      <div className={cn(roundedButtonStyle, className)} style={{overflow: "hidden"}} onMouseEnter={() => {manageMouseEnter()}} onMouseLeave={() => {manageMouseLeave()}} {...attributes}>
          {
            children
          }
        <div ref={circle} style={{backgroundColor}} className={circleStyle}></div>
      </div>
    </Magnetic>
  )
}

export default RoundedButton;
