// .project{
//     display: flex;
//     width: 100%;
//     justify-content: space-between;
//     align-items: center;
//     padding: 50px 100px 50px 100px;
//     border-top: 1px solid rgb(201, 201, 201);
//     cursor: pointer;
//     transition: all 0.2s;

//     h2{
//         font-size: 60px;
//         margin: 0px;
//         font-weight: 400;
//         transition: all 0.4s;
//     }

//     p{
//         transition: all 0.4s;
//         font-weight: 300;
//     }

//     &:last-of-type{
//         border-bottom: 1px solid rgb(201, 201, 201);
//     }

//     &:hover{
//         opacity: 0.5;

//         h2{
//             transform: translateX(-10px);
//         }

//         p{
//             transform: translateX(10px);
//         }
//     }
// }


export const projectStyle = "flex w-full justify-between items-center p-[50px_100px_50px_100px] border-t-[1px] border-solid border-[rgb(201,201,201)] cursor-pointer transition-all duration-[0.2s] group [&>*:last-of-type]:border-b-[rgb(201,_201,_201)]"

export const textStyle = "transition-all duration-[0.4s] font-[300] group-hover:translate-x-[10px]";
export const headingStyle = "text-[60px] m-0 font-[400] transition-all duration-[0.4s] group-hover:translate-x-[-10px]";