import React, { Component } from "react";
import "./Home.css";
import request from "../server";
import Cards from "./Cards";

export class HomePage extends Component {
  state = {
    allData: [],
    search: "",
    activePage: 1,
    pageSize: 10,
  };

  componentDidMount() {
    this.getData();
  }

  async getData() {
    try {
      let { data } = await request(
        "top-headlines?country=us&apiKey=a0f2e5aa5d6b43be8faeb59e5b8d31eb"
      );
      this.setState({ allData: data.articles });
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  handleSetActivePage = (i) => {
    this.setState({ activePage: i });
  };

  render() {
    const { allData, search, activePage, pageSize } = this.state;

    const filteredData = allData.filter((el) =>
      el.title.toLowerCase().includes(search.toLowerCase())
    );

    const startIndex = (activePage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentPageData = filteredData.slice(startIndex, endIndex);

    const pages = Math.ceil(filteredData.length / pageSize);

    let newPageArr = [];
    for (let i = 1; i <= pages; i++) {
      newPageArr.push(i);
    }

    return (
      <div className="container">
        <div className="input">
          <input
            type="text"
            placeholder="Searching..."
            value={search}
            onChange={(e) =>
              this.setState({ search: e.target.value, activePage: 1 })
            }
          />
        </div>

        <div className="cards">
          {currentPageData.map((el) => (
            <Cards key={el.title} {...el} />
          ))}
        </div>

        <div className="pagination">
          <button
            className="prev"
            onClick={() =>
              this.handleSetActivePage(activePage > 1 ? activePage - 1 : 1)
            }
            disabled={activePage === 1}
          >
            Prev
          </button>

          {newPageArr.map((el) => (
            <button
              className={`page ${activePage === el ? "active" : ""}`}
              key={el}
              onClick={() => this.handleSetActivePage(el)}
            >
              {el}
            </button>
          ))}

          <button
            className="next"
            onClick={() =>
              this.handleSetActivePage(
                activePage < pages ? activePage + 1 : pages
              )
            }
            disabled={activePage === pages}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
