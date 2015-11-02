var React = require('react');
const LinkIcon = require('./LinkIcon');

var Link = React.createClass({

    render: function(){
        return (
            <div className={'link'}>
                <div className="link-icon-container">
                    <LinkIcon src={this.props.link.url} />
                </div>
                <div className="link-name-container">
                    <div className="link-name">{this.props.link.name}</div>
                </div>
            </div>
        );
    }
});

module.exports = Link;
