import React, {PropTypes} from 'react'

import Redirections from './redirections'

const Hero = ({hero, onDetail}) => {
  const photoUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`
  
  const styles = {
    container: {
      border: '1px solid lightGrey',
      width: '200px',
      height: '200px',
      margin: '10px'
    },
    top: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', 
      backgroundColor: '#F5F5F5',
    },
    picture: {
      width: '150px',
      height: '150px',
      margin: 'auto',
    },
    name: {
      fontSize: '70%',
      padding: '5px 0px 0px 9px'
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.top}>
        <img src={photoUrl} alt="heroImage" style={styles.picture} />
      </div>
      <div style={styles.name}>
        <div>{hero.name}</div>
      </div>
      <Redirections hero={hero} onDetail={onDetail}/>
    </div>
  )
}

Hero.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.number,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  onDetail: PropTypes.func.isRequired
}

export default Hero
