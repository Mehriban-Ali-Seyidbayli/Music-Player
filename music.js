class Music {
    constructor (title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music("Unstoppable", "Sia", "image-1.jpg", "music-1.mp3"),
    new Music("Love Story", "Indila", "image-2.jpg", "music-2.mp3"),
    new Music("Snowman", "Sia", "image-3.jpg", "music-3.mp3")
];