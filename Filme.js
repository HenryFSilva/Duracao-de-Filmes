class Filme {
    #titulo
    #duracaoEmMinutos

    /**
     * 
     * @param {String} pTitulo 
     * @param {Number} pDuracaoEmMinutos 
     */

    constructor(pTitulo, pDuracaoEmMinutos) {

        this.#titulo = pTitulo
        this.#duracaoEmMinutos = pDuracaoEmMinutos

}

    get titulo() {
    return this.#titulo
}

    get duracaoEmMinutos() {
    return this.#duracaoEmMinutos
}

    set titulo(novoTitulo) {
    this.#titulo = novoTitulo
}

    set duracaoEmMinutos(novoDuracaoEmMinutos) {
    this.#duracaoEmMinutos = novoDuracaoEmMinutos
}

duracaoEmHoras() {
    return (`o filme ${this.#titulo} tem a duração de ${Math.floor(this.#duracaoEmMinutos / 60)}h${this.#duracaoEmMinutos%60}m`);
}

}

let umFilmeQualquer = new Filme('Os Vingadores', 142);
console.log(umFilmeQualquer);
console.log(umFilmeQualquer.duracaoEmHoras());

let meuFilmeFavorito = new Filme('Até o último homem', 139);
console.log(meuFilmeFavorito);
console.log(meuFilmeFavorito.duracaoEmHoras());