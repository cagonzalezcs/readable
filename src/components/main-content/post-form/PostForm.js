import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class PostFormComponent extends Component {
    state = {
        author: "",
        title: "",
        body: "",
        category: ""
    }

    componentDidMount() {
        if( this.props.post !== undefined ) {
            this.setState({
                author: this.props.post.author,
                title: this.props.post.title,
                body: this.props.post.body,
                category: this.props.post.category
            });
        }
    }

    componentWillReceiveProps( nextProps ) {
        if( nextProps.post !== undefined ) {
            this.setState({
                author: nextProps.post.author,
                title: nextProps.post.title,
                body: nextProps.post.body,
                category: nextProps.post.category
            });
        }
    }

    selectCategory = ( event ) => {
        this.setState({
            category: event.target.value
        });
    }

    cancelCurrentAction = ( event ) => {
        event.preventDefault();
        if( this.props.history.action === 'PUSH' ) {
            this.props.history.goBack();
        } else {
            this.props.history.push("/");
        }
    }

    userInputChange( event ) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render () {

        const { onFormSubmit, formTitle } = this.props;
        const { categories } = this.props.categories;

        return (
            <div className="form-wrapper">
                <form className="post-form" onSubmit={ onFormSubmit }>
                    <div className="form-title">
                        <h1>{ formTitle }</h1>
                    </div>
                    <div className="form-body">
                        <div className="input-group">
                            <label htmlFor="title">Post Title</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="input-item"
                                placeholder="Enter Post Title"
                                value={ this.state.title }
                                onChange={ event => this.userInputChange( event ) }
                                required />
                        </div>
                        <div className="input-group-wrapper">
                            <div className="input-group">
                                <label htmlFor="author">Author</label>
                                <input
                                    type="text"
                                    name="author"
                                    id="author"
                                    className="input-item"
                                    placeholder="Enter Username"
                                    autoComplete="name"
                                    value={ this.state.author }
                                    onChange={ event => this.userInputChange( event ) }
                                    required />
                            </div>
                            <div className="input-group">
                                <span className="category-title">Category</span>
                                <div className="category-items">
                                    { categories !== undefined && categories.map( category => (
                                        <label
                                            htmlFor={ ( category.name ) + "-id" }
                                            key={ category.path }
                                            onClick={ this.selectCategory }
                                            className={ "cat-label" + (
                                                this.state.category === category.name ? " active" : ""
                                            )}>
                                            <input
                                                type="radio"
                                                name="category"
                                                id={ ( category.name ) + "-id" }
                                                value={ category.name }/>
                                            { category.name }
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="body">Post Content</label>
                            <textarea
                                name="body"
                                className="input-item"
                                rows="5"
                                placeholder="Enter Post Content"
                                value={ this.state.body }
                                onChange={ event => this.userInputChange( event ) }
                                required>
                            </textarea>
                        </div>
                    </div>
                    <div className="form-footer">
                        <button
                            className="cancel-button"
                            onClick={ this.cancelCurrentAction }>
                            Cancel
                        </button>
                         <input
                            type="submit"
                            value="Save Post"
                            className="save-button"
                            disabled={ ! this.state.category } />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ categories }) => ({
    categories
});

export default withRouter( connect(mapStateToProps)(PostFormComponent) );