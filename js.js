
let tamanho = 0

var textarea = document.querySelector("#textarea");
textarea.addEventListener("keypress", function (e) {
  var keyCode = (e.keyCode ? e.keyCode : e.which);

  if (keyCode > 18 && keyCode < 47) {
    e.preventDefault();
  }
  if (keyCode > 58) {
    e.preventDefault();
  }
  if (keyCode == 8 || keyCode == 17) {
    return true
  }   
    tamanho ++
});

// $('#nomeMae').on('paste', function(e) {
//     var regex = new RegExp("^[ 0-9a-zA-Z\b]+$");
//     var _this = this;
//     // Curta pausa para esperar colar para completar
//     setTimeout( function(){
//         var texto = $(_this).val();
//         if(!regex.test(texto))
//         {             
//             $(_this).val("")
//         }
//     }, 100);
// });
