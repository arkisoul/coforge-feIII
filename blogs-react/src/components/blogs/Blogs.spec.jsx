import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../../store/store";
import { Blogs } from "./Blogs";

describe("Blogs component", () => {
  it("should render a blog list", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Blogs />
        </Provider>
      </BrowserRouter>
    );
    const blogItems = await screen.findAllByTestId("blog-item");
    blogItems.forEach((blogItem) => expect(blogItem).toBeInTheDocument());
  });

  it("should render add blog form", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Blogs />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByLabelText("Blog Title")).toBeInTheDocument();
    expect(screen.getByLabelText("Blog Description")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Blog title")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Blog description")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("should update display value of form", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Blogs />
        </Provider>
      </BrowserRouter>
    );
    const titleField = screen.getByPlaceholderText("Blog title");
    fireEvent.change(titleField, {
      target: { value: "Angular is an Awesome Framework" },
    });
    expect(
      screen.getByDisplayValue("Angular is an Awesome Framework")
    ).toBeInTheDocument();
  });
});
