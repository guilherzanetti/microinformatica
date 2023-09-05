let vendas = 30;
let comissao = 0;
let nome = "Guilherme";

if(vendas <= 250){
    comissao = comissao + vendas
    console.log(`${nome} realizou ${vendas} vendas e tem R$${comissao} de comissao`);
}
if(vendas > 250 && vendas <= 500){
    comissao = comissao + vendas * 2.50;
    console.log(`${nome} realizou ${vendas} vendas e tem R$${comissao} de comissao`);
}
if(vendas > 500){
    comissao = comissao + vendas * 5;
    console.log(`${nome} realizou ${vendas} vendas e tem R$${comissao} de comissao`);
}
if(vendas === 0){
    console.log(`${nome} não realizou nenhuma venda`);
}

