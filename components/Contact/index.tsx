
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';
import { buttonContainerStyle, buttonStyle, buttonTextStyle, contactBodyStyle, contactStyle, contactTitleStyle, imageContainerStyle, infoDivHeadingStyle, infoDivSpanStyle, infoDivStyle, infoDivTextStyle, infoStyle, navStyle, svgStyle } from './style';
import { cn } from '@/lib/utils';

export default function Contact() {
    const container = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div style={{y}} ref={container} className={contactStyle}>
            <div className={contactBodyStyle}>
                <div className={contactTitleStyle}>
                    <span className='flex items-center'>
                        <div className={imageContainerStyle}>
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`/images/background.png`}
                            />
                        </div>
                        <h2 className='text-[5vw] m-[0] font-[300] ml-[0.3em]'>{"Let's work"}</h2>
                    </span>
                    <h2 className='text-[5vw] m-[0] font-[300]'>together</h2>
                    <motion.div style={{x}} className={buttonContainerStyle}>
                        <Rounded  backgroundColor={"#334BD3"} className={buttonStyle}>
                            <p className={cn(buttonTextStyle, "font-[700]")}>Get in touch</p>
                        </Rounded>
                    </motion.div>
                    <motion.svg className={svgStyle} style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
                </div>
                <div className={navStyle}>
                        <Rounded>
                            <p>hninthethmue8@gmail.com</p>
                        </Rounded>
                        <Rounded>
                            <p>09 775975632</p>
                        </Rounded>
                </div>
                <div className={infoStyle}>
                    <div className={infoDivStyle}>
                        <span className={infoDivSpanStyle}>
                            <h3 className={infoDivHeadingStyle}>Version</h3>
                            <p className={infoDivTextStyle}>2022 © Edition</p>
                        </span>
                        <span className={infoDivSpanStyle}>
                            <h3 className={infoDivHeadingStyle}>Version</h3>
                            <p className={infoDivTextStyle}>11:49 PM GMT+2</p>
                        </span>
                    </div>
                    <div className={infoDivStyle}>
                        <span className={infoDivSpanStyle}>
                            <h3 className={infoDivHeadingStyle}>socials</h3>
                            <Magnetic>
                                <p className={infoDivTextStyle}>Awwwards</p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p className={infoDivTextStyle}>Instagram</p>
                        </Magnetic>
                        <Magnetic>
                            <p className={infoDivTextStyle}>Dribbble</p>
                        </Magnetic>
                        <Magnetic>
                            <p className={infoDivTextStyle}>Linkedin</p>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
