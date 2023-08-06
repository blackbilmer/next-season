"use client"

import React from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react'
import Link from 'next/link';

export default function Page() {

    const [dataNavigation, setDataNavigation] = useState(null)
    const [dataNews, setDataNews] = useState(null)
    const [dataLoading, setDataLoading] = useState(false)

    const API = "https://wordnewsuz.pythonanywhere.com/api/v1/"
    const API_News = "get_all_news/"

    useEffect(() => {
        setDataLoading(true)
        fetch(`${API}${API_News}`, { cache: 'force-cache' }) // delete { cache: 'force-cache' }
            .then((res) => res.json())
            .then((data) => {
                setDataNews(data)
                setDataLoading(false)
            })
    }, [])

    if (dataLoading) return <p className="">Loading...</p>
    if (!dataNews) return <p className="">server error 404</p>
    const news = dataNews.map((item, index) => {
        const truncateString = (string = '', maxLength = 50) =>
            string.length > maxLength
                ? `${string.substring(0, maxLength)}…`
                : string
        let itemText = truncateString(item.text, 30)
        let itemTitle = truncateString(item.title, 45)
        return (
            <div key={index} className="content-wrapper-article-blog">
                <div className="content-wrapper-image-blog">
                    <input type="image" className='content-wrapper-blog-img' src={item.image_url} alt="logo" />
                </div>
                <div className="content-wrapper-title-blog">
                    <Link href={`/docs/pages/${item.category}/${item.id}`}>
                        <h4 className="content-wrapper-blog-title">{itemTitle}</h4>
                    </Link>
                    <div className="content-wrapper-card-article-data">
                        <span className='content-wrapper-card-article-data-logo-text'>Photo</span>
                        <span className='content-wrapper-card-article-data-text'>{item.created_at}</span>
                    </div>
                    <p className="content-wrapper-blog-text">{itemText}</p>
                </div>
            </div>
        )
    })

    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <div className='content-wrapper-category-article'>
                        {news}
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}








