import React, { Component } from "react";

class Home extends Component {
  state = {};

  arrEl = [
    {
      id: 0,
      title: "First Blog",
      body: "Body of first blog",
      author: "Bob James",
      createdAt: "12/2/2018"
    },
    {
      id: 1,
      title: "Second Blog",
      body: "Body of second blog",
      author: "Harry Scolfield",
      createdAt: "23/3/2018"
    }
  ];
  render() {
    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-11">
            {this.arrEl.map(el => {
              return (
                <div key={el.id} className="car my-3">
                  <div className="card-header">{el.title}</div>
                  <div className="card-body">
                    {el.body}
                    <p className="mt-5 text-muted">
                      <b>{el.author}</b> {el.createdAt}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
