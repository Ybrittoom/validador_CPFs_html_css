function validarCPF() {
    let cpf = document.getElementById('resposta_cpf').value

    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]+/g, '');

    // Verifica se tem 11 dígitos
    if (cpf.length !== 11) return false;

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpf)) return false;

    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true


    
}
function verificar() {
    const label_pergunta = document.getElementById('label_pergunta')
    const cpfValido = validarCPF()

    if (cpfValido) {
        label_pergunta.textContent = "CPF valido!!!"
    } else {
        label_pergunta.textContent = "CPF invalido!!!"
    }
}

function verificar_humano() {
    const sou_humano = document.getElementById('sou_humano')
    const mensagem = document.getElementById('mensagem')

    let verdade = true
    let falso = false

    if (sou_humano.checked && verdade === true) {
        mensagem.textContent = "Você confirmou que é humano!"
    } else {
        mensagem.textContent = "Por favor, marque a caixa para confirmar!"
    }
}
