
   const params = new URLSearchParams(window.location.search);
   const xnum = params.get('numero');
   const xnom = params.get('nome');
   const xfot = params.get('foto');
   const xtipos = params.get('tipos');

   const areadiv = document.getElementById('teladomeio')

   console.log(xnum)
   console.log(xnom)
   console.log(xfot)
   console.log(xtipos)
   
   //document.querySelector('.types').innerHTML =  xtipos.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')  // Adicionei o map para gerar as tags li com os tipos
//  ${xtipos.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')} 

   function mostranatela(){
    return `
    <div class="number">#${xnum}</div>
    <div class="name"> ${xnom} </div>
    <div class="types">${xtipos} </div>
    <div>
    <img src=${xfot} alt="${xnom}">
    </div>
    <button>Fechar</button>
    `
   }
   
   areadiv.innerHTML = mostranatela()
   
   document.querySelector('button').addEventListener('click', function(){
       //window.location.href = 'index.html'
       window.close()
   })