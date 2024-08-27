class Gui {

    #sideral;
    #playButton;
    #canvasContext;
    #sideralBox;

    constructor() {

        this.#sideral = document.getElementById('sideral');
        this.#canvasContext = this.#sideral.getContext('2d');
        this.#makeSideralFullPage();
        this.#sideralBox = this.#sideral.getBoundingClientRect();
        this.#playButton = new Image();
        this.#loadPlayButtonImage();
    }

    #makeSideralFullPage() {
        
        this.#sideral.width = window.innerWidth - (window.innerWidth * 0.02);
        this.#sideral.height = window.innerHeight - (window.innerHeight * 0.02);
    } 

    #loadPlayButtonImage() {

        this.#playButton.src = "./images/SidereusPlayButton.png";
        this.#playButton.onload = () => {
            
            const canvasWidthMidpoint = this.#sideralBox.width / 2;
            const canvasHeightMidpoint = this.#sideralBox.height / 2;
            const playImgWidthMidpoint = this.#playButton.width / 2;
            const playImgHeightMidpoint = this.#playButton.height / 2;


            this.#canvasContext.drawImage(this.#playButton, canvasWidthMidpoint - playImgWidthMidpoint,
                                                    canvasHeightMidpoint - playImgHeightMidpoint);
        };
    }

    deletePlayButton() {

        const canvasWidthMidpoint = this.#sideralBox.width / 2;
        const canvasHeightMidpoint = this.#sideralBox.height / 2;
        const playImgWidthMidpoint = this.#playButton.width / 2;
        const playImgHeightMidpoint = this.#playButton.height / 2;

        this.#canvasContext.clearRect(canvasWidthMidpoint - playImgWidthMidpoint,
            canvasHeightMidpoint - playImgHeightMidpoint,
            this.#playButton.width,
            this.#playButton.height);
    }

    get sideralBox() {

        return this.#sideralBox;
    }

    get sideral() {

        return this.#sideral;
    }

    set sideral(value) {

        this.#sideral = value;
    }

    get canvasContext() {

        return this.#canvasContext;
    }
}