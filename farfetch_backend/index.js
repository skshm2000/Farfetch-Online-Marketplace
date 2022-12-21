const express = require('express')
const cors = require('cors')
const women = [
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/13\/93\/61\/19139361_43410872_480.jpg",
     "detail": "New Season",
     "brand": "PUCCI",
     "title": "Onde-print silk shirt",
     "price": "$1,195"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/17\/44\/37\/19174437_43412927_480.jpg",
     "detail": "New Season",
     "brand": "Amina Muaddi",
     "title": "Begum 95mm transparent pumps",
     "price": "$2,265"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/12\/88\/90\/19128890_43414273_480.jpg",
     "detail": "New Season",
     "brand": "Marques'Almeida",
     "title": "sequin-embellished flared trousers",
     "price": "$1,223"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/44\/76\/40\/19447640_43367588_480.jpg",
     "detail": "New Season",
     "brand": "Valentino Garavani",
     "title": "VLogo Signature tote bag",
     "price": "$2,675"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/77\/48\/94\/18774894_43434682_480.jpg",
     "detail": "New Season",
     "brand": "Alessandra Rich",
     "title": "tweed lurex minidress",
     "price": "$2,518"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/44\/05\/10\/19440510_42780347_480.jpg",
     "detail": "New Season",
     "brand": "Amina Muaddi",
     "title": "Dalida transparent platform sandals",
     "price": "$2,778"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/37\/84\/94\/19378494_43187819_480.jpg",
     "detail": "New Season",
     "brand": "The Attico",
     "title": "sequinned asymmetric halterneck top",
     "price": "$2,571"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/09\/20\/23\/19092023_41843737_480.jpg",
     "detail": "New Season",
     "brand": "Paco Rabanne",
     "title": "XL pearl-embellished chain-link necklace",
     "price": "$1,150"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/89\/30\/19\/18893019_41278374_480.jpg",
     "brand": "Jacquemus",
     "title": "logo-plaque strap-detail skirt",
     "price": "$813"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/34\/19\/80\/18341980_40619424_480.jpg",
     "brand": "Jimmy Choo",
     "title": "Saeda crystal-embellished 100mm pumps",
     "price": "$3,150"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/23\/10\/32\/19231032_43197538_480.jpg",
     "detail": "New Season",
     "brand": "Christopher Esber",
     "title": "Distorted Quartz off-shoulder dress",
     "price": "$930"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/42\/95\/18\/18429518_41467977_480.jpg",
     "brand": "Saint Laurent",
     "title": "Le 5 à 7 mini shoulder bag",
     "price": "$1,790"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/15\/96\/53\/19159653_42731422_480.jpg",
     "detail": "New Season",
     "brand": "16Arlington",
     "title": "sequin-embellished sleeveless top",
     "price": "$1,037"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/18\/34\/47\/19183447_42551827_480.jpg",
     "brand": "Valentino Garavani",
     "title": "Small Locò embellished shoulder bag",
     "price": "$3,807"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/16\/01\/60\/19160160_43190893_480.jpg",
     "detail": "New Season",
     "brand": "16Arlington",
     "title": "sequin-embellished flared trousers",
     "price": "$1,754"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/36\/69\/97\/19366997_42685300_480.jpg",
     "detail": "New Season",
     "brand": "Versace",
     "title": "Greca Goddess large clutch bag",
     "price": "$2,601"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/37\/90\/06\/19379006_42713336_480.jpg",
     "detail": "Exclusive",
     "brand": "Rowen Rose",
     "title": "puff-sleeve sequin mini dress",
     "price": "$3,108"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/22\/08\/40\/19220840_42132146_480.jpg",
     "detail": "New Season",
     "brand": "Amina Muaddi",
     "title": "Rih 110mm crystal-embellished sandals",
     "price": "$3,050"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/27\/23\/27\/19272327_42524395_480.jpg",
     "detail": "Exclusive",
     "brand": "Esteban Cortazar",
     "title": "The Heartbreaker shirred strapless silk dress",
     "price": "$1,671"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/27\/23\/26\/19272326_42519814_480.jpg",
     "detail": "Exclusive",
     "brand": "Esteban Cortazar",
     "title": "The Liquid open-back silk bandeau maxi dress black",
     "price": "$1,954"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/27\/23\/28\/19272328_42531569_480.jpg",
     "detail": "Exclusive",
     "brand": "Esteban Cortazar",
     "title": "The Liquid open-back silk bandeau dress",
     "price": "$1,954"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/12\/88\/91\/19128891_43395857_480.jpg",
     "detail": "New Season",
     "brand": "Marques'Almeida",
     "title": "sequin-embellished maxi dress",
     "price": "$1,383"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/32\/10\/89\/19321089_42445066_480.jpg",
     "detail": "New Season",
     "brand": "The Attico",
     "title": "8.30pm logo-print clutch bag",
     "price": "$1,222"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/44\/65\/63\/19446563_43296289_480.jpg",
     "detail": "New Season",
     "brand": "Versace",
     "title": "Greca Goddess shoulder bag",
     "price": "$3,430"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/88\/54\/10\/18885410_41846036_480.jpg",
     "brand": "Ferragamo",
     "title": "sleeveless graphic-print dress",
     "price": "$4,804"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/07\/32\/85\/19073285_41806149_480.jpg",
     "detail": "New Season",
     "brand": "Balmain",
     "title": "Uma 95mm suede sandals",
     "price": "$2,098"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/27\/32\/82\/19273282_42526203_480.jpg",
     "detail": "Exclusive",
     "brand": "Esteban Cortazar",
     "title": "The Crazy in Love silk jersey crop top",
     "price": "$542"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/27\/32\/83\/19273283_42518261_480.jpg",
     "detail": "Exclusive",
     "brand": "Esteban Cortazar",
     "title": "The Waiting for Tonight layered chiffon maxi skirt",
     "price": "$1,865"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/13\/94\/33\/26\/13943326_21902054_480.jpg",
     "brand": "Jimmy Choo",
     "title": "Candy glitter-detailing clutch",
     "price": "$1,150"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/27\/32\/80\/19273280_42547571_480.jpg",
     "detail": "Exclusive",
     "brand": "Esteban Cortazar",
     "title": "The Rock With You open-back silk chiffon minidress",
     "price": "$1,080"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/23\/10\/19\/19231019_43254927_480.jpg",
     "detail": "New Season",
     "brand": "Christopher Esber",
     "title": "Distorted Quartz off-shoulder top",
     "price": "$693"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/17\/95\/16\/19179516_42612001_480.jpg",
     "detail": "New Season",
     "brand": "Alexander McQueen",
     "title": "leather chain-link crossbody-bag",
     "price": "$2,290"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/18\/34\/01\/19183401_42222074_480.jpg",
     "detail": "Exclusive",
     "brand": "Valentino Garavani",
     "title": "micro One Stud crystal-embellished bag",
     "price": "$1,719"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/81\/94\/60\/18819460_42012793_480.jpg",
     "detail": "New Season",
     "brand": "Marchesa Notte",
     "title": "floral-embroidered mini dress",
     "price": "$739"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/34\/97\/08\/19349708_42686283_480.jpg",
     "detail": "New Season",
     "brand": "Sergio Rossi",
     "title": "crystal-embellished wedge sandals",
     "price": "$3,763"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/17\/77\/27\/19177727_42609816_480.jpg",
     "detail": "New Season",
     "brand": "Alexander McQueen",
     "title": "satin-trim wool jacket",
     "price": "$2,390"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/30\/47\/78\/19304778_43195057_480.jpg",
     "detail": "New Season",
     "brand": "Valentino Garavani",
     "title": "VLogo signature earrings",
     "price": "$418"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/39\/23\/13\/19392313_42611330_480.jpg",
     "detail": "New Season",
     "brand": "ROTATE",
     "title": "sequined A-line miniskirt",
     "price": "$364"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/18\/31\/34\/19183134_42156068_480.jpg",
     "brand": "Valentino",
     "title": "Tulle Illusione sequin-embroidered blouse",
     "price": "$5,526"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/18\/34\/63\/19183463_42221796_480.jpg",
     "detail": "Exclusive",
     "brand": "Valentino Garavani",
     "title": "Tan-Go 155mm platform pumps",
     "price": "$2,333"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/18\/42\/58\/19184258_42156160_480.jpg",
     "brand": "Valentino",
     "title": "Golden Wings brocade trousers",
     "price": "$2,919"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/21\/70\/12\/19217012_43395763_480.jpg",
     "detail": "New Season",
     "brand": "TOM FORD",
     "title": "mini Bianca sequin-embellished tote bag",
     "price": "$4,967"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/18\/20\/37\/19182037_42154172_480.jpg",
     "brand": "Valentino",
     "title": "Golden Wings brocade minidress",
     "price": "$4,298"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/18\/34\/02\/19183402_42551801_480.jpg",
     "brand": "Valentino Garavani",
     "title": "Rockstud pointed pumps",
     "price": "$1,132"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/18\/20\/95\/19182095_42153445_480.jpg",
     "brand": "Valentino",
     "title": "Georgette silk blouse",
     "price": "$1,596"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/18\/43\/21\/19184321_42553040_480.jpg",
     "detail": "Exclusive",
     "brand": "Valentino Garavani",
     "title": "One Stud leather mini bag",
     "price": "$1,719"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/18\/43\/18\/19184318_42553076_480.jpg",
     "brand": "Valentino Garavani",
     "title": "VSLING mini leather tote bag",
     "price": "$1,474"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/10\/07\/06\/19100706_42035323_480.jpg",
     "detail": "Conscious",
     "brand": "Reformation",
     "title": "Davina floral-print silk midi dress",
     "price": "$443"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/78\/70\/41\/18787041_42470913_480.jpg",
     "brand": "TOM FORD",
     "title": "130mm wedge velvet sandals",
     "price": "$1,700"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/40\/60\/98\/19406098_42692272_480.jpg",
     "detail": "New Season",
     "brand": "Versace",
     "title": "crossover velvet-finish top",
     "price": "$1,936"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/95\/57\/06\/18955706_42435974_480.jpg",
     "brand": "Versace",
     "title": "La Medusa 105mm slingback satin pumps",
     "price": "$2,268"
    }
   ]
const men = [
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/44\/93\/56\/19449356_43353938_480.jpg",
     "detail": "New Season",
     "brand": "Balmain",
     "title": "logo-print short-sleeved T-shirt",
     "price": "$671"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/46\/25\/18\/19462518_43348796_480.jpg",
     "detail": "New Season",
     "brand": "Valentino Garavani",
     "title": "VLTN-print shoulder bag",
     "price": "$2,764"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/46\/99\/66\/19469966_43364706_480.jpg",
     "detail": "New Season",
     "brand": "Versace",
     "title": "Barocco-print silk robe",
     "price": "$2,398"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/45\/14\/85\/19451485_43345838_480.jpg",
     "detail": "New Season",
     "brand": "Canada Goose",
     "title": "padded hooded down jacket",
     "price": "$1,406"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/44\/25\/52\/19442552_43384940_480.jpg",
     "detail": "New Season",
     "brand": "Nike x Ambush",
     "title": "Air Force 1 Low SP sneakers",
     "price": "$460"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/94\/28\/41\/18942841_41721176_480.jpg",
     "detail": "New Season",
     "brand": "Dsquared2",
     "title": "Sexy Dean skinny jeans",
     "price": "$810"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/45\/86\/30\/19458630_43337597_480.jpg",
     "detail": "New Season",
     "brand": "AMIRI",
     "title": "star-patch high-top trainers",
     "price": "$1,440"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/45\/85\/56\/19458556_43349567_480.jpg",
     "detail": "New Season",
     "brand": "Kenzo",
     "title": "Boke flower long-sleeve shirt",
     "price": "$415"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/07\/32\/92\/19073292_41929578_480.jpg",
     "detail": "New Season",
     "brand": "Balmain",
     "title": "B-Bold low-top sneakers",
     "price": "$2,994"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/33\/85\/04\/19338504_43335248_480.jpg",
     "detail": "New Season",
     "brand": "Vivienne Westwood",
     "title": "tiger stripe-print sweatshirt",
     "price": "$640"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/46\/18\/14\/19461814_43346974_480.jpg",
     "detail": "New Season",
     "brand": "Jimmy Choo",
     "title": "Fitz monogram-jacquard slides",
     "price": "$495"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/32\/44\/07\/19324407_43340434_480.jpg",
     "detail": "New Season",
     "brand": "Heron Preston",
     "title": "logo-patch button-up shirt",
     "price": "$976"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/45\/00\/90\/19450090_43356145_480.jpg",
     "detail": "New Season",
     "brand": "Balmain",
     "title": "logo-print organic cotton T-shirt",
     "price": "$344"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/46\/99\/43\/19469943_43354693_480.jpg",
     "detail": "New Season",
     "brand": "Versace",
     "title": "embellished buckle reversible belt",
     "price": "$1,033"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/18\/30\/81\/19183081_43337414_480.jpg",
     "brand": "Valentino",
     "title": "high-rise wide-leg jeans",
     "price": "$849"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/25\/12\/49\/19251249_43348292_480.jpg",
     "detail": "New Season",
     "brand": "Hogan",
     "title": "panelled lace-up sneakers",
     "price": "$869"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/88\/17\/75\/18881775_41320049_480.jpg",
     "detail": "New Season",
     "brand": "Mackintosh",
     "title": "NEWINGTON mid-length coat",
     "price": "$1,204"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/43\/94\/24\/18439424_43291738_480.jpg",
     "brand": "Pringle of Scotland",
     "title": "V-neck long-sleeve cardigan",
     "price": "$1,488"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/44\/69\/23\/19446923_43325863_480.jpg",
     "detail": "New Season",
     "brand": "Stella McCartney",
     "title": "mini Stella logo crossbody bag",
     "price": "$1,620"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/71\/89\/29\/18718929_43330442_480.jpg",
     "detail": "New Season",
     "brand": "Diesel",
     "title": "graphic print T-shirt",
     "price": "$150"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/45\/77\/08\/19457708_43335377_480.jpg",
     "detail": "New Season",
     "brand": "Lanvin",
     "title": "Curb low-top sneakers",
     "price": "$1,843"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/44\/67\/87\/19446787_43369138_480.jpg",
     "detail": "New Season",
     "brand": "Givenchy",
     "title": "graffiti-print wool scarf",
     "price": "$659"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/45\/70\/31\/19457031_43362828_480.jpg",
     "detail": "New Season",
     "brand": "Tod's",
     "title": "logo-embossed side-stripe sneakers",
     "price": "$1,141"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/46\/50\/39\/19465039_43339309_480.jpg",
     "detail": "New Season",
     "brand": "TOM FORD",
     "title": "button-fastening round-neck T-Shirt",
     "price": "$567"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/35\/08\/12\/19350812_43356732_480.jpg",
     "detail": "New Season",
     "brand": "GR10K",
     "title": "deconstructed messenger bag",
     "price": "$356"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/40\/86\/59\/19408659_43333528_480.jpg",
     "detail": "New Season",
     "brand": "Nick Fouquet",
     "title": "plaid-check print shirt jacket",
     "price": "$2,690"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/35\/55\/08\/19355508_43406063_480.jpg",
     "detail": "New Season",
     "brand": "Acne Studios",
     "title": "embroidered-logo bucket hat",
     "price": "$249"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/32\/97\/57\/19329757_43331815_480.jpg",
     "detail": "New Season",
     "brand": "Rick Owens",
     "title": "drop-crotch cotton trousers",
     "price": "$1,287"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/46\/70\/08\/19467008_43345478_480.jpg",
     "detail": "New Season",
     "brand": "Homme Plissé Issey Miyake",
     "title": "check-print pleated jacket",
     "price": "$1,363"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/43\/59\/58\/19435958_43338042_480.jpg",
     "detail": "New Season",
     "brand": "Han Kjøbenhavn",
     "title": "quilted leather tote bag",
     "price": "$983"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/46\/59\/90\/19465990_43344128_480.jpg",
     "detail": "New Season",
     "brand": "Homme Plissé Issey Miyake",
     "title": "pleated check-print trousers",
     "price": "$974"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/19\/51\/55\/19195155_43348592_480.jpg",
     "detail": "New Season",
     "brand": "Dolce & Gabbana",
     "title": "velvet calf-leather loafers",
     "price": "$1,864"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/45\/00\/99\/19450099_43414052_480.jpg",
     "detail": "New Season",
     "brand": "Barena",
     "title": "single-breasted shirt jacket",
     "price": "$677"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/35\/55\/14\/19355514_43365345_480.jpg",
     "detail": "New Season",
     "brand": "Acne Studios",
     "title": "contrast logo jacquard wool scarf",
     "price": "$351"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/46\/33\/76\/19463376_43443710_480.jpg",
     "detail": "New Season",
     "brand": "Brunello Cucinelli",
     "title": "crew-neck cotton T-shirt",
     "price": "$475"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/45\/85\/40\/19458540_43336538_480.jpg",
     "detail": "New Season",
     "brand": "Lanvin",
     "title": "Flesh-X low-top sneakers",
     "price": "$1,525"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/46\/69\/76\/19466976_43344883_480.jpg",
     "detail": "New Season",
     "brand": "Homme Plissé Issey Miyake",
     "title": "pleated press-stud hoodie",
     "price": "$592"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/44\/67\/91\/19446791_43386112_480.jpg",
     "detail": "New Season",
     "brand": "Givenchy",
     "title": "logo intarsia-knit beanie",
     "price": "$647"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/42\/68\/89\/19426889_43336281_480.jpg",
     "detail": "New Season",
     "brand": "By Walid",
     "title": "patchwork-detail two-tone trousers",
     "price": "$1,804"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/47\/09\/94\/19470994_43359900_480.jpg",
     "detail": "New Season",
     "brand": "Versace",
     "title": "Chain Reaction sneakers",
     "price": "$2,087"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/40\/81\/09\/19408109_43323247_480.jpg",
     "detail": "New Season",
     "brand": "A.A. Spectrum",
     "title": "zip-up padded down jacket",
     "price": "$1,355"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/38\/48\/95\/19384895_43342741_480.jpg",
     "detail": "New Season",
     "brand": "and Wander",
     "title": "logo print tote bag",
     "price": "$230"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/11\/95\/29\/19119529_42714420_480.jpg",
     "detail": "New Season",
     "brand": "Marni",
     "title": "logo-patch knitted cardigan",
     "price": "$1,718"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/94\/34\/65\/18943465_41718290_480.jpg",
     "detail": "New Season",
     "brand": "Dsquared2",
     "title": "logo-tag chino trousers",
     "price": "$660"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/39\/33\/72\/19393372_43300527_480.jpg",
     "detail": "New Season",
     "brand": "Nicolas Andreas Taralis",
     "title": "lace-up leather ankle boots",
     "price": "$2,759"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/46\/33\/04\/19463304_43359760_480.jpg",
     "detail": "New Season",
     "brand": "Stone Island",
     "title": "zip-up hooded jacket",
     "price": "$956"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/38\/10\/63\/19381063_43337589_480.jpg",
     "detail": "New Season",
     "brand": "Porter-Yoshida & Co.",
     "title": "multiple pockets tote bag",
     "price": "$1,138"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/45\/85\/27\/19458527_43350587_480.jpg",
     "detail": "New Season",
     "brand": "AMIRI",
     "title": "logo-patch crew neck jumper",
     "price": "$1,488"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/44\/59\/54\/19445954_43369130_480.jpg",
     "detail": "New Season",
     "brand": "Givenchy",
     "title": "intarsia-knit logo scarf",
     "price": "$1,085"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/35\/23\/87\/19352387_43371026_480.jpg",
     "detail": "New Season",
     "brand": "Alanui",
     "title": "Bugs Bunny jumper",
     "price": "$1,685"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/45\/03\/43\/19450343_43345192_480.jpg",
     "detail": "New Season",
     "brand": "Versace",
     "title": "monogram-print backpack",
     "price": "$2,424"
    }
   ]
const kids = [
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/48\/07\/86\/19480786_43382116_480.jpg",
     "detail": "New Season",
     "brand": "Missoni Kids",
     "title": "intarsia-knit logo sweater",
     "price": "$363"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/34\/23\/98\/19342398_43347410_480.jpg",
     "detail": "New Season",
     "brand": "Palm Angels Kids",
     "title": "logo-print short-sleeve T-shirt",
     "price": "$236"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/17\/19\/19\/19171919_42730317_480.jpg",
     "detail": "New Season",
     "brand": "Dolce & Gabbana Kids",
     "title": "Airmaster low-top sneakers",
     "price": "$776"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/45\/74\/71\/19457471_43324190_480.jpg",
     "detail": "New Season",
     "brand": "Balmain Kids",
     "title": "logo-print cotton romper",
     "price": "$489"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/32\/14\/76\/19321476_43422616_480.jpg",
     "detail": "New Season",
     "brand": "Off-White Kids",
     "title": "OW varsity bomber jacket",
     "price": "$1,197"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/13\/45\/81\/19134581_43341937_480.jpg",
     "detail": "New Season",
     "brand": "Dsquared2 Kids",
     "title": "logo-print cap",
     "price": "$150"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/48\/11\/84\/19481184_43385167_480.jpg",
     "detail": "New Season",
     "brand": "Lanvin Enfant",
     "title": "embroidered-logo cotton T-shirt",
     "price": "$189"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/47\/07\/78\/19470778_43333489_480.jpg",
     "detail": "New Season",
     "brand": "Golden Goose Kids",
     "title": "Superstar distressed sneakers",
     "price": "$436"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/46\/98\/64\/19469864_43334414_480.jpg",
     "detail": "New Season",
     "brand": "Balmain Kids",
     "title": "logo buckle-fastening belt",
     "price": "$296"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/47\/08\/24\/19470824_43336983_480.jpg",
     "detail": "New Season",
     "brand": "Balmain Kids",
     "title": "logo-print detail backpack",
     "price": "$877"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/47\/08\/65\/19470865_43332822_480.jpg",
     "detail": "New Season",
     "brand": "Balmain Kids",
     "title": "metallic-logo babygrow & hat set",
     "price": "$572"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/45\/40\/29\/19454029_43262735_480.jpg",
     "detail": "New Season",
     "brand": "Balmain Kids",
     "title": "striped intarsia-knit logo jumper",
     "price": "$533"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/41\/70\/16\/19417016_42729366_480.jpg",
     "detail": "New Season",
     "brand": "Palm Angels Kids",
     "title": "smiley teddy-bear print hoodie",
     "price": "$437"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/34\/34\/05\/19343405_42653921_480.jpg",
     "detail": "New Season",
     "brand": "Acne Studios",
     "title": "logo-patch ribbed beanie",
     "price": "$133"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/26\/72\/00\/19267200_42200586_480.jpg",
     "brand": "Jordan Kids",
     "title": "Air Jordan 1 Mid sneakers",
     "price": "$219"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/39\/20\/24\/19392024_42708079_480.jpg",
     "detail": "New Season",
     "brand": "Dolce & Gabbana Kids",
     "title": "all-over logo-print bow tie",
     "price": "$231"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/51\/63\/01\/18516301_42618232_480.jpg",
     "brand": "Versace Kids",
     "title": "Greca-print lace-up sneakers",
     "price": "$1,197"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/36\/13\/66\/19361366_42508729_480.jpg",
     "detail": "New Season",
     "brand": "Mini Rodini",
     "title": "patch-detail striped beanie",
     "price": "$70"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/02\/35\/43\/19023543_43376096_480.jpg",
     "brand": "Balmain Kids",
     "title": "contrast-logo wool scarf",
     "price": "$373"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/13\/40\/30\/19134030_42334211_480.jpg",
     "detail": "New Season",
     "brand": "Marni Kids",
     "title": "woven basket bag",
     "price": "$117"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/23\/44\/19\/19234419_42771751_480.jpg",
     "brand": "Moncler Enfant",
     "title": "logo-patch wool beanie",
     "price": "$351"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/41\/70\/12\/19417012_42731296_480.jpg",
     "detail": "New Season",
     "brand": "Palm Angels Kids",
     "title": "teddy bear patch backpack",
     "price": "$557"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/40\/09\/33\/19400933_42710282_480.jpg",
     "detail": "New Season",
     "brand": "Balmain Kids",
     "title": "cotton logo-print changing-bag",
     "price": "$1,194"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/38\/70\/05\/19387005_42696948_480.jpg",
     "detail": "New Season",
     "brand": "Tartine Et Chocolat",
     "title": "logo embroidery floral bib",
     "price": "$89"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/13\/50\/49\/19135049_42372000_480.jpg",
     "detail": "New Season",
     "brand": "Marni Kids",
     "title": "logo-patch tote bag",
     "price": "$117"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/32\/66\/07\/19326607_42412180_480.jpg",
     "brand": "Jordan Kids",
     "title": "Air Jordan 1 Mid leather sneakers",
     "price": "$268"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/31\/68\/04\/19316804_42580518_480.jpg",
     "detail": "New Season",
     "brand": "Burberry Kids",
     "title": "Vintage Check-print dress with bloomers",
     "price": "$598"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/23\/38\/46\/19233846_42378980_480.jpg",
     "detail": "New Season",
     "brand": "Bonpoint",
     "title": "Bidelia intarsia-knit pinafore shorts",
     "price": "$237"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/13\/32\/34\/19133234_42317165_480.jpg",
     "detail": "New Season",
     "brand": "Marni Kids",
     "title": "sequinned daisy-print T-shirt",
     "price": "$173"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/13\/31\/98\/19133198_42332761_480.jpg",
     "detail": "New Season",
     "brand": "Marni Kids",
     "title": "logo zipped backpack",
     "price": "$422"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/38\/15\/72\/19381572_42622471_480.jpg",
     "brand": "Stone Island Junior",
     "title": "embroidered-logo detail baseball cap",
     "price": "$116"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/13\/34\/84\/19133484_42445256_480.jpg",
     "detail": "New Season",
     "brand": "MM6 Maison Margiela Kids",
     "title": "three-pack logo-print cotton T-shirts",
     "price": "$372"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/53\/71\/05\/18537105_41130566_480.jpg",
     "brand": "Off-White Kids",
     "title": "Out Of Office touch-strap sneakers",
     "price": "$811"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/16\/51\/82\/18165182_41034919_480.jpg",
     "brand": "Versace Kids",
     "title": "Medusa logo-print hooded robe",
     "price": "$435"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/95\/43\/45\/18954345_42471927_480.jpg",
     "detail": "New Season",
     "brand": "Balenciaga Kids",
     "title": "Triple S lace-up sneakers",
     "price": "$675"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/19\/00\/02\/19190002_42031258_480.jpg",
     "brand": "Konges Sløjd",
     "title": "lemon-print cotton bed set",
     "price": "$162"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/49\/40\/01\/18494001_42381784_480.jpg",
     "brand": "Dolce & Gabbana Kids",
     "title": "jacquard three-piece babywear set",
     "price": "$675"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/13\/45\/72\/19134572_42320167_480.jpg",
     "detail": "New Season",
     "brand": "Dsquared2 Kids",
     "title": "graphic-print logo-print backpack",
     "price": "$534"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/59\/88\/36\/18598836_42409417_480.jpg",
     "brand": "Bonpoint",
     "title": "Bridgitte pompom beanie",
     "price": "$179"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/59\/88\/59\/18598859_42397161_480.jpg",
     "brand": "Bonpoint",
     "title": "intarsia-knit wool-blend snood",
     "price": "$226"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/36\/13\/73\/19361373_42509005_480.jpg",
     "detail": "New Season",
     "brand": "Mini Rodini",
     "title": "tartan-print organic-cotton scarf",
     "price": "$65"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/13\/50\/65\/19135065_42333143_480.jpg",
     "detail": "New Season",
     "brand": "Marni Kids",
     "title": "logo-patch tote bag",
     "price": "$117"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/95\/45\/01\/18954501_42422639_480.jpg",
     "brand": "Monnalisa",
     "title": "faux-shearling cotton hat",
     "price": "$223"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/27\/72\/24\/19277224_42356701_480.jpg",
     "brand": "Moncler Enfant",
     "title": "cable-knit virgin wool scarf",
     "price": "$288"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/34\/34\/04\/19343404_42478025_480.jpg",
     "detail": "New Season",
     "brand": "Acne Studios",
     "title": "logo motif intarsia-knit beanie",
     "price": "$145"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/51\/30\/30\/18513030_42185846_480.jpg",
     "brand": "BOSS Kidswear",
     "title": "fleece hooded romper",
     "price": "$225"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/18\/97\/30\/69\/18973069_41300200_480.jpg",
     "brand": "Moschino Kids",
     "title": "logo-plaque faux-fur slippers",
     "price": "$654"
    },
    {
     "img_url": "https:\/\/cdn-images.farfetch-contents.com\/19\/31\/40\/36\/19314036_42395429_480.jpg",
     "detail": "New Season",
     "brand": "Mini Rodini",
     "title": "striped leopard-print dress",
     "price": "$122"
    }
   ]
const app = express()
app.use(express.json())
app.use(cors())

app.get('/men', async (req, res)=>{
    res.status(200).send(men)
})

app.get('/kids', async (req, res)=>{
    res.status(200).send(kids)
})

app.get('/women', async (req, res)=>{
    res.status(200).send(women)
})

app.listen(8080, ()=>{
    console.log('Server Started')
})