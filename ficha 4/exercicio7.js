const frmGame = document.querySelector("#frmMovie")

frmGame.addEventListener("submit", function(event) {
    const txtMovieYear = document.querySelector("#txtMovieYear").value
    const currentYear = new Date().getFullYear()

    if(txtMovieYear > 1900 && txtMovieYear <= currentYear) {
        alert("Validação OK")
        addMovieTable()
        frmMovie.reset()
    } else {
        alert("erro")
    }

    event.preventDefault()

})




function addMovieTable() {
    const table = document.querySelector("table")
    const movieName = document.querySelector("#txtMovieName").value
    const movieGenre = document.querySelector("#txtMovieGenre").value
    const movieCover = document.querySelector("#txtMovieCover").value
    const movieTrailer =documet.querySelector("#txtMovieTrailer").value

    table.innerHTML += `
        <tr>
            <td>${movieName.value}</td>
            <td>${movieGenre.value}</td>
            <td>
            <input type="button" onclick= "location.href='${movieCover.value}'" value="Ver Capa"/>
            <input type="button" onclick= "location.href='${movieTrailer.value}'" value="Ver Trailer"/>
            </td>
            <td><td>

        </tr>
    `

}