const extendHex = (shortHex) => {
     let array=shortHex.split("")
	 let str=""
	if(array[0]==="#"){
	   str+=array[0]
	}
	else{
		str+="#"
	}
	for(let i=1;i<array.length;i++){
		
			str+=array[i]
		    str+=array[i]
		

		
	}

	return str
};


const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
