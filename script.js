function Limpar (){
    document.getElementById("cep").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("uf").value = "";
    document.getElementById("ibge").value = "";
}

function meucallback(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById("rua").value = conteudo.logradouro;
        document.getElementById("bairro").value = conteudo.bairro;
        document.getElementById("cidade").value = conteudo.localidade;
        document.getElementById("uf").value = conteudo.uf;
        document.getElementById("ibge").value = conteudo.ibge;
    }
    else{
        Limpar();
        alert("CEP não encontrado!");
    }

}
 function PesquisaCep(valor){
    var cep = valor.replace(/\D/g,'');

    if(cep != ""){
        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)){
            document.getElementById("rua").value = "...";
            document.getElementById("bairro").value = "...";
            document.getElementById("cidade").value = "...";
            document.getElementById("uf").value = "...";
            document.getElementById("ibge").value = "...";

            var script = document.createElement("script");

            script.src = "https://viacep.com.br/ws/" + cep + "/json/?callback=meucallback";

            document.body.appendChild(script)
        }

        else{
            Limpar();
            alert("Formato de CEP inválido!");
        }
    }  
    else{
        Limpar();
        alert("Campo vazio!");
    }
}