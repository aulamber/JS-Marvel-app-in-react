import React, {PropTypes} from 'react'

const Photo = ({url, onMain}) => {
  
  const handleMain = (e) => {
    e.preventDefault()
    onMain()
  }
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '25%',
      height: '100%',
      margin: '0% 5% 0% 0%'
    },
    image: {
      width: '200px',
      height: '250px'
    },
    button: {
      width: '200px',
    }
  }

  return (
    <div style={styles.container}>
      <img src={url} alt="heroImage" style={styles.image} />
      <button onClick={handleMain} style={styles.button}>Back to list</button>
    </div>
  )
}

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  onMain: PropTypes.func.isRequired
}

export default Photo
