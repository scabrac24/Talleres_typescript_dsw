export class Serie {
    id : number;
    serie_name: string;
    channel: string;
    seasons: number;
    description: string;
    channel_url: string;
    image: string;

    constructor(id: number, serie_name: string, channel: string, seasons: number, description: string, channel_url: string, image: string) {
      this.id = id;
      this.serie_name = serie_name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.channel_url = channel_url;
      this.image = image;
    }
  }