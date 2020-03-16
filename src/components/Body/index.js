import React from "react";
import axios from "axios";

import Select from "react-select";
import VisualItem from "../VisualItem";
import Map from "../Map";

import { getFormattedTime } from "../../utils/time";

import "./index.scss";

class Body extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      year: 2019,
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
          autoOpen: round === "1" ? true : false
        },
        tooltip: {
          content: `Round ${round}`
        }
      };
    });
    return (
      <div className="Body-Body-Row">
        <div className="Map-Overview">
          <div className="Map-Overview-Body">
            <Map lat={37} long={144} markers={markers} />
          </div>
        </div>
      </div>
    );
  };

  renderItems = () => {
    if (this.state.data.length <= 0)
      return <div className="Body-Placeholder"></div>;
    const { Races } = this.state.data.MRData.RaceTable;

    return Races.map(race => {
      const {
        season,
        round,
        url: raceUrl,
        raceName,
        date,
        time,
        Circuit: {
          url: circuitUrl,
          circuitName,
          Location: { lat, long, locality, country }
        }
      } = race;
      return (
        <div className="Body-Body-Row" key={round}>
          <VisualItem
            season={season}
            round={round}
            raceName={raceName}
            raceUrl={raceUrl}
            circuitName={circuitName}
            circuitUrl={circuitUrl}
            lat={lat}
            long={long}
            locality={locality}
            country={country}
            date={date}
            time={time}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="Body">
        <div className="Body-Header">
          <div className="Search">
            <div className="Search-Title">Currently showing results for</div>
            <Select
              className="Search-Dropdown"
              value={{ label: this.state.year, value: this.state.year }}
              options={this.options}
              onChange={this.onSelect}
              placeholder="Select a year"
              maxMenuHeight={210}
              menuPlacement="auto"
            />
          </div>
        </div>
        <div className="Body-Body">
          {this.renderMap()}
          {this.state.showRaces && this.renderItems()}
          <div className="ShowRaces">
            <button className="ShowRaces-Button" onClick={this.handleShowClick}>
              {this.state.showRaces ? "Hide" : "Show"} Races
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
