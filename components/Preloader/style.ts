// .introduction{
//     height: 100vh;
//     width: 100vw;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: fixed;
//     z-index: 99;
//     background-color: #141516;
//     svg{
//         position: absolute;
//         top: 0;
//         width: 100%;
//         height: calc(100% + 300px);
//         path{
//             fill: #141516;
//         }
//     }
//     p{
//         display: flex;
//         color: white;
//         font-size: 42px;
//         align-items: center;
//         position: absolute;
//         z-index: 1;
//         span{
//             display: block;
//             width: 10px;
//             height: 10px;
//             background-color: white;
//             border-radius: 50%;
//             margin-right: 10px;
//         }
//     }
// }

import { cn } from "@/lib/utils"



export const introSvgStyle = "[&>svg]:absolute [&>svg]:top-0 [&>svg]:w-full [&>svg]:h-full [&>svg>path]:fill-[#141516]"
export const introTextStyle = "[&>p]:flex [&>p]:text-white [&>p]:text-[42px] [&>p]:text-center  [&>p]:items-center [&>p]:absolute [&>p]:z-[1]"
export const introSpanStyle = "[&>p>span]:block [&>p>span]:w-[10px] [&>p>span]:h-[20px] [&>p>span]:bg-white [&>p>span]:rounded-[50%] [&>p>span]:mr-[10px]"
export const introductionStyle = cn(
    "h-screen w-screen flex items-center justify-center fixed z-[99] bg-[#141516] relative",
    introSvgStyle,
    introTextStyle,
    introSpanStyle
)