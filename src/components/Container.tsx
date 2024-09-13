import React from 'react'

type ContainerProps = {
    styles: React.CSSProperties
}

const Container = (props: ContainerProps) => {
  return (
    <div style={props.styles}>Css style appied to this</div>
  )
}

export default Container