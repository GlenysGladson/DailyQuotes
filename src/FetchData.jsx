
import React,{useEffect,useState} from 'react'

function FetchData(){
    const [quote,setQuote] = useState("Click the button to get a quote..")
    const [author,setAuthor] = useState("");

    const fetchQuote = ()=>{
        fetch('https://dummyjson.com/quotes/random')
        .then(response=>response.json())
        .then(data=>{ 
            setQuote(data.quote);
            setAuthor(data.author);
        })
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        fetchQuote();
    },[])

    return(
        <div>
            <div className='box'>
                <p>{quote}</p>
                <p className='auth'><em>{author}</em></p>
            </div>
            <br /><br />
            <button className="myBtn" onClick={fetchQuote}>Get Quote</button>
        </div>
    );
}

export default FetchData