let listaNovidades = [
    {
        titulo: "Console Playstation 5",
        imagem: "imagens/ps5.png",
        preco: "R$ 5.000,00 á vista ou 10x s/ juros!",
    },
    {
        titulo: "Console Xbox Series X",
        imagem: "imagens/xsx_2.png",
        preco: "R$ 5.000,00 á vista ou 10x s/ juros!",
    },
    {
        titulo: "Nintendo Switch",
        imagem: "imagens/nsw.png",
        preco: "R$ 2.200,00 á vista ou 10x s/ juros!",
    },
]
    function renderizarNovidades () {
    let blocoNovidades = document.getElementById("blocoNovidades");

    let template = ""; // Serve para evitar Bug

    for (let index = 0; index < listaNovidades.length; index++) {
        const produto = listaNovidades[index];

        template += `<div class="nov">
                        <div class="itens"><a href="#">${produto.titulo}</a></div>
                        <div class="itens2"><a href="#"itens><img class="imgnov" src=${produto.imagem}></a></div>
                        <div class="preço"><a href="#">${produto.preco}</a></div>
                    </div>`    
    }

    blocoNovidades.innerHTML = template;
}

let listaDestaques = [
    {
        titulo: "Console Playstation 4",
        imagem: "imagens/ps4.png",
        preco: "R$ 2.500,00 á vista ou 10x s/ juros!",
    },
    {
        titulo: "Console XBOX One S",
        imagem: "imagens/xones.png",
        preco: "R$ 2.500,00 á vista ou 10x s/ juros!",
    },
    {
        titulo: "Console XBOX One",
        imagem: "imagens/xone.png",
        preco: "R$ 2.000,00 á vista ou 10x s/ juros!",
    },
    {
        titulo: "Nintendo Switch",
        imagem: "imagens/ntdswitch.png",
        preco: "R$ 2.200,00 á vista ou 10x s/ juros!",
    },
    {
        titulo: "Controle Playstation 4",
        imagem: "imagens/controlePS4.png",
        preco: "R$ 250,00 á vista ou 10x s/ juros!",
    },
    {
        titulo: "Controle Playstation 5",
        imagem: "imagens/controlePS5.png",
        preco: "R$ 450,00 á vista ou 10x s/ juros!",
    },
]

    function renderizarDestaques () {
        let blocoDestaques = document.getElementById("blocoDestaques");

        let template = ""; // Serve para evitar Bug
        
        for (let index = 0; index < listaDestaques.length; index++) {
            const produto = listaDestaques[index];

            template += `<div class="nov">
                            <div class="itens"><a href="#">${produto.titulo}</a></div>
                            <div class="itens2"><a href="#"><img class="imgnov" src=${produto.imagem}></a></div>
                            <div class="preço"><a href="#">${produto.preco}</a></div>
                        </div>`
        }
        blocoDestaques.innerHTML = template;
    }