import logo from './logo.svg';
import './App.css';
import style from './Sqistyle'
import image from './bg-header-sqi-1.png'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const App = () => {

  return (
    <>
      <div style={{backgroundColor: '#fffff'}}>
          <nav style={{display: 'flex', alignItems: 'center', gap: '5px', background: 'white',}}>
              <img src={require('./co.jpg')} alt="" style={{width: '100px', height: '80px', marginLeft : '100px'}} />
              <a href="#" style={{fontFamily: 'sans-serif', fontWeight: '600', fontSize: '15px', color: '#081F89', textDecoration: 'none', marginLeft: '100px'}}>About</a>
              <a href="#"style={{fontFamily: 'sans-serif', fontWeight: '600', fontSize: '15px', color: '#081F89', textDecoration: 'none', marginLeft: '70px'}}>Programmes</a>
              <a href="#"style={{fontFamily: 'sans-serif', fontWeight: '600', fontSize: '15px', color: '#081F89', textDecoration: 'none', marginLeft: '80px'}}>Admissions</a>
              <a href="#"style={{fontFamily: 'sans-serif', fontWeight: '600', fontSize: '15px', color: '#081F89', textDecoration: 'none', marginLeft: '90px'}}>E-portal</a>
              <a href="#"style={{fontFamily: 'sans-serif', fontWeight: '600', fontSize: '15px', color: '#081F89', textDecoration: 'none', marginLeft: '100px'}}>SQI Scholarship</a>
              <a href="#"style={{fontFamily: 'sans-serif', fontWeight: '600', fontSize: '15px', color: '#081F89', textDecoration: 'none', marginLeft: '110px'}}>News</a>
          </nav>
          <hr style={{color: '#666666'}}/>
      </div>

      <div>
          <h1 style={{color: "#000E42", fontSize: '64px', fontWeight: '700', marginLeft: '80px'}}>Study to <br/>become a <br/> global talent</h1>
          <p style={{marginLeft: '80px', marginTop: '-18px', fontWeight: '500', color: '#474747'}}>Learn new tech skills using a world-class curriculum from <br /> top industry experts in an accredited institution.</p>
          <div>
          <button style={{backgroundColor: '#081F89', color: 'white', border: '0', padding: '18px', borderRadius: '10px', fontWeight: '600', marginLeft: '80px'}}>Start Now</button>
          </div>
          <img src={require('./bg-header-sqi-1.png')} style={{marginLeft:'700px', marginTop: '-450px',height: '480px'}} alt="" />
      </div>

      <div>
      <h1 style={{color: '#050754', fontWeight: '700', fontSize: '42px', marginLeft: '80px'}}>Start here. Change the world.</h1>
      <div>
          <img src={require('./pic1.jpg')} style={{filter: 'grayscale(1)', height: '280px', width: '300px', marginLeft: '80px'}} alt="" />
          <h3 style={{color: 'RGB(0, 14, 84)', marginLeft: '80px', fontSize: '20px'}}>National Innovative Diploma <br /> (NID)</h3>
          <p style={{color: 'RGB(102, 102, 102)', fontSize: '15px', fontWeight: '500', marginLeft: '80px'}}>The National Innovation Diploma (NID) <br /> offered at SQI College of ICT is a 2 year <br /> approved academic program of the <br /> National Board for Technical Education <br /> (NBTE).</p>
          <a href="" style={{marginLeft: '80px', color: 'RGB(38, 54, 78)', fontWeight: '500'}}>Learn more</a>
      </div>
      <div>
          <img src={require('./pic2.jpg')} style={{filter: 'grayscale(1)', height: '280px', width: '300px', position: 'absolute', marginLeft: '440px', top:'670px'}} alt="" />
          <h3 style={{position: 'absolute', marginLeft: '440px', top:'953px', color: 'RGB(0, 14, 84)', fontSize: '20px' }}>Professional Diploma <br /> Certificate</h3>
          <p style={{color: 'RGB(102, 102, 102)', fontSize: '15px', fontWeight: '500', position: 'absolute', marginLeft: '440px', top:'1025px' }}>The Professional Certificate Program is 1 <br /> year practical training with wide range of <br /> edge-cutting IT certification courses <br /> offered in SQI College of ICT to people who <br /> want to advance their career.</p>
          <a href="" style={{marginLeft: '430px', color: 'RGB(38, 54, 78)', fontWeight: '500', position: 'absolute', top: '1160px'}}>Learn more</a>
      </div>
      <div>
          <img src={require('./pic3.jpg')} style={{filter: 'grayscale(1)', height: '280px', width: '300px', position: 'absolute', marginLeft: '800px', top:'670px'}} alt="" />
          <h3 style={{position: 'absolute', marginLeft: '800px', top:'953px', color: 'RGB(0, 14, 84)', fontSize: '20px' }}>Certificate Program</h3>
          <p  style={{color: 'RGB(102, 102, 102)', fontSize: '15px', fontWeight: '500', position: 'absolute', marginLeft: '800px', top:'1025px' }}>The Certificate Program is a short-term <br /> training, 2 weeks to 6 months with a wide <br /> range of edge-cutting IT certification <br /> courses offered in SQI College of ICT to <br /> people who want to advance their <br /> careers.</p>
          <a href="" style={{marginLeft: '800px', color: 'RGB(38, 54, 78)', fontWeight: '500', position: 'absolute', top: '1160px'}}>Learn more</a>
      </div>
      </div>
        <div style={{marginTop: '50px'}}>
          <div style={{marginLeft: '80px'}}>
            <strong style={{color: ' black'}}>NATIONAL DIPLOMA COURSES</strong>
              <p style={{fontSize: '15px' ,color: 'black',opacity: '0.8', fontWeight: '700',}}>DURATION: <b style={{color: '#666666', fontWeight: '500'}}> 2 Years</b></p>
              <hr style={{width: '100px', paddingLeft:'160px', marginLeft:'-4px'}} />
              <p style={{fontSize: '15px' ,color: 'black', opacity: '0.8', fontWeight: '700',}}>Certificate: <b style={{color: '#666666', fontWeight: '500'}}>Both National Diploma <br /> and Professional Diploma.</b></p>
              <hr style={{width: '100px', paddingLeft:'160px', marginLeft:'-4px'}} />
              <p style={{fontSize: '15px' ,color: 'black',opacity: '0.8', fontWeight: '700',}}>Skills: <b style={{color: '#666666', fontWeight: '500'}}>Academic Institution <br /> recognized skills and In-demand <br /> professional skills.</b></p>
              <hr  style={{width: '100px', paddingLeft:'160px', marginLeft:'-4px'}} />
              <p style={{fontSize: '15px' ,color: 'black',opacity: '0.8', fontWeight: '700',}}>Entry Requirements: <b style={{color: '#666666', fontWeight: '500'}}> 120 min in JAMB <br /> 5 Credits in O-Level, Your passion</b></p>
              <hr  style={{width: '100px', paddingLeft:'160px', marginLeft:'-4px'}}/>
              <p style={{fontSize: '15px' ,color: 'black',opacity: '0.8', fontWeight: '700',}}>Required Hardware: <b  style={{color: '#666666', fontWeight: '500'}}>(usually <br /> laptop)</b></p>
              <hr  style={{width: '100px', paddingLeft:'160px', marginLeft:'-4px'}}/>
              <p style={{fontSize: '15px' ,color: 'black',opacity: '0.8', fontWeight: '700',}}>Access to Alumni Network and <br /> Opportunities: <b style={{color: '#666666', fontWeight: '500'}}>Yes</b></p>
          </div>
        </div>
    </>
  )
}
export default App;