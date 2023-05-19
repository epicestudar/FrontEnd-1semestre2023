function dataEvento() {
    let nomeEvento = document.getElementById("name").value;
    let dataEvento = document.getElementById("email").value;
    let maxParticipantes = document.getElementById("subject").value;
    let nomePalestrante = document.getElementById("message").value;
    let idade = document.getElementById("idade").value;

    if(idade < 18) {
        alert("Não é permitido o cadastro de pessoas menores de idade.")
    }
    else if(maxParticipantes < 0 || maxParticipantes > 100) {
        alert("O n° de participantes deve ficar entre 1 e 100")
    }
    else if(nomePalestrante == null) {
        alert("Preencha o nome do palestrante")
    }
    else if(nomeEvento == null) {
        alert("Preencha o nome do evento")
    }
}