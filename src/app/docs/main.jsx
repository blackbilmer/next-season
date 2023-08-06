"use client"

import React from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react'
import Link from 'next/link';
import logo_1 from '../logo_1.jpg'
import logo_2 from '../logo_2.jpg'
import logo_3 from '../logo_3.jpg'
import logo_4 from '../logo_4.jpg'
import Image from 'next/image';

import Page from './page.jsx'




export default function Main() {
    
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    
    return (
        <React.Fragment>
            <section className='content-wrapper'>
                <div className="container">
                    <Box sx={{ flexGrow: 1, mb: 4 }} className="" >
                        <Grid container spacing={2} className="content-wrapper-box">
                            <Grid item xs={8} className='content-wrapper-grid'>
                                <Item className='content-wrapper-header'>
                                    <Image type="image" src={logo_1} className='content-wrapper-logo' alt="" />
                                    <div className="content-wrapper-logo-back"></div>
                                    <div className="content-wrapper-header-content">
                                        <span className='content-wrapper-header-span'>global news</span>
                                        <h2 className="content-wrapper-header-title">GLOBAL PANDEMIC</h2>
                                        <h2 className="content-wrapper-header-title">Coronavirus Outbreak LIVE Updates: ICS, CBS Exams Postponed, 168 Trains</h2>
                                        <div className="content-wrapper-card-article-data">
                                            <span className='content-wrapper-card-article-data-logo-text'>Photo</span>
                                            <span className='content-wrapper-card-article-data-text'>10 Minutes ago</span>
                                        </div>
                                    </div>
                                </Item>
                            </Grid>
                            <Grid item xs={3.6} className='content-wrapper-card'>
                                <h5 className="content-wrapper-card-title">Latest news</h5>
                                <Grid item xs={12} className='content-wrapper-card-grid'>
                                    <Item className='content-wrapper-card-items'>
                                        <div className="content-wrapper-card-article">
                                            <h6 className="content-wrapper-card-article-title">Virus Kills Member Of Advising Iran’s Supreme</h6>
                                            <div className="content-wrapper-card-article-data">
                                                <span className='content-wrapper-card-article-data-logo-text'>Photo</span>
                                                <span className='content-wrapper-card-article-data-text'>10 Minutes ago</span>
                                            </div>
                                        </div>
                                        <div className="content-wrapper-card-logo-blog">
                                            <Image type="image" src={logo_2} className='content-wrapper-card-logos' alt="logo" />
                                        </div>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} className='content-wrapper-card-grid'>
                                    <Item className='content-wrapper-card-items'>
                                        <div className="content-wrapper-card-article">
                                            <h6 className="content-wrapper-card-article-title">Virus Kills Member Of Advising Iran’s Supreme</h6>
                                            <div className="content-wrapper-card-article-data">
                                                <span className='content-wrapper-card-article-data-logo-text'>Photo</span>
                                                <span className='content-wrapper-card-article-data-text'>10 Minutes ago</span>
                                            </div>
                                        </div>
                                        <div className="content-wrapper-card-logo-blog">
                                            <Image type="image" src={logo_3} className='content-wrapper-card-logos' alt="logo" />
                                        </div>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} className='content-wrapper-card-grid'>
                                    <Item className='content-wrapper-card-items'>
                                        <div className="content-wrapper-card-article">
                                            <h6 className="content-wrapper-card-article-title">Virus Kills Member Of Advising Iran’s Supreme</h6>
                                            <div className="content-wrapper-card-article-data">
                                                <span className='content-wrapper-card-article-data-logo-text'>Photo</span>
                                                <span className='content-wrapper-card-article-data-text'>10 Minutes ago</span>
                                            </div>
                                        </div>
                                        <div className="content-wrapper-card-logo-blog">
                                            <Image type="image" src={logo_4} className='content-wrapper-card-logos' alt="logo" />
                                        </div>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </section>
        </React.Fragment>
    )
}
