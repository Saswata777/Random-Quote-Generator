import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';



function App() {

  // const [index, setIndex] = useState(-1);
  // // const [text, setText] = useState("");
  // // const [author, setAuthor] = useState("");
  // const [data, setData] = useState([]);




  // useEffect(()=>{
  //   async function getData(){
  //       const get = await fetch(`https://type.fit/api/quotes`);
  //       const res = await get.json();
  //       setData([res[index]]);
        
  //     } 
  //     getData();
      
  //   },[index])
    
    
  //   const button = ()=>{
      
  //     const newIndex = Math.floor(Math.random()*10)+1;
  //     setIndex(newIndex);
  //     console.log(newIndex);
  //     console.log("Button is Clicked ");
  // }



  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = () => {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]);
      })
      .catch(error => console.log(error));
  };
          
      


  return (
    <>
      <div className="container">
              <div className="header">Random Quote Generator</div>
              <div className="quote_area">
                  {/* {
                    data.map((element, i)=>{
                      return(
                        <div key={i}>
                              <div>{element.text}</div>
                              <div>{element.author}</div>

                        </div>
                      )
                    })
                  } */}


                  {quote && (
                    <div>
                      <p>{quote.text}</p>
                      <p>- {quote.author}</p>
                    </div>
                  )}

              </div>
               <button className='button' onClick={fetchRandomQuote}>Generate Quote</button> 

      </div>
    </>
  );
}

export default App;
