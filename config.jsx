import React from 'react';
import { FaFacebook, FaInstagram, FaMailBulk, FaLinkedin } from "react-icons/fa";



const config = {

    site: {
        titel: 'Khan Bio Tech',
        description: 'Khan Bio Tech is a leading supplier of reagents, equipment and consumables for laboratories and research centers.',
        images: '/site/logo.png',
        logo: '/site/logo.png',
        url: '/',
    },

    navbar: {
        home: {
            titel: 'Home',
            link: '/'
        },
        products: {
            title: 'Products',
            reagent: {
                title: 'Reagent',
                items: [
                    { name: 'Biochemistry Reagents', link: 'biochemistryreagents' },
                    { name: 'Serology Reagents', link: 'serologyreagents' },
                    { name: 'ELISA Reagents', link: 'elisareagents' },
                ]
            },
            equipment: {
                title: 'Equipment',
                items: [
                    { name: 'Equipment 1', link: 'equipment1' },
                    { name: 'Equipment 2', link: 'equipment2' },
                    { name: 'Equipment 3', link: 'equipment3' },
                ]
            },
            consumable: {
                title: 'Consumable',
                items: [
                    { name: 'Consumable 1', link: 'consumable1' },
                    { name: 'Consumable 2', link: 'consumable2' },
                    { name: 'Consumable 3', link: 'consumable3' },
                ]
            },
        },
        ourclient: {
            title: 'Our Client',
            url: '/ourclients',
            items: [
                { name: 'Our Clients', link: '/ourclients' },
            ]
        },
        branches: {
            title: 'Our Branches',
            url: '/branches',
            totalBranches: 10,
            items: [
                { name: 'Branch 1', link: '/branch1' },
                { name: 'Branch 2', link: '/branch2' },
                { name: 'Branch 3', link: '/branch3' },
            ]
        },

    },

    home: {
        title: 'Welcome to Khan Bio Tech',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        button: {
            name: 'Get Started',
            link: '/products'
        }
    },

    about: {
        title: 'About Us',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        button: {
            name: 'Contact Us',
            link: '/contact'
        }
    },

    contact: {
        title: 'Contact',
        phone: '1234567890',
        email: 'email@gmail.com',
        address: '123, Lorem Ipsum, Dolor Sit, Amet, Consectetur, 12345',
    },

    footer: {
        title: 'Khan Bio Tech',
        link: '/',
        about: {
            name: 'About',
            link: '/about'
        },
        services: {
            name: 'Services',
            link: '/services'
        },
        blog: {
            name: 'Blog',
            link: '/blog'
        },
        social: {
            facebook: {
                name: 'Facebook',
                link: 'https://www.facebook.com/'
            },
            twitter: {
                name: 'Twitter',
                link: 'https://www.twitter.com/'
            },
            linkedin: {
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/'
            },
            instagram: {
                name: 'Instagram',
                link: 'https://www.instagram.com/'
            },
        }
    },

    sociallinks: {
        facebook: {
            name: 'Facebook',
            link: 'https://www.facebook.com/',
            icon: <FaFacebook />
        },
        twitter: {
            name: 'Twitter',
            link: 'https://www.twitter.com/',
            icon: <FaMailBulk />
        },
        linkedin: {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/',
            icon: <FaInstagram />
        },
        instagram: {
            name: 'Instagram',
            link: 'https://www.instagram.com/',
            icon: <FaInstagram />
        },
    },

    slidercontent: [
        {
            title: 'Welcome to Khan Bio Tech',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            button: {
                name: 'Get Started',
                link: '/products'
            },
            image: '/site/pic-1.jpg'
        },
        {
            title: 'Welcome to Khan Bio Tech',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            button: {
                name: 'Get Started',
                link: '/products'
            },
            image: '/site/pic-1.jpg'
        },
        {
            title: 'Welcome to Khan Bio Tech',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            button: {
                name: 'Get Started',
                link: '/products'
            },
            image: '/site/pic-1.jpg'
        }
    ],

    productsContent: [
        {
            title: 'Biochemistry Reagents',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            button: {
                name: 'View More',
                link: 'biochemistryreagents'
            },
            image: '/site/pic-1.jpg'
        },
        {
            title: 'Serology Reagents',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            button: {
                name: 'View More',
                link: 'serologyreagents'
            },
            image: '/site/pic-2.jpg'
        },
        {
            title: 'ELISA Reagents',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            button: {
                name: 'View More',
                link: 'elisareagents'
            },
            image: '/site/pic-3.jpg'
        },
        {
            title: 'Equipment 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            button: {
                name: 'View More',
                link: 'equipment1'
            },
            image: '/site/pic-4.jpg'
        },
        {
            title: 'Equipment 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            button: {
                name: 'View More',
                link: 'equipment2'
            },
            image: '/site/pic-5.jpg'
        },
        {
            title: 'Equipment 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            button: {
                name: 'View More',
                link: 'equipment3'
            },
            image: '/site/pic-6.jpg'
        },
    ],

    branchContent: [
        {
            titel: 'Branch 1',
            branch: 'Branch 1',
            address: '123, Lorem Ipsum, Dolor Sit, Amet, Consectetur, 12345',
            contact: '1234567890',
            email: 'test@gmail.com'
        },
        {
            titel: 'Branch 2',
            branch: 'Branch 2',
            address: '123, Lorem Ipsum, Dolor Sit, Amet, Consectetur, 12345',
            contact: '1234567890',
            email: 'test@gmail.com'
        },
        {
            titel: 'Branch 3',
            branch: 'Branch 3',
            address: '123, Lorem Ipsum, Dolor Sit, Amet, Consectetur, 12345',
            contact: '1234567890',
            email: 'test@gmail.com'
        },
    ],

    ourClientsSlider: [
        {
            logo: '/site/pic-3.jpg',
            alt: 'Client 1'
        },
        {
            logo: '/site/pic-3.jpg',
            alt: 'Client 2'
        },
        {
            logo: '/site/pic-3.jpg',
            alt: 'Client 3'
        },
        {
            logo: '/site/pic-3.jpg',
            alt: 'Client 4'
        },
        {
            logo: '/site/pic-3.jpg',
            alt: 'Client 5'
        },
        {
            logo: '/site/pic-3.jpg',
            alt: 'Client 6'
        },
        {
            logo: '/site/pic-3.jpg',
            alt: 'Client 7'
        },
        {
            logo: '/site/pic-3.jpg',
            alt: 'Client 8'
        },
        {
            logo: '/site/pic-3.jpg',
            alt: 'Client 9'
        },
        {
            logo: '/site/pic-3.jpg',
            alt: 'Client 10'
        },
    ],

    biochemistryreagents: [
        {
            name: 'Albumin',
            packSize: '2 x 50 ml',
            test: '100 Test',
            brand: 'GB, India'
        },
        {
            name: 'Bilirubin (T & D)',
            packSize: '2 x 100 ml',
            test: '100 Test',
            brand: 'GB, India'
        },
        {
            name: 'Total Cholesterol',
            packSize: '2 x 50 ml',
            test: '100 Test',
            brand: 'GB, India'
        },
        {
            name: 'Creatinine',
            packSize: '2 x 100 ml',
            test: '200 Test',
            brand: 'GB, India'
        },
        {
            name: 'Glucose',
            packSize: '5 x 100 ml',
            test: '500 Test',
            brand: 'GB, India'
        },
        {
            name: 'Glucose',
            packSize: '1000 ml',
            test: '1000 Test',
            brand: 'GB, India'
        },
        {
            name: 'HDL Cholesterol (Direct)',
            packSize: '2 x 40 ml',
            test: '133 Test',
            brand: 'GB, India'
        },
        {
            name: 'LDL Cholesterol (Direct)',
            packSize: '2 x 40 ml',
            test: '133 Test',
            brand: 'GB, India'
        },
        {
            name: 'Total Protein',
            packSize: '2 x 50 ml',
            test: '100 Test',
            brand: 'GB, India'
        },
        {
            name: 'Triglyceride',
            packSize: '2 x 50 ml',
            test: '100 Test',
            brand: 'GB, India'
        },
        {
            name: 'Urea (Kin)',
            packSize: '2 x 50 ml',
            test: '100 Test',
            brand: 'GB, India'
        },
        {
            name: 'Uric Acid',
            packSize: '2 x 50 ml',
            test: '100 Test',
            brand: 'GB, India'
        },
        {
            name: 'Alkaline Phosphatase',
            packSize: '2 x 50 ml',
            test: '100 Test',
            brand: 'GB, India'
        },
        {
            name: 'Alpha Amylase',
            packSize: '5 x 10 ml',
            test: '50 Test',
            brand: 'GB, India'
        },
        {
            name: 'Micro Protein',
            packSize: '2 x 50 ml',
            test: '100 Test',
            brand: 'GB, India'
        },
        {
            name: 'AST/SGOT',
            packSize: '2 x 50 ml',
            test: '100 Test',
            brand: 'GB, India'
        },
        {
            name: 'ALT/SGPT',
            packSize: '2 x 50 ml',
            test: '100 Test',
            brand: 'GB, India'
        },
        {
            name: 'LDH',
            packSize: '2 x 50 ml',
            test: '100 Test',
            brand: 'GB, India'
        },
        {
            name: 'Lipase',
            packSize: '2 x 12 ml',
            test: '20 Test',
            brand: 'GB, India'
        },
        {
            name: 'Calcium',
            packSize: '2 x 50 ml',
            test: '100 Test',
            brand: 'GB, India'
        },
        {
            name: 'S. Iron',
            packSize: '2 x 50 ml',
            test: '100 Test',
            brand: 'GB, India'
        },
        {
            name: 'Inorganic Phosphorus',
            packSize: '2 x 50 ml',
            test: '100 Test',
            brand: 'GB, India'
        },
        {
            name: 'Magnesium',
            packSize: '2 x 50 ml',
            test: '100 Test',
            brand: 'GB, India'
        },
        {
            name: 'CK-MB',
            packSize: '2 X 10 ml',
            test: '20 Test',
            brand: 'GB, India'
        }
    ],
};

export { config }