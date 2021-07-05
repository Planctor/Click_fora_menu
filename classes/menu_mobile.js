export default class Menu {
    constructor(menu) {
        this.menu = document.querySelector(menu)
        this.itensMenu = [...this.menu.children]
    }

    cliqueFora() {
        const html = document.documentElement
        html.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.itensMenu[0] !== e.target && this.itensMenu[2] !== e.target && this.itensMenu[1] !== e.target) {
                this.itensMenu.forEach(iten => {
                    iten.classList.remove('ativo');
                });
            }
        })
    }

    adicionarCadaClasse() {
        this.itensMenu.forEach(iten => {
            iten.classList.toggle('ativo');
        });

        this.cliqueFora();
    }

    adicionarClasseEvento() {
        this.itensMenu.forEach(iten => {
            iten.addEventListener('click', this.adicionarCadaClasse)
            iten.addEventListener('touchstart', this.adicionarCadaClasse)
        })
    }

    bindItens() {
        this.cliqueFora = this.cliqueFora.bind(this);
        this.adicionarCadaClasse = this.adicionarCadaClasse.bind(this);
    }

    init() {
        this.bindItens();
        this.adicionarClasseEvento();
        return this;
    }
}