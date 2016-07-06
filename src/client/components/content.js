import React, {PropTypes} from 'react'
import _ from 'lodash'

const Content = ({hero}) => {

  const mapping = (array) => {
    return (
      array.length !== 0 &&
      _.map(array, (item, index) => {
        return (
          <div key={index} style={styles.row}>{item.name}</div>
        )
      })
    ) 
  }
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '75%',
      heigth: '100%'
    },
    presentation: {
      border: '0.5px solid #F8F8FF',
      margin: '0px 30px 16px 0px',
      padding: '8px'
    },
    mainTitle: {
      fontWeight: 'bold'
    },
    description: {
      fontSize: '60%'
    },
    references: {
      fontSize: '60%'
    },
    title: {
      fontWeight: 'bold',
      padding: '9px 0px 9px 0px'
    },
    list: {
      
    },
    row: {
      border: '0.5px solid #F8F8FF',
      margin: '0px 0px 0px 4px'
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.presentation}>
        <div style={styles.mainTitle}>{hero.name}</div>
        { hero.description &&
          <div style={styles.description}>{hero.description}</div>
        }
      </div>
      <div style={styles.references}>
        {hero.comics.items.length !== 0 &&
          <div>
            <div style={styles.title}>Comics</div>
            <div styles={styles.list}>{mapping(hero.comics.items)}</div>
          </div>
        }
        {hero.series.items.length !== 0 &&
          <div>
            <div style={styles.title}>Series</div>
            <div styles={styles.list}>{mapping(hero.series.items)}</div>
          </div>
        }
        {hero.stories.items.length !== 0 &&
          <div>
            <div style={styles.title}>Stories</div>
            <div styles={styles.list}>{mapping(hero.stories.items)}</div>
          </div>
        }
      </div>
    </div>
  )
}

Content.propTypes = {
  hero: PropTypes.object.isRequired
}

export default Content
