class Gui {

    #sideral;
    #playButton;
    #canvasContext;
    #sideralWidth;
    #sideralHeight;

    constructor() {

        this.#sideral = document.getElementById('sideral');
        this.#canvasContext = this.#sideral.getContext('2d');
        this.#makeSideralFullPage();
        this.#sideralWidth = this.#sideral.getBoundingClientRect().width;
        this.#sideralHeight = this.#sideral.getBoundingClientRect().height;
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
            
            const canvasWidthMidpoint = this.#sideralWidth / 2;
            const canvasHeightMidpoint = this.#sideralHeight / 2;
            const playImgWidthMidpoint = this.#playButton.width / 2;
            const playImgHeightMidpoint = this.#playButton.height / 2;


            this.#canvasContext.drawImage(this.#playButton, canvasWidthMidpoint - playImgWidthMidpoint,
                                                    canvasHeightMidpoint - playImgHeightMidpoint);
        };
    }

    deletePlayButton() {

        const canvasWidthMidpoint = this.#sideralWidth / 2;
        const canvasHeightMidpoint = this.#sideralHeight / 2;
        const playImgWidthMidpoint = this.#playButton.width / 2;
        const playImgHeightMidpoint = this.#playButton.height / 2;

        this.#canvasContext.clearRect(canvasWidthMidpoint - playImgWidthMidpoint,
            canvasHeightMidpoint - playImgHeightMidpoint,
            this.#playButton.width,
            this.#playButton.height);
    }

    get sideralWidth() {

        return this.#sideralWidth;
    }

    get sideralHeight() {

        return this.#sideralHeight;
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