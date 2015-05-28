// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Stringy will be the resultant stringified obj;
  var stringy=""

  // Converts non-objects to appropriate string form
  if (typeof(obj)!=="object" || obj===null) {
  	stringy+=(""+obj===obj ?'"'+obj+'"': obj)
  }  
  else {
  	// Stringifies arrays including contents recursively
	if (Array.isArray(obj)) {
  		stringy+="["
		for (var i=0;i<obj.length;i++) {
			stringy += stringifyJSON(obj[i])+",";  		}
 		if (stringy[stringy.length-1]===",") { 
			stringy=stringy.substring(0,stringy.length-1); 
		}
		stringy+="]"; console.log(stringy)
	} 
  
  	// Stringifies keys and properties recursively
  	else {
  		stringy+="{"
  		for (var key in obj) {
  			if ( typeof obj[key] !== "function" && typeof obj[key]!== "undefined") {
  			stringy+=stringifyJSON(key)+":"+stringifyJSON(obj[key])+","
  			}
  		}
  		if (stringy[stringy.length-1]===",") { 
			stringy=stringy.substring(0,stringy.length-1); 
		}
		stringy+="}"; console.log(stringy)
  	}
  }

  
// Base case occurs when all loops have ran 
return stringy
}


