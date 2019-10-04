import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
  <div class="main">
    <div class="header">
            <div class="heading1">
                <h1>HOPE</h1>
                <h3>CENTER</h3>

            </div>
            <div class="heading2">
                    <ul>
                        <li class="text"><a href="http://hopecentreforautism.com/wp/">Home</a></li>
                        <li class="text"><a href="https://www.facebook.com/autismhope/">Our Mission</a></li>
                        <li class="text"><a href="https://hopecenter4autism.com/">News And Press</a></li>
                        <li class="text"><a href="https://in.linkedin.com/in/suruchi-sancheti-ms-bcba-975abb13">Contant</a></li>
                    </ul>
            </div>
        </div>
    <div>
      <nav class="Navi">
        <table>
          <tr>
            <td class="M">
              <h1>Make</h1>
              <h3>Donations</h3>
            </td>
          </tr>
          <tr>
            <td class="J">
              <h1>Join</h1>
              <h3>Volunteer</h3>
            </td>
          </tr>
          <tr>
            <td class="H">
              <h1>Help</h1>
              <h3>Children</h3>
            </td>
          </tr>
        </table>
      </nav>
      <img src={require("./pic_trulli.jpg")} alt="Demo Image" width="1000px" height="400px" />
      {/*  <img class="demo" src={"D:/My/Images/pic_trulli.jpg"} alt="Demo Image" width="1000px" height="300px" />  */}
    </div><br></br><br></br>
    
    <div class="box">
            <div class="box1">
                <p class="ba"><b>True</b>story1</p>
                <img class="im" src={require("./Babus.jfif")} alt="Babus" width="290px" height="180px" />
                <h5 class="heading6">Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.</h5>
                <font class="fo" color="red"><button>Read More</button></font>
            </div>
            <div class="box1">
                    <p class="ti"><b>True</b>story2</p>
                    <img class="im" src={require("./tiger.jfif")}  alt="Tiger" width="290px" height="180px" />
                    <h5 class="heading6">Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.</h5>
                    <font class="fo" color="red"><button>Read More</button></font>
            </div>
            <div class="box1">
                    <p class="pe"><b>True</b>story3</p>
                    <img class="im" src={require("./pexels.jfif")} alt="Pexels" width="290px" height="180px" />
                    <h5 class="heading6">Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.</h5>
                    <font class="fo" color="red" > <button>Read More</button></font>
            </div>

      </div>
    </div>
  );
}

export default App;
