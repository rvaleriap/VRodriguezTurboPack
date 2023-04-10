$(document).ready(function () {
    GetAll();
});

function GetAll() {
    $.ajax({
        type: 'GET',
        url: 'https://randomuser.me/api',
        success: function (result) {
            $('#tblUsuario tbody');
            $.each(result.results, function (i, empleado) {
                var filas =
                    '<tr>'
                    + "<td class='text-center'>" + empleado.name.first  + "</td>"
                    + "<td class='text-center'>" + empleado.email + "</ td>"
                    + "<td class='text-center'>" + empleado.location.city + "</ td>"
                    + "<td class='text-center'>" + empleado.gender + "</ td>"
                    + "<td class='text-center'>" + '<img  style="height: 60px; width: 60px;" src= "' + empleado.picture.medium +'" />' + '</td>'
                   

                    + "</tr>";
                $("#tblUsuario tbody").append(filas);
            });

        }
    });
}

function Limpiar() {
   
    $('#tblUsuario tbody').empty();
}