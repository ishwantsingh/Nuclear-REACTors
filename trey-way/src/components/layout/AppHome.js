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
width: 100%;
display: flex;
flex-direction: column;
    align-items: center;
    justify-content: center;
  margin-top: 10rem;
  width: 93%;
  height: 93%;
  margin: 0 auto;

    a{
      position: absolute;
      font-size: 2.5rem;
  color: #009688;
      top: -230px;
      left: 25px;
    }

  .infoComponent {
    width: 68%;
  }
  .btn {
    position: absolute;
    top: -250px;
  }
  .input-box {
    display: block;
    position: absolute;
  }
  .n-1 {
    position: absolute;
    left: 22.687500000000004%;
    top: 83.11817279046674%;
  }
  .n-2 {
    position: absolute;
    left: 20.552083333333336%;
    top: 79.24528301886792%;
  }
  .n-3 {
    position: absolute;
    left: 18.677083333333336%;
    top: 74.97517378351539%;
  }
  .n-4 {
    position: absolute;
    left: 16.59375%;
    top: 71.59880834160874%;
  }
  .n-5 {
    position: absolute;
    left: 14.82291666666667%;
    top: 67.6266137040715%;
  }
  .n-6 {
    position: absolute;
    left: 12.739583333333332%;
    top: 63.952333664349545%;
  }
  .n-7 {
    position: absolute;
    left: 10.916666666666666%;
    top: 60.178748758689174%;
  }
  .n-8 {
    position: absolute;
    left: 8.729166666666668%;
    top: 56.30585898709036%;
  }
  .n-9 {
    position: absolute;
    left: 6.59375%;
    top: 49.15590863952334%;
  }
  .n-10 {
    position: absolute;
    left: 8.312499999999998%;
    top: 45.48162859980139%;
  }
  .n-11 {
    position: absolute;
    left: 9.874999999999998%;
    top: 44.389275074478654%;
  }
  .n-12 {
    position: absolute;
    left: 12.635416666666666%;
    top: 43.8927507447865%;
  }
  .n-13 {
    position: absolute;
    left: 15.34375%;
    top: 44.091360476663354%;
  }
  .n-14 {
    position: absolute;
    left: 18.000000000000004%;
    top: 40.615690168818276%;
  }
  .n-15 {
    position: absolute;
    left: 20.083333333333332%;
    top: 35.749751737835155%;
  }
  .n-16 {
    position: absolute;
    left: 22.583333333333336%;
    top: 31.876861966236348%;
  }
  .n-17 {
    position: absolute;
    left: 24.770833333333332%;
    top: 27.110228401191662%;
  }
  .n-18 {
    position: absolute;
    left: 27.166666666666668%;
    top: 23.038728897715988%;
  }
  .n-19 {
    position: absolute;
    left: 29.197916666666668%;
    top: 18.17279046673287%;
  }
  .n-20 {
    position: absolute;
    left: 31.75%;
    top: 14.299900695134063%;
  }
  .n-21 {
    position: absolute;
    left: 33.989583333333336%;
    top: 9.632571996027806%;
  }
  .n-22 {
    position: absolute;
    left: 36.541666666666664%;
    top: 8.24230387288977%;
  }
  .n-23 {
    position: absolute;
    left: 38.364583333333336%;
    top: 11.916583912611719%;
  }
  .n-24 {
    position: absolute;
    left: 40.18750000000001%;
    top: 14.399205561072492%;
  }
  .n-25 {
    position: absolute;
    left: 42.84375%;
    top: 15.09433962264151%;
  }
  .n-26 {
    position: absolute;
    left: 47.010416666666664%;
    top: 15.09433962264151%;
  }
  .n-27 {
    position: absolute;
    left: 51.17708333333334%;
    top: 15.09433962264151%;
  }
  .n-28 {
    position: absolute;
    left: 54.614583333333336%;
    top: 17.676266137040713%;
  }
  .n-29 {
    color: black
    font-weight: bold;
    position: absolute;
    left: 56.958333333333336%;
    top: 21.847070506454816%;
  }
  .n-30 {
    position: absolute;
    left: 58.62499999999999%;
    top: 24.726911618669316%;
  }
  .n-31 {
    position: absolute;
    left: 60.60416666666666%;
    top: 27.904667328699105%;
  }
  .n-32 {
    position: absolute;
    left: 63.989583333333336%;
    top: 27.904667328699105%;
  }
  .n-33 {
    position: absolute;
    left: 67.32291666666667%;
    top: 27.904667328699105%;
  }
  .n-34 {
    position: absolute;
    left: 70.44791666666667%;
    top: 27.904667328699105%;
  }
  .n-35 {
    position: absolute;
    left: 72.16666666666666%;
    top: 24.32969215491559%;
  }
  .n-36 {
    position: absolute;
    left: 74.14583333333333%;
    top: 20.556107249255213%;
  }
  .n-37 {
    position: absolute;
    left: 76.07291666666666%;
    top: 16.186693147964252%;
  }
  .n-38 {
    position: absolute;
    left: 79.09375%;
    top: 12.611717974180737%;
  }
  .n-39 {
    position: absolute;
    left: 82.01041666666666%;
    top: 13.108242303872888%;
  }
  .n-40 {
    position: absolute;
    left: 84.97916666666666%;
    top: 12.611717974180737%;
  }
  .n-41 {
    position: absolute;
    left: 87.94791666666666%;
    top: 12.611717974180737%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 90.7vh;
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
          <div className="input-field">
            {" "}
            <button className="waves-effect btn">Show Info</button>
            <a href="#info">v</a>
          </div>
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
        </form>
        <br />
        <br /> <br /> <br /> <br /> <br /> <br />
        <div className="infoComponent" id="info">
          {" "}
          <Financial />
          <Environmental />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </StyledContainer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInfo: (start, end) => dispatch(getInfo(start, end))
  };
};

export default connect(null, mapDispatchToProps)(AppHome);
