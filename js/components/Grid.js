var React = require('react');
//var ReactGridLayout = require('react-grid-layout');
var _ = require('lodash');
var Link = require('./Link');

const COLUMNS = 10;

var Grid = React.createClass({
    propTypes: {
        links: React.PropTypes.array.isRequired,
   },

    getInitialState() {
        return {
            rowHeight: window.innerWidth / COLUMNS
        };
    },

    componentDidMount: function() {
        window.addEventListener('resize', this.handleResize);
    },

    componentWillUnmount: function() {
        window.removeEventListener('resize', this.handleResize);
    },

    handleResize: function(e) {
        this.setState({
            rowHeight: window.innerWidth / COLUMNS
        });
    },

    constructLinks: function() {
        var links = [];
        for (let link of this.props.links) {
            var key = links.length + 1;
            links.push(
                <div
                    key={key}
                    _grid={{x: 1, y: 1, w: 1, h: 1}}
                >
                    <Link link={link} />
                </div>
            );
        }
        return links;
    },

    render: function(){
        //return (
        //    <ReactGridLayout
        //        className="layout"
        //        isResizable={false}
        //        verticalCompact={false}
        //        cols={10}
        //        autoSize={false}
        //        margin={[20, 20]}
        //        rowHeight={this.state.rowHeight}
        //        onLayoutChange={function() {console.log('layout', arguments);}}
        //    >
        //        {this.constructLinks()}
        //    </ReactGridLayout>
        //);
        return null;
    }
});

module.exports = Grid;
