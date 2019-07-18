var text = '{ "estados" : [' +
  '{ "sigla":"MA" , "nome":"Maranhão", "capital":"São Luís", "regiao":"Nordeste" },' +
  '{ "sigla":"PI" , "nome":"Piauí", "capital":"Teresina", "regiao":"Nordeste" },' +
  '{ "sigla":"CE" , "nome":"Ceará", "capital":"Fortaleza", "regiao":"Nordeste" },' +
  '{ "sigla":"RN" , "nome":"Rio Grande de Norte", "capital":"Natal", "regiao":"Nordeste" },' +
  '{ "sigla":"PE" , "nome":"Pernambuco", "capital":"Recife", "regiao":"Nordeste" },' +
  '{ "sigla":"PB" , "nome":"Paraíba", "capital":"Jõao Pessoa", "regiao":"Nordeste" },' +
  '{ "sigla":"SE" , "nome":"Sergipe", "capital":"Aracaju", "regiao":"Nordeste" },' +
  '{ "sigla":"AL" , "nome":"Alagoas", "capital":"Maceió", "regiao":"Nordeste" },' +
  '{ "sigla":"BA" , "nome":"Bahia", "capital":"Salvador", "regiao":"Nordeste" },' +

  '{ "sigla":"MT" , "nome":"Mato Grosso", "capital":"Salvador", "regiao":"Centro-Oeste" },' +
  '{ "sigla":"MS" , "nome":"Mato Grosso do Sul", "capital":"Campo Grande", "regiao":"Centro-Oeste" },' +
  '{ "sigla":"GO" , "nome":"Goiás", "capital":"Goiânia", "regiao":"Centro-Oeste" },' +

  '{ "sigla":"SP" , "nome":"São Paulo", "capital":"São Paulo", "regiao":"Sudeste" },' +
  '{ "sigla":"RJ" , "nome":"Rio de Janeiro", "capital":"Rio de Janeiro", "regiao":"Sudeste" },' +
  '{ "sigla":"ES" , "nome":"Espírito Santo", "capital":"Vitória", "regiao":"Sudeste" },' +
  '{ "sigla":"MG" , "nome":"Minas Gerais", "capital":"Belo Horizonte", "regiao":"Sudeste" },' +

  '{ "sigla":"PR" , "nome":"Paraná", "capital":"Curitiba", "regiao":"Sul" },' +
  '{ "sigla":"RS" , "nome":"Rio Grande do Sul", "capital":"Porto Alegre", "regiao":"Sul" },' +
  '{ "sigla":"SC" , "nome":"Santa Catarina", "capital":"Florianópolis", "regiao":"Sul" },' +

  '{ "sigla":"AM" , "nome":"Amazonas", "capital":"Manaus", "regiao":"Norte" },' +
  '{ "sigla":"RR" , "nome":"Roraima", "capital":"Boa Vista", "regiao":"Norte" },' +
  '{ "sigla":"AP" , "nome":"Amapá", "capital":"Macapá", "regiao":"Norte" },' +
  '{ "sigla":"PA" , "nome":"Pará", "capital":"Belém", "regiao":"Norte" },' +
  '{ "sigla":"TO" , "nome":"Tocantins", "capital":"Palmas", "regiao":"Norte" },' +
  '{ "sigla":"RO" , "nome":"Rondônia", "capital":"Porto Velho", "regiao":"Norte" },' +
  '{ "sigla":"AC" , "nome":"Acre", "capital":"Rio Branco", "regiao":"Norte" } ]}';


// busca o estado definida no array
function buscaObjEstado(estados_array, key, input) {
  for (var i = 0; i < estados_array.length; i++) {
    //normalizando acentuações, espaços vazios e lowercase na variavel de entrada 
    var estado = estados_array[i][key]
    var nome_estado_norm = estado.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/ /g, "")
    var input_norm = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/ /g, "")
      //comparando o nome das variaves normalizadas
    if (nome_estado_norm === input_norm) {
      //teste das saidas no terminal
      // console.log("estado " + estado)
      // console.log("nome_estado_norm " + nome_estado_norm)
      // console.log("input " + input)
      // console.log("input_norm " + input_norm)

      return estados_array[i];
    }
  }
  return null;
}

//pega o que o usuario escreveu
function inputEstado() {
  var str = document.verification.text.value;

  obj = JSON.parse(text);

  var estado = buscaObjEstado(obj.estados, 'nome', str);
  if (estado) {
    alert("Sigla: " + estado.sigla + "\nEstado: " + estado.nome + "\nCapital: " + estado.capital + "\nRegião: " + estado.regiao);
  } else {
    alert(" o estado não existe")
  }

}