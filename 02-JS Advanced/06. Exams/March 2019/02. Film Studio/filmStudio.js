const expect = require('chai').expect;

class FilmStudio {

    constructor(studioName) {
        this.name = studioName;
        this.films = [];
    }

    casting(actor, role) {
        let isTheActorIsUnemployed = true;
        let output;

        if (this.films.length) {

            for (let f of this.films) {

                let roles = f.filmRoles.filter((r) => r.role === role);

                if (roles.length) {
                    let filmIndex = this.films.indexOf(f);
                    let wantedRole = this.films[filmIndex].filmRoles.filter((fR) => fR.role === role)[0];
                    let roleIndex = this.films[filmIndex].filmRoles.indexOf(wantedRole);

                    this.films[filmIndex].filmRoles[roleIndex].actor = actor;
                    isTheActorIsUnemployed = false;
                    output = `You got the job! Mr. ${actor} you are next ${role} in the ${f.filmName}. Congratz!`;
                    break;
                }
            }

            if (isTheActorIsUnemployed) {
                output = `${actor}, we cannot find a ${role} role...`;
            }

        } else {
            output = `There are no films yet in ${this.name}.`;
        }

        return output;
    }

    makeMovie(filmName, roles) {

        if (arguments.length === 2) {

            let firstArgIsString = typeof arguments[0] === 'string';
            let secondArgIsArray = arguments[1] instanceof Array;

            if (firstArgIsString && secondArgIsArray) {
                let findedFilms = this.films.filter((f) => f.filmName.includes(filmName));

                let filmRoles = roles.reduce((acc, cur) => {
                    let curFilmRole = {
                        role: cur,
                        actor: false
                    };
                    acc.push(curFilmRole);
                    return acc;
                }, []);

                let film = {
                    filmName,
                    filmRoles
                };

                if (findedFilms.length > 0) {
                    film.filmName += ` ${++findedFilms.length}`;
                }

                this.films.push(film);
                return film;
            } else {
                throw ('Invalid arguments')
            }

        } else {
            throw ('Invalid arguments count')
        }
    }

    lookForProducer(film) {

        let f = this.films.filter((f) => f.filmName === film)[0];
        let output;

        if (f) {
            output = `Film name: ${f.filmName}\n`;
            output += 'Cast:\n';
            Object.keys(f.filmRoles).forEach((role) => {
                output += `${f.filmRoles[role].actor} as ${f.filmRoles[role].role}\n`;
            });
        } else {
            throw new Error(`${film} do not exist yet, but we need the money...`)
        }

        return output;
    }
}

let filmStudio = new FilmStudio('SU-Studio');

console.log(filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']));
console.log(filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']));
console.log(filmStudio.makeMovie('The New Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy', 'Black Panther']));
console.log(filmStudio.casting('bebe', 'Thor'));
console.log(JSON.stringify(filmStudio,null, 1));

describe('Film Studio', function () {

    
    it('correct initialization with string', function () {
        let studio = new FilmStudio('Agi');
        expect(studio.name).to.be.a('string');
        expect(studio.films).to.deep.equal([]);
    });

    it('testmakemovi', function () {
        let filmStudio = new FilmStudio("10");
        filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy'])
        expect(filmStudio.films).to.have.lengthOf(1);
        expect(filmStudio.films[0].filmName).to.equal('The Avengers');
        expect(filmStudio.films[0].filmRoles).to.have.lengthOf(4);
        expect(filmStudio.films[0].filmRoles[1].role).to.equal("Thor");
        expect(() => filmStudio.makeMovie("aaaa")).to.throw();
        filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
    });

    it('testing casting function', function () {
        // let filmStudio = new FilmStudio(10);
        // let result = filmStudio.casting('baba', 'gigi');
        // expect(result).to.equal('There are no films yet in 10.');
        expect(new FilmStudio(10).casting('baba', 'gigi')).to.equal('There are no films yet in 10.');
    });
    it('testing casting actor', function () {
        let filmStudio = new FilmStudio('SU-Studio');
        filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
        let result = filmStudio.casting('bebe', 'Thor');
        expect(result).to.equal('You got the job! Mr. bebe you are next Thor in the The Avengers. Congratz!');
    });
});