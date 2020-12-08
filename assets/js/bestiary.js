let beasts = {
    "array": [{
            "name": "Dragon",
            "img": "assets/img/dovah.png",
            "infos": "Lorem ipsum dolor sit amet consectetur blablablablablablablablablabla",
            "alt": "un dragon utilisant la voix"
        },
        {
            "name": "Dremora",
            "img": "assets/img/TESL-Dremora_Markynaz.jpg",
            "infos": "Lorem ipsum dolor sit amet consectetur blablablablablablablablablabla",
            "alt": "Un groupe de Dremora"
        },
        {
            "name": "Dremora",
            "img": "assets/img/TESL-Dremora_Markynaz.jpg",
            "infos": "Lorem ipsum dolor sit amet consectetur blablablablablablablablablabla",
            "alt": "Un groupe de Dremora"
        },
        {
            "name": "Dremora",
            "img": "assets/img/TESL-Dremora_Markynaz.jpg",
            "infos": "Lorem ipsum dolor sit amet consectetur blablablablablablablablablabla",
            "alt": "Un groupe de Dremora"
        },
        {
            "name": "Dremora",
            "img": "assets/img/TESL-Dremora_Markynaz.jpg",
            "infos": "Lorem ipsum dolor sit amet consectetur blablablablablablablablablabla",
            "alt": "Un groupe de Dremora"
        },
        {
            "name": "Dremora",
            "img": "assets/img/TESL-Dremora_Markynaz.jpg",
            "infos": "Lorem ipsum dolor sit amet consectetur blablablablablablablablablabla",
            "alt": "Un groupe de Dremora"
        },
        {
            "name": "Dremora",
            "img": "assets/img/TESL-Dremora_Markynaz.jpg",
            "infos": "Lorem ipsum dolor sit amet consectetur blablablablablablablablablabla",
            "alt": "Un groupe de Dremora"
        },
    ]
}

function loadBestiary() {
    let beastiary = beasts.array
    for (let i = 0; i < beastiary.length; i++) {
        $('.cards').append('<div class="card">' +
            '<div class="card-image waves-effect waves-block waves-light">' +
            '<img class="activator card-image" id="card-img" src = "' + beastiary[i].img + '" alt="' + beastiary[i].alt + '" >' +
            '</div>' +
            '<div class="card-content">' +
            '<span class = "card-title activator grey-text text-darken-4">' + beastiary[i].name + '</span>' +
            '</div>' +
            ' <div class="card-reveal">' +
            '<span class = "card-title activator grey-text text-darken-4">' + beastiary[i].name + '<i class="material-icons right">close</i></span>' +
            '<p>' + beastiary[i].infos + '</p>' +
            '</div>' +
            '</div>');

    }
}

loadBestiary();