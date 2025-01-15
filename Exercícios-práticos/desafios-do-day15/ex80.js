class Playlist {
    constructor() {
        this.fila = [];
    }

    adicionarMusica(musica) {
        this.fila.push(musica);
        console.log(`Música ${musica} adicionada à playlist.`);
    }

    tocarMusica() {
        if (this.fila.length > 0) {
            const musica = this.fila.shift();
            console.log(`Tocando música: ${musica}`);
        } else {
            console.log("Nenhuma música na playlist.");
        }
    }
}

// Exemplo de uso
const playlist = new Playlist();
playlist.adicionarMusica("Song 1");
playlist.adicionarMusica("Song 2");
playlist.tocarMusica();
playlist.tocarMusica();
playlist.tocarMusica();
