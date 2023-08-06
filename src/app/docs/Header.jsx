"use client"

import React from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react'
import Link from 'next/link';

import Page from './page.jsx'


export default function Header() {

    const [dataNavigation, setDataNavigation] = useState(null)
    const [dataNews, setDataNews] = useState(null)
    const [dataLoading, setDataLoading] = useState(false)

    const API = "https://wordnewsuz.pythonanywhere.com/api/v1/"
    const API_Navigation = "get_category"
    const API_News = "get_all_news/"

    useEffect(() => {
        setDataLoading(true)
        fetch(`${API}${API_Navigation}`, { cache: 'force-cache' }) // delete { cache: 'force-cache' }
            .then((res) => res.json())
            .then((data) => {
                setDataNavigation(data)
                setDataLoading(false)
            })
        fetch(`${API}${API_News}`, { cache: 'force-cache' }) // delete { cache: 'force-cache' }
            .then((res) => res.json())
            .then((data) => {
                setDataNews(data)
                setDataLoading(false)
            })
    }, [])

    if (dataLoading) return <p className="">Loading...</p>
    if (!dataNews) return <p className="">server error 404</p>
    if (!dataNavigation) return <p className="">server error 404</p>





    console.log(dataNews);
    console.log(dataNavigation);

    const navigation = dataNavigation.map((item, index) => {
        return <li key={index} className="content-wrapper-category-item">
            <Link href={`/docs/pages/${item.id}`} className="content-wrapper-category-link">{item.name}</Link>
        </li>
    })
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
                    <Link href={`/docs/${item.category}/${item.id}`}>
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
        <React.Fragment>
            <section className='content-wrapper'>
                <div className='content-wrapper-category'>
                    <h4 className="content-wrapper-category-title" >Category</h4>
                    <ul className="content-wrapper-category-list">
                        <li className="content-wrapper-category-item">
                            <Link href="/docs" className="content-wrapper-category-link">All News</Link>
                        </li>
                        {navigation}
                    </ul>
                </div>
            </section>
        </React.Fragment>
    )
}
