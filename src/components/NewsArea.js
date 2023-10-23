import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class NewsArea extends Component {
    articles=[
        {
        "source": {
        "id": null,
        "name": "Hipertextual"
        },
        "author": "Rubén Chicharro",
        "title": "El iPad Pro dará en pocos meses su mayor salto en cinco años",
        "description": "2024 será la fecha en la que Apple renueve drásticamente el iPad Pro. Al menos, así lo sugiere Mark Gurman, de Bloomberg, en su último boletín semanal de noticias, donde destaca que este dispositivo recibirá “una actualización importante desde que se lanzó el…",
        "url": "http://hipertextual.com/2023/08/el-ipad-pro-dara-en-pocos-meses-su-mayor-salto-en-cinco-anos",
        "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2021/06/iPad-Pro-04001-scaled.jpg",
        "publishedAt": "2023-08-28T07:33:42Z",
        "content": "2024 será la fecha en la que Apple renueve drásticamente el iPad Pro. Al menos, así lo sugiere Mark Gurman, de Bloomberg, en su último boletín semanal de noticias, donde destaca que este dispositivo … [+2464 chars]"
        },
        {
        "source": {
        "id": "time",
        "name": "Time"
        },
        "author": "Chien-Hua Wan and Debby Wu / Bloomberg",
        "title": "Foxconn Founder Terry Gou Announces Run for Taiwan Presidency",
        "description": "Gou plans to run as an independent, deepening competition among the opposition contenders for the job.",
        "url": "https://time.com/6308865/foxconn-terry-gou-taiwan-presidential-campaign/",
        "urlToImage": "https://api.time.com/wp-content/uploads/2023/08/terry-gou-taiwan-presidential-campaign.jpg?quality=85",
        "publishedAt": "2023-08-28T04:15:28Z",
        "content": "Foxconn Technology Group founder Terry Gou announced his intention to run in Taiwans presidential election as an independent, deepening competition among the opposition contenders for the job. \r\nGou … [+3035 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Javier Pastor",
        "title": "El iPad Pro se prepara para su mayor renovación desde 2018: la pregunta es si será suficiente",
        "description": "En 2023 el segmento de las tabletas ha caído en picado y ni los iPad se salvan. En el último trimestre las ventas de estos modelos han caído de hecho un preocupante 20%, aunque en Apple parecen estar moviendo ficha. ¿La solución? Renovarse o morir.\n<!-- BREAK…",
        "url": "https://www.xataka.com/tablets/ipad-pro-se-prepara-para-su-mayor-renovacion-2018-pregunta-sera-suficiente",
        "urlToImage": "https://i.blogs.es/1760d5/ipadpro2022/840_560.jpeg",
        "publishedAt": "2023-08-28T07:11:17Z",
        "content": "En 2023 el segmento de las tabletas ha caído en picado y ni los iPad se salvan. En el último trimestre las ventas de estos modelos han caído de hecho un preocupante 20%, aunque en Apple parecen estar… [+3068 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Digital Trends"
        },
        "author": "Trevor Mogg",
        "title": "Steve Jobs’ handwritten Apple-1 ad auctions for big bucks",
        "description": "The draft of an ad penned by Steve Jobs for the Apple-1 computer has just fetched six times more than expected at auction.",
        "url": "https://www.digitaltrends.com/computing/steve-jobs-handwritten-apple-1-ad-auctions-for-big-bucks/",
        "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2017/06/history-of-the-iphone-steve-jobs.jpg?resize=1200%2C630&p=1",
        "publishedAt": "2023-08-28T05:45:22Z",
        "content": "Anything Apple and old usually fetches a decent amount at auction, whether it’s one of the company’s first computers from the 1970s, an original iPhone still in its packaging, or even a pre-Apple job… [+2559 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Digital Trends"
        },
        "author": "Alex Blake",
        "title": "Apple’s M3 MacBook event could be in danger, says report",
        "description": "Apple could make a bitterly disappointing decision regarding its M3 MacBook Air and MacBook Pro this year, despite them coming with its best chip in years.",
        "url": "https://www.digitaltrends.com/computing/apple-m3-macbook-event-october-press-release/",
        "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/06/Apple-CEO-Tim-Cook-looks-at-a-display-of-brand-new-redesigned-MacBook-Air-laptop-during-the-WWDC22.jpg?resize=1200%2C630&p=1",
        "publishedAt": "2023-08-28T10:00:06Z",
        "content": "We’re only about a couple weeks or so out from Apple’s September event, where the company will unveil its iPhone 15 and a slate of brand new Apple Watches. But if you’re holding out for a new MacBook… [+2598 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Github.io"
        },
        "author": null,
        "title": "Learn GNU Awk with hundreds of examples and exercises",
        "description": "Example based guide to mastering GNU awk",
        "url": "https://learnbyexample.github.io/learn_gnuawk/awk-introduction.html",
        "urlToImage": "https://raw.githubusercontent.com/learnbyexample/learn_gnuawk/master/images/gawk_ls.png",
        "publishedAt": "2023-08-28T06:02:36Z",
        "content": "This chapter will give an overview of awk syntax and some examples to show what kind of problems you could solve using awk. These features will be covered in depth in later, but you shouldn't skip th… [+12519 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Andreas Knobloch",
        "title": "Montag: Gefährliche Internet-Schnäppchen, Rat eines Landesdatenschützers",
        "description": "Warnung der Bundesnetzagentur + Monopolisierte Diskursräume + Mega-City in Kalifornien + Klage gegen Google verworfen + London möchte informiert werden",
        "url": "https://www.heise.de/news/Montag-Gefaehrliche-Internet-Schnaeppchen-Rat-eines-Landesdatenschuetzers-9286301.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/9/2/5/2/7/Wochentage-source-sans-1480059fa39ae575.png",
        "publishedAt": "2023-08-28T04:30:00Z",
        "content": "Im Internet angebotene Billig-Elektronikware erfüllt allzu oft nicht die Mindeststandards bezüglich Sicherheit. Mit der steigenden Bedeutung des Online-Handels hat sich das Problem verschärft. Davor … [+3670 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "9to5Mac"
        },
        "author": "Filipe Espósito",
        "title": "Apple CEO Tim Cook is now on Instagram – but not yet on Threads",
        "description": "Last month, Apple Fellow Phil Schiller joined Instagram and Threads amid all the controversy surrounding Twitter (now X). And although other Apple executives are also on Instagram, there was one important name missing there: Tim Cook. But now it seems that Ap…",
        "url": "https://9to5mac.com/2023/08/27/apple-tim-cook-instagram/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/08/Tim-Cook-Instagram.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2023-08-28T00:41:21Z",
        "content": "Last month, Apple Fellow Phil Schiller joined Instagram and Threads amid all the controversy surrounding Twitter (now X). And although other Apple executives are also on Instagram, there was one impo… [+2338 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "HUIZHONG WU",
        "title": "Foxconn billionaire Terry Gou says he will seek Taiwan's presidency as independent candidate",
        "description": "Terry Gou, the billionaire founder of the electronics giant Foxconn, declared Monday that he will run as an independent candidate for president in Taiwan's...",
        "url": "https://news.yahoo.com/foxconn-billionaire-terry-gou-says-040125817.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/qPvhZ04rmzFQ1Fi1e3i6tQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/7e86622648895d7f71a09f83c12039ce",
        "publishedAt": "2023-08-28T04:01:25Z",
        "content": "TAIPEI, Taiwan (AP) Terry Gou, the billionaire founder of the electronics giant Foxconn, declared Monday that he will run as an independent candidate for president in Taiwan's 2024 election, ending m… [+1397 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gizmodo.jp"
        },
        "author": "小暮ひさのり",
        "title": "iPhone 15 Pro用ケーブル情報がリーク。USB4仕様でガチで速そう",
        "description": "oPhone 15 Pro用のケーブルは、USB4規格で最大20Gbpsの超高速仕様とのリーク情報。",
        "url": "https://www.gizmodo.jp/2023/08/iphone-15-pro-high-speed-cable.html",
        "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/08/28/230826cak00.jpeg?w=1280&h=630&f=jpg",
        "publishedAt": "2023-08-28T03:00:00Z",
        "content": "iPhone 15\r\nUSB-CiPhone 15USB-CiPhone 15 Pro\r\nLooks Apple has actually tested a Thunderbolt cable for the iPhone 15 Pro and it will probably be released exclusively for the Pro models.Here is some det… [+320 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Journal du geek"
        },
        "author": "Sebastian Danila",
        "title": "Vous ne rêvez pas, le MacBook Air M2 est encore moins cher que le M1 ",
        "description": "La rentrée Amazon débute en trombe avec une offre de folie sur le MacBook Air M2 qui voit une nouvelle fois son prix s'effondrer. Si vous cherchez un ordinateur portable puissant, compact, offrant une autonomie de feu, on ne peux que vous recommander ce modèl…",
        "url": "https://www.journaldugeek.com/bon-plan/avec-cette-offre-epoustouflante-le-macbook-air-m2-devient-moins-cher-que-le-m1/",
        "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/07/macbook-air-m2.png",
        "publishedAt": "2023-08-28T09:15:10Z",
        "content": "La rentrée Amazon débute en trombe avec une offre de folie sur le MacBook Air M2 qui voit une nouvelle fois son prix s'effondrer. Si vous cherchez un ordinateur portable puissant, compact, offrant un… [+5146 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "Fran Bouzas",
        "title": "El iPhone 15 no tendrá funda oficial de piel, pero su reemplazo es impresionante, según un rumor",
        "description": "Si todo sale según lo previsto, mañana a eso de las 18:00 hora española Apple lanzará sus invitaciones para el que será su próximo gran evento. De momento, todos los rumores apuntan al 12 de septiembre como la fecha escogida para la presentación del Apple Wat…",
        "url": "https://www.applesfera.com/rumores/iphone-15-no-tendra-funda-oficial-piel-su-reemplazo-impresionante-rumor",
        "urlToImage": "https://i.blogs.es/bbfc71/f4jmliiwyaaf4u2/840_560.jpeg",
        "publishedAt": "2023-08-28T08:00:49Z",
        "content": "Si todo sale según lo previsto, mañana a eso de las 18:00 hora española Apple lanzará sus invitaciones para el que será su próximo gran evento. De momento, todos los rumores apuntan al 12 de septiemb… [+1643 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "Miguel López",
        "title": "Qué dice la carta de Steve Jobs escrita a mano que acaba de ser subastada por más de 162.000 euros",
        "description": "Cuanto más pasa el tiempo, más valor alcanzan lo que ya podríamos llamar Reliquias de Apple. Hemos visto unidades precintadas del iPhone original vendidas por el precio de un piso, unidades del Apple TV 4K interpretadas como \"descodificadores\" en Madrid o inc…",
        "url": "https://www.applesfera.com/curiosidades/que-dice-carta-steve-jobs-escrita-a-mano-que-acaba-ser-subastada-162-000-euros",
        "urlToImage": "https://i.blogs.es/f18fa4/steve-jobs-carta/840_560.jpeg",
        "publishedAt": "2023-08-28T09:00:47Z",
        "content": "Cuanto más pasa el tiempo, más valor alcanzan lo que ya podríamos llamar Reliquias de Apple. Hemos visto unidades precintadas del iPhone original vendidas por el precio de un piso, unidades del Apple… [+1916 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "Alberto García",
        "title": "El ventilador de techo WiFi con más de 700 valoraciones en Amazon se puede utilizar con iPhone y es ideal para verano e invierno",
        "description": "Durante el verano, tener un ventilador en casa es casi imprescindible para evitar las olas de calor, pero ante tantos modelos muchas veces cuesta decidir cuál es el que queremos o cuál el que necesitamos. Entre los ventiladores de techo inteligentes, el Cecot…",
        "url": "https://www.applesfera.com/seleccion/ventilador-techo-wifi-700-valoraciones-amazon-se-puede-utilizar-iphone-ideal-para-verano-e-invierno",
        "urlToImage": "https://i.blogs.es/53deaa/cecotec-energysilence-aero-5600-black-aqua-connected/840_560.jpeg",
        "publishedAt": "2023-08-28T09:30:47Z",
        "content": "Durante el verano, tener un ventilador en casa es casi imprescindible para evitar las olas de calor, pero ante tantos modelos muchas veces cuesta decidir cuál es el que queremos o cuál el que necesit… [+7979 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Phandroid - News for Android"
        },
        "author": "Tyler Lee",
        "title": "Satellite messaging could be coming to Google Messages",
        "description": "Evidence has emerged suggesting that Google Messages could soon support satellite messaging for emergencies.\nThe post Satellite messaging could be coming to Google Messages appeared first on Phandroid.",
        "url": "https://phandroid.com/2023/08/28/satellite-messaging-could-be-coming-to-google-messages/",
        "urlToImage": "https://phandroid.com/wp-content/uploads/2022/02/Google-Messages-iMessage-Reactions-Old.jpg",
        "publishedAt": "2023-08-28T09:25:12Z",
        "content": "One of the newer features were seeing in some smartphones these days comes in the form of satellite messaging. This allows users to still send out a text message in the event they find themselves wit… [+1590 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Presse-citron"
        },
        "author": "Setra",
        "title": "Grosses nouveautés en vue pour les iPad Pro 2024 (OLED, M3, etc.)",
        "description": "Alors que les ventes de tablettes déclinent, Apple aurait un plan ambitieux pour l’iPad Pro.",
        "url": "https://www.presse-citron.net/grosses-nouveautes-en-vue-pour-les-ipad-pro-2024-oled-m3-etc/",
        "urlToImage": "https://www.presse-citron.net/app/uploads/2021/05/DSC01444_DxO_PC.jpg",
        "publishedAt": "2023-08-28T08:00:50Z",
        "content": "<ul><li>Apple sortirait les nouveaux iPad Pro en 2024 et ceux-ci devraient profiter daméliorations importantes</li><li>Ces nouvelles tablettes pourraient être dotées décrans OLED, de la puce M3, et d… [+3640 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "BGR"
        },
        "author": "Chris Smith",
        "title": "I’m a longtime iPhone user, and I’m jealous of this rumored Pixel 8 notification feature",
        "description": "I’ve been an iPhone user for years, and I’m unlikely to switch to Android anytime soon. But every now and again, I see new features …\nThe post I’m a longtime iPhone user, and I’m jealous of this rumored Pixel 8 notification feature appeared first on BGR.",
        "url": "https://bgr.com/tech/im-a-longtime-iphone-user-and-im-jealous-of-this-rumored-pixel-8-notification-feature/",
        "urlToImage": "https://bgr.com/wp-content/uploads/2022/10/google-pixel-7-pro-1.jpg?quality=82&strip=all",
        "publishedAt": "2023-08-28T01:24:00Z",
        "content": "I’ve been an iPhone user for years, and I’m unlikely to switch to Android anytime soon. But every now and again, I see new features on Google’s mobile operating system or rumors detailing future Pixe… [+3630 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xatakamovil.com"
        },
        "author": "Alejandro Alcolea",
        "title": "Los iPad Pro M3 tendrán el cambio que esperamos desde hace años en sus pantallas, según Gurman",
        "description": "Dentro de unos días, Apple presentará tanto los iPhone 15 como los Apple Watch Series 9. Se espera que el 12 de septiembre se celebre la keynote otoñal en la que los de Cupertino presentarán sus novedades en hardware tras una WWDC en la que conocimos todas la…",
        "url": "https://www.xatakamovil.com/apple/ipad-pro-m3-tendran-cambio-que-esperamos-hace-anos-sus-pantallas-gurman",
        "urlToImage": "https://i.blogs.es/8c36a8/1366_2000-15-/840_560.jpeg",
        "publishedAt": "2023-08-28T07:30:44Z",
        "content": "Dentro de unos días, Apple presentará tanto los iPhone 15 como los Apple Watch Series 9. Se espera que el 12 de septiembre se celebre la keynote otoñal en la que los de Cupertino presentarán sus nove… [+3350 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Caschys Blog"
        },
        "author": "caschy",
        "title": "Ugreen Nexode 300W kommt zur IFA, NAS-Geräte sind ebenfalls geplant",
        "description": "Ugreen hat sich mittlerweile bei den Netzteilen gemausert, das Unternehmen ist offensichtlich recht erfolgreich und möchte zur IFA in Berlin etwas Neues zeigen. Ein ganz großes Geheimnis wird es vermutlich zwar nicht mehr sein, denn das kommende Ugreen Nexode…",
        "url": "https://stadt-bremerhaven.de/ugreen-nexode-300w-kommt-zur-ifa-nas-geraete-sind-ebenfalls-geplant/",
        "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/08/ugreen-300-watt-2.jpg",
        "publishedAt": "2023-08-28T09:30:20Z",
        "content": "Ugreen hat sich mittlerweile bei den Netzteilen gemausert, das Unternehmen ist offensichtlich recht erfolgreich und möchte zur IFA in Berlin etwas Neues zeigen. Ein ganz großes Geheimnis wird es verm… [+2473 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Frandroid"
        },
        "author": "Titouan Gourlin",
        "title": "iPad Pro (2024) : Apple pousserait deux nouveautés fortes pour contrer les ventes qui dégringolent",
        "description": "Apple lancerait deux nouveaux iPad Pro en 2024 en 11 et 13 pouces. Trois nouveautés sont à venir en tout : la prévisible puce M3, mais aussi l'arrivée d'un écran Oled et d'un nouveau Magic Keyboard.",
        "url": "https://www.frandroid.com/marques/apple/1777365_ipad-pro-2024-apple-pousserait-deux-nouveautes-fortes-pour-contrer-les-ventes-qui-degringolent",
        "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/02/test-ipad-pro-11-m2-3-scaled.jpg",
        "publishedAt": "2023-08-28T07:35:27Z",
        "content": "Apple lancerait deux nouveaux iPad Pro en 2024 en 11 et 13 pouces. Trois nouveautés sont à venir en tout : la prévisible puce M3, mais aussi l'arrivée d'un écran Oled et d'un nouveau Magic Keyboard.\r… [+1936 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Frandroid"
        },
        "author": "Ulrich Rozier",
        "title": "Vers des iPhone 15 Pro et Ultra plus légers : l’acier céderait la place au titane",
        "description": "Alors que la prochaine keynote d'Apple approche, des murmures sur un changement radical de matériau pour l'iPhone 15 Pro et Ultra circulent.",
        "url": "https://www.frandroid.com/marques/apple/1777341_vers-des-iphone-15-pro-et-ultra-plus-legers-lacier-cederait-la-place-au-titane",
        "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/08/apple-iphone-14-pro-max-scaled.jpg",
        "publishedAt": "2023-08-28T06:03:37Z",
        "content": "Alors que la prochaine keynote d'Apple approche, des murmures sur un changement radical de matériau pour l'iPhone 15 Pro et Ultra circulent. \r\nApple iPhone 14 Pro Max // Source : Unsplash\r\nAlors que … [+2336 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Frandroid"
        },
        "author": "Marie Lizak",
        "title": "Nouveau Hyundai Kona Electric : sa hausse de prix est-elle vraiment justifiée ?",
        "description": "Affiché à partir de 40 850 euros, le nouveau Hyundai Kona Electric est plus cher que certains de ses rivaux. Mais comment le constructeur coréen explique t-il cette inflation ? Et surtout, est-elle vraiment justifiée ? On fait le point.",
        "url": "https://www.frandroid.com/marques/hyundai/1777445_nouveau-hyundai-kona-electric-sa-hausse-de-prix-est-elle-vraiment-justifiee",
        "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/03/hyundai-kona-ev-2023-5.jpg",
        "publishedAt": "2023-08-28T09:08:21Z",
        "content": "Affiché à partir de 40 850 euros, le nouveau Hyundai Kona Electric est plus cher que certains de ses rivaux. Mais comment le constructeur coréen explique t-il cette inflation ? Et surtout, est-elle v… [+4136 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Wwwhatsnew.com"
        },
        "author": "Nelson Herrera",
        "title": "Dispositivos para encontrar cosas fácilmente: las 3 mejores opciones para saber dónde están tus llaves, cartera y demás objetos",
        "description": "Tener problemas para encontrar tus llaves, carteras u otros objetos puede ser frustrante y llevar mucho tiempo. Afortunadamente, existen dispositivos diseñados específicamente para ayudarte a localizar tus pertenencias de manera rápida y sencilla. En este art…",
        "url": "https://wwwhatsnew.com/2023/08/28/dispositivos-para-encontrar-cosas-facilmente-las-3-mejores-opciones-para-saber-donde-estan-tus-llaves-cartera-y-demas-objetos/",
        "urlToImage": "https://wwwhatsnew.com/wp-content/uploads/2023/08/mujer-buscando-cosas.jpg",
        "publishedAt": "2023-08-28T04:00:26Z",
        "content": "Tener problemas para encontrar tus llaves, carteras u otros objetos puede ser frustrante y llevar mucho tiempo. Afortunadamente, existen dispositivos diseñados específicamente para ayudarte a localiz… [+3537 chars]"
        },
        {
        "source": {
        "id": "lenta",
        "name": "Lenta"
        },
        "author": "Максим Габриелян",
        "title": "Новым кандидатом в президенты Тайваня станет основатель «города iPhone»",
        "description": "Один из самых богатых жителей Тайваня, основатель компании Foxconn Терри Гоу объявил о желании участвовать в президентских выборах страны 2024 года. Терри Гоу известен как основатель компании Foxconn, выполняющей заказы по сборке смартфонов таких технологичес…",
        "url": "https://lenta.ru/news/2023/08/28/taiwan_foxconn/",
        "urlToImage": "https://icdn.lenta.ru/images/2023/08/28/09/20230828092140854/share_01fccc7781ac474c46914a7ed0d513f0.jpg",
        "publishedAt": "2023-08-28T06:38:00Z",
        "content": ", Foxconn , 2024 . Bloomberg.\r\n« , , , . , . ( . «.»)».\r\n Foxconn, , Apple Inc. Sony Group Corp. , « iPhone», . , .\r\n - -, 2024 , . 30 ."
        },
        {
        "source": {
        "id": null,
        "name": "Srad.jp"
        },
        "author": "nagazou",
        "title": "紛失防止タグの「Tile」に対してストーカー被害者が集団訴訟",
        "description": "2人のストーキング被害者が、紛失防止タグ「タイル（Tile）」の製造元であるTile社と親会社であるLife360に対して集団訴訟を起こした。被害者らは、Tileの紛失タグがセキュリティ機能を十分に実装しておらず、かつ人を追跡できることを明示的にしており、誤った使い方がされている傾向を知りながら、9年間安全機能も実装することもなかったとしている（ギズモード・ジャパン）。 \n\n原告の2人は、元恋人によるストーキング被害を経験、いずれもTileトラッカーを使用して追跡されたと主張している。彼女らの元恋人は、Tileト…",
        "url": "https://srad.jp/story/23/08/27/1258214/",
        "urlToImage": "https://srad.jp/static/topics/business_64.png",
        "publishedAt": "2023-08-28T08:04:00Z",
        "content": "2TileTileLife360Tile92TileTile\r\nTile10TileScan and SecureTileLife360\r\nAnonymous Coward \r\nAppleAirTags"
        },
        {
        "source": {
        "id": null,
        "name": "Ifanr.com"
        },
        "author": "张明悦",
        "title": "早报｜iPad Pro 明年将迎来重大更新 / X 推出招聘平台 / 刘庆峰称华为 GPU 已可对标英伟达 A100",
        "description": "·乔布斯亲笔 Apple-1 宣传手稿成拍价超 17.5 万美元\n·刘庆峰：华为 GPU 已可对标英伟达 A100\n·微软 Windows 11 文件资源管理器支持 RAR 等格式#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
        "url": "https://www.ifanr.com/1560074",
        "urlToImage": "https://s3.ifanr.com/images/ep/cover-images/chao_xian_dai_cover.jpg",
        "publishedAt": "2023-08-28T00:25:23Z",
        "content": "Supreme x Nike SB Dunk HighRammellzee\r\nIPO 4 \r\n2023 8 28 \r\nA 8 2008 2 \r\n2008 9 19 A 9.45%A \r\n IPO \r\n 100% 80% 2023 9 8 \r\nLinkedIn\r\nX Beta X Hiring LinkedIn\r\n X \r\n LinkedIn \r\n X X Hiring \r\n Apple-1 17… [+1088 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ifanr.com"
        },
        "author": "张大雄",
        "title": "Kick Starter 新众筹项目，iPhone 新摄影装备",
        "description": "iPhone 用户自己的「专业摄影套装」#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
        "url": "https://www.ifanr.com/1560130",
        "urlToImage": "https://s3.ifanr.com/wp-content/uploads/2023/08/SPARK-2.jpg",
        "publishedAt": "2023-08-28T08:31:49Z",
        "content": "ISO \r\n 13 Ultra Moto Z \r\niPhone \r\nSPARK KICK STARTER iPhone SPRAK Magsafe iPhone Magsafe iPhone \r\n SPARK \r\nSPARK 9 1 \r\nSPARK SPARK \r\n SPARK \r\nSPARK \r\nSPARK Apple Watch iPhone ProRAW RAW JPG TIFF SPAR… [+42 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "01net.com"
        },
        "author": "Hadrien Augusto",
        "title": "Vol de vélo : le AirTag est-il l’accessoire ultime pour retrouver son VAE ?",
        "description": "En parallèle aux traceurs GPS, la balise Bluetooth d’Apple a de quoi plaire aux cyclistes qui souhaitent compléter leur système antivol d’un moyen de localisation et d’identification en cas de vol. Alors faut-il s’équiper d’un AirTag à 39 euros plutôt qu’un t…",
        "url": "https://www.01net.com/actualites/airtag-solution-contre-le-vol-velo-guide-tracker-gps.html",
        "urlToImage": "https://www.01net.com/app/uploads/2023/08/airtag-apple-balise-traceur-velo.jpg",
        "publishedAt": "2023-08-28T06:23:09Z",
        "content": "En parallèle aux traceurs GPS, la balise Bluetooth dApple a de quoi plaire aux cyclistes qui souhaitent compléter leur système antivol dun moyen de localisation et didentification en cas de vol. Alor… [+15690 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Chien-Hua Wan and Adrian Kennedy",
        "title": "Terry Gou Says Apple, Tesla Links Mean China Can’t Pressure His Business",
        "description": "(Bloomberg) -- Tech billionaire Terry Gou denied Beijing could pressure him through his extensive operations in the country, which include much of Apple Inc....",
        "url": "https://finance.yahoo.com/news/terry-gou-says-apple-tesla-053707512.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/ozfDI52AJzw.6Xguoxm1rQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_technology_68/619ea9dc00469019d5f55b7ec20f31f6",
        "publishedAt": "2023-08-28T05:37:07Z",
        "content": "(Bloomberg) -- Tech billionaire Terry Gou denied Beijing could pressure him through his extensive operations in the country, which include much of Apple Inc.s supply chain in comments that came as he… [+2405 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Puromarketing.com"
        },
        "author": "Redacción",
        "title": "El vínculo indisoluble entre Innovación y Marketing en las Empresas",
        "description": "PuroMarketing - Tanto la innovación como el marketing son pilares esenciales para el éxito de las empresas, pero su importancia puede variar según la situación y la estrategia de la empresa. La innovación representa la capacidad de una empresa para crear y ad…",
        "url": "https://www.puromarketing.com/44/212498/vinculo-indisoluble-entre-innovacion-marketing-empresas",
        "urlToImage": "https://www.puromarketing.com/uploads/img/contents/2023/k8SeT5VJPuEgwULWl9pq/k8SeT5VJPuEgwULWl9pq_post_imagen_prev.jpg",
        "publishedAt": "2023-08-28T08:47:00Z",
        "content": "Tanto la innovación como el marketing son pilares esenciales para el éxito de las empresas, pero su importancia puede variar según la situación y la\r\n estrategia de la empresa. La innovación represen… [+5259 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Androidworld.it"
        },
        "author": "Alessandro Nodari",
        "title": "I messaggi SOS via satellite di Google potrebbero avere un vantaggio rispetto a quelli di Apple",
        "description": "Nelle ultime settimane sono emersi diversi rumor riguardanti la possibilità che Google stia lavorando a una soluzione per inviare messaggi...\r\nL'articolo I messaggi SOS via satellite di Google potrebbero avere un vantaggio rispetto a quelli di Apple sembra es…",
        "url": "https://www.androidworld.it/news/messaggi-sos-satellite-google-garmin.html",
        "urlToImage": "https://www.androidworld.it/images/2023/08/28/sos-emergenza-google_1200x675.jpg",
        "publishedAt": "2023-08-28T08:14:00Z",
        "content": "Nelle ultime settimane sono emersi diversi rumor riguardanti la possibilità che Google stia lavorando a una soluzione per inviare messaggi di emergenza via satellite, sulla falsa riga di SOS emergenz… [+2090 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Creative Bloq"
        },
        "author": "Daniel Piper",
        "title": "iPhone 15 design could be bad news for Bond villains",
        "description": "Love gold? You could be out of luck.",
        "url": "https://www.creativebloq.com/news/iphone-15-gold",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/93F7GMLd6UWFWhFtvLcVyi-1200-80.jpg",
        "publishedAt": "2023-08-28T06:00:35Z",
        "content": "Just when it seems like we know everything there is to know about the iPhone 15 (although there's every chance Apple could surprise us in September), new last-minute details are still emerging. And t… [+1472 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Creative Bloq"
        },
        "author": "Chrissie Zullo, Ian Dean",
        "title": "How to use Procreate to paint a classic fairy tale scene",
        "description": "Learn how to use Procreate for iPad Pro; Chrissie Zullo demonstrates how to create an iconic moment from a fairy tale.",
        "url": "https://www.creativebloq.com/how-to/use-procreate-to-paint-a-fairy-tale-scene",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/GXK5QbMTQzYRVxkaFdLe4Y-1200-80.jpg",
        "publishedAt": "2023-08-28T07:00:09Z",
        "content": "Learning how to use Procreate will open up all kinds of opportunities. Procreate has quickly become my go-to digital painting app. Thanks to the portability of the iPad Pro, its appeal to me was to b… [+8642 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Creative Bloq"
        },
        "author": "joe.foley@futurenet.com (Joseph Foley)",
        "title": "Fans are tearing apart Amazon's 'AI art' for Fallout",
        "description": "The more you look, the weirder it gets.",
        "url": "https://www.creativebloq.com/news/amazon-fallout-ai-art",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/dHbvcLs9nwmD67xMuRnnU7-1200-80.jpg",
        "publishedAt": "2023-08-28T05:00:33Z",
        "content": "AI art remains hugely controversial, so you might think a company with Amazon's resources would think twice about using it.... Or at least try to use it well. But fans are appalled that Prime Video's… [+5620 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "La Vanguardia"
        },
        "author": "Fran Besora",
        "title": "El iPad Pro se prepara para uno de los mayores cambios de su historia",
        "description": "Apple estaría preparando uno de los mayores cambios jamás vistos en los iPad Pro para 2024. A través de la última entrega de su newsletter Power On, el analista Mark Gurman de Bloomberg, afirmó que los iPad Pro del año que viene tendrán pantallas ligeramente …",
        "url": "https://www.lavanguardia.com/andro4all/apple/novedades-ipad-pro-2024",
        "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/08/ipad-pro-2024.jpg?width=1200",
        "publishedAt": "2023-08-28T06:59:21Z",
        "content": "Pantallas OLED, procesador M3 y un nuevo y renovado teclado: los iPad Pro se preparan para una gran renovación.\r\nApple estaría preparando uno de los mayores cambios jamás vistos en los iPad Pro para … [+1718 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Impress.co.jp"
        },
        "author": null,
        "title": "「Apple PayのICOCA」で1000ポイントもらえる、新規ユーザー向け",
        "description": "JR西日本とギックスは、「Apple PayのICOCAで1000ポイントがもらえる！　キャンペーン」を開始した。期間は10月15日まで。先着10万人限定で、定員に達し次第終了する。",
        "url": "https://k-tai.watch.impress.co.jp/docs/news/1526740.html",
        "urlToImage": "https://k-tai.watch.impress.co.jp/img/ktw/list/1526/740/01.jpg",
        "publishedAt": "2023-08-28T04:06:08Z",
        "content": "JRApple PayICOCA1000101510 \r\n Apple PayICOCAiPhoneApple WatchWESTERGO \r\n Apple PayICOCA2000 \r\n 7WESTER100011 \r\n Apple PayICOCA2Apple PayICOCA"
        },
        {
        "source": {
        "id": null,
        "name": "Clubic"
        },
        "author": "/auteur/407247-merouan-goumiri.html",
        "title": "Les écrans du prochain iPad Pro pourraient subir une double et bienvenue révolution",
        "description": "Comme annoncé depuis un certain temps, l'iPad Pro devrait subir de considérables évolutions à partir de l'année prochaine.",
        "url": "https://www.clubic.com/pro/entreprises/apple/actualite-482518-les-ecrans-du-prochain-ipad-pro-pourraient-subir-une-double-et-bienvenue-revolution.html",
        "urlToImage": "https://pic.clubic.com/v1/images/2126899/raw",
        "publishedAt": "2023-08-28T09:45:00Z",
        "content": "Comme annoncé depuis un certain temps, l'iPad Pro devrait subir de considérables évolutions à partir de l'année prochaine. \r\nAu programme : de l'OLED, un écran légèrement plus grand, et\r\nL'OLED, seul… [+3417 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Nextpit.de"
        },
        "author": "Jade Bryan",
        "title": "Apple überarbeitet die iPad-Pro-Tastatur mit MacBook ähnlicher Bedienung",
        "description": "Apple soll Berichten zufolge im Jahr 2024 zusammen mit dem iPad Pro ein neues Magic Keyboard vorstellen, das ein laptopähnliches Erlebnis bietet.",
        "url": "https://www.nextpit.de/apple-ipad-pro-tastatur-mit-macbook-aehnlicher-bedienung",
        "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/Apple_iPad_Pro_2022/NextPit_Apple_iPad_Pro_2022_Keyboard.jpg",
        "publishedAt": "2023-08-28T07:00:00Z",
        "content": "© nextpit\r\nApple dürfte bereits emsig dabei sein, das iPad Pro der nächsten Generation zu überarbeiten. Es wird spekuliert, dass es mit größeren OLED-Bildschirmen ausgestattet sein wird und im nächst… [+2666 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Nextpit.de"
        },
        "author": "Matthias \"MaTT\" Zellmer",
        "title": "Meta Quest 3 im Unboxing lässt Ladestation vermissen",
        "description": "Die Meta Quest 3 soll planmäßig auf der Meta Connect 2023 offiziell präsentiert werden. Nun zeigt sich ein Unboxing-Video von unbekannter Quelle.",
        "url": "https://www.nextpit.de/meta-quest-3-im-unboxing-laesst-ladestation-vermissen",
        "urlToImage": "https://fscl01.fonpit.de/userfiles/1799474/file/Meta_Quest_3-MR.jpeg",
        "publishedAt": "2023-08-28T10:00:01Z",
        "content": "© Meta\r\nLängst hat Meta-Chef Mark Zuckerberg persönlich die ganz großen Geheimnisse um die nächste Generation an Standalone-VR-Brillen mit der Meta Quest 3 angeteasert. Offiziell präsentiert wird das… [+3066 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tomshw.it"
        },
        "author": "Lucia Lasorsa",
        "title": "Dove vedere Cagliari – Inter in TV e streaming",
        "description": "Ecco dove e come vedere la partita di stasera fra Cagliari e Inter.",
        "url": "https://www.tomshw.it/altro/dove-vedere-cagliari-inter-in-tv-e-streaming/",
        "urlToImage": "https://www.tomshw.it/images/images/2023/08/cagliari-inter-287007.jpg",
        "publishedAt": "2023-08-28T07:45:32Z",
        "content": "Streaming e Web Service Dove vedere Cagliari – Inter in TV e streaming\r\nTom's Hardware vive grazie al suo pubblico. Quando compri qualcosa dai nostri link, potremmo guadagnare una commissione. Scopri… [+3619 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Appbank.net"
        },
        "author": "岩佐",
        "title": "「iPhone 15」の〝全カラー〟デザイン予測、新色３つがヤバい！",
        "description": "まもなく発表される見込みの「iPhone 15」シリーズで予想されている新色・カラーバリエーションについて、Apple専門メディア「MacRumors」がデザイン予測つきでまとめています。 *Category:テクノロジ […]",
        "url": "https://www.appbank.net/2023/08/28/technology/2544465.php",
        "urlToImage": "https://www.appbank.net/wp-content/uploads/2023/08/2023-0828-iPhone-15-thumb2-1.jpeg",
        "publishedAt": "2023-08-28T02:53:00Z",
        "content": "iPhone 15AppleMacRumors\r\n*Category:\r\n Technology *SourceMacRumors ,@KosutamiSan\r\niPhone 153\r\niPhone56iPhone 15iPhone 15 Plus\r\niPhone 15USB-CSNS\r\niPhone 15iPhone 15\r\nApple2018iPhone XR\r\nMacRumors2024i… [+107 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "WELT",
        "title": "Wirtschaftsweise beklagt hohe Energiepreise in Deutschland",
        "description": "Erneut hat die Wirtschaftsweise Veronika Grimm die ökonomische Lage der Menschen in Deutschland beklagt. Die zu hohen Energiekosten verhinderten wirtschaftliches Wachstum. Grimm rechnet mit hohen Einbußen.",
        "url": "https://www.welt.de/wirtschaft/article247143862/Veronika-Grimm-Wirtschaftsweise-beklagt-hohe-Energiepreise-in-Deutschland.html",
        "urlToImage": "https://img.welt.de/img/wirtschaft/mobile247143876/8331357347-ci16x9-w1200/FDP-Veranstaltung-Energiepolitischer-Zukunftsdialog.jpg",
        "publishedAt": "2023-08-28T06:17:09Z",
        "content": "Die Wirtschaftsweise Veronika Grimm beklagt die nach ihrer Darstellung hohen Energiepreise in Deutschland. Wirtschaftliches Wachstum gibt es erst wieder, wenn von den Investoren künftig gute Standort… [+1289 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "Philip Cassier",
        "title": "Martin Luther King – Spontan entstand sein Traum von einer gerechteren Welt",
        "description": "Am 28. August 1963 hielt Martin Luther King eine der berühmtesten Reden der Geschichte. Die Worte „I have a dream“ haben sich ins kollektive Gedächtnis eingeprägt – dabei hatte er eigentlich gar nicht vorgehabt, sie zu sagen.",
        "url": "https://www.welt.de/geschichte/article247102354/Martin-Luther-King-Spontan-entstand-sein-Traum-von-einer-gerechteren-Welt.html",
        "urlToImage": "https://img.welt.de/img/geschichte/mobile247102344/8791354417-ci16x9-w1200/Martin-Luther-King.jpg",
        "publishedAt": "2023-08-28T05:35:43Z",
        "content": "Die Bürgerbewegung war gespalten, wie es so oft der Fall ist: Radikale und Liberale standen sich unvereinbar gegenüber. In dieser Situation verfasste George Plimpton Anfang der 1960er-Jahre ein Portr… [+9314 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Techbang.com"
        },
        "author": "xin",
        "title": "熱度急速竄升！日本女團 XG 將登 Apple Music「Up Next」封面之星",
        "description": "熱度急速竄升！日本女團 XG 將登 Apple Music「Up Next」封面之星Apple Music 今天宣佈，擁有超高人氣的 Hip-Hop 與 \r\nR&B 日本女團 XG 將成為「Up Next」最新封面之星，「Up Next」為 Apple Music 每月特別企劃，由 Apple Music 編輯精心推薦並獨家呈現即將嶄露頭角的潛力藝人，\r\n本月份由熱度急速竄升的日本女團 XG 領銜登場。 \n\n\n與眾不同的女團 XG，你聽過了嗎？\n\nXG 由七位少女組成，包括 Juria、Jurin、Chis\r\na…",
        "url": "https://www.techbang.com/posts/109040-japanese-girl-group-xg-will-be-featured-on-the-cover-of-apple",
        "urlToImage": "https://cdn2.techbang.com/system/excerpt_images/109040/original/052b51c4587c6902547f45b4d33acf2e.jpg?1692783331",
        "publishedAt": "2023-08-28T07:00:00Z",
        "content": "Apple Music  Hip-Hop  \r\nR&amp;B  XG Up NextUp Next Apple Music  Apple Music \r\n XG  \r\n XG\r\nXG  JuriaJurinChis\r\naHinataCoconaMaya  Harvey\r\n K-Pop  XG  ( \r\nXtraordinary Girls )  2022  3  \r\nrap Tippy Toe… [+293 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Techbang.com"
        },
        "author": "KKJ",
        "title": "專利顯示未來的Apple Watch可以讓錶盤隨著環境變化而自動配色",
        "description": "專利顯示未來的Apple Watch可以實現自動配色\n蘋果公司可能永遠不會允許我們自己打造自己的 Apple Watch 錶盤，但它正在研究如何讓 Apple Watch 可以感知搭配的錶帶或任何物體，並讓它因應來改變顏色。\r\n\n八年來，使用者，或者至少是第三方公司一直希望能夠建立自己的 Apple Watch 錶盤，而不僅僅侷限於蘋果公司推出的任何產品。這種情況近十年來從未發生過，而且也不會很快發生。\r\n\n\n \n\n但除此之外，蘋果似乎特別熱衷於在設計方面為使用者提供選擇。除了與徹底重新設計有關的專利和專利申請，…",
        "url": "https://www.techbang.com/posts/109030-the-patent-shows-that-the-future-apple-watch-can-achieve",
        "urlToImage": "https://cdn2.techbang.com/system/excerpt_images/109030/original/16f7345d649984c17da46e81244827d9.jpg?1692946467",
        "publishedAt": "2023-08-28T06:00:00Z",
        "content": "Apple Watch  Apple Watch \r\n Apple Watch \r\nApple Watch \r\nWatch \r\n 14 \r\n-P-Nicolas P. Bonnier Vision Pro"
        },
        {
        "source": {
        "id": null,
        "name": "Techbang.com"
        },
        "author": "Shaoyun",
        "title": "Apple HomePod 2使用評測：5個升級亮點、音效體驗不打折，價格9300元",
        "description": "Apple於今年初再度發表全新一代HomePod產品，日前，台灣地區也正式開賣，究竟新舊兩代HomePod差異在哪？值得入手嗎？以下將針對新款HomePod的功能特色全面解析。2018年 Apple 發表了首款 HomePod 智慧音箱，在當年可說是十分具有前瞻性的音響產品，相較於過去無線音箱或藍牙音箱侷限的音樂播放用途之外，HomePod 多了家庭智慧中樞的概念，讓人可以透過「Hey, Siri」語音的方式實現多種便利的應用情境，不過由於當年國人對智慧家庭的接受度不高，HomeKit 應用設備也較不齊全，使得 …",
        "url": "https://www.techbang.com/posts/105897-blockbuster-back-a-smarter-and-more-practical-apple-smart",
        "urlToImage": "https://cdn2.techbang.com/system/excerpt_images/105897/original/00f76826d9692d06640aaaf6d6d7b125.jpg?1682922216",
        "publishedAt": "2023-08-28T01:30:00Z",
        "content": "2018 Apple HomePod HomePod Hey, SiriHomeKit HomePod Apple Apple HomePod HomePod HomePod \r\nHomePod\r\nApple 12023 HomePod HomePod 212018 HomePod 2021 Apple HomePod mini HomePod HomePod 1 HomePod \r\nHomeP… [+2714 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Iplaysoft.com"
        },
        "author": "X-Force",
        "title": "Cubox 文章收藏一站式工具：收集剪藏+搜索+阅读+整理",
        "description": "信息爆炸时代，我们每天都会在不同 APP 里读到大量信息，虽然收藏了文章，但每当需要找某篇文章时，会发现它们都不在一处，无法统一搜索，而且还有可能已被删除了，这可怎么办呢？\n多平台碎片收藏与阅读管理工具「Cubox」就可以帮你解决这个问题。这个软件集成了自动抓取内容、阅读批注、回…… 「 前往查看原文.... 」异次元正版数字商城  |  异次元首页  |  微信公众号  |  iPcFun  |  关注微博  |  软件精选",
        "url": "https://www.iplaysoft.com/news/5977",
        "urlToImage": "https://img.iplaysoft.com/wp-content/uploads/2023/news/5977/cubox.jpg",
        "publishedAt": "2023-08-28T08:12:22Z",
        "content": "APP \r\nCubox\r\nCubox\r\nCubox Pro 8 8 78.4 \r\nCubox \r\nCubox\r\nCubox\r\nCubox \r\n404 \r\nCubox \r\nCubox\r\nCubox \r\nPDF / Markdown / HTML / TXT \r\nCubox\r\nOCR \r\nApple \r\n Cubox \r\nCubox App\r\n13\r\nCubox API \r\nCubox Pro \r\n… [+40 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Inside.com.tw"
        },
        "author": "Mashdigi",
        "title": "為 Wi-Fi 7 作準備？台灣政府正式批准開放 Wi-Fi 6E 技術規格",
        "description": "依照台灣數位發展部稍早公布消息，部長唐鳳8月25日公告開放Wi-Fi 6E無線網路標準所需使用的6GHz頻段。",
        "url": "https://www.inside.com.tw/article/32626-Wi-Fi-6E",
        "urlToImage": "https://bucket-img.tnlmedia.com/cabinet/2023/08/7c80e68c-1ed3-4ce1-a97d-ca80347e0fc3.png?w=1200&h=630&fit=crop&auto=compress",
        "publishedAt": "2023-08-28T01:12:00Z",
        "content": "104 38.2 17.1 2.7 \r\nGoogle \r\nGoogle \r\nGoogle Maps Platform\r\n Google Maps Google Maps 3D \r\nGoogle Workspace\r\n Google Workspace Duet AI Google Workspace AI \r\nGoogle Cloud\r\n Google Cloud AI \r\n 9/22 \r\n G… [+80 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Inside.com.tw"
        },
        "author": "經理人",
        "title": "說到 Google 就會想到關鍵字，那你的公司呢？一張表，找出企業的核心競爭力",
        "description": "企業核心指的是是你和競爭對手最重要的差異，核心需要具備哪 3 個基本元素？",
        "url": "https://www.inside.com.tw/article/32634-company-competitiveness",
        "urlToImage": "https://bucket-img.tnlmedia.com/cabinet/2023/08/b98d3d67-509c-4af1-81f5-467709c6ba5b.jpg?w=1200&h=630&fit=crop&auto=compress",
        "publishedAt": "2023-08-28T07:03:00Z",
        "content": "104 38.2 17.1 2.7 \r\nGoogle \r\nGoogle \r\nGoogle Maps Platform\r\n Google Maps Google Maps 3D \r\nGoogle Workspace\r\n Google Workspace Duet AI Google Workspace AI \r\nGoogle Cloud\r\n Google Cloud AI \r\n 9/22 \r\n G… [+80 chars]"
        },
        {
        "source": {
        "id": "techradar",
        "name": "TechRadar"
        },
        "author": "David Nield",
        "title": "OLED iPad Pros tipped for 2024 with M3 chips and a new Magic Keyboard",
        "description": "According to Bloomberg's Mark Gurman, next year's iPad Pros will offer some significant upgrades.",
        "url": "https://www.techradar.com/tablets/ipad-pro/oled-ipad-pros-tipped-for-2024-with-m3-chips-and-a-new-magic-keyboard",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/MkD4AXbbzFnxR228UggZzH-1200-80.jpg",
        "publishedAt": "2023-08-28T08:30:20Z",
        "content": "It would seem the iPad Pro models are going to get quite the revamp in 2024, with new screens and new chipsets – a revamp which is probably overdue for these premium tablets, which have had rather mi… [+1712 chars]"
        },
        {
        "source": {
        "id": "techradar",
        "name": "TechRadar"
        },
        "author": "James Rogerson",
        "title": "iPhone 15 battery predictions: rumored battery sizes and charging speeds",
        "description": "We have predictions for the battery capacities, longevity, and charging speeds of every iPhone 15 model.",
        "url": "https://www.techradar.com/phones/iphone/iphone-15-battery",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/twuTdBCWMGAxZ9PGsfnLjL-1200-80.jpg",
        "publishedAt": "2023-08-28T09:00:00Z",
        "content": "We’re now very close to the launch of the iPhone 15, with that phone expected to land alongside the iPhone 15 Plus, the iPhone 15 Pro, and the iPhone 15 Pro Max, in mid-September, as iPhone 15 releas… [+6361 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Numerama"
        },
        "author": "Nicolas Lellouche",
        "title": "Bientôt des écrans OLED sur iPad : où en sont les autres tablettes ?",
        "description": "Selon Bloomberg, Apple s'apprêterait à dévoiler des iPad Pro avec un écran OLED dans le courant de l'année 2024. Une grande première pour une tablette de la marque, cantonnée au LCD depuis son lancement en 2010.",
        "url": "https://www.numerama.com/tech/1484316-bientot-des-ecrans-oled-sur-ipad-ou-en-sont-les-autres-tablettes.html",
        "urlToImage": "https://www.numerama.com/wp-content/uploads/2022/10/221024-ipad-0009.jpg",
        "publishedAt": "2023-08-28T08:56:23Z",
        "content": "Selon Bloomberg, Apple sapprêterait à dévoiler des iPad Pro avec un écran OLED dans le courant de lannée 2024. Une grande première pour une tablette de la marque, cantonnée au LCD depuis son lancemen… [+4336 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Shanshan Kao, Forbes Staff, \n Shanshan Kao, Forbes Staff\n https://www.forbes.com/sites/shanshankao/",
        "title": "Billionaire Terry Gou Makes Bid For Taiwan Presidency, Promising Peace And Prosperity",
        "description": "Terry Gou has finally ended months of speculation by confirming on Monday that he will run as an independent candidate in Taiwan’s next presidential election.",
        "url": "https://www.forbes.com/sites/shanshankao/2023/08/28/billionaire-terry-gou-makes-bid-for-taiwan-presidency-promising-peace-and-prosperity/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64ec333448d6bfe96f3b0612/0x0.jpg?format=jpg&width=1200",
        "publishedAt": "2023-08-28T08:56:16Z",
        "content": "Foxconn Founder Terry Gou salutes during a press conference in Taipei on August 28, 2023.\r\nSam Yeh/AFP via Getty Images\r\nTerry Gou has finally ended months of speculation by confirming on Monday that… [+2715 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Jeff Raikes, Contributor, \n Jeff Raikes, Contributor\n https://www.forbes.com/sites/jeffraikes/",
        "title": "Companies Should Champion Diversity Because It’s Good For Business",
        "description": "How do we move forward after the Court’s terrible decision? As it happens, Chief Justice Robert opened the door for businesses to move in the right direction.",
        "url": "https://www.forbes.com/sites/jeffraikes/2023/08/28/companies-should-champion-diversity-because-its-good-for-business/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64ec278a10d4d2f6c00f2e85/0x0.jpg?format=jpg&width=1200",
        "publishedAt": "2023-08-28T10:00:55Z",
        "content": "Multicultural Crowd of People. \r\ngetty\r\nThe Supreme Courts blinkered decision to end race-conscious admissions programs at Americas colleges and universities will have long-lasting, deleterious effec… [+5381 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Bernard Marr, Contributor, \n Bernard Marr, Contributor\n https://www.forbes.com/sites/bernardmarr/",
        "title": "6 Roadblocks Stopping Web3 And The Metaverse Becoming A Reality",
        "description": "Explore the six critical challenges — from legal grey areas and privacy concerns to energy costs and skills shortages — that stand in the way of the metaverse and Web3",
        "url": "https://www.forbes.com/sites/bernardmarr/2023/08/28/6-roadblocks-stopping-web3-and-the-metaverse-becoming-a-reality/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64ec42d89f71d4f3e23b0612/0x0.jpg?format=jpg&width=1200",
        "publishedAt": "2023-08-28T06:47:56Z",
        "content": "With the emergence of the metaverse and web3 technologies, its clear that the next evolution of the internet is already underway. This is what I mean when I talk about the future internet the next it… [+6032 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Shu-Ching Jean Chen, Contributor, \n Shu-Ching Jean Chen, Contributor\n https://www.forbes.com/sites/shuchingjeanchen/",
        "title": "Meet Taiwan’s Little-Known But Elite Semiconductor Makers",
        "description": "Few of the 1,000-plus companies in Taiwan's semiconductor galaxy are visible outside the industry. Fewer still achieve global fame.",
        "url": "https://www.forbes.com/sites/shuchingjeanchen/2023/08/28/meet-taiwans-little-known-but-elite-semiconductor-makers/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64ec57e5cfc33ef5e14af6bb/0x0.png?format=png&crop=1589,894,x0,y0,safe&width=1200",
        "publishedAt": "2023-08-28T09:10:15Z",
        "content": "Brothers Jason (left) and Richard Chang of Advanced Semiconductor Engineering (ASE), the world's largest provider of independent semiconductor assembling and test manufacturing services.\r\nCOURTESY OF… [+7883 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hdblog.it"
        },
        "author": "HDblog.it",
        "title": "Speciale Apple di fine estate: super sconti su Amazon per iPad Pro e MacBook!",
        "description": "Amazon sconta tantissimi prodotti a marchio Apple in questo finale d'estate 2023.",
        "url": "https://www.hdblog.it/apple/offerte/n572949/speciale-apple-sconti-fine-estate-amazon/",
        "urlToImage": "https://hd2.tudocdn.net/882821?w=1920",
        "publishedAt": "2023-08-28T09:28:00Z",
        "content": "É un vero e proprio speciale Applequello appena andato in scena su Amazon e da MediaWorld. Sono infatti davvero numerosissimi i prodotti dell'azienda di Cupertino appena andati in sconto con offerte … [+251 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hdblog.it"
        },
        "author": "HDblog.it",
        "title": "Falso account Instagram di Tim Cook trae in inganno anche i dirigenti Apple",
        "description": "Nuovo profilo Instagram attribuito a Tim Cook si rivela falso nonostante i follower di alto livello dell'azienda",
        "url": "https://www.hdblog.it/curiosita/articoli/n572938/falso-account-instagram-tim-cook-apple/",
        "urlToImage": "https://hd2.tudocdn.net/1112710?w=1920",
        "publishedAt": "2023-08-28T08:55:00Z",
        "content": "Nel mondo dei social network non tutto è come sembra ed è molto facile farsi trarre in inganno da account falsi, ma il caso di cui vogliamo parlarvi è piuttosto emblematico.\r\nSappiamo che su Instagra… [+1894 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ComputerBase"
        },
        "author": "Nicolas La Rocco",
        "title": "Apple-Tablets: Neues iPad Pro mit OLED in 11 und 13 Zoll und M3 erwartet",
        "description": "Dem iPad Pro stehen nächstes Jahr größere Veränderungen bevor: Wie bei Apples Smartphones sollen auch die Tablets den Wechsel zu OLED-Bildschirmen vollziehen. Nachdem schon für diesen Herbst die ersten Macs mit dem neuen M3 erwartet werden, soll der 3-nm-Chip…",
        "url": "https://www.computerbase.de/2023-08/apple-tablets-neues-ipad-pro-mit-oled-in-11-und-13-zoll-und-m3-erwartet/",
        "urlToImage": "https://pics.computerbase.de/1/0/9/0/4/2-8222050be52acb60/article-1280x720.229b8bb2.jpg",
        "publishedAt": "2023-08-28T08:26:00Z",
        "content": "Dem iPad Pro stehen nächstes Jahr größere Veränderungen bevor: Wie bei Apples Smartphones sollen auch die Tablets den Wechsel zu OLED-Bildschirmen vollziehen. Nachdem schon für diesen Herbst die erst… [+1852 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Antyweb.pl"
        },
        "author": "Kamil Świtalski",
        "title": "Wielkie zmiany w iPad Pro. Będzie też nowe akcesorium",
        "description": "Po latach odgrzewania tego samego z nowymi bajerami, Apple w następnej generacji nareszcie ma zaserwować odświeżone iPady Pro. Co się zmieni?\n \n The post Wielkie zmiany w iPad Pro. Będzie też nowe akcesorium appeared first on AntyWeb.",
        "url": "https://antyweb.pl/ipad-pro-m3",
        "urlToImage": "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2022/12/1nrp3sdzo9/ipad_pro_m2_2022_2.jpg",
        "publishedAt": "2023-08-28T07:00:07Z",
        "content": "iPad Pro to linia produktów, która od 2018 roku nie doczekaa si specjalnych zmian. Owszem, kilka lat temu wikszy wariant otrzyma ekran mini-LED, regularnie dostaj one nowe ukady i pomniejsze zmiany (… [+2643 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Antyweb.pl"
        },
        "author": "Błażej Wojciechowski",
        "title": "Nowe Macbooki późną jesienią. Kiedy zadebiutują laptopy z M3?",
        "description": "Kiedy na rynek trafią Macbooki Pro z układami M3?\n \n The post Nowe Macbooki późną jesienią. Kiedy zadebiutują laptopy z M3? appeared first on AntyWeb.",
        "url": "https://antyweb.pl/nowe-macbooki-pozna-jesienia-kiedy-zadebiutuja-laptopy-z-m3",
        "urlToImage": "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2023/04/zb2exmompj/macbook_air.jpg",
        "publishedAt": "2023-08-28T08:05:15Z",
        "content": "Apple po tym jak wystartowao z wasn lini procesorów, postanowio dostosowa te harmonogram odwieania swoich produktów. I podobnie jak smartfony, nowe komputery firma serwuje nam ostatnio co rok. Jako e… [+1417 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Iphoneitalia.com"
        },
        "author": "Giuseppe Migliorino",
        "title": "I batteri infestano i cinturini degli Apple Watch, come eliminarli?",
        "description": "Un nuovo studio ci dice che i batteri proliferano sui cinturini degli Apple Watch.\nLink all'articolo originale: I batteri infestano i cinturini degli Apple Watch, come eliminarli?",
        "url": "https://www.iphoneitalia.com/812788/come-pulire-cinturino-apple-watch",
        "urlToImage": "https://static.iphoneitalia.com/wp-content/uploads/2023/08/batteri-apple-watch.jpg",
        "publishedAt": "2023-08-28T06:34:33Z",
        "content": "La notizia non è di quelle sorprendenti, ma un nuovo studio conferma che il tuo cinturino per Apple Watch è un terreno fertile per i batteri.\r\nUna nuova ricerca pubblicata sulla rivista Advances in I… [+4801 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Olhardigital.com.br"
        },
        "author": "Kelvin Leão Nunes da Costa",
        "title": "O2 Produtora: 8 melhores filmes e séries para assistir",
        "description": "A O2 é uma importante produtora de filmes independentes do Brasil. Conheça alguns de seus melhores trabalhos!\nO post O2 Produtora: 8 melhores filmes e séries para assistir apareceu primeiro em Olhar Digital.",
        "url": "https://olhardigital.com.br/2023/08/27/cinema-e-streaming/o2-produtora-8-melhores-filmes-e-series-para-assistir/",
        "urlToImage": "https://img.olhardigital.com.br/wp-content/uploads/2023/08/maxresdefault-1.jpg",
        "publishedAt": "2023-08-28T00:20:00Z",
        "content": "A O2 Filmes Ã© uma produtora audiovisual brasileira de filmes, sÃ©ries e peÃ§as publicitÃ¡rias. Fundada por Fernando Meirelles, Paulo Morelli e Andrea Barata Ribeiro, a produtora jÃ¡ realizou filmes … [+5626 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "3dnews.ru"
        },
        "author": null,
        "title": "Производитель печатных плат Jabil продал своё китайское подразделение компании BYD за $2,2 млрд",
        "description": "Автопроизводители всё чаще интересуются активами контрактных производителей электроники, и если в Индии Tata Motors присматривается к предприятию Wistron по выпуску iPhone, то китайский автогигант BYD договорился о покупке у Jabil китайских предприятий по вып…",
        "url": "https://3dnews.ru/1092133/proizvoditel-pechatnih-plat-jabil-prodal-svoyo-kitayskoe-podrazdelenie-kompanii-byd-za-22-mlrd",
        "urlToImage": "https://3dnews.ru/assets/external/illustrations/2023/08/28/1092133/byd_01.jpg",
        "publishedAt": "2023-08-28T04:58:00Z",
        "content": ", Tata Motors Wistron iPhone, BYD Jabil . $2,2 , Jabil BYD Electronics.\r\n: BYD Electronics\r\nJabil , Jabil , , $2,2 , , , , , . , BYD Electronics .\r\nBYD Electronics , BYD . BYD Electronics Apple, Jabi… [+72 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "N-tv.de"
        },
        "author": "n-tv NACHRICHTEN",
        "title": "\"Herrschaft der Unternehmer\": Foxconn-Gründer will Taiwan regieren",
        "description": "Der Foxconn-Gründer Terry Gou will seit einiger Zeit taiwanischer Präsident werden. 2019 scheitert er als Kandidat der größten taiwanischen Oppositionspartei. Ein zweites Mal darf er für sie nicht antreten. Entsprechend will er sich als unabhängiger Kandidat …",
        "url": "https://www.n-tv.de/politik/Foxconn-Gruender-will-Taiwan-regieren-article24354720.html",
        "urlToImage": "https://bilder1.n-tv.de/img/incoming/crop24354732/4131323650-cImg_16_9-w1200/423114562.jpg",
        "publishedAt": "2023-08-28T06:08:08Z",
        "content": "Der Foxconn-Gründer Terry Gou will seit einiger Zeit taiwanischer Präsident werden. 2019 scheitert er als Kandidat der größten taiwanischen Oppositionspartei. Ein zweites Mal darf er für sie nicht an… [+1940 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "no-reply@tinhte.vn (Tuanhtran), Tuanhtran",
        "title": "YouTube Music tung ra tính năng live lyrics cho Android và iOS",
        "description": "YouTube Music hiện tại đã được phổ biến rộng rãi đến người tiêu dùng, cùng với đó họ cũng nâng cấp một số tính năng mới trong đó có tính năng Live Lyrics giống như những nền tảng nghe nhạc trực tuyến khác.\n \nhttps://tinhte.",
        "url": "https://tinhte.vn/thread/youtube-music-tung-ra-tinh-nang-live-lyrics-cho-android-va-ios.3709058/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/08/8098199_Cover-youtube-music-tung-ra-tinh-nang-live-lyrics-cho-android-va-ios-tinhte-tuanhtran.jpg",
        "publishedAt": "2023-08-28T02:53:25Z",
        "content": "Mình thy tính nng này s giúp YouTube s tip cn c vi nhiu ngi dùng hn, c bit là nhng ngi dùng t Spotify và Apple Music. Mình thy khó nht là thay i mindset ca ngi tiêu dùng v YouTube Music, nh mình trc … [+492 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "no-reply@tinhte.vn (ndminhduc), ndminhduc",
        "title": "Samsung Galaxy S24 Ultra sẽ có màn hình phẳng và thiết kế rất vuông?",
        "description": "Anh leaker Ice Universe vừa nói trên Twitter rằng Samsung Galaxy S24 Ultra sắp tới của Samsung sẽ thay đổi mạnh về mặt thiết kế với màn hình phẳng hoàn toàn, kích thước 6.8 inch, tỷ lệ 19.5:9 thay vì 19.",
        "url": "https://tinhte.vn/thread/samsung-galaxy-s24-ultra-se-co-man-hinh-phang-va-thiet-ke-rat-vuong.3709913/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/08/8100582_cover-Galaxy-S24-Ultra-vs-iPhone-15-Ultra.jpg",
        "publishedAt": "2023-08-28T01:07:30Z",
        "content": "Anh leaker Ice Universe va nói trên Twitter rng Samsung GalaxyS24 Ultra sp ti ca Samsung s thay i mnh v mt thit k vi màn hình phng hoàn toàn, kích thc 6.8 inch, t l 19.5:9 thay vì 19.3:9 nh S23Ultra … [+1306 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ComingSoon.net"
        },
        "author": "Vansh Mehra",
        "title": "Invasion Season 2 Episode 3 Release Date & Time",
        "description": "The Invasion Season 2 Episode 3 release date and time have been revealed. The next episode will air on Apple TV Plus. In the previous episode, Trevante struggles to return to his daily life at home in Miami. Meanwhile, Jamila gets a weird calling to look for …",
        "url": "https://www.comingsoon.net/guides/news/1327348-invasion-season-2-episode-3-release-date-time",
        "urlToImage": "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/08/Invasion-Season-2-Episode-2-release-date-and-time.jpg?resize=1200,630",
        "publishedAt": "2023-08-28T08:59:40Z",
        "content": "The Invasion Season 2 Episode 3 release date and time have been revealed. The next episode will air on Apple TV Plus. In the previous episode, Trevante struggles to return to his daily life at home i… [+1598 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ComingSoon.net"
        },
        "author": "Vansh Mehra",
        "title": "Physical Season 3 Episode 7 Release Date & Time",
        "description": "The Physical Season 3 Episode 7 release date & time is out already. The upcoming episode will air on Apple TV Plus, and we are still a few weeks away from the series finale. In the previous episode, Sheila doesn’t escape from her imagined nemesis while Danny …",
        "url": "https://www.comingsoon.net/guides/news/1327304-physical-season-3-episode-7-release-date-time",
        "urlToImage": "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/08/Physical-Season-3.jpg?resize=1200,630",
        "publishedAt": "2023-08-28T08:36:13Z",
        "content": "The Physical Season 3 Episode 7 release date &amp; time is out already. The upcoming episode will air on Apple TV Plus, and we are still a few weeks away from the series finale. In the previous episo… [+1747 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Netafull.net"
        },
        "author": "コグレマサト",
        "title": "【iPhone整備済製品】iPhone 12 mini・iPhone 12 Pro・iPhone 12 Pro Max・iPhone 13 Pro Max【2023年8月28日】",
        "description": "Apple公式サイトの「iPhone整備済製品」の情報です。 Appleの整備済み品は問題があって返品された商品などを整備し、テスト後認定されたものです。1年間の特別保証が付いています。 最新の在庫情報は「Apple整備...\n投稿 【iPhone整備済製品】iPhone 12 mini・iPhone 12 Pro・iPhone 12 Pro Max・iPhone 13 Pro Max【2023年8月28日】 は ネタフル に最初に表示されました。",
        "url": "https://netafull.net/apple-refurbished/0135936.html",
        "urlToImage": "https://netafull.net/wp-content/uploads/2023/03/iphone-refurbished-001-28.jpg",
        "publishedAt": "2023-08-28T02:30:00Z",
        "content": "AppleiPhone\r\nApple1\r\nApple\r\nAmazonApple\r\niPhone 12 mini 64GB – SIM[]\r\n65,800\r\niPhone 12 mini 128GB – SIM[]\r\n72,800\r\niPhone 12 mini 128GB – SIM[]\r\n72,800\r\niPhone 12 mini 128GB – SIM[]\r\n72,800\r\niPhone … [+313 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Sspai.com"
        },
        "author": "Gerley",
        "title": "融合「修饰键」思路，让快捷指令更容易管理",
        "description": "快捷指令自推出解决了很多我的个人需求，不过作为低代码编程工具，它仍然有很多不足。然而某一天晚上我突然想到了「修饰键」。查看全文",
        "url": "https://sspai.com/post/82166",
        "urlToImage": "https://cdn.sspai.com/2023/08/23/b2e10a3a751d96c0f48c693747c6f97c.png",
        "publishedAt": "2023-08-28T03:36:23Z",
        "content": "Matrix  \r\nMatrix  Matrix \r\nGUI \r\n 95% \r\nmacOS Option Apple Option \r\nmacOS\r\niOS \r\n iOS \r\n<ol><li>.txt1</li><li>.txt1</li><li>.txt0</li></ol> 2 \r\n \r\n 1 0\r\n \r\n App\r\n Actions\r\n<ul><li>Is Device Orientati… [+851 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Courrier International"
        },
        "author": null,
        "title": "“Les Sentinelles”. Ibrahim Diallo, au Niger : “Rien ne peut nous empêcher de publier nos informations”",
        "description": "Société, environnement, genre, économie… Après “Six pieds sur Terre”, “Courrier international” et l’Agence française de développement présentent leur nouveau podcast, “Les Sentinelles”, des voix d’ailleurs pour un monde en commun. Dans cette première série co…",
        "url": "https://www.courrierinternational.com/article/podcast-les-sentinelles-ibrahim-diallo-au-niger-rien-ne-peut-nous-empecher-de-publier-nos-informations",
        "urlToImage": "https://focus.courrierinternational.com/2023/08/03/0/0/2560/1706/1200/630/60/0/4789158_1691073765625-sentinelles-site.png",
        "publishedAt": "2023-08-28T03:00:26Z",
        "content": "Société, environnement, genre, économie Après Six pieds sur Terre, Courrier international et lAgence française de développement (AFD) présentent leur nouveau podcast, Les Sentinelles, des voix daille… [+2560 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "no-reply@tinhte.vn (Hải Đăng (boygia)), Hải Đăng (boygia)",
        "title": "Ngày này năm xưa: Apple đổi logo cầu vồng thành phiên bản hiện đại hơn",
        "description": "Vào khoảng ngày này cách đây hơn 20 năm, Apple đổi chiếc logo màu sắc sặc sỡ thành logo một màu như hiện tại.\n \nTheo trang cultofmac.com, vào ngày 27/8/1999, logo của Apple được đổi thành màu đơn như hiện nay, thay cho phiên bản đa màu sắc trước đó.",
        "url": "https://tinhte.vn/thread/ngay-nay-nam-xua-apple-doi-logo-cau-vong-thanh-phien-ban-hien-dai-hon.3710033/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/08/8100897_apple-logo-tinhte.jpg",
        "publishedAt": "2023-08-28T06:01:55Z",
        "content": "Mt dòng ch chy quanh tm nh này: B óc luôn có mt i dng bao la các dòng suy ngh, mt mình - câu th ca nhà th ngi Anh William Wordsworth. Ron Wayne, nhà sáng lp th 3 ca Apple ã thit k ra logo này (ông bá… [+1111 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Spidersweb.pl"
        },
        "author": "Albert Żurek",
        "title": "Apple odchudził patelnię. Tytanowy iPhone 15 Pro oznacza same zalety",
        "description": "Powszechnie mówi się, że iPhone 15 Pro mają zyskać ramkę wykonaną z tytanu. Porzucenie dotychczasowego materiału może prowadzić nie tylko do zwiększenia trwałości urządzania, ale powinno zapewnić także niższą wagę.",
        "url": "https://spidersweb.pl/2023/08/iphone-15-pro-tytan-odchudzony-lzejszy.html",
        "urlToImage": "https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2023/02/iphone-14-pro-max-koszt-czesci.jpg",
        "publishedAt": "2023-08-28T07:53:06Z",
        "content": "Do sieci trafiy te nowe doniesienia uytkownika serwisu X pod pseudonimem Revegnus, który zasugerowa, e pitnastki bd odchudzone. Bardzo odchudzone, poniewa mniejszy iPhone 15 Pro miaby way 191 g, a iP… [+285 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Daily Beast"
        },
        "author": "David Rothkopf",
        "title": "Here Are 11 Wild Things That Could Happen in the 2024 Election",
        "description": "Photo Illustration by Thomas Levinson/The Daily Beast/Getty/Reuters\r\nBe skeptical of predictions about the outcome of the 2024 elections. I say this, because as someone who quite often is asked to make such predictions on TV or in columns like this one, I lon…",
        "url": "https://www.thedailybeast.com/11-wild-things-that-could-happen-in-the-2024-election",
        "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1692926154/230824-rothkopf-predictions2-tease_raqawv",
        "publishedAt": "2023-08-28T01:01:45Z",
        "content": "Be skeptical of predictions about the outcome of the 2024 elections. I say this, because as someone who quite often is asked to make such predictions on TV or in columns like this one, I long ago cam… [+11390 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Elespanol.com"
        },
        "author": "C�sar Rebolledo",
        "title": "FREE FIRE | Códigos de hoy lunes 28 de agosto de 2023 - Recompensas gratis",
        "description": "Estos son todos los códigos gratis de Garena Free Fire que podrás canjear hoy, lunes 28 de agosto de 2023. Consigue recompensas como skins, diamantes y mucho más.<!--aa--->El éxito para móviles Android e iOS, Garena Free Fire, ha recibido nuevos códigos diari…",
        "url": "https://vandal.elespanol.com/noticia/1350764869/free-fire-codigos-de-hoy-lunes-28-de-agosto-de-2023-recompensas-gratis/",
        "urlToImage": "https://media.vandal.net/ivandal/12/63/1200x630/8/8-2023/20238288575995_1.jpg",
        "publishedAt": "2023-08-28T07:01:00Z",
        "content": "El xito para mviles Android e iOS, Garena Free Fire, ha recibido nuevos cdigos diarios para hoy lunes 28 de agosto de 2023. Los jugadores pueden canjear estos cdigos para recibir recompensas variadas… [+2144 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Taisy0.com"
        },
        "author": "taisy0",
        "title": "JR西日本、｢Apple PayのICOCAで1,000ポイントがもらえる！キャンペーン｣を開始",
        "description": "JR西日本が、本日より「Apple PayのICOCAで1,000ポイントがもらえる！キャンペーン」をスタートしました。 本キャンペーンは、本日以降にiPhoneまたはApple WatchでApple PayのICOC ...",
        "url": "https://taisy0.com/2023/08/28/175907.html",
        "urlToImage": "https://taisy0.com/wp-content/uploads/2023/08/ICOCAcam202308.jpg",
        "publishedAt": "2023-08-28T01:06:38Z",
        "content": "JRApple PayICOCA1,000\r\niPhoneApple WatchApple PayICOCAICOCAWESTERGO\r\nApple PayICOCAICOCA2,000Apple PayICOCA1,000\r\nWESTERWESTERICOCA\r\n2023828101510\r\n JR"
        },
        {
        "source": {
        "id": null,
        "name": "Taisy0.com"
        },
        "author": "taisy0",
        "title": "Appleの整備済み商品情報 2023/8/28",
        "description": "本日、Appleのお得な整備済み製品が多数追加されていますので、良かったらどうぞ。 整備済み商品とは初期不良などがあった商品をAppleが修理し、販売している商品で1年間の保証付きなので新品と変わらず、安く購入でき、現在 ...",
        "url": "https://taisy0.com/2023/08/28/175930.html",
        "urlToImage": "https://taisy0.com/wp-content/uploads/2022/03/applestoreicon2022.jpg",
        "publishedAt": "2023-08-28T07:23:55Z",
        "content": "Apple\r\nApple1()\r\nMacBook Pro 13 M1 8CPU8GPU219,780MacBook Pro 13 M2 8CPU10GPU152,800MacBook Pro 13 M2 8CPU10GPU176,800MacBook Pro 13 M2 8CPU10GPU200,000MacBook Pro 13 M2 8CPU10GPU224,000MacBook Pro 1… [+3810 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Taisy0.com"
        },
        "author": "taisy0",
        "title": "Instagramにティム・クックCEOの偽アカウントが登場（削除済み）",
        "description": "9To5Macによると、Appleのティム・クックCEOのInstagramの偽アカウントが登場した模様。 ティム・クックCEOのInstagramの偽アカウントはこちら（@tim.d.cook）で、2023年7月に作成 ...",
        "url": "https://taisy0.com/2023/08/28/175922.html",
        "urlToImage": "https://taisy0.com/wp-content/uploads/2023/08/th_Tim-Cook-Instagram.jpg",
        "publishedAt": "2023-08-28T02:49:31Z",
        "content": "via 9To5Mac\r\n9To5MacAppleCEOInstagram\r\nCEOInstagram@tim.d.cook20237820\r\nAppleLisa JacksonAlan Dye1\r\nApple\r\nCEOSNSXWeibo"
        },
        {
        "source": {
        "id": null,
        "name": "Macitynet.it"
        },
        "author": "Fabrizio Frattini",
        "title": "iPhone 15 venderà meno di iPhone 14, ma potrebbe essere comunque un successo",
        "description": "Apple ha fatto segnare un calo di vendite di iPhone nel 2022 e secondo alcuni analisti iPhone 15 non riuscirà ad invertire il trend. Ma c'è chi pensa il contrario e che il 2023 potrebbe essere il primo anno in cui la Mela diventerà il leader mondiale nel camp…",
        "url": "https://www.macitynet.it/?p=1245651",
        "urlToImage": "https://www.macitynet.it/wp-content/uploads/2022/09/Apple-phone-14-watch-8-lancio-negozi-8.jpg",
        "publishedAt": "2023-08-28T05:59:54Z",
        "content": "Uno dei fili conduttori dei giorni che precedono il lancio di iPhone 15 e di iPhone 15 Pro sono le previsioni sulla loro accoglienza da parte del pubblico. In particolare è stato l’osservatore del me… [+2894 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Macitynet.it"
        },
        "author": "Daniele Piccinelli",
        "title": "Samsung mostra meglio spazio libero e file di sistema in Android 14",
        "description": "I file di sistema nei Galaxy S23 non occupano 60GB: in Android 14 la visualizzazione migliora per mettere a tacere il problema che non esiste\n- su macitynet.it Samsung mostra meglio spazio libero e file di sistema in Android 14",
        "url": "https://www.macitynet.it/samsung-mostra-meglio-spazio-libero-e-file-di-sistema-in-android-14/",
        "urlToImage": "https://www.macitynet.it/wp-content/uploads/2023/01/samsung-alzera-prezzi-galaxy-s23-3.jpg",
        "publishedAt": "2023-08-28T08:59:58Z",
        "content": "Con il lancio dei Galaxy S23 alcuni utenti lamentavano erroneamente che i file di sistema arrivavano a occupare fino a quasi 60GB: con la nuova interfaccia One UI 6.0 per Android 14 in arrivo Samsung… [+1958 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hwupgrade.it"
        },
        "author": null,
        "title": "iPhone 15 e 15 Pro: ecco tutte le colorazioni con cui potrebbe arrivare sul mercato",
        "description": "Apple svelerà a settembre la nuova serie di iPhone 15 e lo farà introducendo, almeno secondo le indiscrezioni, molte novità sia lato estetico che hardware. In questi ultimi giorni si sono susseguiti i rumors sulle nuove colorazioni che per la versione Pro sem…",
        "url": "https://www.hwupgrade.it/news/apple/iphone-15-e-15-pro-ecco-tutte-le-colorazioni-con-cui-potrebbe-arrivare-sul-mercato_119517.html",
        "urlToImage": "https://www.hwupgrade.it/i/n/iPhone15NewColor_720.jpg",
        "publishedAt": "2023-08-28T07:31:02Z",
        "content": "Apple svelerà la sua nuova gamma iPhone 15 in una gamma di nuovi colori in un evento speciale che si terrà probabilmente il 12 settembre. Lo farà introducendo, almeno secondo le indiscrezioni, molte … [+3584 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hwupgrade.it"
        },
        "author": null,
        "title": "iPhone 15 Pro: in vendita potrebbe arrivare un cavo USB-C ''super-veloce''",
        "description": "iPhone 15 Pro potrebbe introdurre per la prima volta velocità importanti nella trasmissione dei dati e nella ricarica. Il cavo in dotazione potrebbe essere lento ma in vendita c'è chi scommette che arriverà un cavo da 40Gbps.",
        "url": "https://www.hwupgrade.it/news/apple/iphone-15-pro-in-vendita-potrebbe-arrivare-un-cavo-usb-c-super-veloce_119513.html",
        "urlToImage": "https://www.hwupgrade.it/i/n/iPhone15Velocita_720.jpg",
        "publishedAt": "2023-08-28T06:39:10Z",
        "content": "L'attesa transizione di Apple verso la porta USB-C su iPhone è uno degli argomenti più discussi tra gli appassionati di tecnologia mobile. Con l'adozione su vasta scala dello standard USB-C da parte … [+2436 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hwupgrade.it"
        },
        "author": null,
        "title": "HONOR MagicBook X 16: ecco 8 motivi per acquistarlo!",
        "description": "HONOR MagicBook X 16 è il nuovo laptop lanciato dall'azienda cinese e pronto a battersela con i vari produttori Windows ma anche e soprattutto come valida alternativa a MacBook di Apple. Ci sono almeno 8 motivi per il quale possiamo consigliarvelo come laptop…",
        "url": "https://www.hwupgrade.it/news/portatili/honor-magicbook-x-16-ecco-8-motivi-per-acquistarlo_119244.html",
        "urlToImage": "https://www.hwupgrade.it/i/n/HMagciBookX16_720.jpg",
        "publishedAt": "2023-08-28T07:51:47Z",
        "content": "HONOR MagicBook X 16 è il nuovissimo laptop di casa HONOR pronto a sfidare i più grandi e blasonati produttori di notebook con Windows ma anche i MacBook di Apple. Dalla sua HONOR ha deciso di unire … [+5732 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Shutterbean.com"
        },
        "author": null,
        "title": "Intentions for the Week",
        "description": "Intentions for the Week- Week 35 in 2023\nHappy Monday, friends!\nThis weekend I caught up on a ton of housework. The first full week of school was a doozy!  I did meal prep yesterday and got my head back in the game for that. It’s nice to have a fridge full of…",
        "url": "https://www.shutterbean.com/2023/intentions-for-the-week-323/",
        "urlToImage": "https://www.shutterbean.com/wp-content/uploads/2021/11/intentionsfortheweekworkbook-10.jpg",
        "publishedAt": "2023-08-28T09:22:02Z",
        "content": "Intentions for the Week- Week 35 in 2023\r\nHappy Monday, friends!\r\nThis weekend I caught up on a ton of housework. The first full week of school was a doozy!  I did meal prep yesterday and got my head… [+677 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hwupgrade.it"
        },
        "author": null,
        "title": "iPad Pro con display OLED e Apple M3 in arrivo nel 2024: gli ultimi rumor",
        "description": "Mark Gurman di Bloomberg torna a parlare dei nuovi iPad Pro, con il prossimo update che è previsto per il 2024 e implementerà diverse novità fondamentali",
        "url": "https://www.hwupgrade.it/news/apple/ipad-pro-con-display-oled-e-apple-m3-in-arrivo-nel-2024-gli-ultimi-rumor_119516.html",
        "urlToImage": "https://www.hwupgrade.it/i/n/iPadPro18_720.jpg",
        "publishedAt": "2023-08-28T09:01:02Z",
        "content": "Mark Gurman di Bloomberg ha rilasciato informazioni molto interessanti per chi è interessato ad acquistare un nuovo iPad Pro o MacBook senza rinunciare ai benefici attesi del nuovo processore Apple M… [+2742 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Sapo.pt"
        },
        "author": "Pedro Simões",
        "title": "iOS 17 vai trazer novidade para o Apple Mapas que a Google devia copiar para o seu Maps",
        "description": "A poucas semanas da chegada do iOS 17, os utilizadores que o testam continuam a descobrir novidades. A mais recente está localizada nos Mapas da Apple e revelam um cuidado extra da marca para...",
        "url": "https://pplware.sapo.pt/apple/ios-17-vai-trazer-novidade-para-o-apple-mapas-que-a-google-devia-copiar-para-o-seu-maps/",
        "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2023/08/ios_17_apple_maps_1.jpg",
        "publishedAt": "2023-08-28T06:30:05Z",
        "content": "A poucas semanas da chegada do iOS 17, os utilizadores que o testam continuam a descobrir novidades. A mais recente está localizada nos Mapas da Apple e revelam um cuidado extra da marca para a utili… [+1636 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Sapo.pt"
        },
        "author": "Pedro Simões",
        "title": "Dica: Se tem um smartwatch com Wear OS não vai perder o seu smartphone Android",
        "description": "O impulso que a Google deu ao Wear OS mostra que os smartwatches vieram para ficar de forma permanente. Estes complementam o que os smartphones oferecem e em alguns casos até os conseguem substituir....",
        "url": "https://pplware.sapo.pt/truques-dicas/dica-se-tem-um-smartwatch-com-wear-os-nao-vai-perder-o-seu-smartphone-android/",
        "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2023/07/pplware_samsung_galaxy_watch_6_12.jpg",
        "publishedAt": "2023-08-28T08:00:38Z",
        "content": "O impulso que a Google deu ao Wear OS mostra que os smartwatches vieram para ficar de forma permanente. Estes complementam o que os smartphones oferecem e em alguns casos até os conseguem substituir.… [+1971 chars]"
        },
        {
        "source": {
        "id": "fox-sports",
        "name": "Fox Sports"
        },
        "author": "Deesha Thosar",
        "title": "Shohei Ohtani is calling all the shots, for better or worse. But at what cost?",
        "description": "Shohei Ohtani has operated with unchecked power with the Angels. They're not going to change the script now, but his injury could change that calculus in free agency.",
        "url": "https://www.foxsports.com/stories/mlb/shohei-ohtani-is-calling-all-the-shots-for-better-or-worse-but-at-what-cost",
        "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/08/1408/814/4180c98f-Ohtani2.jpg?ve=1&tl=1",
        "publishedAt": "2023-08-28T01:12:30Z",
        "content": "NEW YORK Stroll through the grounds of Citi Field and the reminders that an icon was in town were everywhere.\r\nBigger than usual crowds formed around the Home Run Apple at the entrance to the stadium… [+8488 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "SamMobile"
        },
        "author": "Asif Iqbal Shaik",
        "title": "Google may partner with Garmin to bring satellite texting to Android",
        "description": "Google announced that it would bring two-way communications via satellite connectivity to Android devices with the Android 14 update. While the stable update isn't out yet, it looks like the company is working with Garmin to bring two-way satellite texting to…",
        "url": "https://www.sammobile.com/news/google-partner-garmin-satellite-texting-android/",
        "urlToImage": "https://www.sammobile.com/wp-content/uploads/2023/08/Garmin-Logo-720x405.jpg",
        "publishedAt": "2023-08-28T06:36:37Z",
        "content": "Google announced that it would bring two-way communications via satellite connectivity to Android devices with the Android 14 update. While the stable update isn't out yet, it looks like the company … [+1424 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Macotakara.jp"
        },
        "author": "danbo",
        "title": "iPhoneの整備済商品 iPhone 12 mini 初追加（2023/8/28）",
        "description": "<!-- テキスト -->\n\nApple.com/jpが、Apple認定の整備済製品で、iPhone整備済み製品の販売を開始しています。\n\n30,000円以上購入でオリコApple ショッピングローンが24回払いまで金利０%で利用出来ます。\n\nペイディあと払いプランApple専用は利用できません。\n\n整備品情報はメールマガジンでもお知らせしています。\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\n<ul>\n<li>iPhon…",
        "url": "https://www.macotakara.jp/sale/entry-45216.html",
        "urlToImage": "https://www.macotakara.jp/archives/001/202303/ae6fc516bb5db377f5884431aedbf5770646cf80119e7c5c9b781e0420910af8.png",
        "publishedAt": "2023-08-28T06:02:01Z",
        "content": "Apple.com/jpAppleiPhone\r\n30,000Apple 24%\r\nApple\r\n<ul><li>iPhone 12 mini/64GB65,800</li><li>iPhone 12 mini/128GB72,800</li><li>iPhone 12 mini/256GB72,800</li><li>iPhone 12 Pro 512GB138,800</li><li>iPh… [+73 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Macotakara.jp"
        },
        "author": "danbo",
        "title": "Macの整備済商品 商品追加（2023/8/28）",
        "description": "<!-- テキスト -->\n\nApple.com/jpが、Apple認定の整備済製品で、Mac整備済み製品として、商品の追加を行っています。\n\n30,000円以上購入でオリコApple ショッピングローンが24回払いまで金利０%で利用出来ます。\n\nペイディあと払いプランApple専用は利用できません。\n\n整備品情報はメールマガジンでもお知らせしています。\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\n<ul>\n<li>Mac…",
        "url": "https://www.macotakara.jp/sale/entry-45217.html",
        "urlToImage": "https://www.macotakara.jp/archives/001/201611/d2e27d4486ccccf89a2a18b176b1f24e06d40e5b57e2e784440acc0fcf692ba9.jpg",
        "publishedAt": "2023-08-28T06:03:57Z",
        "content": "Apple.com/jpAppleMac\r\n30,000Apple 24%\r\nApple\r\n<ul><li>Mac Pro (2019)/24 Core Xeon W 2.7GHz/192GB/1TB SSD/Radeon Pro 580X1,264,800</li><li>Mac Studio (2022)/M1 Ultra/20Core CPU/64CoreGPU/128GB/4TB SSD… [+3495 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Unwire.hk"
        },
        "author": "唐美鳳",
        "title": "M3 版本 Mac 筆電 網傳將於 10 月發表",
        "description": "有消息指 Apple 將會在 9 月舉行 iPhone 15 系列發佈會，根據《彭博》的最新報導，採用全新 M3 處理器的 Mac 電腦則要等到 10 月才會發表。iPhone 15 的發佈會據說會跟去年一樣在 Apple 總部預先錄影，然後在發佈會當日進行網上直播，至於 M3 Mac 則可能只會通過新聞稿方式公佈。\nThe post M3 版本 Mac 筆電 網傳將於 10 月發表 appeared first on 香港 unwire.hk 玩生活．樂科技.",
        "url": "https://unwire.hk/2023/08/28/m3-macbook-air-macbook-pro-may-not-debut-until-october/notebook/mac-os/",
        "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2023/08/03-24.png",
        "publishedAt": "2023-08-28T03:49:00Z",
        "content": "Apple 9 iPhone 15 M3 Mac 10 iPhone 15 Apple M3 Mac \r\n M2 MacBook Pro Mac mini Apple 201314161820 21 10 20151719 22 M3 Mac M3 ProM3 Max M3 Ultra \r\n 13 MacBook Pro13 MacBook Air Mac mini M3 Mac Mac min… [+55 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Unwire.hk"
        },
        "author": "唐美鳳",
        "title": "全系列機身顏色曝光 iPhone 15 Pro 不再提供金色機身",
        "description": "網站 MacRumors 日前表示 Apple 可能會在 9 月 12 日舉行 iPhone 15 發佈會，他們率先公開了四款機型 iPhone 15、iPhone 15 Plus、iPhone 15 Pro 和 iPhone 15 Pro Max 預計會提供的機身顏色選擇。當中備受亞洲消費者歡迎的金色不再存在，而曾經在 2018 年 iPhone XR 使用過的珊瑚色則會回歸。\nThe post 全系列機身顏色曝光 iPhone 15 Pro 不再提供金色機身 appeared first on 香港 unwi…",
        "url": "https://unwire.hk/2023/08/28/iphone-15-series-body-colors/mobile-phone/",
        "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2023/08/04-24.png",
        "publishedAt": "2023-08-28T03:49:02Z",
        "content": "MacRumors Apple 9 12 iPhone 15 iPhone 15iPhone 15 PlusiPhone 15 Pro iPhone 15 Pro Max 2018 iPhone XR \r\n MacRumors 6.1 6.7 iPhone 15 iPhone 15 Plus 5 iPhone 15 USB-C Apple USB-C PRODUCT(RED) 2024 \r\n A… [+67 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Soft4fun.net"
        },
        "author": "HANDBRO",
        "title": "[iPhone 15 爆料] 價格真的漲定了！平價版 AirPods SE 什麼時候上市？",
        "description": "(硬是要學 SOFT4FUN／HANDBRO 報導)\niPhone15 價格幾乎底定，就是要漲價 100-200 美元！傳輸速的的傳言依然很多，不過手哥先幫大家整理收斂。另外這週也帶來更多 Airpods 新品消息和功能分析，請看影片完整內容！\n本文 [iPhone 15 爆料] 價格真的漲定了！平價版 AirPods SE 什麼時候上市？ 最早出現於 硬是要學 SOFT4FUN。",
        "url": "https://www.soft4fun.net/tech/news/iphone-15-leak-week-3.htm",
        "urlToImage": "https://www.soft4fun.net/wp-content/uploads/2023/08/maxresdefault-1.jpg",
        "publishedAt": "2023-08-28T09:16:49Z",
        "content": "iPhone 15 iPhone 15 AirPods\r\n#iPhone15 100-200 Airpods \r\n iPhone 15 Bloomberg Mark GurmanDigitimes Jeff Pu iPhone 15 Pro iPhone 15 Pro 1,099 1,199 iPhone 15 Pro Max 1,199 1,299 100 200 \r\niPhone 15 Pr… [+569 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tweakers.net"
        },
        "author": "Daan van Monsjou",
        "title": "Bloomberg: iPad Pro krijgt volgend jaar verbeterde Magic Keyboard en M3-soc",
        "description": "Apple werkt aan zijn 'grootste <i>overhaul</i>' van de iPad Pro sinds 2018. Dat meldt Bloomberg-journalist Mark Gurman. De iPad Pro krijgt volgens hem een M3-soc en een verbeterd Magic Keyboard-accessoire met een grotere trackpad. De tablet krijgt mogelijk oo…",
        "url": "https://tweakers.net/nieuws/213004/bloomberg-ipad-pro-krijgt-volgend-jaar-verbeterde-magic-keyboard-en-m3-soc.html",
        "urlToImage": "https://tweakers.net/i/fi57pG134LhcLm5J3CkIkLjpswY=/134x134/filters:strip_exif()/i/2005426218.png?f=meta",
        "publishedAt": "2023-08-28T08:44:06Z",
        "content": "Apple werkt aan zijn 'grootste overhaul' van de iPad Pro sinds 2018. Dat meldt Bloomberg-journalist Mark Gurman. De iPad Pro krijgt volgens hem een M3-soc en een verbeterd Magic Keyboard-accessoire m… [+1595 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Iphones.ru"
        },
        "author": "Никита Горяинов",
        "title": "Ваш iPhone разряжается, что делать? Правильный ответ здесь",
        "description": "Есть такой жанр лёгкого, кликабельного контента в интернете: рассказы про аккумулятор iPhone. Он отлично заходит по SEO, здорово читается, вызывает активность. Новости, как какая-то прошивка якобы сильнее разряжает аккумулятор. Советы, как исправить или продл…",
        "url": "https://www.iphones.ru/iNotes/hvatit-zagonyatsya-po-povodu-akkumulyatora-v-iphone-08-28-2023",
        "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2023%2F08%2Fiphone-13-pro-max-battery-after-6-months-2.jpg",
        "publishedAt": "2023-08-28T09:19:37Z",
        "content": ", : iPhone. SEO, , . \r\n, - . , . , . , , .\r\n , : iPhone. \r\n . , ? , . ? , . ? , . .\r\n , , . -, . , , . . , , , .\r\n, ? , .\r\n1. iOS   \r\nApple iOS 11.3« » , , iPhone , .\r\n , , , iPhone . . , , . . . \r\nA… [+872 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Iphones.ru"
        },
        "author": "Артём Баусов",
        "title": "Apple выпустит чехол-клавиатуру Magic Keyboard в новом дизайне",
        "description": "Марк Гурман продолжает делиться инсайдами про будущий iPad Pro. По его данным, Apple готовится представить вместе с планшетом чехол-клавиатуру Magic Keyboard в совершенно новом дизайне. У него увеличится трекпад, а внешне устройство позволит айпэдам ещё больш…",
        "url": "https://www.iphones.ru/iNotes/apple-vypustit-chehol-klaviaturu-magic-keyboard-v-novom-dizayne-08-28-2023",
        "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2023%2F08%2FIMG_8551.jpeg",
        "publishedAt": "2023-08-28T05:44:55Z",
        "content": "iPad Pro.\r\n , Apple - Magic Keyboard . , .\r\n J717, J718, J720 J721. M3 11- 13- OLED-.\r\n, iPad Pro 2024 . [MacRumors]"
        },
        {
        "source": {
        "id": null,
        "name": "Iphones.ru"
        },
        "author": "Артём Баусов",
        "title": "Цены на гаджеты Apple могут вырасти после переноса производства из Китая в другие страны",
        "description": "Bloomberg сообщает, что гаджеты Apple могут подорожать из-за напряженных отношений Китая и США, последние из которых всячески пытаются сдерживать технологическое развитие азиатской страны. В издании отмечают, что такие действия вынуждают технологические компа…",
        "url": "https://www.iphones.ru/iNotes/ceny-na-gadzhety-apple-mogut-vyrasti-posle-perenosa-proizvodstva-iz-kitaya-v-drugie-strany-08-28-2023",
        "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2023%2F08%2FIMG_8556.jpeg",
        "publishedAt": "2023-08-28T09:57:44Z",
        "content": "Bloomberg , Apple - , .\r\n , . . 80% .\r\n , , , « ».\r\n , . - Apple .\r\n Bloomberg , :\r\n Apple , . , , , .\r\nBloomberg Intelligence\r\n, .\r\n, , . , Luxshare, .\r\n , , , Apple. – , - . [Bloomberg]"
        },
        {
        "source": {
        "id": null,
        "name": "MacGeneration"
        },
        "author": "Florian Innocente",
        "title": "Promo : jusqu'à -280 € sur les MacBook Air pour les études",
        "description": "Amazon pousse les MacBook Air vers les étudiants avec un coup de pouce sur ses promotions. Jusqu'à 50 € de rabais supplémentaires sont consentis aux détenteurs d'un abonnement Amazon Prime Student.\n\nMacBook Air 15\". Image : Apple.\n\nIl s'agit d'un abonnement P…",
        "url": "https://www.macg.co/mac/2023/08/promo-etudiants-jusqua-280-eu-sur-les-macbook-air-138885",
        "urlToImage": "https://cdn.mgig.fr/2023/08/mga-70ceb525-w375-w1500-w750_accroche.jpg",
        "publishedAt": "2023-08-28T10:00:00Z",
        "content": "Amazon pousse les MacBook Air vers les étudiants avec un coup de pouce sur ses promotions. Jusqu'à 50  de rabais supplémentaires sont consentis aux détenteurs d'un abonnement Amazon Prime Student.\r\nM… [+471 chars]"
        }
        ]
    constructor(){
        super();
        console.log("this is a constructure from the new area:");
        this.state={
            articles:this.articles,
            loading:false ,
            page:1
            
        }
    }
    async componentDidMount(){
        console.log("cdm");
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=b719d2b41b7f4c90b60fe965405ac79d&page=1&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        let parseData=await data.json();
        console.log(parseData);
        this.setState({articles:parseData.articles,totalResults:parseData.totalResults})
    }
         handlePrevBtn=async ()=>{
            console.log("this is Previous")
            let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=b719d2b41b7f4c90b60fe965405ac79d&page=${this.state.page-1 }&pagesize=${this.props.pageSize}`;
            let data=await fetch(url);
            let parseData=await data.json();
            console.log(parseData);
            this.setState({
                page:this.state.page-1,
                articles:parseData.articles
            }) 
        };
            handleNextBtn=async ()=>{
            console.log("this is Next")
                if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

                }
                else{
                    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=b719d2b41b7f4c90b60fe965405ac79d&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
            let data=await fetch(url);
            let parseData=await data.json();
            console.log(parseData);
            this.setState({
                page:this.state.page+1,
                articles:parseData.articles
            })
            
                }
            
        };

  render() {
    console.log("render")
    return (
     <>
     <div className="container my-3">
       
        <div className="row">
            <h2 className='d-flex justify-content-center m-3'>Monkey News. Top Headlines</h2>
        {this.state.articles.map((element)=>{
            return(
                <div className="col-md-4" key={element.url}>
            <NewsItems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""}imageurl={element.urlToImage} newsurl={element.url}/>
            </div>
            )
        })}
            
            
     </div>
     <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevBtn} class="btn btn-dark">&larr; Previous</button>
     <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize) } type="button" onClick={this.handleNextBtn} class="btn btn-dark">Next &rarr;</button>
     </div>
     
     </div>
     </>
    )
  }
}
