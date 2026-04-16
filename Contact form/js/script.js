function validarFormulario() {
    let quantidadeErro = 0;

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;

    let telPais = document.getElementById("telefone-pais").value;
    let telDDD = document.getElementById("telefone-ddd").value;
    let telNumero = document.getElementById("telefone-numero").value;

    let cep = document.getElementById("cep").value;
    let rua = document.getElementById("rua").value;
    let numero = document.getElementById("numero").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let complemento = document.getElementById("complemento").value;
    let bairro = document.getElementById("bairro").value;
    let anotacoes = document.getElementById("anotacoes").value;

    // parte do NOME 
    if (nome.trim() === "") {
        formError("nome");
        quantidadeErro++;
    } else {
        reiniciaBorda("nome");
    }

    // SOBRENOME
    if (sobrenome.trim() === "") {
        formError("sobrenome");
        quantidadeErro++;
    } else {
        reiniciaBorda("sobrenome");
    }

    // EMAIL

    if (email.trim() === "" || !email.includes("@")) {
        formError("email");
        quantidadeErro++;
    } else {
        reiniciaBorda("email");
    }

    // TELEFONE
    if (telPais.trim() === "") {
        formError("telefone-pais");
        quantidadeErro++;
    } else {
        reiniciaBorda("telefone-pais");
    }

    if (telDDD.trim().length < 2) {
        formError("telefone-ddd");
        quantidadeErro++;
    } else {
        reiniciaBorda("telefone-ddd");
    }

    if (telNumero.trim().length < 8) {
        formError("telefone-numero");
        quantidadeErro++;
    } else {
        reiniciaBorda("telefone-numero");
    }


    // ENDEREÇO
    
    if (cep.trim().length < 8) {
        formError("cep");
        quantidadeErro++;
    } else {
        reiniciaBorda("cep");
    }

    if (rua.trim() === "") {
        formError("rua");
        quantidadeErro++;
    } else {
        reiniciaBorda("rua");
    }

    if (numero.trim() === "") {
        formError("numero");
        quantidadeErro++;
    } else {
        reiniciaBorda("numero");
    }

    if (cidade.trim() === "") {
        formError("cidade");
        quantidadeErro++;
    } else {
        reiniciaBorda("cidade");
    }

    if (estado.trim() === "") {
        formError("estado");
        quantidadeErro++;
    } else {
        reiniciaBorda("estado");
    }

    if (complemento.trim() === "") {
        formError("complemento");
        quantidadeErro++;
    } else {
        reiniciaBorda("complemento");
    }               

    if (bairro.trim() === "") {
        formError("bairro");
        quantidadeErro++;
    } else {
        reiniciaBorda("bairro");
    }

   if (anotacoes.trim() === "") {
        formError("anotacoes");
        quantidadeErro++;
    } else {
        reiniciaBorda("anotacoes");
    }
    
    if (quantidadeErro > 0) {
        alert("Existem " + quantidadeErro + " campo(s) com erro, por favor verifique!");
    } else {
        alert("Formulário enviado com sucesso!");
        reiniciaTodasAsBordas();
    }
}



function formError(idCampo) {
    document.getElementById(idCampo).style.border = "2px solid red";
}

function reiniciaBorda(idCampo) {
    document.getElementById(idCampo).style.border = "1px solid #ccc";
}

function reiniciaTodasAsBordas() {
    let campos = document.querySelectorAll("input, textarea");

    campos.forEach(campo => {
        campo.style.border = "1px solid #ccc";
    });
}