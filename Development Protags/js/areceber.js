const rsConta = document.querySelector('#rsConta')
const rsValor = document.querySelector('#rsValor')
const rsParcelas = document.querySelector('#rsParcelas')
const rsDatadeEmissao = document.querySelector('#rsDatadeEmissao')
const rsDatadeVenci = document.querySelector('#rsDatadeVenci')
const rsreceberDe = document.querySelector('#rsreceberDe')
const rsCondicaoRec = document.querySelector('#rsCondicaoRec')
const rsDescricao = document.querySelector('#rsDescricao')
const rsArquivo = document.querySelector('#rsArquivo')
const rsSituacao = document.querySelector('#rsSituacao')
const btnCadastro = document.querySelector('#rregCadastrar')

let categorias = document.querySelector('#psCategoria')
let contasAReceber = JSON.parse(localStorage.getItem('contasAReceber')) || [];


rsArquivo.addEventListener('change', () => {
  const reader = new FileReader()

  reader.addEventListener('load', () => {
    localStorage.setItem('recent-image', reader.result)
  })
  reader.readAsDataURL(rsArquivo.files[0])
})

rsArquivo.addEventListener('change', () => {
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    localStorage.setItem('recent-image', reader.result);
  });

  reader.readAsDataURL(rsArquivo.files[0]);
});

btnCadastro.addEventListener('click', (e) => {
  e.preventDefault(); 
 if ( rsValor.value == "" || rsParcelas.value == "" || rsDatadeEmissao.value == "" || rsDatadeVenci.value == "" || rsreceberDe.value == "" || rsSituacao == "" || categorias == '') {
   rsValor.style.borderColor = 'red';
   rsDatadeEmissao.style.borderColor = 'red';
   rsDatadeVenci.style.borderColor = 'red';
   rsreceberDe.style.borderColor = 'red';
   categorias.style.borderColor = 'red'
   alert("Por favor, preencha todos os campos.");
 }
 else {
  const contas = {
    'conta': rsConta.value, 
     'valor': rsValor.value, 
     'parcelas': rsParcelas.value, 
     'datadeemissao': rsDatadeEmissao.value, 
     'datadevenci': rsDatadeVenci.value, 
     'receberde': rsreceberDe.value, 
     'condicaorec': rsCondicaoRec.value, 
     'descricao': rsDescricao.value,
     'situacao': rsSituacao.value, 
     'categoria': categorias.value
   }

   contasAReceber.push(contas)
   localStorage.setItem('contasAReceber', JSON.stringify(contasAReceber))

   rsConta.value = contasAReceber.length.toString();
   
   console.log(contasAReceber)
   rsValor.style.borderColor = 'gray';
   rsDatadeEmissao.style.borderColor = 'gray';
   rsDatadeVenci.style.borderColor = 'gray';
   rsreceberDe.style.borderColor = 'gray';
   alert("Conta cadastrada com sucesso!");
 }
})



