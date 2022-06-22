import React from 'react'
import ContentLoader from "react-content-loader"

function PizzaLoading() {
      return(
      <ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <circle cx="135" cy="131" r="112" /> 
    <rect x="7" y="278" rx="0" ry="0" width="266" height="39" /> 
    <rect x="12" y="344" rx="10" ry="10" width="260" height="72" /> 
    <rect x="8" y="457" rx="0" ry="0" width="3" height="17" /> 
    <rect x="8" y="427" rx="0" ry="0" width="91" height="26" /> 
    <rect x="187" y="427" rx="15" ry="15" width="92" height="30" />
  </ContentLoader>
    )
  }

export default PizzaLoading