import logo from './public/logo.png';


const config = {

    site: {
        titel: 'Khan Biotech',
        description: 'Khan Bio Tech is a leading supplier of reagents, equipment and consumables for laboratories and research centers.',
        images: '/site/logo.png',
        url: '/',
        logo: logo,
    },

    navbar: {
        links: [
            {
                name: 'Home',
                url: '/',
            },
            {
                name: 'About',
                url: '/about',
            },
            {
                name: 'Contact',
                url: '/contact',
            },
        ],
    },

    navbarsubmenu: {
        links: [
            {
                name: 'Biochemistry Reagents',
                url: '/biochemistryreagents',
            },
            {
                name: 'Serology Reagents',
                url: '/serologyreagents',
            },
            {
                name: 'ELISA Reagents',
                url: '/elisareagents',
            },
            {
                name: 'Device & Strips',
                url: '/deviceandstrips',
            },
            {
                name: "Consumable & Accessories",
                url: '/consumableandaccessories',
            },
            {
                name: "Machine & Equipment",
                url: '/machinesandequipment',
            }
        ],
    },

    slidercontent: [
        {
            title: 'Hematology Analyzer 5 Part, Dymind DF 50',
            button: {
                name: 'Get Started',
                link: '/products'
            },
            image: '/slider/slider-1.jpg'
        },
        {
            title: 'Hematology Analyzer 3 Part, Rayto RT7600',
            button: {
                name: 'Get Started',
                link: '/products'
            },
            image: '/slider/slider-2.jpg'
        },
        {
            title: 'Hematology Analyzer 3 Part, Promax 30',
            button: {
                name: 'Get Started',
                link: '/products'
            },
            image: '/slider/slider-3.jpg'
        },
        {
            title: 'Hematology Analyzer 3 Part, DYMIND DH 36',
            image: '/slider/slider-4.jpg'
        },
        {
            title: 'Electrolyte Analyzer , Promax4000',
            image: '/slider/slider-5.jpg'
        }
    ],

    ourClienst: [
        {
            name: 'John Doe',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            company: 'Khan Bio Tech',
            image: '/site/pic-1.jpg'
        },
        {
            name: 'John Doe',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            company: 'Khan Bio Tech',
            image: '/site/pic-1.jpg'
        },
        {
            name: 'John Doe',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            company: 'Khan Bio Tech',
            image: '/site/pic-1.jpg'
        },
    ],

    homeProducts: [
        {
            name: 'Product 1',
            brand: 'Brand 1',
            image: '/site/pic-1.jpg',
            link: '/product/1'
        },
        {
            name: 'Product 2',
            brand: 'Brand 2',
            image: '/site/pic-2.jpg',
            link: '/product/2'
        },
        {
            name: 'Product 3',
            brand: 'Brand 3',
            image: '/site/pic-3.jpg',
            link: '/product/3'
        },
        {
            name: 'Product 4',
            brand: 'Brand 4',
            image: '/site/pic-4.jpg',
            link: '/product/4'
        },
    ],

    testimonials: [
        {
            name: 'John Doe',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            company: 'Khan Bio Tech',
            degination: 'CEO',
            rating: 3.5,
            image: '/site/pic-1.jpg'
        },
        {
            name: 'John Doe',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            company: 'Khan Bio Tech',
            degination: 'CEO',
            rating: 4,
            image: '/site/pic-1.jpg'
        },
        {
            name: 'John Doe',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            company: 'Khan Bio Tech',
            degination: 'CEO',
            rating: 5,
            image: '/site/pic-1.jpg'
        },
        {
            name: 'John Doe',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            company: 'Khan Bio Tech',
            degination: 'CEO',
            rating: 3,
            image: '/site/pic-1.jpg'
        },
        {
            name: 'John Doe',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            company: 'Khan Bio Tech',
            degination: 'CEO',
            rating: 2,
            image: '/site/pic-1.jpg'
        },
    ],

};

export { config }