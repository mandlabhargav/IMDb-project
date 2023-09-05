import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import { Box, Typography, styled } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import { useRef, useState } from 'react';



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const StyledBanner = styled('img')`
width:100%;  
margin-top : 20px;   
`;

const Title = styled(Typography)`
color:#FFFFFF;
`

const Slink = ({ movies }) => {


    return (
        <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            slidesToSlide={1}
        >
            {
                movies.map(movie => (
                    <>
                         <StyledBanner src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                         <Title>{movie.original_title}</Title>
                         <StarIcon ></StarIcon>
                         <StarIcon />
                         <StarIcon />
                         <StarHalfOutlinedIcon/>
                         <Typography>{movie.popularity}</Typography>
                    </>

                ))
            }
        </Carousel>
    )
}
export default Slink;