import router from "../router";
class AbstractController {
    constructor(scope) {
        this.scope = scope;
        this.router = router;
    }
}
export default AbstractController;