function hasOddNumber(arr){
return arr.some(function(ar){
 return (ar % 2 !== 0)
})
}

function hasAZero(arr){
    splits = arr.toString().split("");
    return splits.some(function(ar){
     return (ar === '0')
    })
    }

    function hasOnlyOddNumbers(arr){
        return arr.every(function(ar){
            return(ar % 2 !==0)
        })
    }

    function hasNoDuplicates(arr){
        dupes ={};
        return arr.every(function(ar){
           if(!dupes[ar])
           {dupes[ar]=ar
             return true}
             else  return false;
           
     } )
    };

    let arrs = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"},
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
        {title: "Instructor", first: 'Matt', last:"Lane"},
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
      ]
 
    function hasCertainKey(arrs, key){
    return arrs.every(function(ar){
       if(ar[key])
        {
            return true
        }
       })
  } 
  
  function hasCertainValue(arrs, key, value){
     return arrs.every(function(ar){
        if(ar[key]=== value){
          return true;   }
        else 
          return false; 

   })
};