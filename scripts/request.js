
"use strict";

window.addEventListener("DOMContentLoaded", ()=>{
    //let prompt = document.querySelector(".fetch > p");
    let fetched = document.querySelector(".fetch");
    let textbox = document.getElementById("textbox");
    const button = document.getElementById("submit");

    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
    apiKey: process.env.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,
    });
    const openai = new OpenAIApi(configuration);
    const response = openai.retrieveEngine("curie");

    button.addEventListener('click', () => {
        let newdiv = document.createElement("div");
        let p = "";
        
        //fetched.forEach(div => {
            p += `<p>Prompt: ${textbox.value}</p>`;
            p += `<p>Response: </p> `;
       // })

        
        newdiv.append();
        newdiv.classList.add("fetch");
        fetched.after(newdiv);
        fetched.innerHTML = p;
        newdiv.innerHTML = p;
    });
    
})