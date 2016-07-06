import {
  HEROES_LOADED,
  HERO_LOADED,
  EMPTY_HERO,
} from '../actions/marvelHeroes'

const initialState = {
  heroes: [],
}

function heroesReducer(state = initialState, action) {
  switch (action.type) {
    case 'HEROES_LOADED':
      return {
        ...state,
        heroes: action.heroes
    }
    case 'HERO_LOADED':
      return {
      ...state,
      hero: action.hero
    }
    case 'EMPTY_HERO':
      return {
        ...state,
        hero: action.hero
    }
    default:
      return state
  }
}

export default heroesReducer
