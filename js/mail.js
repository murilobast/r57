$(document).ready(function() {
    $('.send').click(function() {
        var nome = $('.nome').val();
        var email = $('.email').val();
        var msg = $('.msg').val();
        var assunto = $('.assunto').val();
        var site = $('.site').val();
        $('.msg-retorno').empty();
        
        if (nome == '' || email == '' || assunto == '' || msg =='') {
            $('.msg-retorno').text('Preencha os campos necessarios');
            $('.msg-retorno').addClass('erro');
        }else{
            $.post("form-email.php", {
                name1: nome,
                email1: email,
                msg1: msg,
                assunto1: assunto,
                site1: site
            }, function(resposta) {
                $('.msg-retorno').append(resposta);
                console.log(resposta)
                if (resposta == "Sua mensagem foi enviada, entrarei em contato assim que possivel.") {
                    $('.msg-retorno').removeClass('erro');
                    $('.msg-retorno').addClass('sucesso');
                }
            });
        }
    });
});