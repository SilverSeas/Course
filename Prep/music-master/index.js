class Track {
    constructor(artist, title, album) {
        this.artist = artist;
        this.title = title;
        this.album = album;
    }
}

class Player {
    constructor() {
        this.tracks = [];
        this.currentTrackIndex = 0;
    }

    add(track) {
        this.tracks.push(track);
    }

    play() {
        console.log(`Playing: ${this.tracks[this.currentTrackIndex].title} by ${this.tracks[this.currentTrackIndex].artist}`);
    }

    next() {
        if (this.currentTrackIndex === this.tracks.length - 1) {
            this.currentTrackIndex = 0;
        } else {
            this.currentTrackIndex++;
        }
    }

    previous() {
        if (this.currentTrackIndex === 0) {
            this.currentTrackIndex = this.tracks.length - 1;
        } else {
            this.currentTrackIndex--;
        }
    }
}

const player = new Player();
const driveTrack = new Track('Incubus', 'Drive', 'Make Yourself');
const laBambaTrack = new Track('Ritchie Valens', 'La Bamba', 'La Bamba');

player.add(driveTrack);
player.add(laBambaTrack);

player.play();
player.next();
player.play();
player.previous();
player.play();
