import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions'
import Pagination from '../components/Pagination'
import MoviesList from '../components/MoviesList'
import Spinner from '../components/Spinner'
import styled from 'styled-components'

const MoviesPageContainer = styled.div`
  width: 90%;
  margin: 0 auto
`

const MoviesPage = ({ movies, fetchMovies }) => {

  const { page, total_pages, results, error, loading } = movies

  useEffect(() => {
    fetchMovies()
  }, [])

  if (loading === true) {
    return <Spinner size={100} loading={loading} />
  } else if (error) {
    return <h1>{error}</h1>
  } else {
    return (
      <MoviesPageContainer>
        <Pagination fetchData={fetchMovies} page={page} totalPages={total_pages} />
        <MoviesList data={results} />
        <Pagination fetchData={fetchMovies} page={page} totalPages={total_pages} />
      </MoviesPageContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
})

const mapDispatchToProps = {
  fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)