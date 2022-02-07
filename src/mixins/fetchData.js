export default {
    data() {
        return {
            jogos: []
        }
    },
    methods: {
        async fetchJogos(url) {
            const response = await fetch(`http://localhost:3000/${url}`)
            this.jogos = await response.json()
        },
    }
}