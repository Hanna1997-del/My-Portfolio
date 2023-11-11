// .slidingImages{
//     display: flex;
//     flex-direction: column;
//     gap: 3vw;
//     position: relative;
//     margin-top: 200px;
//     background-color: white;
//     z-index: 1;
//     .slider{
//         display: flex;
//         position: relative;
//         gap: 3vw;
//         width: 120vw;
//         left: -10vw;
//         .project{
//             width: 25%;
//             height: 20vw;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             .imageContainer{
//                 position: relative;
//                 width: 80%;
//                 height: 80%;
//                 img{
//                     object-fit: cover;
//                 }
//             }
//         }
//     }
//     .circleContainer{
//         background-color: red;
//         position: relative;
//         margin-top: 100px;
//         .circle{
//             height: 1550%;
//             width: 120%;
//             left: -10%;
//             border-radius: 0 0 50% 50%;
//             background-color: white;
//             z-index: 1;
//             position: absolute;
//             box-shadow: 0px 60px 50px rgba(0, 0, 0, 0.748);
//         }
//     }
// }




export const slidingImagesStyle = "flex flex-col gap-[3vw] relative mt-[200px] bg-white z-[1]"


export const sliderStyle = "flex relative gap-[3vw] w-[120vw] left-[-10vw]"


export const projectStyle = "w-[25%] h-[20vw] flex items-center justify-center"
export const imageContainerStyle = "relative w-[80%] h-[80%] [&>img]:object-cover"


export const circleContainerStyle = "bg-[red] relative mt-[100px]";
export const circleStyle = "h-[1550%] w-[120%] left-[-10%] rounded-[0_0_50%_50%] bg-white z-[1] absolute shadow-[0px_60px_50px_rgba(0,0,0,0.748)]";