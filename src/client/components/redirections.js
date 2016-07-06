import React, {PropTypes} from 'react'

const Redirections = ({hero, onDetail}) => {

  const styles = {
    container: {
      borderTop: '0.5px solid #fafafa',
      display: 'flex',
      flexDirection:'row',
      flexWrap: 'wrap'
    },
    redirection: {
      fontSize: '50%',
      color: 'lightGrey',
      margin: '4px 0px 0px 10px'
    },
    button: {
      margin: '4px 0px 0px 10px'
    }
  }

  const handleDetails = (e) => {
    e.preventDefault()
    onDetail(hero.id)
  }

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={handleDetails}></button>
      {hero.description && <span style={styles.redirection}>#details</span>}
      {hero.urls.length && <span style={styles.redirection}>#wiki</span>}
      {(hero.comics.items.length
        || hero.series.items.length
        || hero.stories.items.length) !== 0
        && <span style={styles.redirection}>#comiclink</span>}
    </div>
  )
}

Redirections.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.number,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  //onDetails: PropTypes.func.isRequired
}

export default Redirections
