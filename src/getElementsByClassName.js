// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
    function getElements(parent,className,result) {
      if (!parent.childNodes) {
        return result;
      }
    var children = parent.childNodes
    var classes = []
    for (var i in children) {
        classes=children[i].classList
        for (var j in classes) {
           if (classes[j]===className) {
              result.push(children[i])
           }
        }
    getElements(children[i],className,result)
    }
    return result
    }
    return getElements(document,className,[])
};









