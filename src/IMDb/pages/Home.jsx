// import { useEffect, useState } from "react"
import React from "react"

import { useEffect, useState } from "react" //


//components
import Header from "../Component/common/Header";
import Banner from "../Component/Banner";
import UpNext from "../Component/UpNext";
import Slink from  "../Component/Slink";

import { categoryMovies } from "../services/Api";
import { NOWPLAYING_API_URL } from "../Constant/Constant";

import { Box, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(Box)`
display:flex;
padding: 20px 0;
`;

const Component = styled(Box)`
padding:0 115px;
`

const Home = () => {
      


    const [movies, setMovies] = useState([]);

    


    useEffect(() => {
        const getData = async () => {
            let response = await categoryMovies(NOWPLAYING_API_URL);
            // console.log(response.results)
            setMovies(response.results);
        }
        getData();
    }, [])
    return (
        <>
            <Header />
            < Component>
                <Wrapper>
                    <Banner movies={movies} />
                    <UpNext movies={movies} />
                </Wrapper>
                    <Slink movies={movies} />
                    <Slink movies={movies} />
                    <Slink movies={movies} />
                    <Slink movies={movies} />
                    <Slink movies={movies} />
                    <Slink movies={movies} />
                    <Slink movies={movies} />
            </ Component>
        </>
    )

}
export default Home