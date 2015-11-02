var React = require('react');
const FloatingActionButton = require('material-ui/lib/floating-action-button');
const TextField = require('material-ui/lib/text-field');
const FontIcon = require('material-ui/lib/font-icon');
const Dialog = require('material-ui/lib/dialog');
var AddBookmark = require('./AddBookmark');

var AddButton = React.createClass({

    getInitialState: function() {
        return {
            bookmarksTree: {},
        }
    },

    getBookmarks: function() {
        chrome.bookmarks.getTree(newTree =>
            this.setState({bookmarksTree: newTree})
        );
    },

    handleAdd: function() {
        this.refs.addDialog.show()
    },

    render: function(){
        let standardActions = [
            { text: 'Cancel' },
            { text: 'Submit', onTouchTap: this._onDialogSubmit, ref: 'submit' }
        ];
        return (
            <div>
                <div className="add-button">
                    <FloatingActionButton onClick={this.handleAdd}>
                        <FontIcon className="material-icons">add</FontIcon>
                    </FloatingActionButton>
                </div>
                <Dialog
                    title="Add New Link"
                    actions={standardActions}
                    actionFocus="submit"
                    modal={this.state.modal}
                    autoScrollBodyContent={true}
                    ref='addDialog'
                >
                    <AddBookmark />
                </Dialog>
            </div>
        );
    }
});

module.exports = AddButton;
