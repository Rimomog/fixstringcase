function solve(s){
    let arrOfCharacters = s.split('');
    let noOfLowerCase = 0;
    let noOfUpperCase = 0;
  
  arrOfCharacters.forEach(element => {
    element === element.toLowerCase() ? noOfLowerCase += 1 : noOfUpperCase += 1;
  })
  
  if(noOfLowerCase > noOfUpperCase){
    return s.toLowerCase();
  }else if(noOfLowerCase < noOfUpperCase){
    return s.toUpperCase();
  }else{
   return s.toLowerCase();
  }
}