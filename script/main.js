
function compra(){   
  Swal.fire(
        'Muchas gracias!',
        'Tu producto fue agregado!',
        'success',{
          button: "Volver",
        }
      )
  }


let busquedabtn = document.querySelector('#barra-busqueda');
let busquedaBtnCelu = document.querySelector('.btnBusquedaCelu');
let busquedaBtnCompu = document.querySelector('.btnBusquedaCompu');
busquedaBtnCompu.style.transform = "scale(0.5)"
busquedaBtnCelu.style.transform = "scale(0.5)"

let searchBarra = document.querySelector('.form-control');
let isActivo = false;

function aparecer(){
    if(isActivo == false){
      searchBarra.style.backgroundColor = "rgba(240, 248, 255, 0.929)";
      searchBarra.style.width = "100%" 
      busquedaBtnCompu.style.transform = "scale(.8)"
      busquedaBtnCelu.style.transform = "scale(.8)"
      busquedaBtnCompu.style.filter = "invert(1)"
      busquedaBtnCelu.style.filter = "invert(1)"

      isActivo = true
    }
    else{
      desaparecer()
      isActivo = false
    }
 
}
function desaparecer(){
  if(searchBarra.value === ""){
    searchBarra.style.backgroundColor = "rgba(240, 248, 255, 0)";
    searchBarra.style.width = "0%" 
    busquedaBtnCompu.style.transform = "scale(0.5)"
    busquedaBtnCelu.style.transform = "scale(0.5)"
    busquedaBtnCompu.style.filter = "invert(0)"
    busquedaBtnCelu.style.filter = "invert(0)"
  }
  else{
    Swal.fire(`Usted a buscado ${searchBarra.value}`)
    searchBarra.value = ""
  } 
}

busquedaBtnCelu.addEventListener('click', aparecer)
busquedaBtnCompu.addEventListener('click', aparecer)
searchBarra.addEventListener('keydown', (event) => {
  if (event.keyCode === 13 && searchBarra.value !== "") {
    event.preventDefault()
    Swal.fire(`Usted a buscado ${searchBarra.value}`)
    searchBarra.value = ""
  }
})


let itemFavs = document.querySelector('#itemFavs');
let contadorFavs = 0;
itemFavs.innerHTML = `<span>Favoritos</span>`;

let body = document.querySelector('body');
body.addEventListener('click', (event)=>{
  if(event.target.id === "btn-favorito"){
    contadorFavs = contadorFavs + 1;
    itemFavs.innerHTML = `<span>Favoritos</span> <span>${contadorFavs}</span>`;
  }
})












    
/* 
              .-""""-.
             /        \
            /_        _\
           // \      / \\
           |\__\    /__/|
            \    ||    /
             \        /
              \  __  /  \  /          ________________________________
               '.__.'    \/          /                                 \
                |  |     /\         |     te acabas de encontrar       |
                |  |    O  O        |    con el alien Robertito!       |
                ----    //         O \_________________________________/
               (    )  //        O
              (\\     //       o
             (  \\    )      o
             (   \\   )   /\
   ___[\______/^^^^^^^\__/) o-)__
  |\__[=======______//________)__\
  \|_______________//____________|
      |||      || //||     |||
      |||      || @.||     |||
       ||      \/  .\/      ||
                  . .
                 '.'.`
 */