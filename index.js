

import Header from "./Header"

//function Header () {
//  return (
//    <div >
//      <header>
//      <nav className = "nav">
//        <img src="./react-logo.png" alt="React logo" className = "nav-logo" />
//        <ul className = "nav-items">
//          <li>Pricing</li>
//          <li>About</li>
//         <li>Contact</li>
 //       </ul>
 //       </nav>
//      </header>
//  </div>
// )
//}

function ReactFacts()  {
  return (
    <div>
        <h1>Fun facts about React</h1>
      <ol>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ol>
    </div>
  )
}

function Footer () {
  return (
    <footer className = "footer">
      <small> "@ 2022 Achas Moses development. All right reserved" </small>
    </footer>
    
  )
}

function Page () {
  return (
    <div>  
      <Header /> 
      <ReactFacts />
      <Footer />
  </div>
  )
}


ReactDOM.render (<Page />, document.getElementById("root"))

