function chirp (n) {
  if (n === 0) {
  return "";
  }
  if(n>=0){
   return ('chirp '+ chirp(--n))
  }
    
}


$(document).ready(function () {
  $("#result").html(chirp(3));
  });

