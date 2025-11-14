var graficosJaForamCriados = false;

window.onload = function(){
        $(document).ready(function(){
                $("#headerMain").load("../docs/components/header/layout.html");
                $("#aberturaMain").load("../docs/components/abertura/layout.html");
                $("#cadastroPessoalMain").load("../docs/components/cadastro-pessoal/layout.html");
                $("#cadastroEnderecoMain").load("../docs/components/cadastro-endereco/layout.html");
                $("#cadastroEstudantilMain").load("../docs/components/cadastro-estudantil/layout.html");
                $("#tabelaDinamicaMain").load("../docs/components/tabela/layout.html");
                $("#graficosMain").load("../docs/components/graficos/layout.html");
                $("#carouselUnicoMain").load("../docs/components/carousel-unico/layout.html");
                $("#carousel3Main").load("../docs/components/carousel-3/layout.html");
                $("#landPageMain").load("../docs/pages/prototipo/index.html");
                $("#localizacaoMain").load("../docs/components/localizacao/layout.html");
                $("#footerMain").load("../docs/components/footer/layout.html")
        })

        $("#cadastroPessoalMain").hide();
        $("#cadastroEnderecoMain").hide();
        $("#cadastroEstudantilMain").hide();
        $("#tabelaDinamicaMain").hide();
        $("#graficosMain").hide();
        $("#carouselUnicoMain").hide();
        $("#carousel3Main").hide();
        $("#landPageMain").hide();
        $("#localizacaoMain").hide();
}

window.onclick = function(event) {
        const clickedNavItem = event.target.closest('.nav-item');
        let clickedId = null;
        if (clickedNavItem) {
        clickedId = clickedNavItem.id;
        $('.nav-item').removeClass('active-nav');
        $(clickedNavItem).addClass('active-nav');
        } else {
        clickedId = event.target.id;
        }
        switch (clickedId) {
                case "aberturaItem":
                        $("#aberturaMain").show();
                        $("#cadastroPessoalMain").hide();
                        $("#cadastroEnderecoMain").hide();
                        $("#cadastroEstudantilMain").hide();
                        $("#tabelaDinamicaMain").hide();
                        $("#graficosMain").hide();
                        $("#carouselUnicoMain").hide();
                        $("#carousel3Main").hide();
                        $("#landPageMain").hide();
                        $("#localizacaoMain").hide();
                        break;
                case "cadastroPessoalItem":
                        $("#aberturaMain").hide();
                        $("#cadastroPessoalMain").show();
                        $("#cadastroEnderecoMain").hide();
                        $("#cadastroEstudantilMain").hide();
                        $("#tabelaDinamicaMain").hide();
                        $("#graficosMain").hide();
                        $("#carouselUnicoMain").hide();
                        $("#carousel3Main").hide();
                        $("#landPageMain").hide();
                        $("#localizacaoMain").hide();
                        break;
                case "cadastroEnderecoItem":
                        $("#aberturaMain").hide();
                        $("#cadastroPessoalMain").hide();
                        $("#cadastroEnderecoMain").show();
                        $("#cadastroEstudantilMain").hide();
                        $("#tabelaDinamicaMain").hide();
                        $("#graficosMain").hide();
                        $("#carouselUnicoMain").hide();
                        $("#carousel3Main").hide();
                        $("#landPageMain").hide();
                        $("#localizacaoMain").hide();
                        break;
                case "cadastroEstudantilItem":
                        $("#aberturaMain").hide();
                        $("#cadastroPessoalMain").hide();
                        $("#cadastroEnderecoMain").hide();
                        $("#cadastroEstudantilMain").show();
                        $("#tabelaDinamicaMain").hide();
                        $("#graficosMain").hide();
                        $("#carouselUnicoMain").hide();
                        $("#carousel3Main").hide();
                        $("#landPageMain").hide();
                        $("#localizacaoMain").hide();
                        break;
                case "tabelaItem":
                        $("#aberturaMain").hide();
                        $("#cadastroPessoalMain").hide();
                        $("#cadastroEnderecoMain").hide();
                        $("#cadastroEstudantilMain").hide();
                        $("#tabelaDinamicaMain").show();
                        $("#graficosMain").hide();
                        $("#carouselUnicoMain").hide();
                        $("#carousel3Main").hide();
                        $("#landPageMain").hide();
                        $("#localizacaoMain").hide();
                        break;
                case "graficosItem":
                        $("#aberturaMain").hide();
                        $("#cadastroPessoalMain").hide();
                        $("#cadastroEnderecoMain").hide();
                        $("#cadastroEstudantilMain").hide();
                        $("#tabelaDinamicaMain").hide();
                        $("#graficosMain").show();
                        if (graficosJaForamCriados == false) {
                                am5.ready(function() { 
                                createHorizontalBarChart();
                                createLineChart();
                                createPieChart();
                                createRadarChart();
                                createVerticalBarChart();
                                });
                                graficosJaForamCriados = true; // 4. Marca como criado
                        }
                        $("#carouselUnicoMain").hide();
                        $("#carousel3Main").hide();
                        $("#landPageMain").hide();
                        $("#localizacaoMain").hide();
                        break;
                case "carouselUnicoItem":
                        $("#aberturaMain").hide();
                        $("#cadastroPessoalMain").hide();
                        $("#cadastroEnderecoMain").hide();
                        $("#cadastroEstudantilMain").hide();
                        $("#tabelaDinamicaMain").hide();
                        $("#graficosMain").hide();
                        $("#carouselUnicoMain").show();
                        $("#carousel3Main").hide();
                        $("#landPageMain").hide();
                        $("#localizacaoMain").hide();
                        break;
                case "carousel3Item":
                        $("#aberturaMain").hide();
                        $("#cadastroPessoalMain").hide();
                        $("#cadastroEnderecoMain").hide();
                        $("#cadastroEstudantilMain").hide();
                        $("#tabelaDinamicaMain").hide();
                        $("#graficosMain").hide();
                        $("#carouselUnicoMain").hide();
                        $("#carousel3Main").show();
                        $("#landPageMain").hide();
                        $("#localizacaoMain").hide();
                        break;
                case "landPageItem":
                        $("#aberturaMain").hide();
                        $("#cadastroPessoalMain").hide();
                        $("#cadastroEnderecoMain").hide();
                        $("#cadastroEstudantilMain").hide();
                        $("#tabelaDinamicaMain").hide();
                        $("#graficosMain").hide();
                        $("#carouselUnicoMain").hide();
                        $("#carousel3Main").hide();
                        $("#landPageMain").show();
                        $("#localizacaoMain").hide();
                        break;
                case "localizacaoItem":
                        $("#aberturaMain").hide();
                        $("#cadastroPessoalMain").hide();
                        $("#cadastroEnderecoMain").hide();
                        $("#cadastroEstudantilMain").hide();
                        $("#tabelaDinamicaMain").hide();
                        $("#graficosMain").hide();
                        $("#carouselUnicoMain").hide();
                        $("#carousel3Main").hide();
                        $("#landPageMain").hide();
                        $("#localizacaoMain").show();
                        break;
                /*default:
                        $("#aberturaMain").hide();
                        $("#cadastroPessoalMain").hide();
                        $("#cadastroEnderecoMain").hide();
                        $("#cadastroEstudantilMain").hide();
                        $("#tabelaDinamicaMain").hide();
                        $("#graficosMain").hide();
                        $("#carouselUnicoMain").hide();
                        $("#carousel3Main").hide();
                        $("#landPageMain").hide();
                        $("#localizacaoMain").hide();
                        break;*/
        }
}
