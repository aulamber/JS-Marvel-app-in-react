import {createSelector} from 'reselect'

const heroes = state => state.heroesReducer.heroes
const hero = state => state.heroesReducer.hero
const characterId = (state, props) => props.params && props.params.id

export const mainSelector = createSelector(
  heroes, (heroes) => {
    return {
      heroes,
    }
  }
)

export const detailSelector = createSelector(
  characterId, hero, (characterId, hero) => {
    return {
      characterId,
      hero,
    }
  }
)
