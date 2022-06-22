import React from "react";
import { useDispatch } from 'react-redux';


import {Routes ,Route} from "react-router-dom";
import {Header} from "./components";
import {Home, Card} from "./pages";





function App() {
  return(
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home exact/>}/>
          <Route path="/cart" element={<Card exact/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;

//_________________________________________________________________________________________________

  // class App extends React.Component{
  //   componentDidMount(){
  //     axios.get('http://localhost:3000/db.json').then(({data}) => {
  //      this.props.setPizzass(data.pizzas);
  //   });
  //   }

  //   render(){
  //     return(
  //       <div className="wrapper">
  //     <Header/>
  //     <div className="content">
  //       <Routes>
  //         <Route path="/" element={<Home items={this.props.items} exact/>}/>
  //         <Route path="/cart" element={<Card/>}/>
  //       </Routes>
  //     </div>
  //   </div>
  //     )
  //   }
  // }

 //__________________________________________________________________________________________________-

//   const mapStateToProps = (state) => {
//     return{
//       items: state.pizzas.items,
//       filters: state.filters,
//     }
//   }

//   const mapDispatchToProps = dispatch => {
//     return {
//       setPizzass: (items)=> dispatch(setPizzasAction(items))
//     }
//   }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

//___________________________________________________________________________________________________

// function App() {
//   const [pizzas, setPizzas] = React.useState([])

//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({data}) => {
//       setPizzas(data.pizzas)

//       // fetch('http://localhost:3000/db.json')
//       // .then((resp) => resp.json())
//       // .then((json) => {
//       //   setPizzas(json.pizzas)
//       // })

//     })
//   },[])