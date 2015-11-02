var React = require('react');
var Grid = require('./Grid');
var AddButton = require('./AddButton');
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LinkActions from '../actions/links';

var Controller = React.createClass({
    propTypes: {
        links: React.PropTypes.array.isRequired,
        actions: React.PropTypes.object.isRequired
    },

    render: function(){
        return (
            <div>
                <Grid links={this.props.links} />
                <AddButton addLink={this.props.actions.addLink} />
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        links: state.links
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(LinkActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Controller);
