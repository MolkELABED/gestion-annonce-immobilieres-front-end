export class Annonce {
    id: number;
    titre: string;
    description: string;
    image: string;
    prix: string;
    lieu: string;

    constructor(id = 0, titre = '', description = '', image = '', prix='', lieu='') {
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.image = image;
        this.prix = prix;
        this.lieu = lieu;
    }
}
