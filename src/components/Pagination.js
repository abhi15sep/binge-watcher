import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  height: 80px;
  color: ${props => props.theme.colors.primary};
`

const PrimaryButton = styled.button`
  cursor: pointer;
  outline: none;
  border: 1px solid transparent;
  display: block;
  padding: 8px 20px;
  border-radius: 15px;
  font-family: 'Source Sans Pro', 'Roboto', sans-serif;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  transition: 0.2s;

  :disabled {
    opacity: 0;
    display: none;
  }

  :hover:enabled {
    border: 1px solid rgba(0,0,0,0.2);
    background: transparent;
    color: ${props => props.theme.colors.text};
    transform: scale(1.1);
  }
`

const Pagination = ({ fetchData, page, totalPages, query = ''}) => {

  return (
    <PaginationContainer>
      <PrimaryButton 
        onClick={() => query ? fetchData(page - 1, query) : fetchData(page - 1)}
        disabled={page === 1 ? true : false}
      >
        {`page ${page - 1}`}
      </PrimaryButton>
      {page} / {totalPages}
      <PrimaryButton 
        onClick={() => query ? fetchData(page + 1, query) : fetchData(page + 1)}
        disabled={page === totalPages ? true : false}
      >
        {`page ${page + 1}`}
      </PrimaryButton>
    </PaginationContainer>
  )
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  query: PropTypes.string,
  fetchData: PropTypes.func.isRequired
}

export default Pagination