import react from 'react'
import reactdom from 'react-dom'
import form , {setAnswers} from './Forms'


reactdom.render(

  <>  
    {form()}
    
  </>
  , document.getElementById('root')

)


document.getElementById('submit').addEventListener('click' , function(e){
  e.preventDefault();
  setAnswers(
    parseInt(document.getElementById('num1').value),
    parseInt(document.getElementById('num2').value)
  );
})















// import react from 'react';
// import reactDom from 'react-dom';
 
// // import amanji,{favLanguage , print} from './App'
// import * as utilities from './App';

// reactDom.render(
//   <>
//     <h1>
//       {utilities.default}
//     </h1>


//     <h1>
//     {utilities.favLanguage}
//       {/* {favLanguage} */}
//     </h1>


//     <h1>
//     {utilities.print()}
//       {/* {print()} */}
//     </h1>
    
//   </>,
//    document.getElementById('root')
// )














// import aman from 'react';
// import amar from 'react-dom';
// import App from './App'

// amar.render(
//   <App></App>,
//   document.getElementById('root')
// )








// import React from 'react';
// import ReactDom from 'react-dom';

// var time = new Date().getHours()
// var message = ""



// if(time>=0 && time <=11)
// {
//   message = "Good Morning"
// }
// else if(time>=12 && time<19)
// {
//   message = "Good Afternoon"
// }
// else{
//   message = "Good Night"
// }

// ReactDom.render(
//   <>
//     <h1>{`Hello Sir ! ${message}`}</h1>
//   </>,
// document.getElementById('root')
// )




// import React from 'react';
// import ReactDom from 'react-dom';
// import './index.css';

// var imgPath = './logo192.png'

// var style =  {
//   color : "green" , 
//   fontSize : "40px",
//   marginLeft : "50px",
//   border : "2px solid red",
//   width : "100%"
// }

// ReactDom.render(
//   <>
//     {/* <a href="" style={{textAlign:"center" , textDecoration : "none"}}>amanji  </a> */}
//     <a href="" style={style}>amanji  </a>
//   </>,
// document.getElementById('root')
// )





// import React from 'react';
// import ReactDom from 'react-dom';
// import './index.css';

// var imgPath = './logo192.png'
// ReactDom.render(
//   <>
//     <a className='aman'>aman</a>
//   </>,
// document.getElementById('root')
// )






// import React from 'react'
// import ReactDom from 'react-dom'

// var imgPath = './logo192.png'
// ReactDom.render(
//   <>
//     <a href='https://www.google.com' target='_blank'>Google</a>
//     <h1 contentEditable='true'>aman</h1>

//     <a href='https://www.google.com' target={'true'}>
//       <img src={imgPath} alt='no image' />
//     </a>
//   </>,
// document.getElementById('root')
// )








// import React from 'react'
// import ReactDom from 'react-dom'
 
// var a = "aman";
// var b = <h1>amanji</h1>;
// var date = new Date().toLocaleDateString()
// var time = new Date().toLocaleTimeString()
// ReactDom.render(
//   <>
//     {` ${date} ${time} `}
//   </>,
// document.getElementById('root')
// )





// import React from 'react'
// import ReactDom from 'react-dom'

// var a = "aman";
// var b = <h1>amanji</h1>;
// ReactDom.render(
//   <>
//     <h1>Aman {a}</h1>,
//     <h1>{a}</h1>,
//     <h1>{`My name is  = ${a}`}</h1>
//   </>,
//   document.getElementById('root')
// )













// import React from 'react'
// import ReactDom from 'react-dom'

// var elements = [<h1>Hello Aman</h1>, <h2>Hello Aman</h2>]

// var elements = [
//   <div><h1>amanji</h1></div>
// ]

// var elements = [
//   <React.Fragment> <h1>Aman ji</h1> <h1>Aman ji</h1> </React.Fragment>
// ]

// var elements = [
//   <> 
//     <h1>Aman ji</h1> 
//     <h1>Aman ji</h1> 
//   </>
// ]

// ReactDom.render(
//   elements,
//   document.getElementById('root')
// )







// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//   <h1>mm</h1>
//     {/* <App /> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
