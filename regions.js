var regions = [
    {
        name: "Farm",
        baseTexture: "./imgs/farmBase.png",
        primaryColor: "#70b41f",
        backgroundColor: "#638e35",
        contrastColor: "black",
        alt1: "./imgs/farmAlt1.png",
        alt2: "./imgs/farmAlt2.png",
        alt3: "./imgs/farmAlt3.png",
        alt4: "./imgs/farmAlt4.png",
        emptyTexture: "./imgs/farmEmpty.png",
        patterns: [
            {
                name: "Sheep",
                image: "./imgs/sheep.png",
                imageOff: "./imgs/sheepOff.png",
                rarity: 1,
                pattern: [
                    [true , true , true , true ],
                ]
            },
            {
                name: "Pig",
                image: "./imgs/pig.png",
                imageOff: "./imgs/pigOff.png",
                rarity: 1,
                pattern: [
                    [true , true ],
                    [true , true ],
                ]
            },
            {
                name: "Rabbit",
                image: "./imgs/rabbit.png",
                imageOff: "./imgs/rabbitOff.png",
                rarity: 1,
                pattern: [
                    [true],
                    [true],
                    [true],
                    [true],
                ]
            },
            {
                name: "Horse",
                image: "./imgs/horse.png",
                imageOff: "./imgs/horseOff.png",
                rarity: 2,
                pattern: [
                    [true ],
                    [true ],
                    [true ],
                ]
            },
            {
                name: "Cow",
                image: "./imgs/cow.png",
                imageOff: "./imgs/cowOff.png",
                rarity: 2,
                pattern: [
                    [true , true , true ],
                ]
            },
            {
                name: "Unicorn",
                image: "./imgs/unicorn.png",
                imageOff: "./imgs/unicornOff.png",
                rarity: 3,
                pattern: [
                    [true , false, false],
                    [false, true , true ],
                ]
            },
            {
                name: "Chicken",
                image: "./imgs/chicken.png",
                imageOff: "./imgs/chickenOff.png",
                rarity: 4,
                pattern: [
                    [false, false, true ],
                    [false, true , false],
                    [true, false , false],
                ]
            },
        ]
    },
    {
        name: "Outback",
        primaryColor: "#cd8a60",
        backgroundColor: "#c18f52",
        contrastColor: "black",
        baseTexture: "./imgs/outbackBase.png",
        alt1: "./imgs/outbackAlt1.png",
        alt2: "./imgs/outbackAlt2.png",
        alt3: "./imgs/outbackAlt3.png",
        alt4: "./imgs/outbackAlt4.png",
        emptyTexture: "./imgs/outbackEmpty.png",
        patterns: [
            {
                name: "Kangaroo",
                image: "./imgs/kangaroo.png",
                imageOff: "./imgs/kangarooOff.png",
                rarity: 1,
                pattern: [
                    [true , false, false, false],
                    [false, true , false, false],
                    [false, false, true , false],
                    [false, false, false, true ],
                ]
            },
            {
                name: "Platypus",
                image: "./imgs/platypus.png",
                imageOff: "./imgs/platypusOff.png",
                rarity: 1,
                pattern: [
                    [true , true , false],
                    [false, true , true ],
                ]
            },
            {
                name: "Crocodile",
                image: "./imgs/crocodile.png",
                imageOff: "./imgs/crocodileOff.png",
                rarity: 1,
                pattern: [
                    [true , true , true , true ],
                ]
            },
            {
                name: "Koala",
                image: "./imgs/koala.png",
                imageOff: "./imgs/koalaOff.png",
                rarity: 2,
                pattern: [
                    [true , true ],
                    [false, true ],
                ]
            },
            {
                name: "Cockatoo",
                image: "./imgs/cockatoo.png",
                imageOff: "./imgs/cockatooOff.png",
                rarity: 2,
                pattern: [
                    [true , false],
                    [false, true ],
                    [false, true ],
                ]
            },
            {
                name: "Tiddalik",
                image: "./imgs/tiddalik.png",
                imageOff: "./imgs/tiddalikOff.png",
                rarity: 3,
                pattern: [
                    [false, true , false],
                    [true , false, true ],
                ]
            },
            {
                name: "Echidna",
                image: "./imgs/echidna.png",
                imageOff: "./imgs/echidnaOff.png",
                rarity: 4,
                pattern: [
                    [false, false, true ],
                    [true , true , false],
                ]
            },
        ]
    },
    {
        name: "Savanna",
        baseTexture: "./imgs/savannaBase.png",
        primaryColor: "#d4a943",
        backgroundColor: "#a38950",
        contrastColor: "black",
        alt1: "./imgs/savannaAlt1.png",
        alt2: "./imgs/savannaAlt2.png",
        alt3: "./imgs/savannaAlt3.png",
        alt4: "./imgs/savannaAlt4.png",
        emptyTexture: "./imgs/savannaEmpty.png",
        patterns: [
            {
                name: "Zebra",
                image: "./imgs/zebra.png",
                imageOff: "./imgs/zebraOff.png",
                rarity: 1,
                pattern: [
                    [false, true , false],
                    [true , false, true ],
                    [false, true , false],
                ]
            },
            {
                name: "Hippo",
                image: "./imgs/hippo.png",
                imageOff: "./imgs/hippoOff.png",
                rarity: 1,
                pattern: [
                    [true , false, true ],
                    [false, false, false],
                    [true , false, true ],
                ]
            },
            {
                name: "Giraffe",
                image: "./imgs/giraffe.png",
                imageOff: "./imgs/giraffeOff.png",
                rarity: 1,
                pattern: [
                    [true],
                    [true],
                    [true],
                    [true],
                ]
            },
            {
                name: "Lion",
                image: "./imgs/lion.png",
                imageOff: "./imgs/lionOff.png",
                rarity: 2,
                pattern: [
                    [true , true , true ],
                ]
            },
            {
                name: "Elephant",
                image: "./imgs/elephant.png",
                imageOff: "./imgs/elephantOff.png",
                rarity: 2,
                pattern: [
                    [true , true ],
                    [true , false],
                ]
            },
            {
                name: "Gryphon",
                image: "./imgs/gryphon.png",
                imageOff: "./imgs/gryphonOff.png",
                rarity: 3,
                pattern: [
                    [true , false, true ],
                    [false, true , false],
                ]
            },
            {
                name: "Rhinoceros",
                image: "./imgs/rhinoceros.png",
                imageOff: "./imgs/rhinocerosOff.png",
                rarity: 4,
                pattern: [
                    [false, true ],
                    [true , false],
                    [false, true ],
                ]
            },
        ]
    },
    {
        name: "Northern",
        baseTexture: "./imgs/northernBase.png",
        backgroundColor: "#59852c",
        primaryColor: "#68934b",
        contrastColor: "black",
        alt1: "./imgs/northernAlt1.png",
        alt2: "./imgs/northernAlt2.png",
        alt3: "./imgs/northernAlt3.png",
        alt4: "./imgs/northernAlt4.png",
        emptyTexture: "./imgs/northernEmpty.png",
        patterns: [
            {
                name: "Bear",
                image: "./imgs/bear.png",
                imageOff: "./imgs/bearOff.png",
                rarity: 1,
                pattern: [
                    [true , true ],
                    [false, true ],
                    [false, true ],
                ]
            },
            {
                name: "Skunk",
                image: "./imgs/skunk.png",
                imageOff: "./imgs/skunkOff.png",
                rarity: 1,
                pattern: [
                    [false, true , true ],
                    [true , true , false],
                ]
            },
            {
                name: "Beaver",
                image: "./imgs/beaver.png",
                imageOff: "./imgs/beaverOff.png",
                rarity: 1,
                pattern: [
                    [false, false, true ],
                    [true , true , false],
                    [false, false, true ],
                ]
            },
            {
                name: "Moose",
                image: "./imgs/moose.png",
                imageOff: "./imgs/mooseOff.png",
                rarity: 2,
                pattern: [
                    [true , false, true ],
                    [false, true , false],
                ]
            },
            {
                name: "Fox",
                image: "./imgs/fox.png",
                imageOff: "./imgs/foxOff.png",
                rarity: 2,
                pattern: [
                    [true , true , false],
                    [false, false, true ],
                ]
            },
            {
                name: "Sasquatch",
                image: "./imgs/sasquatch.png",
                imageOff: "./imgs/sasquatchOff.png",
                rarity: 3,
                pattern: [
                    [true ],
                    [true ],
                ]
            },
            {
                name: "Otter",
                image: "./imgs/otter.png",
                imageOff: "./imgs/otterOff.png",
                rarity: 4,
                pattern: [
                    [true , false],
                    [true , true ],
                ]
            },
        ]
    },
    {
        name: "Polar",
        baseTexture: "./imgs/polarBase.png",
        primaryColor: "#73b0b1",
        backgroundColor: "#8fc6cb",
        contrastColor: "black",
        alt1: "./imgs/polarAlt1.png",
        alt2: "./imgs/polarAlt2.png",
        alt3: "./imgs/polarAlt3.png",
        alt4: "./imgs/polarAlt4.png",
        emptyTexture: "./imgs/polarEmpty.png",
        patterns: [
            {
                name: "Penguin",
                image: "./imgs/penguin.png",
                imageOff: "./imgs/penguinOff.png",
                rarity: 1,
                pattern: [
                    [false, true , false],
                    [false, true , false],
                    [true , false, true ],
                ]
            },
            {
                name: "Seal",
                image: "./imgs/seal.png",
                imageOff: "./imgs/sealOff.png",
                rarity: 1,
                pattern: [
                    [true , false, false, false],
                    [false, true , false, true ],
                    [false, false, true , false],
                ]
            },
            {
                name: "Muskox",
                image: "./imgs/muskox.png",
                imageOff: "./imgs/muskoxOff.png",
                rarity: 1,
                pattern: [
                    [true , true , false],
                    [true , false, true ],
                ]
            },
            {
                name: "Polar Bear",
                image: "./imgs/polarBear.png",
                imageOff: "./imgs/polarBearOff.png",
                rarity: 2,
                pattern: [
                    [true , false, true ],
                    [false, false, true ],
                ]
            },
            {
                name: "Walrus",
                image: "./imgs/walrus.png",
                imageOff: "./imgs/walrusOff.png",
                rarity: 2,
                pattern: [
                    [true , false, false],
                    [false, true , true ],
                ]
            },
            {
                name: "Yeti",
                image: "./imgs/yeti.png",
                imageOff: "./imgs/yetiOff.png",
                rarity: 3,
                pattern: [
                    [true ],
                    [false],
                    [true ],
                ]
            },
            {
                name: "Snowy Owl",
                image: "./imgs/snowyOwl.png",
                imageOff: "./imgs/snowyOwlOff.png",
                rarity: 4,
                pattern: [
                    [true , true ],
                    [false, true ],
                ]
            },
        ]
    },
    {
        name: "Jungle",
        primaryColor: "#3f9346",
        backgroundColor: "#235814",
        contrastColor: "black",
        baseTexture: "./imgs/jungleBase.png",
        alt1: "./imgs/jungleAlt1.png",
        alt2: "./imgs/jungleAlt2.png",
        alt3: "./imgs/jungleAlt3.png",
        alt4: "./imgs/jungleAlt4.png",
        emptyTexture: "./imgs/jungleEmpty.png",
        patterns: [
            {
                name: "Monkey",
                image: "./imgs/monkey.png",
                imageOff: "./imgs/monkeyOff.png",
                rarity: 1,
                pattern: [
                    [true , false, true , false],
                    [false, true , false, true ],
                ]
            },
            {
                name: "Toucan",
                image: "./imgs/toucan.png",
                imageOff: "./imgs/toucanOff.png",
                rarity: 1,
                pattern: [
                    [false, true ],
                    [true , false],
                    [false, true ],
                    [false, true ],
                ]
            },
            {
                name: "Gorilla",
                image: "./imgs/gorilla.png",
                imageOff: "./imgs/gorillaOff.png",
                rarity: 1,
                pattern: [
                    [true , false, true ],
                    [true , false, true ],
                ]
            },
            {
                name: "Panda",
                image: "./imgs/panda.png",
                imageOff: "./imgs/pandaOff.png",
                rarity: 2,
                pattern: [
                    [false, false, true ],
                    [true , false, false],
                    [false, false, true ],
                ]
            },
            {
                name: "Tiger",
                image: "./imgs/tiger.png",
                imageOff: "./imgs/tigerOff.png",
                rarity: 2,
                pattern: [
                    [true , false, true , true ],
                ]
            },
            {
                name: "Phoenix",
                image: "./imgs/phoenix.png",
                imageOff: "./imgs/phoenixOff.png",
                rarity: 3,
                pattern: [
                    [true , false, false],
                    [false, false, false],
                    [false, false, true ],
                ]
            },
            {
                name: "Lemur",
                image: "./imgs/lemur.png",
                imageOff: "./imgs/lemurOff.png",
                rarity: 4,
                pattern: [
                    [true , false],
                    [false, true ],
                    [true , false],
                ]
            },
        ]
    },
    {
        name: "Jurassic",
        baseTexture: "./imgs/jurassicBase.png",
        primaryColor: "#77442f",
        backgroundColor: "#2f0e05",
        contrastColor: "white",
        alt1: "./imgs/jurassicAlt1.png",
        alt2: "./imgs/jurassicAlt2.png",
        alt3: "./imgs/jurassicAlt3.png",
        alt4: "./imgs/jurassicAlt4.png",
        emptyTexture: "./imgs/jurassicEmpty.png",
        patterns: [
            {
                name: "Diplodocus",
                image: "./imgs/diplodocus.png",
                imageOff: "./imgs/diplodocusOff.png",
                rarity: 1,
                pattern: [
                    [true , false, false],
                    [false, true , true ],
                    [false, true , false],
                ]
            },
            {
                name: "Stegosaurus",
                image: "./imgs/stegosaurus.png",
                imageOff: "./imgs/stegosaurusOff.png",
                rarity: 1,
                pattern: [
                    [false, true , true , false],
                    [true , false, false, true ],
                ]
            },
            {
                name: "Raptor",
                image: "./imgs/raptor.png",
                imageOff: "./imgs/raptorOff.png",
                rarity: 1,
                pattern: [
                    [true , true , false],
                    [false, true , false],
                    [false, false, true ],
                ]
            },
            {
                name: "T Rex",
                image: "./imgs/tRex.png",
                imageOff: "./imgs/tRexOff.png",
                rarity: 2,
                pattern: [
                    [true , false],
                    [false, false],
                    [true , true ],
                ]
            },
            {
                name: "Triceratops",
                image: "./imgs/triceratops.png",
                imageOff: "./imgs/triceratopsOff.png",
                rarity: 2,
                pattern: [
                    [true , false, false],
                    [false, false, true ],
                    [true , false, false],
                ]
            },
            {
                name: "Dragon",
                image: "./imgs/dragon.png",
                imageOff: "./imgs/dragonOff.png",
                rarity: 3,
                pattern: [
                    [true , false, false],
                    [false, false, true ],
                ]
            },
            {
                name: "Ankylosaurus",
                image: "./imgs/ankylosaurus.png",
                imageOff: "./imgs/ankylosaurusOff.png",
                rarity: 4,
                pattern: [
                    [false, false, true ],
                    [true , false, true ],
                ]
            },
        ]
    },
    {
        name: "Ice Age",
        primaryColor: "#9db7aa",
        backgroundColor: "#92a399",
        contrastColor: "black",
        baseTexture: "./imgs/iceAgeBase.png",
        alt1: "./imgs/iceAgeAlt1.png",
        alt2: "./imgs/iceAgeAlt2.png",
        alt3: "./imgs/iceAgeAlt3.png",
        alt4: "./imgs/iceAgeBase.png",
        emptyTexture: "./imgs/iceAgeEmpty.png",
        patterns: [
            {
                name: "Wooly Rhino",
                image: "./imgs/woolyRhino.png",
                imageOff: "./imgs/woolyRhinoOff.png",
                rarity: 1,
                pattern: [
                    [false, false, true , false],
                    [true , false, false, true ],
                    [false, true , false, false],
                ]
            },
            {
                name: "Giant Sloth",
                image: "./imgs/giantSloth.png",
                imageOff: "./imgs/giantSlothOff.png",
                rarity: 1,
                pattern: [
                    [true , false, false],
                    [false, false, true ],
                    [true , false, true ],
                ]
            },
            {
                name: "Dire Wolf",
                image: "./imgs/direWolf.png",
                imageOff: "./imgs/direWolfOff.png",
                rarity: 1,
                pattern: [
                    [false, true , false, false],
                    [true , false, false, true ],
                    [false, true , false, false],
                ]
            },
            {
                name: "Saber Tooth",
                image: "./imgs/saberTooth.png",
                imageOff: "./imgs/saberToothOff.png",
                rarity: 2,
                pattern: [
                    [true , false, false],
                    [false, false, true ],
                    [false, true , false],
                ]
            },
            {
                name: "Wooly Mammoth",
                image: "./imgs/woolyMammoth.png",
                imageOff: "./imgs/woolyMammothOff_low_quality.png",
                rarity: 2,
                pattern: [
                    [false, true , false],
                    [true , false, false],
                    [false, false, true ],
                ]
            },
            {
                name: "Akhlut",
                image: "./imgs/akhlut.png",
                imageOff: "./imgs/akhlutOff.png",
                rarity: 3,
                pattern: [
                    [false, false, true ],
                    [true , false, false],
                    [false, false, true ],
                ]
            },
            {
                name: "Yukon Camel",
                // image: "./imgs/yukonCamel.png",
                imageOff: "./imgs/timelessEmpty.png",
                rarity: 4,
                pattern: [
                    [false, false, true , false],
                    [true , false, false, false],
                    [false, false, false, true ],
                ]
            },
        ]
    },
    {
        name: "City",
        primaryColor: "#68ae1a",
        backgroundColor: "#515254",
        contrastColor: "black",
        baseTexture: "./imgs/cityBase.png",
        alt1: "./imgs/cityAlt1.png",
        alt2: "./imgs/cityAlt2.png",
        alt3: "./imgs/cityAlt3.png",
        alt4: "./imgs/cityAlt4.png",
        emptyTexture: "./imgs/cityEmpty.png",
        patterns: [
            {
                name: "Raccoon",
                image: "./imgs/raccoon.png",
                imageOff: "./imgs/raccoonOff.png",
                rarity: 1,
                pattern: [
                    [true , false, true , false],
                    [true , false, false, true ],
                ]
            },
            {
                name: "Pigeon",
                image: "./imgs/pigeon.png",
                imageOff: "./imgs/pigeonOff.png",
                rarity: 1,
                pattern: [
                    [true , false, false],
                    [false, true , false],
                    [false, true , true ],
                ]
            },
            {
                name: "Rat",
                image: "./imgs/rat.png",
                imageOff: "./imgs/ratOff.png",
                rarity: 1,
                pattern: [
                    [true , true , false, false],
                    [false, true , false, true ],
                ]
            },
            {
                name: "Squirrel",
                image: "./imgs/squirrel.png",
                imageOff: "./imgs/squirrelOff.png",
                rarity: 2,
                pattern: [
                    [false, false, true ],
                    [true , false, false],
                    [false, true , false],
                ]
            },
            {
                name: "Opossum",
                image: "./imgs/opossum.png",
                imageOff: "./imgs/opossumOff.png",
                rarity: 2,
                pattern: [
                    [true , false, false],
                    [true , false, true ],
                ]
            },
            {
                name: "Sewer Turtle",
                image: "./imgs/sewerTurtle.png",
                imageOff: "./imgs/sewerTurtleOff.png",
                rarity: 3,
                pattern: [
                    [true , true ],
                ]
            },
            {
                name: "Chipmunk",
                // image: "./imgs/chipmunk.png",
                imageOff: "./imgs/timelessEmpty.png",
                rarity: 4,
                pattern: [
                    [false, true , false, false],
                    [true , false, false, true ],
                ]
            },
        ]
    },
    {
        name: "Mountain",
        baseTexture: "./imgs/mountainBase.png",
        primaryColor: "#748e83",
        backgroundColor: "#6a7d7b",
        contrastColor: "black",
        alt1: "./imgs/mountainAlt1.png",
        alt2: "./imgs/mountainAlt2.png",
        alt3: "./imgs/mountainAlt3.png",
        alt4: "./imgs/mountainAlt4.png",
        emptyTexture: "./imgs/mountainEmpty.png",
        patterns: [
            {
                name: "Goat",
                image: "./imgs/goat.png",
                imageOff: "./imgs/goatOff.png",
                rarity: 1,
                pattern: [
                    [true , false, false],
                    [true , true , true ],
                ]
            },
            {
                name: "Cougar",
                image: "./imgs/cougar.png",
                imageOff: "./imgs/cougarOff.png",
                rarity: 1,
                pattern: [
                    [true , false, false],
                    [false, true , false],
                    [true , false, true ],
                ]
            },
            {
                name: "Elk",
                image: "./imgs/elk.png",
                imageOff: "./imgs/elkOff.png",
                rarity: 1,
                pattern: [
                    [true , false, true ],
                    [false, true , true ],
                ]
            },
            {
                name: "Eagle",
                image: "./imgs/eagle.png",
                imageOff: "./imgs/eagleOff.png",
                rarity: 2,
                pattern: [
                    [true , false],
                    [true , false],
                    [false, true ],
                ]
            },
            {
                name: "Coyote",
                image: "./imgs/coyote.png",
                imageOff: "./imgs/coyoteOff.png",
                rarity: 2,
                pattern: [
                    [true , true , false],
                    [false, false, true ],
                ]
            },
            {
                name: "Aatxe",
                image: "./imgs/aatxe.png",
                imageOff: "./imgs/aatxeOff.png",
                rarity: 3,
                pattern: [
                    [false, false, true ],
                    [true , false, false],
                ]
            },
            {
                name: "Pika",
                // image: "./imgs/pika.png",
                imageOff: "./imgs/timelessEmpty.png",
                rarity: 4,
                pattern: [
                    [true , false, true ],
                    [false, false, true ],
                ]
            },
        ]
    },
    {
        name: "Noctournal",
        primaryColor: "#577172",
        backgroundColor: "#516468",
        contrastColor: "black",
        baseTexture: "./imgs/noctournalBase.png",
        alt1: "./imgs/noctournalAlt1.png",
        alt2: "./imgs/noctournalAlt2.png",
        alt3: "./imgs/noctournalAlt3.png",
        alt4: "./imgs/noctournalAlt4.png",
        emptyTexture: "./imgs/noctournalEmpty.png",
        patterns: [
            {
                name: "Bat",
                image: "./imgs/bat.png",
                imageOff: "./imgs/batOff.png",
                rarity: 1,
                pattern: [
                    [true , false, true ],
                    [false, true , false],
                    [false, true , false],
                ]
            },
            {
                name: "Badger",
                image: "./imgs/badger.png",
                imageOff: "./imgs/badgerOff.png",
                rarity: 1,
                pattern: [
                    [false, false, true ],
                    [true , false, true ],
                    [true , false, false],
                ]
            },
            {
                name: "Kiwi",
                image: "./imgs/kiwi.png",
                imageOff: "./imgs/kiwiOff.png",
                rarity: 1,
                pattern: [
                    [false, true , false],
                    [true , false, true ],
                    [false, false, true ],
                ]
            },
            {
                name: "Kakapo",
                image: "./imgs/kakapo.png",
                imageOff: "./imgs/kakapoOff.png",
                rarity: 2,
                pattern: [
                    [true , true ],
                    [false, false],
                    [false, true ],
                ]
            },
            {
                name: "Flying Squirrel",
                image: "./imgs/flyingSquirrel.png",
                imageOff: "./imgs/flyingSquirrelOff.png",
                rarity: 2,
                pattern: [
                    [false, false, true , false],
                    [true , false, false, true ],
                ]
            },
            {
                name: "Ghost",
                image: "./imgs/ghost.png",
                imageOff: "./imgs/ghostOff.png",
                rarity: 3,
                pattern: [
                    [true , false],
                    [false, true ],
                ]
            },
            {
                name: "Firefly",
                // image: "./imgs/firefly.png",
                imageOff: "./imgs/timelessEmpty.png",
                rarity: 4,
                pattern: [
                    [true , false, false],
                    [true , false, false],
                    [false, false, true ],
                ]
            },
        ]
    },
    {
        name: "Moon",
        primaryColor: "#726a67",
        backgroundColor: "#64605d",
        contrastColor: "black",
        baseTexture: "./imgs/moonBase.png",
        alt1: "./imgs/moonAlt1.png",
        alt2: "./imgs/moonAlt2.png",
        alt3: "./imgs/moonAlt3.png",
        alt4: "./imgs/moonAlt4.png",
        emptyTexture: "./imgs/moonEmpty.png",
        patterns: [
            {
                name: "Moonkey",
                image: "./imgs/moonkey.png",
                imageOff: "./imgs/moonkeyOff.png",
                rarity: 1,
                pattern: [
                    [true , false, false],
                    [true , false, true ],
                    [false, false, true ],
                ]
            },
            {
                name: "Lunar Tick",
                image: "./imgs/lunarTick.png",
                imageOff: "./imgs/lunarTickOff.png",
                rarity: 1,
                pattern: [
                    [false, true , false],
                    [false, false, false],
                    [false, true , false],
                    [true , false, true ],
                ]
            },
            {
                name: "Tribble",
                image: "./imgs/tribble.png",
                imageOff: "./imgs/tribbleOff.png",
                rarity: 1,
                pattern: [
                    [false, true , false],
                    [true , true , true ],
                ]
            },
            {
                name: "Moonicorn",
                image: "./imgs/moonicorn.png",
                imageOff: "./imgs/moonicornOff.png",
                rarity: 2,
                pattern: [
                    [true , false],
                    [true , true ],
                ]
            },
            {
                name: "Luna Moth",
                image: "./imgs/lunaMoth.png",
                imageOff: "./imgs/lunaMothOff.png",
                rarity: 2,
                pattern: [
                    [true , false, true ],
                    [false, false, false],
                    [false, true , false],
                ]
            },
            {
                name: "Jade Rabbit",
                image: "./imgs/jadeRabbit.png",
                imageOff: "./imgs/jadeRabbitOff.png",
                rarity: 3,
                pattern: [
                    [true , false],
                    [false, false],
                    [false, true ],
                ]
            },
            {
                name: "Babmoon",
                // image: "./imgs/babmoon.png",
                imageOff: "./imgs/timelessEmpty.png",
                rarity: 4,
                pattern: [
                    [false, true , false],
                    [false, false, true ],
                    [true , false, false],
                ]
            },
        ]
    },
    {
        name: "Mars",
        // baseTexture: "./imgs/marsBase.png",
        // alt1: "./imgs/marsAlt1.png",
        // alt2: "./imgs/marsAlt2.png",
        // alt3: "./imgs/marsAlt3.png",
        // alt4: "./imgs/marsAlt4.png",
        // emptyTexture: "./imgs/marsEmpty.png",
        patterns: [
            {
                name: "Marsmot",
                // image: "./imgs/marsmot.png",
                imageOff: "./imgs/commonEmpty.png",
                rarity: 1,
                pattern: [
                    [false, true ],
                    [false, true ],
                    [true , true ],
                ]
            },
            {
                name: "Marsmoset",
                // image: "./imgs/marsmoset.png",
                imageOff: "./imgs/commonEmpty.png",
                rarity: 1,
                pattern: [
                    [true , false, true ],
                    [false, false, true ],
                    [false, true , false],
                ]
            },
            {
                name: "Rock",
                // image: "./imgs/rock.png",
                imageOff: "./imgs/commonEmpty.png",
                rarity: 1,
                pattern: [
                    [true , true ],
                    [true , true ],
                ]
            },
            {
                name: "Rover",
                // image: "./imgs/rover.png",
                imageOff: "./imgs/rareEmpty.png",
                rarity: 2,
                pattern: [
                    [false, true , false],
                    [true , false, true ],
                ]
            },
            {
                name: "Martian",
                // image: "./imgs/martian.png",
                imageOff: "./imgs/rareEmpty.png",
                rarity: 2,
                pattern: [
                    [true , false, true ],
                    [false, true , false],
                ]
            },
            {
                name: "Marsmallow",
                // image: "./imgs/marsmallow.png",
                imageOff: "./imgs/mythicalEmpty.png",
                rarity: 3,
                pattern: [
                    [true ],
                    [false],
                    [true ],
                ]
            },
            {
                name: "Marsten",
                // image: "./imgs/marsten.png",
                imageOff: "./imgs/timelessEmpty.png",
                rarity: 4,
                pattern: [
                    [true , false, true , false],
                    [false, false, false, true ],
                ]
            },
        ]
    },
];

export {regions};