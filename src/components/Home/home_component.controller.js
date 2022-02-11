import AbstractController from "../../services/abstract-controller";

class HomeController extends AbstractController {
    constructor(scope) {
        super(scope);
    }
    fazerLogin() {
       this.scope.login = 'Função disponível em breve'
        alert(this.scope.login)
    }
}

export default HomeController