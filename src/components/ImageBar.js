import { useEffect } from 'react'
import Images from './Images'
import { useState } from 'react';
import Navbar from './Navbar';
import './Search.css'

export default function ImageBar(props) {
    const [articles, setArticles] = useState([]);
    const [inputValue, setinputValue] = useState('');
    const [category, setCategory] = useState('general');
    const [q, setQ] = useState('general');
    const [page, setPage] = useState(1);
    const perPage = 24;
    let apiKey = process.env.REACT_APP_PIXABAY_API_KEY;

    const updatePicture = async () => {
        let url = `https://pixabay.com/api/?key=${apiKey}&q=${q}&image_type=photo&category=${category}&page=${page}&per_page=${perPage}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.hits);
    }
    useEffect(() => {
        updatePicture();

    },)
    const handleChange = (e) => {
        setinputValue(e.target.value);
    }
    const handleClick = () => {
        setCategory(inputValue);
        setQ(inputValue);
    }
    const handlePrevious = () => {
        setPage(page - 1);
        updatePicture();

    }
    const handleNext = () => {
        setPage(page + 1);
        updatePicture();
    }


    return (
        <>
            <div class='newone'>
                <Navbar />
                <div class="container ">

                    <div class="row height d-flex justify-content-center align-items-center">

                        <div class="col-md-8">

                            <div class="search">
                                <i class="fa fa-search"></i>
                                <input type="text" class="form-control" onChange={handleChange} value={inputValue} placeholder="Search your Category" />
                                <button class="btn btn-primary" onClick={handleClick} type='submit'>Search</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div class="container-fluid" style={{ paddingLeft: '45px' }} >
                <div className="row" style={{ padding: '40px', margin: '40px 0px 24px', }} >
                    {articles.map((element) => {
                        return <div className="col-md-3" key={element.id}><Images imageUrl={element.webformatURL} user={element.user} mainPage={element.pageURl} /></div>
                    })}
                </div>
                <div className=" container-fluid d-flex justify-content-between">
                    <button disabled={page === 1 ? true : false} onClick={handlePrevious} type="button" class="btn btn-dark">&larr; Previous</button>
                    <button onClick={handleNext} type="button" class="btn btn-dark">Next &rarr;</button>
                </div>
            </div>


        </>
    )
}