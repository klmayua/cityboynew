import React from 'react'

export default class ErrorBoundary extends React.Component{
  state={hasError:false}

  static getDerivedStateFromError(){
    return {hasError:true}
  }

  render(){
    if(this.state.hasError){
      return (
        <div className="min-h-screen grid place-items-center text-white">
          System fault detected.
        </div>
      )
    }

    return this.props.children
  }
}