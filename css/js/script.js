$(document).ready(function() {
    
    // 1. Interatividade nos Botões de Compra (Index)
    $('.btn-comprar').on('click', function() {
        let nomeProduto = $(this).closest('.card-body').find('.card-title').text();
        alert('Boa escolha! O item "' + nomeProduto + '" foi adicionado ao seu carrinho virtual.');
    });

    // 2. Validação Lógica do Formulário de Login (Login)
    $('#form-login').on('submit', function(event) {
        event.preventDefault(); 
        
        let email = $('#email').val().trim();
        let senha = $('#password').val().trim();
        let alerta = $('#login-alert');

        alerta.removeClass('d-none alert-success alert-danger');

        if (email === "" || senha === "") {
            alerta.addClass('alert-danger').text('Por favor, preencha todos os campos obrigatórios.');
        } else if (senha.length < 6) {
            alerta.addClass('alert-danger').text('Atenção: A senha deve conter pelo menos 6 caracteres.');
        } else {
            alerta.addClass('alert-success').text('Autenticação bem-sucedida! Redirecionando para o painel...');
            
            setTimeout(function() {
                $('#email').val('');
                $('#password').val('');
                alerta.addClass('d-none');
            }, 2000);
        }
    });
});
