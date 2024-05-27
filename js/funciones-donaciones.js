$(document).ready(function(){    
    jsonLink = "../json/donaciones.json"

    $.get(jsonLink, function(data){
        console.log(data)
        $.each(data.Fundaciones, function(data, registro){
            console.log(registro)
            $("#fundacion-display").append('<div class="col-4"><div class="card bg-transparent"><a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal'+registro.FundId+'"><img src="'+registro.Img+'" class="card-img-top img-max-height" alt="Fundacion"></a></div></div><div class="modal fade" id="exampleModal'+registro.FundId+'" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"><div class="modal-content deg-txt"><div class="modal-header"><h2 class="modal-title txt-font" id="exampleModalLabel">'+registro.Titulo+'</h2><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><img class="bg-transparent rounded mx-auto d-block img-max-height" src="'+registro.Img+'" alt="Donaciones Header"><div class="container mrg-top"><h4 class="txt-font text-center">'+registro.Descripcion+'</h4></div></div><div class="modal-footer txt-font"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button><a href="'+registro.Pagina+'"><button type="button" class="btn btn-info">Ir al Sitio</button></div></a></div></div></div>')
        });
    });  
});