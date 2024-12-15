import miniCarDetailing from '../assets/serviceImages/mini-car-detailing.webp'
import interiorCarDetailing from '../assets/serviceImages/interior-car-detailing.webp'
import exteriorCarDetailing from '../assets/serviceImages/exterior-car-detailing.webp'
import fullCarDetailing from '../assets/serviceImages/full-car-detailing.webp'
import ultimateCarDetailing from "../assets/serviceImages/ultimate-car-detailing.webp"
import ceramicCoating from '../assets/serviceImages/ceramic-coating.webp'
import cutAndPolish from '../assets/serviceImages/cut-polish.webp'
import headLightRestoration from '../assets/serviceImages/headlight-restoration.webp'

import miniCarDetailingMobile from '../assets/serviceImageMobile/mini-car-detailing-mobile.webp'
import interiorCarDetailingMobile from '../assets/serviceImageMobile/interior-car-detailing-mobile.webp'
import exteriorCarDetailingMobile from '../assets/serviceImageMobile/exterior-car-detailing-mobile.webp'
import fullCarDetailingMobile from '../assets/serviceImageMobile/full-car-detailing-mobile.webp'
import ultimateCarDetailingMobile from "../assets/serviceImageMobile/ultimate-car-detailing-mobile.webp"
import ceramicCoatingMobile from '../assets/serviceImageMobile/ceramic-coating-mobile.webp'
import cutAndPolishMobile from '../assets/serviceImageMobile/cut-polish-mobile.webp'
import headLightRestorationMobile from '../assets/serviceImageMobile/headlight-restoration-mobile.webp'

export const navItems = [
    { id: 1, name: "Home", path: "#home" },
    { id: 2, name: "About Us", path: "#about" },
    { id: 3, name: "Services", path: "#services" },
    { id: 4, name: "Contact", path: "#contact" },
    { id: 5, name: "Get Quote", path: "#getQuote" }
]

export const contactDetails = [
    { id: 1, name: "Phone", value: "0452 300 144" },
    { id: 2, name: "Email", value: "info@aussizultimatecardetailing.com" },
    { id: 3, name: "Facebook", value: "https://www.facebook.com/profile.php?id=61568546711152" },
    { id: 4, name: "Instagram", value: "https://www.instagram.com/aussiz_ultimate_car_detailing/" },
]

export const whyChooseUs = [
    {
        id:1,
        title:"Convenience at Your Doorstep:",
        description:"Experience the ultimate convenience with our mobile car detailing services. We bring the expertise and equipment to you, saving you time and hassle."
    },
    {
        id:2,
        title:"Affordable Prices:",
        description:"We offer competitive prices for our mobile car detailing services, ensuring you get the highest quality without breaking the bank."
    },
    {
        id:3,
        title:"Quality You Can Trust:",
        description:"We have a team of experienced professionals who take pride in providing top-notch detailing services to ensure your vehicle is in pristine condition."
    },
    {
        id:4,
        title:"Best Products, Best Results:",
        description:"We use only the highest quality products to deliver exceptional results, leaving your vehicle looking and feeling its best."
    },{
        id:5,
        title:"Weekly Offers:",
        description:"We offer weekly offers and discounts on our mobile car detailing services, ensuring you get the best value for your money."
    },
    {
        id:6,
        title:"24/7 Customer Support:",
        description:"We are here to help you with any questions or concerns you may have, providing 24/7 customer support to ensure your experience is hassle-free."
    }
]

export const services = [
    {
        id: 1,
        serviceName: "Mini Car Detailing",
        priceStartsFrom: "$ 99",
        imageUrl: miniCarDetailing,
        imageUrlMobile: miniCarDetailingMobile,
        alt: "mini car detailing canberra",
    },
    {
        id: 2,
        serviceName: "Interior Car Detailing",
        priceStartsFrom: "$ 149",
        imageUrl: interiorCarDetailing,
        imageUrlMobile: interiorCarDetailingMobile,
        alt: "interior Car Detailing canberra",
    },
    {
        id: 3,
        serviceName: "Exterior Car Detailing",
        priceStartsFrom: "$ 79",
        imageUrl: exteriorCarDetailing,
        imageUrlMobile: exteriorCarDetailingMobile,
        alt: "exterior Car Detailing canberra",
    },
    {
        id: 4,
        serviceName: "Full Car Detailing",
        priceStartsFrom: "$ 219",
        imageUrl: fullCarDetailing,
        imageUrlMobile: fullCarDetailingMobile,
        alt: "full Car Detailing canberra",
    },
    {
        id: 5,
        serviceName: "Ultimate Car Detailing",
        priceStartsFrom: "$ 349",
        imageUrl: ultimateCarDetailing,
        imageUrlMobile: ultimateCarDetailingMobile,
        alt: "ultimate Car Detailing canberra",
    },
    {
        id: 6,
        serviceName: "Ceramic Coating",
        priceStartsFrom: "$ 699",
        imageUrl: ceramicCoating,
        imageUrlMobile: ceramicCoatingMobile,
        alt: "ceramic Coating canberra",
    },
    {
        id: 7,
        serviceName: "Cut & Polish",
        priceStartsFrom: "$ 299",
        imageUrl: cutAndPolish,
        imageUrlMobile: cutAndPolishMobile,
        alt: "cut and polish canberra",
    },
    {
        id: 8,
        serviceName: "Headlight Restoration & Rejuvenation",
        priceStartsFrom: "$ 99",
        imageUrl: headLightRestoration,
        imageUrlMobile: headLightRestorationMobile,
        alt: "headlight restoration canberra",
    },
]

export const allServiceDetails =[
        {
            id: 1,
            serviceName: "Mini Car Detailing",
            price: {
                hatch: "$ 99",
                sedan: "$ 99",
                smallSuv: "$ 119",
                largeSuv: "$ 129"
            },
            description: "",
            services: [
                "Thorough high-pressure rinse to eliminate surface grime.",
                "Application of snow foam wash & wax for a protective shine.",
                "Precise drying with soft microfiber towels.",
                "Cleaning tires and rims.",
                "Detailed wipe of door jambs for a spotless finish.",
                "Comprehensive vacuuming of seats, carpets, and boot.",
                "Sanitization of ashtrays for a fresh interior.",
                "Professional cleaning of windows inside and out.",
                "Careful cleaning of the dashboard.",
                "Detailed attention to the center console for a perfect appearance.",
                "Deodorization of the interior to leave a pleasant scent."
            ],
            video: "",
            note: [
                "Extra charges may apply for vehicles with excessive dirt, grass seeds, excessive pet hair, or sand.",
                "Access to electricity and water is required during the service since the technician does not supply these facilities.",
                "Please note that any extra services beyond the standard package may result in additional fees."
            ]
        },
        {
            id: 2,
            serviceName: "Interior Car Detailing",
            price: {
                hatch: "$149",
                sedan: "$149",
                smallSuv: "$159",
                largeSuv: "$169"
            },
            description: "",
            services: [
                "Vacuum seats, carpets, boot, and floor mats thoroughly.",
                "Steam clean and sanitize seats for hygiene.",
                "Steam clean and sanitize carpets, boot, and floor mats.",
                "Treat leather seats with a conditioning treatment if applicable.",
                "Clean and dress dash and center console for a refreshed look.",
                "Detail smaller areas like door trims, cup holders, seat rails, air vents.",
                "Wipe door jambs for a complete clean.",
                "Clean windows and mirrors for improved visibility.",
                "Deodorize interior for a fresh scent."
            ],
            video: "",
            note: [
                "Extra charges may apply for vehicles with excessive dirt, grass seeds, excessive pet hair, or sand.",
                "Access to electricity and water is required during the service since the technician does not supply these facilities.",
                "Please note that any extra services beyond the standard package may result in additional fees."
            ]
        },
        {
            id: 3,
            serviceName: "Exterior Car Detailing",
            price: {
                hatch: "$79",
                sedan: "$79",
                smallSuv: "$89",
                largeSuv: "$89"
            },
            description: "",
            services: [
                "High-pressure pre-rinse for thorough cleansing.",
                "Application of snow foam wash and wax.",
                "Intensive pressure cleaning for wheels.",
                "Drying with soft microfiber towels.",
                "Precise wiping of door jambs.",
                "External window cleaning for pristine clarity.",
                "Tire cleaning and dressing for a polished finish."
            ],
            video: "",
            note: [
                "Extra charges may apply for vehicles with excessive dirt, grass seeds, excessive pet hair, or sand.",
                "Access to electricity and water is required during the service since the technician does not supply these facilities.",
                "Please note that any extra services beyond the standard package may result in additional fees."
            ]
        },
        {
            id: 4,
            serviceName: "Full Car Detailing",
            price: {
                hatch: "$219",
                sedan: "$219",
                smallSuv: "$239",
                largeSuv: "$259"
            },
            description: "",
            services: [
                "Thorough high-pressure rinse to cleanse the exterior.",
                "Removal of bugs.",
                "Detailed cleaning of wheels and tires.",
                "Application of snow foam wash and wax for protection.",
                "Gentle drying with microfiber towels for a flawless finish.",
                "Meticulous cleaning of windows and mirrors for clarity.",
                "Pressure cleaning of door and boot jambs, including the fuel door.",
                "Dressing of exterior rubbers and plastics to enhance aesthetics.",
                "Tire dressing for a polished and sleek look.",
                "Interior vacuuming of seats, carpets, boot, and floor mats.",
                "Steam cleaning and sanitizing of seats for cleanliness.",
                "Conditioning treatment for leather seats, if applicable.",
                "Thorough steam cleaning and sanitizing of carpet, boot, and floor mats.",
                "Detailed cleaning of dash, center console, door trims, cup holders, seat rails, air vents.",
                "Cleaning of windows and mirrors inside for a spotless appearance.",
                "Interior deodorizing for a fresh and inviting scent."
            ],
            video: ["https://drive.google.com/file/d/1JKJTlbAOneH2boKRiEZxkuWIOqkB4DUn/preview"],
            note: [
                "Extra charges may apply for vehicles with excessive dirt, grass seeds, excessive pet hair, or sand.",
                "Access to electricity and water is required during the service since the technician does not supply these facilities.",
                "Please note that any extra services beyond the standard package may result in additional fees."
            ]
        },
        {
            id: 5,
            serviceName: "Ultimate Car Detailing",
            price: {
                hatch: "$349",
                sedan: "$349",
                smallSuv: "$399",
                largeSuv: "$449"
            },
            description: "",
            services: [
                "Thorough high-pressure rinse to cleanse the exterior.",
                "Expert removal of bugs for a pristine finish.",
                "Detailed cleaning of wheels and tires for a polished look.",
                "Application of snow foam wash and wax for protection.",
                "Clay treatment to rejuvenate paintwork.",
                "Gentle drying with microfiber towels for a flawless exterior.",
                "Meticulous cleaning of windows and mirrors for clarity.",
                "Pressure cleaning of door and boot jambs for thoroughness.",
                "Paint enhancement for a glossy and refined finish.",
                "Stage 1 Cut & Polish to eliminate swirls and scratches.",
                "Dressing of exterior rubbers and plastics for a sleek appearance.",
                "Tire dressing for a polished and professional look.",
                "Interior vacuuming of seats, carpets, boot, and floor mats for cleanliness.",
                "Steam cleaning and sanitizing of seats for hygiene.",
                "Conditioning treatment for leather seats, if applicable, for preservation.",
                "Thorough steam cleaning of carpet, boot, and floor mats for freshness.",
                "Detailed cleaning and dressing of dash, center console, door trims, cup holders, seat rails, air vents.",
                "Cleaning of windows and mirrors inside for impeccable clarity.",
                "Interior deodorizing for a clean and pleasant atmosphere."
            ],
            video: "",
            note: [
                "Extra charges may apply for vehicles with excessive dirt, grass seeds, excessive pet hair, or sand.",
                "Access to electricity and water is required during the service since the technician does not supply these facilities.",
                "Please note that any extra services beyond the standard package may result in additional fees."
            ]
        },
        {
            id: 6,
            serviceName: "Ceramic Coating",
            price: {
                hatch: "$699",
                sedan: "$699",
                smallSuv: "$799",
                largeSuv: "$899"
            },
            description: "",
            services: [
                "Thorough high-pressure rinse to eliminate surface contaminants.",
                "Precise removal of bugs and tar for a clean surface.",
                "Expert cleaning of wheels and tires for a polished appearance.",
                "Meticulous elimination of brake dust for enhanced aesthetics.",
                "Application of snow foam wash and wax for lasting protection.",
                "Clay treatment to rejuvenate the paintwork.",
                "Delicate drying with microfiber towels for a flawless finish.",
                "Detailed cleaning of windows and mirrors for optimal clarity.",
                "Dressing of exterior rubbers and plastics for a sleek appearance.",
                "Tire dressing for a polished and professional touch.",
                "Application of Ceramic Coating for superior paint protection."
            ],
            video: "",
            note: [
                "We are delighted to offer a complimentary exterior wash after one week of ceramic coating.",
                "Access to electricity and water is required during the service since the technician does not supply these facilities.",
                "Please note that any extra services beyond the standard package may result in additional fees."
            ]
        },
        {
            id: 7,
            serviceName: "Cut & Polish",
            price: {
                hatch: "$299",
                sedan: "$299",
                smallSuv: "$349",
                largeSuv: "$399"
            },
            description: "",
            services: [
                "Thorough high-pressure rinse for exterior purification.",
                "Precision removal of bugs and tar for a flawless surface.",
                "Expert cleaning of wheels and tires for a polished look.",
                "Application of snow foam wash and wax for lasting protection.",
                "Clay treatment to revitalize paintwork.",
                "Gentle drying with microfiber towels for a pristine finish.",
                "Detailed cleaning of windows and mirrors for optimal clarity.",
                "Pressure cleaning of door and boot jambs for thoroughness.",
                "Paint enhancement for a glossy and refined appearance.",
                "Stage 1 Cut & Polish to erase swirls and scratches.",
                "Dressing of exterior rubbers and plastics for a sleek finish.",
                "Tire dressing for a polished and professional touch."
            ],
            video: "",
            note: [
                "Access to electricity and water is required during the service since the technician does not supply these facilities.",
                "Please note that any extra services beyond the standard package may result in additional fees."
            ]
        },

        {
            id: 8,
            serviceName: "Headlight Restoration & Rejuvenation",
            price: {
                hatch: "$99",
                sedan: "$99",
                smallSuv: "$99",
                largeSuv: "$99"
            },
            description: "",
            services: [
                "Thorough cleaning and inspection of headlights.",
                "Identification of imperfections such as oxidation and scratches.",
                "Specialized techniques and professional-grade products used for restoration.",
                "Removal of oxidation, scratches, and discoloration.",
                "Restoration of clarity and brightness to headlights.",
                "Improved visibility and safety on the road.",
                "Enhancement of overall appearance of the vehicle."
            ],
            video: "",
            note: [
                "Access to electricity and water is required during the service since the technician does not supply these facilities.",
                "Please note that any extra services beyond the standard package may result in additional fees."
            ]
        },
    ]
