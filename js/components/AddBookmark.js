var React = require('react');
var classNames = require('classnames');
const FloatingActionButton = require('material-ui/lib/floating-action-button');
const TextField = require('material-ui/lib/text-field');
const FontIcon = require('material-ui/lib/font-icon');
const Dialog = require('material-ui/lib/dialog');
const RefreshIndicator = require('material-ui/lib/refresh-indicator');
const List = require('material-ui/lib/lists/list');
const ListItem = require('material-ui/lib/lists/list-item');
const LinkIcon = require('./LinkIcon');


var AddBookmark = React.createClass({

    getInitialState: function() {
        return {
            listItems: [],
            loading: true,
        }
    },

    componentDidMount: function() {
        chrome.bookmarks.getTree(newTree =>
            this.setState({
                listItems: this.constructListItems(newTree[0]),
                loading: false
            })
        );
    },

    recurseListItems: function(bookmark) {
        var nestedItems = [];

        if ('children' in bookmark) {
            for (let childBookmark of bookmark.children) {
                nestedItems.push(this.recurseListItems(childBookmark));
            }
        }

        var avatar;
        if ('url' in bookmark) {
            avatar = (
                <div className="list-icon">
                    <LinkIcon src={bookmark.url} />
                </div>
            );
        }

        return (
            <ListItem
                primaryText={bookmark.title}
                secondaryText={bookmark.url}
                nestedItems={nestedItems}
                leftAvatar={avatar}
            />
        )
    },

    constructListItems: function(bookmarksTree) {
        var listItems = [];

        for (let childBookmark of bookmarksTree.children) {
            listItems.push(this.recurseListItems(childBookmark));
        }

        return listItems;
    },

    render: function(){
        var content;
        if (this.state.loading) {
            content = (
                <span className="loading-container">
                    <RefreshIndicator
                        size={40}
                        left={0}
                        top={0}
                        percentage={90}
                        status={"ready"}
                    />
                </span>
            )
        }
        else {
            content = this.state.listItems;
        }

        return (
            <div className="add-bookmark">
                <List className="list">
                    {content}
                </List>
            </div>
        );
    }
});

module.exports = AddBookmark;
