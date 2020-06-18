import React, { Component } from "react";
import AppBar from "./components/AppBar";
import Search from "./components/Search";
import API from "./components/utils/API";
import { Container, Grid } from "@material-ui/core";
import Sort from "./components/Sort";
import View from "./components/View";
import EmployeeList from "./components/EmployeeList";
import Table from "./components/Table";

export default class App extends Component {
  style = {
    padding: "30px",
  };
  state = {
    search: "",
    view: "cards",
    data: [],
    match: [],
  };

  componentDidMount() {
    const data = API.getData();
    this.setState({ data: data });
    this.setState({ match: data });
  }

  changeView = (v) => {
    this.setState({ view: v });
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value }, () => {
      const match = this.state.data.filter((item) => {
        return item.name
          .toLowerCase()
          .includes(this.state.search.toLowerCase());
      });
      this.setState({ match: match });
    });
  };

  handleSort = (e) => {
    console.log(e.target.value);
    if (e.target.value === "id") {
      const match = this.state.match.sort((a, b) => (a.id > b.id ? 1 : -1));
      this.setState({ match: match });
    } else if (e.target.value === "name") {
      const match = this.state.match.sort((a, b) => (a.name > b.name ? 1 : -1));
      this.setState({ match: match });
    }
  };

  render() {
    return (
      <div>
        <AppBar />
        <Container maxWidth="md" style={this.style}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Search handleSearch={this.handleSearch} />
            <Sort handleSort={this.handleSort} />
            <View changeView={this.changeView} />
          </Grid>
          <br />
          {this.state.view === "cards" && (
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <EmployeeList match={this.state.match} />
            </Grid>
          )}

          {this.state.view === "table" && <Table match={this.state.match} />}
        </Container>
      </div>
    );
  }
}
