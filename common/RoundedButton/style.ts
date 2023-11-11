// .roundedButton{
//     border-radius: 3em;
//     border: 1px solid rgb(136, 136, 136);
//     cursor: pointer;
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 15px 60px 15px 60px;

import { cn } from "@/lib/utils"

//     p{
//         position: relative;
//         z-index: 1;
//         transition: color 0.4s linear;
//     }

//     &:hover{
//         p{
//             color: white;
//         }
//     }
// }

// .circle{
//     width: 100%;
//     height: 150%;
//     position: absolute;
//     border-radius: 50%;
//     top: 100%;
// }


export const roundedButtonTextStyle = "[&>p]:relative [&>p]:z-[1] [&>p]:transition-colors [&>p]:duration-[0.4s] [&>p]:ease-linear group-hover:[&>p]:text-white"

export const roundedButtonStyle = cn("rounded-[3em] border-[1px] border-solid border-[rgb(136,_136,_136)] cursor-pointer relative flex items-center justify-center group py-[15px] px-[60px]", roundedButtonTextStyle)



export const circleStyle = "w-full h-[150%] absolute rounded-[50%] top-full"
