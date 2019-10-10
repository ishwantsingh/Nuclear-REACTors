import React from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Financial from "../metro/information/Financial";
import Environmental from "../metro/information/Environmental";

import getInfo from "../../state/actions/actionCreators";

import metro from "../../images/metro.jpg";

// const StyledContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   margin: 0 auto;
//   .containerAll {
//     margin: 0 2%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     .heading {
//       font-size: 1.7rem;
//       font-weight: bold;
//       text-align: center;
//     }
//     .button {
//       text-decoration: none;
//       font-size: 1.3em;
//       margin: 1em;
//       padding: 0.25em 1em;
//       border: 2px solid #009688;
//       border-radius: 3px;
//       color: #009688;
//     }
//     .links {
//       display: flex;
//       justify-content: center;
//     }
//   }
// `;

const StyledContainer = styled.div`
  margin-top: 10rem;
  width: 93%;
  height: 93%;
  margin: 0 auto;
  .input-box {
    display: block;
    position: absolute;
  }
  .n-1 {
    position: absolute;
    left: 435.6px;
    top: 837px;
  }
  .n-2 {
    position: absolute;
    left: 394.6px;
    top: 798px;
  }
  .n-3 {
    position: absolute;
    left: 358.6px;
    top: 755px;
  }
  .n-4 {
    position: absolute;
    left: 318.6px;
    top: 721px;
  }
  .n-5 {
    position: absolute;
    left: 284.6px;
    top: 681px;
  }
  .n-6 {
    position: absolute;
    left: 244.6px;
    top: 644px;
  }
  .n-7 {
    position: absolute;
    left: 209.6px;
    top: 606px;
  }
  .n-8 {
    position: absolute;
    left: 167.6px;
    top: 567px;
  }
  .n-9 {
    position: absolute;
    left: 126.6px;
    top: 495px;
  }
  .n-10 {
    position: absolute;
    left: 159.6px;
    top: 458px;
  }
  .n-11 {
    position: absolute;
    left: 189.6px;
    top: 447px;
  }
  .n-12 {
    position: absolute;
    left: 242.6px;
    top: 442px;
  }
  .n-13 {
    position: absolute;
    left: 294.6px;
    top: 444px;
  }
  .n-14 {
    position: absolute;
    left: 345.6px;
    top: 409px;
  }
  .n-15 {
    position: absolute;
    left: 385.6px;
    top: 360px;
  }
  .n-16 {
    position: absolute;
    left: 433.6px;
    top: 321px;
  }
  .n-17 {
    position: absolute;
    left: 475.6px;
    top: 273px;
  }
  .n-18 {
    position: absolute;
    left: 521.6px;
    top: 232px;
  }
  .n-19 {
    position: absolute;
    left: 560.6px;
    top: 183px;
  }
  .n-20 {
    position: absolute;
    left: 609.6px;
    top: 144px;
  }
  .n-21 {
    position: absolute;
    left: 652.6px;
    top: 97px;
  }
  .n-22 {
    position: absolute;
    left: 701.6px;
    top: 83px;
  }
  .n-23 {
    position: absolute;
    left: 736.6px;
    top: 120px;
  }
  .n-24 {
    position: absolute;
    left: 771.6px;
    top: 145px;
  }
  .n-25 {
    position: absolute;
    left: 822.6px;
    top: 152px;
  }
  .n-26 {
    position: absolute;
    left: 902.6px;
    top: 152px;
  }
  .n-27 {
    position: absolute;
    left: 982.6px;
    top: 152px;
  }
  .n-28 {
    position: absolute;
    left: 1048.6px;
    top: 178px;
  }
  .n-29 {
    color: black
    font-weight: bold;
    position: absolute;
    left: 1093.6px;
    top: 220px;
  }
  .n-30 {
    position: absolute;
    left: 1125.6px;
    top: 249px;
  }
  .n-31 {
    position: absolute;
    left: 1163.6px;
    top: 281px;
  }
  .n-32 {
    position: absolute;
    left: 1228.6px;
    top: 281px;
  }
  .n-33 {
    position: absolute;
    left: 1292.6px;
    top: 281px;
  }
  .n-34 {
    position: absolute;
    left: 1352.6px;
    top: 281px;
  }
  .n-35 {
    position: absolute;
    left: 1385.6px;
    top: 245px;
  }
  .n-36 {
    position: absolute;
    left: 1423.6px;
    top: 207px;
  }
  .n-37 {
    position: absolute;
    left: 1460.6px;
    top: 163px;
  }
  .n-38 {
    position: absolute;
    left: 1518.6px;
    top: 127px;
  }
  .n-39 {
    position: absolute;
    left: 1574.6px;
    top: 132px;
  }
  .n-40 {
    position: absolute;
    left: 1631.6px;
    top: 127px;
  }
  .n-41 {
    position: absolute;
    left: 1688.6px;
    top: 128px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 99%;
  position: relative;
`;

class AppHome extends React.Component {
  state = {
    start: "",
    end: "",
    count: 0
  };

  // startRef = React.createRef();
  // endRef = React.createRef();

  handleChange = e => {
    if (this.state.count == 0) {
      console.log(e.target.name, "b");
      this.setState({
        start: e.target.name,
        count: 1
      });
    } else if (this.state.count == 1) {
      this.setState({
        end: e.target.name,
        count: 0
      });
    }
    console.log(e.target.name, "boo");
    // this.setState({
    //   count: 1,
    //   start: e.target.name
    // });

    console.log(this.state, "oof");
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getInfo(this.state.start, this.state.end);
    this.setState({
      start: "",
      end: ""
    });
    console.log(this.state, "oof");

    // this.startRef.current.value = "";
    // this.endRef.current.value = "";
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <StyledContainer>
        <Image src={metro} alt="metro" />
        <form onSubmit={this.handleSubmit}>
          <p>
            <label className="input-box n-1">
              <input
                type="checkbox"
                className="filled-in"
                name="Dwarka Sector 21"
                onChange={this.handleChange}
                id="1"
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-2">
              <input
                type="checkbox"
                className="filled-in"
                name="Dwarka Sector 8"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-3">
              <input
                type="checkbox"
                className="filled-in"
                name="Dwarka Sector 9"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-4">
              <input
                type="checkbox"
                className="filled-in"
                name="Dwarka Sector 10"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-5">
              <input
                type="checkbox"
                className="filled-in"
                name="Dwarka Sector 11"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-6">
              <input
                type="checkbox"
                className="filled-in"
                name="Dwarka Sector 12"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-7">
              <input
                type="checkbox"
                className="filled-in"
                name="Dwarka Sector 13"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-8">
              <input
                type="checkbox"
                className="filled-in"
                name="Dwarka Sector 14"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-9">
              <input
                type="checkbox"
                className="filled-in"
                name="Dwarka"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-10">
              <input
                type="checkbox"
                className="filled-in"
                name="Dwarka Mor"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-11">
              <input
                type="checkbox"
                className="filled-in"
                name="Nawada"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-12">
              <input
                type="checkbox"
                className="filled-in"
                name="Uttam Nagar West"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-13">
              <input
                type="checkbox"
                className="filled-in"
                name="Uttam Nagar East"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-14">
              <input
                type="checkbox"
                className="filled-in"
                name="Janakpuri West"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-15">
              <input
                type="checkbox"
                className="filled-in"
                name="Janakpuri East"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-16">
              <input
                type="checkbox"
                className="filled-in"
                name="Tilak Nagar"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-17">
              <input
                type="checkbox"
                className="filled-in"
                name="Subhash Nagar"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-18">
              <input
                type="checkbox"
                className="filled-in"
                name="Tagore Garden"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-19">
              <input
                type="checkbox"
                className="filled-in"
                name="Rajouri Garden"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-20">
              <input
                type="checkbox"
                className="filled-in"
                name="Ramesh Nagar"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-21">
              <input
                type="checkbox"
                className="filled-in"
                name="Moti Nagar"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-22">
              <input
                type="checkbox"
                className="filled-in"
                name="Kirti Nagar"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-23">
              <input
                type="checkbox"
                className="filled-in"
                name="Shadipur"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-24">
              <input
                type="checkbox"
                className="filled-in"
                name="Patel Nagar"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-25">
              <input
                type="checkbox"
                className="filled-in"
                name="Rajendra Place"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-26">
              <input
                type="checkbox"
                className="filled-in"
                name="Karol Bagh"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-27">
              <input
                type="checkbox"
                className="filled-in"
                name="Jhandewalan"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-28">
              <input
                type="checkbox"
                className="filled-in"
                name="Ramakrishna Ashram Marg"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-29">
              <input
                type="checkbox"
                className="filled-in"
                name="Rajiv Chowk"
                onChange={this.handleChange}
              />
              <span>Rajiv Chowk</span>
            </label>
          </p>
          <p>
            <label className="input-box n-30">
              <input
                type="checkbox"
                className="filled-in"
                name="Barakhamba Road"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-31">
              <input
                type="checkbox"
                className="filled-in"
                name="Mandi House"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-32">
              <input
                type="checkbox"
                className="filled-in"
                name="Pragati Maidan"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-33">
              <input
                type="checkbox"
                className="filled-in"
                name="Indraprastha"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-34">
              <input
                type="checkbox"
                className="filled-in"
                name="Yamuna Bank"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-35">
              <input
                type="checkbox"
                className="filled-in"
                name="Laxmi Nagar"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-36">
              <input
                type="checkbox"
                className="filled-in"
                name="Nirman Vihar"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-37">
              <input
                type="checkbox"
                className="filled-in"
                name="Preet Vihar"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-38">
              <input
                type="checkbox"
                className="filled-in"
                name="Karkarduma"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <p>
            <label className="input-box n-39">
              <input
                type="checkbox"
                className="filled-in"
                name="Anand Vihar ISBT"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>{" "}
          <p>
            <label className="input-box n-40">
              <input
                type="checkbox"
                className="filled-in"
                name="Kaushambi"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>{" "}
          <p>
            <label className="input-box n-41">
              <input
                type="checkbox"
                className="filled-in"
                name="Vaishali"
                onChange={this.handleChange}
              />
              <span></span>
            </label>
          </p>
          <div className="input-field">
            <button className="waves-effect btn">Show Info</button>
          </div>
        </form>
        {/* <div className="containerAll">
        <div className="heading">Travelling Via ?</div>
        <div className="links">
          <Link to="/road" className="button">
            Road
          </Link>
          <Link to="/metro" className="button">
            Metro
          </Link>
        </div>
      </div> */}
      </StyledContainer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInfo: (start, end) => dispatch(getInfo(start, end))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AppHome);
