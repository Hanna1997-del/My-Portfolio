import { cn } from "@/lib/utils";
// .header{
//     position: absolute;
//     display: flex;
//     z-index: 1;
//     top: 0;
//     color: white;
//     padding: 35px;
//     justify-content: space-between;
//     width: 100%;
//     font-weight: 300;
//     box-sizing: border-box;
//     align-items: center;

//     .logo{
//         display: flex;
//         cursor: pointer;
//         p{
//             margin: 0px;
//             transition: all 0.5s cubic-bezier(0.76, 0, 0.24, 1);
//         }
//         .name{
//             display: flex;
//             position: relative;
//             overflow: hidden;
//             white-space: nowrap;
//             margin-left: 5px;
//             transition: all 0.5s cubic-bezier(0.76, 0, 0.24, 1);
//             p{
//                 position: relative;
//                 transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
//                 &:nth-of-type(2){
//                     padding-left: 0.3em;
//                 }
//                 &:nth-of-type(3){
//                     position: absolute;
//                     left: 120px;
//                     padding-left: 0.3em;
//                 }
//             }
//         }
//         &:hover{
//             .copyright{
//                 transform: rotate(360deg);
//             }
//             .name{
//                 padding-right: 30px;
//                 .codeBy{
//                     transform: translateX(-100%);
//                 }
//                 .dennis{
//                     transform: translateX(-65px);
//                 }
//                 .snellenberg{
//                     transform: translateX(-65px);
//                 }
//             }
//         }
//     }
//     .nav{
//         display: flex;
//         align-items: center;

//         .el{
//             display: flex;
//             flex-direction: column;
//             position: relative;
//             z-index: 1;
//             padding: 15px;
//             cursor: pointer;
//             &:hover{
//                 .indicator{
//                     transform: scale(1);
//                 }
//             }
//             .indicator{
//                 position: absolute;
//                 width: 5px;
//                 height: 5px;
//                 top: 45px;
//                 left: 50%;
//                 background-color: white;
//                 border-radius: 50%;
//                 transform: scale(0) translateX(-50%);
//                 transition: transform 0.2s cubic-bezier(0.76, 0, 0.24, 1);
//             }
//         }
//         a{
//             cursor: pointer;
//         }
//     }
// }
// .headerButtonContainer{
//     transform: scale(0);
//     position: fixed;
//     right: 0px;
//     z-index: 4;

//     .button{
//         position: relative;
//         margin: 20px;
//         width: 80px;
//         height: 80px;
//         border-radius: 50%;
//         background-color: #1C1D20;
//         cursor: pointer;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//     }

//     .burger{
//         width: 100%;
//         position: relative;
//         z-index: 1;
//         &::after, &::before{
//             content: "";
//             display: block;
//             height: 1px;
//             width: 40%;
//             margin: auto;
//             background-color: white;
//             position: relative;
//             transition: transform 0.3s;
//         }

//         &::after{
//             top: -5px;
//         }

//         &::before{
//             top: 5px;
//         }
//     }

//     .burgerActive{

//         &::after{
//             transform: rotate(45deg);
//             top: -1px;
//         }

//         &::before{
//             transform: rotate(-45deg);
//             top: 0px;
//         }

//     }
// }

export const headerStyle =
  "absolute flex z-[1] top-0 text-white p-[35px] justify-between w-full font-[300] box-border items-center";

export const logoStyle =
  "flex cursor-pointer [&>p]:m-0 [&>p]:transition-all [&>p]:duration-500 [&>p]:ease-in group";

export const nameTextStyle =
  "[&>p]:relative [&>p]:transition-transform [&>p]:duration-[0.5s] [&>p]:ease-in [&>p:nth-of-type(2)]:pl-[0.3em] [&>p:nth-of-type(3)]:absolute [&>p:nth-of-type(3)]:left-[120px] [&>p:nth-of-type(3)]:pl-[0.3em]";

export const copyrightStyle = "group-hover:rotate-[360deg]";
export const nameHoverStyle = "group-hover:pr-[30px]";
export const codeByStyle = "group-hover:translate-x-[-100%]";
export const dennisStyle = "group-hover:translate-x-[-65%]";
export const snellenbergStyle = "group-hover:translate-x-[-65%]";

export const nameStyle = cn(
  "flex relative overflow-hidden whitespace-nowrap ml-[5px] transition-all duration-500 ease-in",
  nameTextStyle,
  nameHoverStyle
);

export const navStyle = "flex items-center [&>a]:cursor-pointer";



export const elStyle = "flex flex-col relative z-[1] p-[15px] cursor-pointer group";
export const indicatorStyle = "absolute w-[5px] h-[5px] top-[45px] left-[50%] bg-white rounded-[50%] scale-0 translate-x-[-50%] transition-transform duration-[0.2s] ease-in group-hover:scale-[1]"




export const headerButtonContainerStyle = "scale-0 fixed right-[0px] z-[4]"


export const buttonStyle = "relative m-[20px] w-[80px] h-[80px] rounded-[50%] bg-[#1C1D20] cursor-pointer flex items-center justify-center"

export const burgerAfterStyle = "after:content-[_] after:block after:h-[1px] after:w-[40%] after:m-auto after:bg-white after:relative after:transition-transform after:duration-[0.3s] after:top-[-5px]"
export const burgerBeforeStyle = "before:content-[_] before:block before:h-[1px] before:w-[40%] before:m-auto before:bg-white before:relative before:transition-transform before:duration-[0.3s] before:top-[5px]"
export const burgerStyle = cn("w-full relative z-[1]", burgerAfterStyle, burgerBeforeStyle);

export const burgetActiveStyle = "after:rotate-[45deg] after:top-[-1px] before:rotate-[-45deg] before:top-[0px]"