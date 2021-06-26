import {v4 as uuidv4 } from 'uuid'
export default function chillHop (){
    return[
        {
            name:'BLISS (A FELICIDADE)',
            cover:'https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg',
            artist:'MISHA, JUSSI HALME',
            audio : 'https://mp3.chillhop.com/serve.php/?mp3=15088',
            color:['#ea7a74','#fd5070'],
            id:uuidv4(),
            active:true
        },
        {
            name:'Melodiya',
            cover:'https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-1024x1024.jpg',
            artist:'Psalm Trees, FloFilz',
            audio : 'https://mp3.chillhop.com/serve.php/?mp3=16060',
            color:['#ea7a74','#fd5070'],
            id:uuidv4(),
            active:false
        },
        {
            name:'By Chance',
            cover:'https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg',
            artist:'SwuM',
            audio : 'https://mp3.chillhop.com/serve.php/?mp3=15224',
            color:['#924c2b','#233134'],
            id:uuidv4(),
            active:false
        },
        {
            name:'Roses n Flames',
            cover:'https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg',
            artist:'C Y G N',
            audio : 'https://mp3.chillhop.com/serve.php/?mp3=14985',
            color:['#eba9f4','#b0cfe9'],
            id:uuidv4(),
            active:false
        },
        {
            name:'Lax Incense',
            cover:'https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg',
            artist:'Mama Aiuto, Daphné',
            audio : 'https://mp3.chillhop.com/serve.php/?mp3=12125',
            color:['#74632a','#994c22'],
            id:uuidv4(),
            active:false
        },
        {
            name:'Hidden Structure',
            cover:'https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg',
            artist:'Flitz&Suppe, Leavv',
            audio : 'https://mp3.chillhop.com/serve.php/?mp3=9913',
            color:['#438565','#c68c62'],
            id:uuidv4(),
            active:false
        },
    ]
}