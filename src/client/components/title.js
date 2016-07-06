import React from 'react'

const Title = () => {
  const styles = {
    title: {
      textAlign: 'center',
      fontSize: '180%',
      fontWeight: 'bold',
      margin: '0px 0px 20px',
      padding: '1em'
    }
  }
  return (
    <div style={styles.title}>
      Liste des super heros :
    </div>
  )
}

export default Title
