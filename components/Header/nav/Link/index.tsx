
import _Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../animation';
import { indicatorStyle, linkStyle } from './style';

export default function Link({data, isActive, setSelectedIndicator}:any) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div 
        className={linkStyle} 
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className={indicatorStyle}>
        </motion.div>
        <_Link href={href}>{title}</_Link>
      </motion.div>
    )
}