
// .contact{
//     color: white;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     background-color: #141516;
//     position: relative;
//     .body{
//         padding-top: 200px;
//         width: 100%;
//         max-width: 1800px;
//         background-color: #141516;

import { cn } from "@/lib/utils";

//         .title{
//             border-bottom: 1px solid rgb(134, 134, 134);
//             padding-bottom: 100px;
//             margin-left: 200px;
//             margin-right: 200px;
//             position: relative;
//             span{
//                 display: flex;
//                 align-items: center;
//                 .imageContainer{
//                     width: 100px;
//                     height: 100px;
//                     position: relative;
//                     border-radius: 50%;
//                     overflow: hidden;

//                     img{
//                         object-fit: cover;
//                     }
//                 }
//                 h2{
//                     margin-left: 0.3em;
//                 }
//             }
//             h2{
//                 font-size: 5vw;
//                 margin: 0px;
//                 font-weight: 300;
//             }
//             .buttonContainer{
//                 position: absolute;
//                 left: calc(100% - 400px);
//                 top: calc(100% - 75px);
//             }
//             .button{
//                 width: 180px;
//                 height: 180px;
//                 background-color: #455CE9;
//                 color: white;
//                 border-radius: 50%;
//                 position: absolute;
//                 display: flex;
//                 align-items: center;
//                 justify-content: center;
//                 cursor: pointer;
//                 p{
//                     margin: 0px;
//                     font-size: 16px;
//                     font-weight: 300;
//                     z-index: 2;
//                     position: relative;
//                 }
//             }
//             svg{
//                 position: absolute;
//                 top: 30%;
//                 left: 100%;
//             }
//         }
//         .nav{
//             display: flex;
//             gap: 20px;
//             margin-top: 100px;
//             margin-left: 200px;
//             margin-right: 200px;
//         }
//         .info{
//             display: flex;
//             justify-content: space-between;
//             margin-top: 200px;
//             padding: 20px;
//             div{
//                 display: flex;
//                 gap: 10px;
//                 align-items: flex-end;
//                 p, h3{
//                     margin: 0px;
//                     padding: 2.5px;
//                     cursor: pointer;
//                 }
//                 p{
//                     &::after{
//                         content: "";
//                         width: 0%;
//                         height: 1px;
//                         background-color: white;
//                         display: block;
//                         margin-top: 2px;
//                         position: relative;
//                         left: 50%;
//                         transform: translateX(-50%);
//                         transition: width 0.2s linear;
//                     }
//                     &:hover{
//                         &::after{
//                             width: 100%;
//                         }
//                     }
//                 }
//                 span{
//                     display: flex;
//                     flex-direction: column;
//                     gap: 15px;
//                 }
//                 h3{
//                     color: grey;
//                     cursor: default;
//                     font-weight: 300;
//                     font-size: 1em;
//                 }
//             }

//         }
//     }

// }

export const contactStyle =
  "text-white flex flex-col items-center justify-center bg-[#141516] relative";

export const contactBodyStyle = "pt-[200px] w-full max-w-[1800px] bg-[#141516]";

export const contactTitleStyle =
  "border-b-[1px] border-solid border-b-[rgb(134,134,134)] pb-[100px] ml-[200px] mr-[200px] relative";

export const buttonContainerStyle =
  "absolute left-[calc(100%_-_400px)] top-[calc(100%_-_75px)]";


 
export const buttonTextStyle = "[&>p]:m-0 [&>p]:text-[16px] [&>p]:font-[300] [&>p]:z-[2] [&>p]:relative";
export const buttonStyle = cn(
  "w-[180px] h-[180px] bg-[#455CE9] text-white rounded-[50%] absolute flex items-center justify-center cursor-pointer",
  buttonTextStyle
)

  
export const svgStyle = "absolute top-[30%] left-full";

export const navStyle = "flex gap-[20px] mt-[100px] ml-[200px] mr-[200px]"

export const infoStyle = "flex justify-between mt-[200px] p-[20px]"

export const infoDivStyle = "flex gap-[10px] items-end"


export const infoDivCommonStyle = "m-0 p-[2.5px] cursor-pointer"

export const imageContainerStyle = "w-[100px] h-[100px] relative rounded-[50%] overflow-hidden [&>img]:object-cover"

export const infoDivTextAfterStyle= "after:content-[_] after:w-0 after:h-[1px] after:bg-white after:mt-[2px] after:relative after:left-[50%] after:translate-x-[-50%] after:transition-all after:duration-[0.2s] after:ease-linear"
export const infoDivTextHoverStyle = "hover:after:w-full"
export const infoDivTextStyle =  cn(infoDivCommonStyle, infoDivTextAfterStyle, infoDivTextHoverStyle)

export const infoDivHeadingStyle = cn(infoDivCommonStyle, "text-[grey] cursor-default font-[300] text-[1em]" )

export const infoDivSpanStyle = "flex flex-coll gap-[15px]"