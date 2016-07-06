import React, {PropTypes} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {mainSelector} from '../selectors/marvelHeroes'
import {push} from 'react-router-redux'

import {loadHeroes} from '../actions/marvelHeroes'
import HeroList from '../components/heroList'
import Title from '../components/title'

class Main extends React.Component {
    componentWillMount() {
      this.props.dispatch(loadHeroes())
    }

    onDetail = (id) => {
      this.props.dispatch(push('/character/' + id))
    }

    render() {   
      const styles = {
        container: {
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto'
        }
      }
      const {heroes} = this.props

      return (
        <div style={styles.container}>
          <Title />
          <HeroList heroes={heroes} onDetail={this.onDetail} />
        </div>
      )
  }
}

Main.propTypes = {
  heroes: PropTypes.array.isRequired,
}

export default connect(mainSelector) (Main)
