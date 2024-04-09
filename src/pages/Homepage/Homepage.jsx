import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import TopRatedMoviesSlide from "./components/TopRatedMoviesSlide/TopRatedMoviesSlide";
import UpcomingMoviesSlide from "./components/UpcomingMoviesSlide/UpcomingMoviesSlide";

/* 
1. 배너만들기 => popular 영화를 들고와서 첫번째 아이템을 보여주자
2. popular movie 가져오기
3. top rated movie 가져오기
4. upcoming movie 가져오기
*/

const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMoviesSlide />
      <UpcomingMoviesSlide />
    </div>
  );
};

export default Homepage;
