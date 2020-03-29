import React from "react";
import axios from "axios";

import Select from "react-select";
import Map from "../Map";
import Table from '../Table';

import { getFormattedTime } from "../../utils/time";

import "./index.scss";

class Body extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      year: new Date().getFullYear(),
      round: 1,
      data: [],
      showRaces: false
    };

    const options = [];
    for (var i = 1950; i <= new Date().getFullYear(); i++) {
      options.push({ value: i, label: i });
    }
    this.options = options.reverse();
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.year !== this.state.year) {
      axios
        .get(`https://ergast.com/api/f1/${this.state.year}.json`)
        .then(resp => this.setState({ data: resp.data }));
    }
  };

  componentDidMount = () => {
    axios
      .get(`https://ergast.com/api/f1/${this.state.year}.json`)
      .then(resp => this.setState({ data: resp.data }));
  };

  onSelect = e => {
    this.setState({
      year: e.value
    });
  };

  handleShowClick = () =>
    this.setState({
      showRaces: !this.state.showRaces
    });

  onRowClick = (round) => this.setState({ round });

  renderTable = () => {
    if (this.state.data.length <= 0) return null;
    const { Races } = this.state.data.MRData.RaceTable;

    const data = Races.map(race => {
      const {
        round,
        raceName,
      } = race;

      return ({
        round, raceName
      })
    });

    const resource = {
      schema: {
        fields: [
          {
            name: "round",
            type: "string",
          },
          {
            name: "raceName",
            type: "string"
          },
        ],
      },
      data: data,
    }

    return <Table resource={resource} onRowClick={this.onRowClick} />
  }

  getLatLng = () => {
    const { Races } = this.state.data.MRData.RaceTable;
    const { Location } = Races[this.state.round - 1].Circuit;
    const { lat, long } = Location;

    return {
      lat,
      long
    }
  }

  renderMap = () => {
    if (this.state.data.length <= 0)
      return <div className="Body-Placeholder"></div>;
    const { Races } = this.state.data.MRData.RaceTable;
    const markers = Races.map(race => {
      const {
        round,
        raceName,
        date,
        time,
        Circuit: {
          circuitName,
          Location: { lat, long, locality, country }
        }
      } = race;

      return {
        lat: lat,
        long: long,
        popup: {
          content: (
            <div>
              <div
                style={{
                  fontVariant: "all-petite-caps",
                  fontSize: 12,
                  color: "#4e5a5f",
                  textDecoration: "underline"
                }}
              >
                Round {round}
              </div>
              <div
                style={{
                  fontVariant: "all-petite-caps",
                  fontSize: 18,
                  color: "#4e5a5f",
                  fontWeight: 600,
                  letterSpacing: 1,
                  padding: 10
                }}
              >
                {raceName}
              </div>
              <div
                style={{ fontSize: 12, color: "#4e5a5f", textAlign: "right" }}
              >
                {circuitName}
              </div>
              <div
                style={{ fontSize: 10, color: "#4e5a5f", textAlign: "right" }}
              >
                {locality}, {country}
              </div>
              <div
                style={{ fontSize: 10, color: "#4e5a5f", textAlign: "right" }}
              >
                {getFormattedTime(date, time)}
              </div>
            </div>
          ),
          open: `${this.state.round}` === round,
        },
      };
    });
    return (
      <div className="Map-Overview">
        <div className="Map-Overview-Body">
          <Map {...this.getLatLng()} markers={markers} zoom={6} />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="Body">
        <div className="Body-Body">
          <div className="Body-Body-Column">
            {this.renderMap()}
          </div>
          <div className="Body-Body-Column">
            <div className="Sidebar">
              <div className="Search">
                  <Select
                    className="Search-Dropdown"
                    value={{ label: this.state.year, value: this.state.year }}
                    options={this.options}
                    onChange={this.onSelect}
                    placeholder="Select a year"
                    maxMenuHeight={300}
                    menuPlacement="auto"
                  />
                </div>
                {this.renderTable()}
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Body;
