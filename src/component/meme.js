import React, { useState } from "react";
import MemeData from "../memeData";
// import MemeData from "../memeData";

function Meme() {
    let [memeUrl, setmemeUrl]= useState({
        topText : "",
        bottomText:"",
        imageUrl:"http://i.imgflip.com/1bij.jpg",

    }) 

    function textChanged(event) {
        setmemeUrl ( prevState => {
            return {
                ...prevState ,
                [event.target.name ] : event.target.value , 
            }
        })
    }

    function getmeme() {
        const memeArray = MemeData.data.memes;
        const randomNumber= Math.floor(Math.random()*memeArray.length);
         let url = memeArray[randomNumber].url
        //  setmemeUrl(memeArray[randomNumber].url);
        setmemeUrl( prevState  =>{
            return {
                ...prevState,
                imageUrl : url,
            }
        })
      }

    //   function submeted(event){
    //     event.preventDefaulte();
    //  }
    return (
        <div>
            
            <div className=" flex justify-center p-4 mt-20">
              <input className=" placeholder:text-slate-400  m-4 block bg-white p-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 " placeholder="Top text" type="text" name="topText" onChange={textChanged} value = {memeUrl.topText}/>
              <input className=" placeholder:text-slate-400  m-4 block bg-white p-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 " placeholder="Bottom Text " type="text" name="bottomText" onChange={textChanged} value = {memeUrl.bottomText}/>
            </div>
            <div className=" flex justify-center ">
                <button onClick={getmeme}
                className="border p-3 px-40 text-white bg-gradient-to-r from-purple-800 to-fuchsia-500  fl rounded-md"> Get a new meme image </button>
            </div>
            
            <div className=" flex justify-center mt-4 ">
            <img src={memeUrl.imageUrl} alt=""></img>
            <h2 className="absolute text-center mx-3  top-2/4 text-2xl text-white">{memeUrl.topText}</h2>
                <h2 className="absolute w-3/4 text-center mx-3 py-2 bottom-1/4 text-2xl text-white">{memeUrl.bottomText}</h2>
            </div>
        </div>
    )
  }

  export default Meme 