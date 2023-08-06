"use client"

import React from 'react'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Page({ params }) {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [plus, setPlus] = useState(null)


    const API = "https://wordnewsuz.pythonanywhere.com/api/v1/"
    const API_product = `category/${params.docs}`
    const API_news = "get_category/"
    useEffect(() => {
        setLoading(true)
        fetch(`${API}${API_product}`, { cache: 'force-cache' }) // delete { cache: 'force-cache' }
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
        fetch(`${API}${API_news}`, { cache: 'force-cache' }) // delete { cache: 'force-cache' }
            .then((res) => res.json())
            .then((plus) => {
                setPlus(plus)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p >Loading...</p>
    if (!data || !plus) return <p >Error 404 <Link href="/">main page</Link> 😉</p>

    const dataNavigation = plus.map((item, index) => {
        return (
            <li key={index} className="content-wrapper-category-item">
                <Link href={`${item.id}`} className="content-wrapper-category-link">{item.name}</Link>
            </li>
        )
    })

    const dataNews = data.news_items
    const dat = dataNews.map((item, index) => {
        const truncateString = (string = '', maxLength = 50) =>
            string.length > maxLength
                ? `${string.substring(0, maxLength)}…`
                : string
        let itemText = truncateString(item.text, 30)
        let itemTitle = truncateString(item.title, 45)
        return <div key={index} className="content-wrapper-article-blog">
            <div className="content-wrapper-image-blog">
                <input type="image" className='content-wrapper-blog-img' src={item.image_url} alt="logo" />
            </div>
            <div className="content-wrapper-title-blog">
                <Link href={`/docs/pages/${params.docs}/${item.id}`}>
                    <h4 className="content-wrapper-blog-title">{itemTitle}</h4>
                </Link>
                <div className="content-wrapper-card-article-data">
                    <span className='content-wrapper-card-article-data-logo-text'>Photo</span>
                    <span className='content-wrapper-card-article-data-text'>{item.created_at}</span>
                </div>
                <p className="content-wrapper-blog-text">{itemText}</p>
            </div>
        </div>
    })
    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <div className='content-wrapper-category-article'>
                        {dat}
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}