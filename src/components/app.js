import React from 'react';
var search = require('youtube-search');

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        results: "",
        opts: {
            maxResults: 10,
            key: 'AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU'
          }
      };
      this.getResults = this.getResults.bind(this);
    }

    componentDidMount() {
      this.getResults();
    }

    render() {
        return (
            <div>
                <h1>React ToDos App</h1>
                <h2>hi {this.state.results}</h2>
            </div>
        );
    }

    getResults() {
      var that = this;
      var getSearches = search('deadmau5', this.state.opts, function(err, qresults) {
        if(err) return console.log(err);
        that.setState({
          results: qresults[0].description
        })
      });
    }
}
