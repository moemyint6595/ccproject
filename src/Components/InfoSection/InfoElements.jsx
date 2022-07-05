import { Link } from 'react-scroll'
import styled from 'styled-components';

 export const InfoContainer = styled.div`
 color : #fff;
 background : ${({lightBg}) => (lightBg ? '#7a7979' : '#010606' )};
 background-image : ${({bgRad}) => 
  (bgRad === 1 ? 'radial-gradient(#aaa6a6, black)' : '')
};
background-image : ${({bgRad}) => 
  (bgRad === 0 ? 'radial-gradient(#aaa6a6, black)' : '')
};

 
 @media screen and (max-width: 768px ){
     padding : 100px 0;
 }
 `
 export const InfoWrapper = styled.div`
 display: grid;
 z-index: 1;
 height: 760px;
 width: 100%;
 max-width: 1100px;
 margin-right: auto;
 margin-left : auto;
 padding: 0 24px;
 justify-content: center;
 `
 export const InfoRow = styled.div`
     display: grid;
     grid-auto-columns: minmax(auto, 1fr);
     align-items: center;
     grid-template-areas : 
        ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    
        @media screen and (max-width : 768px ){
            grid-template-areas : 

            ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
        }
 `
 export  const Column1 = styled.div`
     margin-bottom : 15px;
     padding: 0 15px;
     grid-area : col1;

 `
 export  const Column2 = styled.div`
 margin-bottom : 15px;
 padding: 0 15px;
 grid-area : col2;
`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

`
export const TopLine = styled.p`
    color : rgb(201, 6, 6);
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase; 
    margin-bottom: 16px;
`
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 45px;
    line-height: 1.1;
    font-weight: 600;
    color : ${({lightText}) => (lightText ?  `#f7f8fa` : '#000000')};

    @media screen and (max-width: 480px){
        font-size: 32px;

    }
`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 53px;
    font-size: 18px;
    line-height : 24px;
    color : ${({darkText}) => 
    (darkText ? '#010606' : '#fff')
};
`
 export const ImgWrap = styled.div`
     max-width: 500px;
     height: 100%;
 `
 export const Img = styled.img`
     width : 100%;
     margin: 0 0 10px 0;
     padding-right: 0;
     border-radius: 10px;
 `

// export const Button =   styled(Link)`
// cursor: pointer;
//      text-decoration: none;
//  background-color: ${({SpBtnBR}) => 
//   (SpBtnBR ? 'black' : 'rgb(201, 6, 6)')
// };
//  padding: 10px;
//  color: ${({SpBtnBR}) => 
//   (SpBtnBR ? 'red' : 'black')
// };
//  white-space: nowrap;
//  border-radius: 5px;
// transition: all 0.2s ease-in-out;
// border: none;
// outline: none;
// font-size: 1.2rem;

//  &:hover {
//      background-color: #bbb8b8;
//      transition: all 0.2s ease-in-out;
//  }
// `
