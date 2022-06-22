import React from 'react'
import PropTypes from 'prop-types';


// class Categories extends React.Component {

//   state = {
//     activeItem: 3,
//   }

//   onSelectItem = index => {
//     this.setState({
//       activeItem : index
//     })
//   }

//   render(){
//     const {items, onClick} = this.props
//     console.log(this.state)
//     return(
//       <div>
//            <div className="categories">
//               <ul>
//                   <li>Все</li>
//                     {items.map((name, index) => (
//                       <li
//                       className={this.state.activeItem === index ? 'active' : ''}
//                        onClick={() => this.onSelectItem(index)} 
//                        key={`${name}_${index}`}>{name}</li>
//                       ))}
//                 </ul>
//             </div>
//         </div>
//     )
//   }
// }

const Categories = React.memo(function Categories({activeCategory, items, onClickCategory}) {
  
  return (
   
        <div className="categories">
              <ul>
                <li  className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
                {items && items.map((name, index) => (
                  <li
                  className={activeCategory === index ? 'active' : ''}
                  onClick={() => onClickCategory(index)} 
                  key={`${name}_${index}`}>{name}
                  </li>
                ))}
              </ul>
            </div>
    
  )
})

Categories.prototype = {
  activeCategory: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickCategory: PropTypes.func.isRequired
}

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories
