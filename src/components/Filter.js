// import React, { Component } from 'react';
import React from 'react';

const Filter = (props) => {
  // console.log("Filter props are: ", props)

    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" onChange={props.handleChange} value={props.songSearch} />
      </div>
    );
  }

export default Filter;
