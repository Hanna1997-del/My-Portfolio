// .landing{
//     position: relative;
//     display: flex;
//     height: 100vh;
//     overflow: hidden;

import { cn } from "@/lib/utils";

//     img{
//       object-fit: cover;
//     }

//     .sliderContainer{
//       position: absolute;
//       top: calc(100vh - 350px);
//     }

//     .slider{
//       position: relative;
//       white-space: nowrap;
//     }

//     .slider p{
//       position: relative;
//       margin: 0px;
//       color: white;
//       font-size: 230px;
//       font-weight: 500;
//       padding-right: 50px;
//     }

//     .slider p:nth-of-type(2){
//       position: absolute;
//       left: 100%;
//       top: 0;
//     }

//     .description{
//       position: absolute;
//       top: 35%;
//       left: 65%;
//       color: white;
//       font-size: 24px;
//       font-weight: 300;
//       p{
//         margin: 0px;
//         margin-bottom: 10px;
//       }
//       svg{
//         transform: scale(2);
//         margin-bottom: 100px;
//       }
//     }
//   }

export const landingStyle =
  "relative flex h-screen overflow-hidden [&>img]:object-cover";

export const sliderContainerStyle = "absolute top-[calc(100vh_-_350px)]";


export const sliderTextStyle =
  "relative m-0 text-white text-[230px] font-[500] pr-[50px]";
export const sliderNthStyle =
  "[&>*:nth-of-type(2)]:absolute [&>*:nth-of-type(2)]:left-full [&>*:nth-of-type(2)]:top-0";
export const sliderStyle = cn(
  "relative whitespace-nowrap",
  sliderTextStyle,
  sliderNthStyle
);


export const descriptionTextStyle = "[&>p]:m-0 [&>p]:mb-[10px]";
export const descriptionSvgStyle = "[&>svg]:scale-[2] [&>svg]:mb-[100px]";
export const descriptionStyle = cn(
  "absolute top-[35%] left-[65%] text-white text-[24px] font-[300]",
  descriptionTextStyle,
  descriptionTextStyle
);
