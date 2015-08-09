// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    var stringy="";
    // Non-objects
    if (typeof(obj)!=="object" || obj===null) {
      stringy+=(""+obj===obj ?'"'+obj+'"': obj)
    }
    else {
    // Arrays
      if (Array.isArray(obj)) {

        stringy+="["

        for (var i=0;i<obj.length;i++) {
          stringy += stringifyJSON(obj[i])+",";
        }

        if (stringy[stringy.length-1]===",") {
          stringy=stringy.substring(0,stringy.length-1);
        }

        stringy+="]";
      }
    // Keys and Properties
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

      stringy+="}";
    }
  }
// Base case -- all loops have run
// Have arrived at stingified component
return stringy
}


