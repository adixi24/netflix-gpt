import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggesions from './GptMovieSuggesions'
import {PG_URL} from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src={PG_URL}
          alt="logo"
        />
      </div>
        <GptSearchBar />
        <GptMovieSuggesions />
    </div>
  )
}

export default GptSearch