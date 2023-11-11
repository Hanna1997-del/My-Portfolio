// .description{
//     padding-left: 200px;
//     padding-right: 200px;
//     margin-top: 200px;
//     display: flex;
//     justify-content: center;
//     .body{
//         max-width: 1400px;
//         display: flex;
//         gap: 50px;
//         position: relative;
//         p{
//             margin: 0px;
//             &:nth-of-type(1){
//                 font-size: 36px;
//                 gap: 8px;
//                 line-height: 1.3;
//                 span{
//                     margin-right: 3px;
//                 }
//                 .mask{
//                     position: relative;
//                     overflow: hidden;
//                     display: inline-flex;
//                 }
//             }
//             &:nth-of-type(2){
//                 font-size: 18px;
//                 width: 80%;
//                 font-weight: 300;
//             }
//         }
//         .button{
//             top: 80%;
//             left: calc(100% - 200px);
//             width: 180px;
//             height: 180px;
//             background-color: #1C1D20;
//             color: white;
//             border-radius: 50%;
//             position: absolute;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             cursor: pointer;
//             p{
//                 margin: 0px;
//                 font-size: 16px;
//                 font-weight: 300;
//                 position: relative;
//                 z-index: 1;
//             }
//         }
//     }
//     .moreWork{
//         padding: 20px;
//         border-radius: 40px;
//         border: 1px solid grey;
//     }
// }

import { cn } from "@/lib/utils";

export const descriptionStyle =
  "px-[200px] mt-[200px] flex justify-center";

export const bodyStyle = "max-w-[1400px] flex gap-[50px] relative";


export const buttonTextStyle =
  "[&>p]:m-0 [&>p]:text-[16px] [&>p]:font-[300] [&>p]:relative [&>p]:z-[1]";
export const buttonStyle = cn(
  "top-[80%] left-[calc(100%_-_200px]] w-[180px] h-[180px] bg-[#1C1D20] text-white rounded-[50%] absolute flex items-center justify-center cursor-pointer",
  buttonTextStyle
);

export const moreWorkStyle =
  "p-[20px] rounded-[40px] border-[1px] border-solid border-gray-400";
