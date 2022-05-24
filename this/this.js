//method -> obj
//function -> global (window,global)

//In Object
const video = {
    title: 'Rocky IV',
    play() {
        console.log(this);
    }
};
video.stop = function () {
    console.log(this);
};
video.stop;

//Global
const videoTwo = {
    title: 'Rocky V',
    play() {
        console.log(this);
    }
};

function playVideo() {
    console.log(this);
}
playVideo();


//Constructor function
const videoThree = {
    title: 'Rocky IV',
    play() {
        console.log(this);
    }
};

function Video(title) {
    this.title = title
    console.log(this);
}
const v = new Video('Rocky III');

//Display the title of the video for each tag
const videoFour = {
    title: "Rocky II",
    tags: ["boxing", "action", "sports"],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
    }
};
videoFour.showTags();