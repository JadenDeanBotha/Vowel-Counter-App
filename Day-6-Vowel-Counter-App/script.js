const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", countVowel);

function countVowel () {
    let vowelCount = 0;
    let wordVal = word.value.toLowerCase();

    //Loop through the value
    for(let i = 0; i < wordVal.length; i++){
        let letter = wordVal[i];
        //using regex to find the vowels
        if(letter.match(/([a,e,i,o,u])/)){
            vowelCount++;
        }
    }
    //Displaying results in DOM
    result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`
    
}

