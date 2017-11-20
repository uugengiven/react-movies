import React, { Component } from 'react';

class Movies extends Component {
    render() {
        return <ul>{this.props.list_of_movies.map((values, i) => {
            return <li key={i}><img src={values.Poster} />{values.Title}</li>;
        })}</ul>;
    }
}

export default Movies;