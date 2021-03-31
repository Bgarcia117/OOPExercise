// Object Oriented Programming Exercise

// #1a
const mulan = {
    title:`mulan`,
    main:`Fa Mulan`,
    // #1b
    quote: function(){
        return `Dishonor! Dishonor on your whole family!`;
    },
    // #1c
    storyline:function(){
        return `The movie ${this.title} is about ${this.main}`;
    }
};
// #2a
const tangled={
    title:`Tangled`,
    main:`Rapunzel`,
    // #2b
    quote: function() {
        return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`;
    },
    // #2c
    storyline: function() {
        return `The movie ${this.title} is about ${this.main}`;
    }
};
// #3a
function DisneyMovie(title, main){
    this.title = title;
    this.main = main;
}
// #3b
DisneyMovie.prototype.storyline = function(){
    return `The movie ${this.title} is about ${this.main}`;
}
// #3c
const mulan1 = new DisneyMovie(`Mulan`, `Fa Mulan`);
// #3d
const tangled1 = new DisneyMovie(`Tangled`, `Rapunzel`);
// #4a
class DM{
    constructor(title, main){
        this.title = title;
        this.main = main;
    }
    // 4b. Below the constructor, copy the "storyline" method from questions 1-3 and add it as a prototype on the DM class
    storyline(title, main){
        return `The movie ${this.title} is about ${this.main}`;
    }
    //4e
    static loveDisneyMovies(){
        return `I Love Disney Movies!`;
    }
}
// #4c
const mulan2=new DM(`Mulan`, `Fa Mulan`);
// #4d
const tangled2=new DM(`Tangled`, `Rapunzel`);
// #4f
console.log(DM.loveDisneyMovies());
// #5a
class DMCast extends DM{
    // #5b
    constructor(title, main, cast){
        // #5c
        super(title, main);
        this.cast = cast;
    }
    // 6a
    static create(title, main, cast){
        return new DMCast(title, main, cast);
    }
}
    // #5d
    const mulan3 = new DMCast(`Mulan`,`Fa Mulan`, {
        mulan:`Ming-Na Wen`,
        mushu:`Eddie Murphy`,
        shang:`BD Wong`,
        theEmperor:`Pat Morita`
    });
    // #5e
    const tangled3 = new DMCast(`Tangled`,`Rapunzel`, {
        rapunzel:`Mandy Moore`,
        flynnRider:`Zachary Levi`,
        motherGothel:`Donna Murphy`
    });

//#6a
// #6b
const moana = DMCast.create(`Moana`, `Moana of Motunui`, {
    moana:`Auli'i Cravalho`,
    maui:`Dwayne Johnson`,
    grammaTala:`Rachel House`,
    chiefTui:`Temuera Morrison`
});
// #6c
console.log(moana);