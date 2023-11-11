// .menu{
//     height: 100vh;
//     background-color: rgb(41, 41, 41);
//     position: fixed;
//     right: 0;
//     top: 0;
//     color: white;
//     z-index: 3;
//     .body{
//         box-sizing: border-box;
//         height: 100%;
//         padding: 100px;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;

//         .nav{
//             display: flex;
//             flex-direction: column;
//             font-size: 56px;
//             gap: 12px;
//             margin-top: 80px;

//             .header{
//                 color: rgb(153, 153, 153);
//                 border-bottom: 1px solid rgb(153, 153, 153);
//                 text-transform: uppercase;
//                 font-size: 11px;
//                 margin-bottom: 40px;
//             }

//             a{
//                 text-decoration: none;
//                 color: white;
//                 font-weight: 300;
//             }
            
//         }
//     }
// }

export const menuStyle = "h-screen bg-[rgb(41,41,41)] fixed right-0 top-0 text-white z-[3]";

export const bodyStyle = "box-border h-full p-[100px] flex flex-col justify-between";

export const navStyle = "flex flex-col text-[56px] gap-[12px] mt-[80px]";

export const headerStyle = "text-[rgb(153,153,153)] border-b-[1px] border-solid border-b-[rgb(153,153,153)] uppercase text-[11px] mb-[40px]"

export const linkStyle = "no-underline text-white font-[300]"