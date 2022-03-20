import React from 'react';

import ShowMoreProjects from './ProjectShowMore'

import './projects.css';

const googleLink = "https://drive.google.com/uc?export=view&id=";
const projects = [
    {
        id: 1,
        splashImg: googleLink + "1rzuh0PqztB16TQf00T-WgWr5iCJP_Glh",
        images: [],
        title: 'Spiritus',
        year: 2021,
        content: 'Spiritus is a 3rd person adventure/exploration game with puzzle elements. \
                  Set in a world where toxic fumes and unbreathable air have seeped into the bowels of planet, \
                  an Automaton constructed by the planet\'s previous inhabitants awakens deep underground. \
                  Left with neither purpose nor memory of his previous masters, \
                  the Automaton wanders the caverns eventually stumbling upon a young sapling containing the spirit of Nature.',
        links: { gameplay: 'https://www.youtube.com/watch?v=h0oFApCj6EQ&t=1s',
                 trailer: 'https://www.youtube.com/watch?v=FZGlxK23vL4',
                 digipengg: 'https://games.digipen.edu/games/spiritus',
                 download: 'http://downloads.digipen.edu/arcade/downloads/02898/Spiritus_Setup.exe' }
    }, {
        id: 2,
        splashImg: googleLink + "1vwjGjTTNmCXnpZYo4Qqyc7qPV2M0ieIz",
        images: [],
        title: 'Cosmic Hunter : Bounties of the Galaxy',
        year: 2020,
        content: 'Cosmic Hunter is a shoot \'em up game where the galactic bounty hunter that travels around the \
                  galaxy hunting down infamous marks in an attempt to repay an enormous debt.',        
        links: { gameplay: 'https://youtu.be/ZhFr5RP1OGM',
                 download: 'https://drive.google.com/uc?export=download&id=1cC3En768ld3-UvUEXEnLrwDtUWI4hTuO' }
    }, {
        id: 3,
        splashImg: googleLink + "1Sk4tpLuTODdehzvID3EG7gN1g1u59GLJ",
        images: [],
        title: 'Yippy\'s Fortress',
        year: 2019,
        content: 'Yippy\'s Fortress is a 2D co-op platformer game whereby 2 players must work closely together \
                  and defeat the bosses on each floor to progress up the fortress until the final boss is defeated. \
                  The objective of the game is to defeat each boss swiftly, which requires teamwork and strategy. \
                  Players have different skills with 2 effects for each skill based on whether if it is casted by \
                  a single player or both player at the same time',
        links: { trailer: 'https://www.youtube.com/watch?v=9YyqBtk9D-s',
                 download: 'https://drive.google.com/uc?export=download&id=1WORqwUSGnd3LlAXmdcWbC_bxddoBNRqf' }
    }, {
        id: 4,
        splashImg: googleLink + "1LLCUZ3n3SOaUVojaKjewtLPb9Ipkgyvk",
        images: [],
        title: 'Step',
        year: 2018,
        content: 'STEP is a 2D puzzle/adventure game. Player\s goal is to find a way out of the cave. \
                  As level progress, player will be introduced to more mechanics. In addition, at later levels, \
                  there are multiple path for the player to choose, based on the path chosen, it will take \
                  different amount of steps to reach the exit. Player\'s aim is to reach the exit with the \
                  fastest timing and least steps.',
        links: { download: 'https://drive.google.com/uc?export=download&id=1SzzVKunhL6G0TV2whFziwVBtQDwZhZUc' }
    }, {
        id: 5,
        splashImg: googleLink + "1AGjHzoPQb-r2R_sWdf7SmmHwTdtpwbZO",
        images: [],
        title: 'Numerelic',
        year: 2016,
        content: 'As a young talented student in Pasir Ris Primary School, with outstanding grades and excellent \
                    athletic skills. Sent to the realm of INTEGER, the player’s only hope of making it back is to \
                    traverse their bizarre puzzle world of mathematics and locate the statue of Numerelic, \
                    God of Integer and make a wish upon the statue to return to your dimension. \
                    Players will have to solve puzzles (Questions/Problem Sums) of the ruins to advance to \
                    next level and find the God of Integer. Player have to plan and strategize their moves \
                    carefully to prevent them from getting stuck.',
        links: { gameplay: 'https://www.youtube.com/watch?v=znLdXFYOpJ8',
                 download: 'https://drive.google.com/uc?export=download&id=1w5TODd3BSTN026TxGsJDO8-8xGjU_XQ0',
                 download2: 'https://drive.google.com/uc?export=download&id=1ONJD5Z23vJtX-QW_dXOAEB8Ltx0MF7Na' }
    },{
        id: 6,
        splashImg: googleLink + "1y6t9FvMV-mxByQuTfMUq4krinnFofDm9",
        images: [],
        title: 'Undefined Invasion',
        year: 2015,
        content: 'Undefined Invasion is 2D top-down shooter game made within 48 hours during an event host by \
                   our course mates. You, as an undefined shape is hunted by other defined shapes \
                   (triangle/square/pentagon/hexagon). Eliminate all other shapes and escape. \
                   As the game progress, there will be more tougher enemies, but player will also have different \
                   power-ups that will spawn randomly on the map.',
        links: { download: 'https://drive.google.com/uc?export=download&id=1ZpN7Acy7bKVF_RfycK8k0regG0imzD0S' }
    }, {
        id: 7,
        splashImg: googleLink + "1qM1sURz9u1fGqDieRp_dwmxUaP3Exlsc",
        images: [],
        title: 'Vroom Vroom Rider',
        year: 2014,
        content: 'Vroom Vroom Rider is a two player split screen, 3D racing game. \
                   It includes a simple race track with obstacles. \
                   Players race against each other as well as 2 AI car. \
                   Power-up spawns throughout the race to boost the player or hinder others. \
                   It is made for a school project, under the module Game Development Production. \
                   The car assets are not by us. In this project, I\'m responsible for the speedometer, \
                   mini-map and Simple Car AI.',
        links: { download: 'https://drive.google.com/uc?export=download&id=1yxcRaQjqWTcoy3CUTIQAKi2Fcw2s11NP' }
    }
];

const personalProjects = [
    {
        id: 1,
        splashImg: "https://github.com/MrHunte96/Wordle_In_Python/blob/main/Assets/Logo2.png?raw=true",
        images: [],
        title: 'Wordle In Python',
        year: 2021,
        content: 'Wordle is a popular web-based game, hence I tried to make it in Python using pygame during my free time.',
        links: { github: 'https://github.com/MrHunte96/Wordle_In_Python',
                 download: 'https://github.com/MrHunte96/Wordle_In_Python/releases/download/Release/WordleGame.zip' }
    },{
        id: 2,
        splashImg: "https://github.com/MrHunte96/Bounce_In_Python/blob/main/Assets/Title.png?raw=true",
        images: [],
        title: 'Bounce Classic In Python',
        year: 2021,
        content: 'Bounce is a game which I decided to make during my free time. \
                    It\'s one way to use the knowledge I have about game and to learn more about Python. \
                    \n\n Music by: Chua Hong Zhi \
                    \n\n SFX by: https://sfxr.me/',
        links: { github: 'https://github.com/MrHunte96/Bounce_In_Python',
                 download: 'https://github.com/MrHunte96/Bounce_In_Python/raw/main/BounceGame.zip' }
    },{
        id: 3,
        splashImg: googleLink + "1e7F9g5B3JwGi0Alhv2Etr_UNGlGq1Q9X",
        images: [],
        title: 'N-Queens Problem',
        year: 2021,
        content: 'Using google script with html/JavaScript to visualize N-Queen Problem, using backtracking algorithm',
        links: { download: 'https://script.google.com/macros/s/AKfycbwVq1cJ4IUmv2gRWlIb4b8uuOMhuT5noxMT1DUtffGP8zcVKUFwQOuRAzAexK0hpLHnzw/exec' }
    },{
        id: 4,
        splashImg: googleLink + "1yJXesjDeO-AdIJogQ74am3KrWz_QcRFI",
        images: [],
        title: 'Undefined Invasion - Invaded',
        year: 2017,
        content: 'Undefined Invasion - Invaded is a sequel to the first version of the game (Undefined Invasion) \
                  made in 2015. The main different is that it\'s a mobile game and player only controls the \
                  ship\'s shooting direction using a joystick.',
        links: { download: 'https://play.google.com/store/apps/details?id=com.WhiteStickman.UndefinedInvasion2' }
    },{
        id: 5,
        splashImg: googleLink + "1gfReEZ-7wByAlrdy24staxZUR00-kp8h",
        images: [],
        title: 'Spam Da Button',
        year: 2016,
        content: 'Spam Da Button is all about smashing buttons. \
                  The idea came about from an arcade game that focuses on smashing 3 buttons and completing varies task. \
                  Sadly, I did not finish the game and publish to google play store.',
        links: { }
    },{
        id: 6,
        splashImg: googleLink + "1pIcNzJ-nbJQEBsYIpgfnwRzvyeugsXzu",
        images: [],
        title: 'Prisoner Escape',
        year: 2015,
        content: 'Prisoner Escape is a Crossy Road style game. Run! Tap! Swipe! \
                  Escape as far as you could from the police. \
                  Tap fast and do not let the Police Helicopter get close to you!',
        links: { download: 'https://play.google.com/store/apps/details?id=com.WhiteStickman.PrisonEscape' }
    },{
        id: 7,
        splashImg: googleLink + "1wHVaCKUsJ4iACKXH-ZpYd5sFEh__cjuB",
        images: [],
        title: 'Zoe Adventure',
        year: 2014,
        content: 'Zoe Adventure is a 2D top-down scroller game. \
                    Players play as a water droplet extinguishing fire in the house. \
                    This is the very first game made entirely (Art/design/code) by me using C++ and SDL. \
                    Through this module, I\'ve learned about user input, game loop, how sprite render and how \
                    to build an executable. Sadly, SDL has been updated to 2.0 and broke the code, \
                    hence, no executable is available.',
        links: {}
    }
];


const Projects = () => {
    return (
        <section id="projects">
            <h5>My Recent Work</h5>
            <h2>Maxi Projects</h2>

            <ShowMoreProjects displayList={projects} />

            <br /><br />
            <h2>Mini Personal Projects</h2>

            <ShowMoreProjects displayList={personalProjects} />
           
        </section>
    );
}

export default Projects;