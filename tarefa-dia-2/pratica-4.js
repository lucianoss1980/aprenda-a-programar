let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};
let percentualInternacional = (20/100);
let percentualNacional = (12/100);

if (produtoA.internacional == true) {
    console.log(produtoA.nome, produtoA.valor+(produtoA.valor*percentualInternacional));
}  else {
    console.log(produtoA.nome, produtoA.valor+(produtoA.valor*percentualNacional));
}

if (produtoB.internacional == true) {
    console.log(produtoB.nome, produtoB.valor+(produtoB.valor*percentualInternacional));
}  else {
    console.log(produtoB.nome, produtoB.valor+(produtoB.valor*percentualNacional));
}

if (produtoC.internacional == true) {
    console.log(produtoC.nome, produtoC.valor+(produtoC.valor*percentualInternacional));
}  else {
    console.log(produtoC.nome, produtoC.valor+(produtoC.valor*percentualNacional));
}