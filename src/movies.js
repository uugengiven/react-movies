import React, { Component } from 'react';

class Movies extends Component {
    render() {
        return <div>{this.props.list_of_movies.map((values, i) => {
            return <li key={i}><img src={values.Poster} />{values.Title}</li>;
        })}</div>;
    }
}

export default Movies;