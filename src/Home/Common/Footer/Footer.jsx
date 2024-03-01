import React from 'react';
import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { config } from '../../../../config';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <aside>
                <img className='w-1/4' src={ config.site.logo } alt="" />
                <p>{ config.site.titel }<br />{ config.site.description }</p>
            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/khanbiotech22" target="_blank" rel="noreferrer" className="btn btn-square btn-ghost hover:text-green-500">
                        <FiFacebook />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="btn btn-square btn-ghost hover:text-green-500">
                        <FiLinkedin />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="btn btn-square btn-ghost hover:text-green-500">
                        <FiYoutube />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;