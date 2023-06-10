const extendHex = (shortHex) => {
     let array=shortHex.split("")
	 let str=""
	for(let i-=0;i<array.length;i++){
		if(array[i]==="#"){
			str+=array[i]
		}
			
		else{
			str+=array[i]
			str+=array[i]
		}

		
	}
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
