import React from "react";
function Header (){
    return (
        <div className=" text-white bg-gradient-to-r from-purple-800 to-fuchsia-500  flex p-6 "> 
<div className="flex ">
<img src="TrollFace.svg" alt=""></img>
<h1 className="ml-4 text-xl"> Meme-generator</h1>
</div>
 <h2 className="ml-auto">React-Course Project-3 </h2>
        </div>
    );
}

export default Header