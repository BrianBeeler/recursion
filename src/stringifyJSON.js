// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof(obj)!=="object" || obj===null) {
  	return String(obj)===obj ? '"'+obj+'"' : String(obj)
  }
  
  var stringy=""

  if (Array.isArray(obj)) {
  	for (var i=0;i<obj.length;i++) {
  		if (typeof obj[i]!==obj) {
  			if (i==0) { 
  				stringy+="["+obj[i]+","
  				}
  			else if (i!==obj.length-1) {
  				stringy+=obj[i]+","    
  				}
  			else {
  				stringy+=obj[i]+"]"
  				}
  		}
  		else {
  			stringy=stringy+stringifyJSON(obj[i])
  		}
  	} 
  } 

  else {
  	stringy+="{"
  	for (var key in obj) {
  		if (typeof obj[key]!==obj) {
  			stringy+=key+":"+obj[key]+","
  		}
  		else {
  			stringy+=key+":"+stringifyJSON(obj[key])+","
  		}
  	}
  	stringy=stringy.substring(0,stringy.length-1)+"}"
  }

  return stringifyJSON(stringy)

}

