var React = require('react');
const Avatar = require('material-ui/lib/avatar');

var LinkIcon = React.createClass({

    getFavicon: function() {
        // TODO - high-res icons:
        // http://icons.better-idea.org/api/icons?pretty=yes&url=<url>
        return (
            'https://plus.google.com/_/favicon?domain_url=' +
            this.props.src
        );
    },

    render: function(){
        return (
            <Avatar>
                <img
                    draggable={false}
                    src={this.getFavicon()}
                />
            </Avatar>
        );
    }
});

module.exports = LinkIcon;
