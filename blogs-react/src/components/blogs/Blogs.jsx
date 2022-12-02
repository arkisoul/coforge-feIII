import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllPosts, createPost } from "../../services/posts";
import {
  fetchAllBlogsStart,
  fetchAllBlogsFailed,
  fetchAllBlogs,
} from "../../app/blogs/blogs.action.types";
import { BlogComponent } from "../blog/Blog";
import "./Blogs.css";

class BlogsComponent extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      time: new Date(),
      title: "",
      desc: "",
    };
    this.intervalId = null;
    this.titleRef = React.createRef(null);
    this.descRef = React.createRef(null);
    // this.changeTitle = this.changeTitle.bind(this);
  }

  componentDidMount() {
    this.getAllBlogs();
    console.log("componentDidMount");
    this.intervalId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log("componentWillUnmount");
  }

  getAllBlogs = async () => {
    try {
      this.props.fetchAllBlogStart();
      const res = await fetchAllPosts();
      this.props.fetchAllBlogSuccess(res.data);
      // this.setState({ blogs: res.data });
    } catch (error) {
      console.error(error);
      this.props.fetchAllBlogsFailed(error);
    }
  };

  // changeTitle = async (value) => {
  //   await this.setState({ title: value });
  //   this.props.fetchChildData(this.state.title)
  // };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.title !== nextState.title
  // }

  handleAddBlog = async (e) => {
    e.preventDefault();
    // const title = document.getElementById('title').value;
    // const title = this.titleRef.current.value;
    // const desc = document.getElementById('desc').value;
    // const desc = this.descRef.current.value;
    try {
      const res = await createPost({
        title: this.state.title,
        desc: this.state.desc,
      });
      const updatedBlogs = [...this.state.blogs, res.data];
      this.setState({
        blogs: updatedBlogs,
        title: "",
        desc: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleDescChange = (e) => {
    this.setState({ desc: e.target.value });
  };

  render() {
    return (
      <section className="blogs-container">
        <h2>Blogs | {this.state.time.toLocaleString()}</h2>
        {this.props.blogsFromStore.map((blog) => (
          <BlogComponent
            blog={blog}
            version="1.0.0"
            key={`blog-list-${blog.id}`}
          />
        ))}
        <form action="" className="add-blog">
          <div className="form-group">
            <label htmlFor="title"></label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Blog title"
              ref={this.titleRef}
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc"></label>
            <textarea
              name="desc"
              id="desc"
              cols="30"
              rows="10"
              placeholder="Blog description"
              ref={this.descRef}
              value={this.state.desc}
              onChange={this.handleDescChange}
            ></textarea>
          </div>
          <button type="submit" onClick={this.handleAddBlog}>
            Submit
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogsFromStore: state.blogs.blogs,
    isLoading: state.blogs.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllBlogStart: () => dispatch(fetchAllBlogsStart()),
    fetchAllBlogSuccess: (abc) => dispatch(fetchAllBlogs(abc)),
    fetchAllBlogsFailed: (error) => dispatch(fetchAllBlogsFailed(error))
  };
};

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps);
export const Blogs = ConnectedComponent(BlogsComponent);
// export const Blogs = connect(mapStateToProps, mapDispatchToProps)(BlogsComponent);
