$(document).ready(function(){
    jsonLink = "../json/donaciones.json"

    $.get(jsonLink, function(data){
        console.log(data)
        $.each(data.Fundaciones, function(data, registro){
            console.log(registro)
            $("#fundacion-display").append('<button type="button" class="btn mrg-top" data-bs-toggle="modal" data-bs-target="#exampleModal'+registro.FundId+'"><img src="'+registro.Img+'" class="card-img-top" alt="" width="100" height="" style="width: 100px;"><span>'+registro.Titulo+'</button><div class="modal fade" id="exampleModal'+registro.FundId+'" tabindex="-1" aria-labelledby="Fundacion Esperanza Animal" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content deg-txt"><div class="modal-header"><h1 class="modal-title" id="Fundacion Esperanza Animal">'+registro.Titulo+'</h1><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body deg-txt">'+registro.Descripcion+'</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button></div></div></div>')
        });
    });
});