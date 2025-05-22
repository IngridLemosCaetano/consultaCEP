let botao = document.getElementById('btn-cep')

botao.addEventListener('click',function(event){
    event.preventDefault()
    let logradouro = document.getElementById('logradouro')
    let bairro = document.getElementById('bairro')
    let regiao = document.getElementById('regiao')
    let estado = document.getElementById('estado')

    let cep = document.getElementById('input_cep').value

    
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res)=> res.json())
    .then((data) => {
        logradouro.innerText = data.logradouro
        bairro.innerText = data.bairro
        regiao.innerText = data.regiao
        estado.innerText = data.estado
    })
    .catch((err) => console.log(err))

})
