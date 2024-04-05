import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import MoviePage from "./pages/Movies/MoviePage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

/* 
3.Route 구성하기
react dom, react router dom 설치
bootstrap, react bootstrap 설치
axios 설치
react query, devtools 설치

페이지 구성 및 주소
홈페이지 /
영화 전체보여주는 페이지 (서치) /movies
영화 디테일 페이지 /movies/:id

<Route index/>는 부모의 path를 그대로 받는다는 뜻이다
*/

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="movies">
          <Route index element={MoviePage} />
          <Route path=":id" element={MovieDetailPage} />
        </Route>
      </Route>
      <Route path="*" element={NotFoundPage} />
    </Routes>
  );
}

export default App;
