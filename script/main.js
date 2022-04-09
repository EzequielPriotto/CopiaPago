
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


  let modalContainerAuris = document.querySelector('#aurisModalContent')
  let modalContainerPlay = document.querySelector('#playModalContent')
  let modalContainerCam = document.querySelector('#camModalContent')


  


  modalContainerAuris.addEventListener('click', (event)=>{
    let target = event.target
    console.log(target)
    // prueba(target)
  })
  modalContainerPlay.addEventListener('click', (event)=>{
    let target = event.target
    // prueba(target)
  })
  modalContainerCam.addEventListener('click', (event)=>{
    let target = event.target
    // prueba(target)
  })

function prueba (target){
  // console.log(target.id)
  if(target.classList.contains("btnModalFav") && !target.nextSibling.classList.contains("btnActivo")){
    contadorFavs = contadorFavs + 1;
    itemFavs.innerHTML = `<span>Favoritos</span> <span>${contadorFavs}</span>`;
    target.nextSibling.classList.add("btnActivo")
  }
  else if(target.nextSibling.classList.contains("btnActivo")){
    contadorFavs = contadorFavs - 1;
    itemFavs.innerHTML = `<span>Favoritos</span> <span>${contadorFavs === 0 ? "" : contadorFavs}</span>`;
    target.nextSibling.classList.remove("btnActivo")
  }
}












    
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