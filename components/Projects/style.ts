// .projects{
//     display: flex;
//     align-items: center;
//     padding-left: 200px;
//     padding-right: 200px;
//     flex-direction: column;
//     margin-top: 300px;

import { cn } from "@/lib/utils"

//     .body{
//         max-width: 1400px;
//         width: 100%;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         margin-bottom: 100px;
//     }
    
//     .modalContainer{
//         height: 350px;
//         width: 400px;
//         position: fixed;
//         top: 50%;
//         left: 50%;
//         background-color: white;
//         pointer-events: none;
//         overflow: hidden;
//         z-index: 3;
//     }
    
//     .modalSlider{
//         height: 100%;
//         width: 100%;
//         position: relative;
//         transition: top 0.5s cubic-bezier(0.76, 0, 0.24, 1);
//     }
    
//     .modal{
//         height: 100%;
//         width: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//     }
    
//     .modal img{
//         height: auto;
//     }
    
//     .cursor, .cursorLabel{
//         width: 80px;
//         height: 80px;
//         border-radius: 50%;
//         background-color: #455CE9;
//         color: white;
//         position: fixed;
//         z-index:3;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         font-size: 14px;
//         font-weight: 300;
//         pointer-events: none;
//     }
    
//     .cursorLabel{
//         background-color: transparent;
//     }
    
    
// }




export const projectStyle = "flex items-center px-[200px] flex-col mt-[300px]"

export const bodyStyle = "max-w-[1400px] w-full flex flex-col items-center justify-center mb-[100px]"

export const modalContainerStyle = "h-[350px] w-[400px] fixed top-[50%] left-[50%] bg-white pointer-events-none overflow-hidden z-[3]"

export const modalSliderStyle = "h-full w-full relative transition-all duration-[0.5s] ease-in"


export const modalStyle = "h-full w-full flex items-center justify-center [&>img]:h-auto"

export const cursorStyle = "w-[80px] h-[80px] rounded-[50%] bg-[#455CE9] text-white fixed z-[3] flex items-center justify-center text-[14px] font-[300] pointer-events-none"

export const cursorLabelStyle = cn(
    cursorStyle,
    "bg-transparent"
)