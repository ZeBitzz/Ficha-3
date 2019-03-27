const movies = []

//definir o maximo para a caixa do texto do ano

const txtYear =document.querySelector("#txtMovieName")
txtYear.max =new Date().getFullYear
const myForm =document.querySelector("form")

myForm.addEventListener("submit",function(event){
    event.preventDefault()
    //1.Obter os valores de todos os elementos do formulário
    const txtTitle= document.querySelector("#txtMovieName").value
    const txtGenre= document.querySelector("#txtMovieGenre").value
    const txtYear= document.querySelector("#txtMovieYear").value
    const txtCover= document.querySelector("#txtMovieCover").value
    const txtTrailer= document.querySelector("#txtMovieTrailer").value

    //2.Verificar se o filme já existe no array

    const result = isMovie(txtTitle)
    
    if(result === true){

        alert("Filme existente!!")
    }else{
        //3.Criar um objeto
    const newMovie ={
        title: txtTitle,
        genre:txtGenre,
        year:txtYear,
        cover:txtCover,
        trailer:txtTrailer
    }
        //4.Guardar Objetos
        movies.push(newMovie)
        //em alternativa movies[movies.lenght] =newMovie
    
    }


    //5.Exibir os filmes na tabla
    renderTable()


})

//fechar visualizacao da capa do filme
const btnCloseCover =document.querySelector("#btnCloseCover")
btnCloseCover.addEventListener("click",function(){
    const dlgCover =document.querySelector("#dlgCover")
    dlgCover.close();
})


//Função que vai verifificar se um titiulo de filme existe
function isMovie(txtTitle){
    for (const movie of movies) {
        if (movie.title === txtTitle) {
            return true
        }
    }
    return false
}
//Função responsável por exibir todos os filmes do array na tabela HTML
function renderTable(){
    //Obter a referencia da tabela
    const myTable =document.querySelector("table")

    //Injetar a Tabela
    myTable.innerHTML =`
        <tr>
        <th>Título</th>
        <th>Genero</th>
        <th>Opções</th>
        </tr>
    
    `

    //exibir todos os filmes em linhas independentes 
    for (const movie of movies) {
        myTable.innerHTML +=`
        <tr>
        <td>${movie.title}</td>
        <td>${movie.genre}</td>
        <td>
            <button onclick="showCover('${movie.cover}')">Ver Capa</button>
            <button onclick="showTrailer('${movie.trailer}')>Ver Trailer</button>
            <button onclick="removeMovie('${movie.title}')>Remover Filme</button>
        </td>
        </tr>
    
    `
    }
}

function showCover(cover){
    //injetar o link da capa na imagem
    const imgCover =document.querySelector("#imgCover")
    imgCover.src = cover

    //exibir a janela

    const dlgCover =document.querySelector("#dlgCover")
    dlgCover.showModal()
}

function removeMovie(title){
    for(let i=0;movies.length;i++){
        if(movies[i]=== title)
        //remover o filme
        movies.splice(i,1)
    }
    renderTable()
}