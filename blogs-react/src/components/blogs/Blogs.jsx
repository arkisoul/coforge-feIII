import React, { Component } from "react";
import { fetchAllPosts, createPost } from "../../services/posts";
import { BlogComponent } from "../blog/Blog";
import "./Blogs.css";

export class Blogs extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      blogs: [],
      time: new Date(),
      title: '',
      desc: '',
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
      const res = await fetchAllPosts();
      this.setState({ blogs: res.data })
    } catch (error) {
      console.error(error)
    }
  }

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
      const res = await createPost({ title: this.state.title, desc: this.state.desc });
      const updatedBlogs = [...this.state.blogs, res.data];
      this.setState({
        blogs: updatedBlogs,
        title: "",
        desc: "",
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }
  
  handleDescChange = (e) => {
    this.setState({ desc: e.target.value })
  }

  render() {
    return (
      <section className="blogs-container">
        <h2>Blogs | {this.state.time.toLocaleString()}</h2>
        {this.state.blogs.map((blog) => (
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
