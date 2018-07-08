'use strict';
module.exports = function() {
    return myFunc();
};
function myFunc(){
const vaulted ={};
const getValue = function(key){
    if(vaulted[key] !== undefined){
        return vaulted[key];
    }else{
        return null;
    }
}
const setValue = function(key, value){
      if(!(vaulted.key)){
          return vaulted[key] = value;
      }
    
}

return { 
    getValue: getValue,
    setValue: setValue,
    vaulted: vaulted
}
}