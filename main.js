$(document).ready(function(){
            $('#carrossel-imagens').slick({
                autoplay: true,
                arrows: false,
                adaptiveHeight: true,
            });

            $('.menu-hamburguer').click(function(){
                $('nav').slideToggle();
            })

            $('#telefone').mask('(00) 00000-0000')

        $('form').validate({
            rules: {
                nome: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                telefone: {
                    required: true,
                },
                mensagem: {
                    required: true
                },
                veiculoDeInteresse: {
                    required: false,
                }
            },
            messages: {
                nome: 'Por favor, insira o seu nome',
                telefone: 'Por favor, insira o seu telefone',
                email: 'Por favor, insira o seu email',
            },
            submitHandler: function(form){
                console.log(form)
            },
            invalidHandler: function(evento, validador){
                let camposIncorretos = validador.numberOfInvalids();
                if(camposIncorretos){
                    alert('Existem campos incorretos')
                }
            }
        })

        $('.lista-veiculos button').click(function(){
            const destino = $('#contato');
            const nomeVeiculo = $(this).parent().find('h3').text();

            $('#veiculo-de-interesse').val(nomeVeiculo);


            $('html').animate({
                scrollTop: destino.offset().top
            }, 1000)
        })

        });

        $(window).resize(function() {
    // Se a largura da tela for maior que 767px (Tablet e Desktop)
    if ($(window).width() >= 768) {
        // Remove o estilo inline do jQuery para o CSS original voltar a mandar
        $('nav').removeAttr('style'); 
    }
});