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
                    { name: 'Biochemistry Reagents', link: '/biochemistryreagents' },
                    { name: 'Serology Reagents', link: '/serologyreagents' },
                    { name: 'ELISA Reagents', link: '/elisareagents' },
                ]
            },
            equipment: {
                title: 'Equipment',
                items: [
                    { name: 'Equipment 1', link: '/equipment1' },
                    { name: 'Equipment 2', link: '/equipment2' },
                    { name: 'Equipment 3', link: '/equipment3' },
                ]
            },
            consumable: {
                title: 'Consumable',
                items: [
                    { name: 'Consumable 1', link: '/consumable1' },
                    { name: 'Consumable 2', link: '/consumable2' },
                    { name: 'Consumable 3', link: '/consumable3' },
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
};

export { config }