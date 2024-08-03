//Desenvolva sua lógica aqui utlizando o método de array filter e verifique o resultado no console do seu navegador.

//1) Crie uma função para filtrar os hotéis que estão localizados no Brasil
function filterCountry(array) {
  let x = array.filter(e => {
    return e.country == "Brasil";
  })
  return x;
}
console.log(filterCountry(data));

// 2) Crie uma função para filtrar os hotéis que possuem o preço igual ou maior que R$200,00.
function filterPrice(array) {
  let x = array.filter(e => {
    return e.price >= 200;
  })
  return x;
}
console.log(filterPrice(data));

//3) Crie uma função para filtrar os hotéis que estão abertos nesse momento (isOpen)
function filterIsOpen(array) {
  let x = array.filter(e => {
    return e.isOpen == true;
  })
  return x;
}
console.log(filterIsOpen(data));

//DESAFIO
//4) Crie uma função que filtre apenas o hotel com o nome “Copacabana Palace”. Após isso, crie outra função para verificar as datas disponíveis para agendamento nesse hotel (isAvaliable).
function filterHotelName(array) {
  let x = array.filter(e => {
    return e.name == "Copacabana Palace";
  })
  return x;
}
function filterToBook() {
  const hotel = filterHotelName(data);
  const toBook = hotel[0].toBook;
  let disponivel = toBook.filter(e => {
    return e.isAvailable == true;
  })
  
  return disponivel;
}
console.log(filterToBook());
