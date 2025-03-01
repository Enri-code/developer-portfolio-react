import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import {
    // FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaBlogger,
    FaGlobe,
} from 'react-icons/fa';

import {
    FaUpwork
} from 'react-icons/fa6';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));

    const classes = useStyles();

//     const Techsalis = <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
//         width="36" height="36" viewBox="0 0 36 36"
//         // style={{padding: '5px'}}
//         className='landing--social' aria-label='TechSalis' alt="TechSalis"
//         preserveAspectRatio="xMidYMid meet">
//         <g transform="translate(0.000000,36) scale(0.012,-0.012)"
//             fill={theme.secondary} stroke="none">
//             <path d="M730 2971 c-182 -6 -225 -10 -280 -29 -156 -52 -295 -169 -367 -308
//    -63 -122 -77 -180 -77 -324 -1 -112 2 -134 28 -214 75 -229 248 -381 498 -438
//    116 -26 132 -22 168 48 14 27 48 80 77 118 57 74 62 86 36 86 -62 1 -286 31
//    -324 45 -62 21 -111 65 -153 134 -98 160 -81 344 44 484 59 67 126 104 225
//    125 17 3 395 6 840 6 895 1 988 -4 1078 -52 72 -38 125 -95 160 -170 30 -63
//    32 -73 32 -182 -1 -106 -3 -119 -28 -168 -55 -106 -157 -180 -284 -207 -56
//    -12 -130 -14 -408 -9 -242 5 -375 3 -460 -5 -326 -34 -527 -142 -618 -332 -20
//    -41 -39 -85 -42 -99 -6 -23 -5 -23 14 5 58 87 210 104 270 31 18 -22 25 -20
//    63 14 42 39 118 75 205 98 61 15 115 17 503 14 465 -3 518 1 643 48 143 54
//    288 185 357 322 99 198 92 408 -21 628 -88 171 -247 278 -474 320 -70 13
//    -1369 21 -1705 11z"/>
//             <path d="M934 1390 c-11 -4 -34 -24 -52 -44 l-32 -37 0 -197 c0 -178 2 -200
//    20 -229 52 -86 182 -88 245 -5 18 25 20 45 23 222 2 181 1 197 -18 228 -38 61
//    -120 89 -186 62z"/>
//             <path d="M1962 1360 c-64 -39 -67 -57 -67 -420 0 -311 -1 -328 -23 -392 -45
//    -133 -157 -232 -299 -264 -176 -39 -329 31 -409 188 -28 54 -54 156 -54 210 0
//    47 -11 54 -40 23 -55 -59 -157 -48 -218 24 l-22 26 6 -60 c23 -242 58 -347
//    153 -463 72 -90 243 -188 379 -218 343 -76 704 161 779 513 24 111 24 718 0
//    775 -19 45 -69 78 -117 78 -19 0 -50 -9 -68 -20z"/>
//         </g>
//     </svg>;


    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.upwork && (
                            <a
                                href={socialsData.upwork}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaUpwork
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Upwork'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {socialsData.youtube && (
                            <a
                                href={socialsData.youtube}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaYoutube
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='YouTube'
                                />
                            </a>
                        )}
                        {socialsData.blogger && (
                            <a
                                href={socialsData.blogger}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaBlogger
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Blogger'
                                />
                            </a>
                        )}
                        {socialsData.website && (
                            <a
                                href={socialsData.website}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGlobe
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Website'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.secondary,
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.desciption}</p>

                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Button className={classes.resumeBtn}>
                                        Download CV
                                    </Button>
                                </a>
                            )}
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <Button className={classes.contactBtn}>
                                    Contact
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
