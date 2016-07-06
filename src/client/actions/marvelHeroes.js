import MD5 from 'MD5'
import {goBack} from 'react-router-redux'

export const HEROES_LOADED = 'HEROES_LOADED'
export const HERO_LOADED = 'HERO_LOADED'
export const EMPTY_HERO = 'EMPTY_HERO'

const URL = 'http://gateway.marvel.com/v1/public/characters'

const getFetchUrl = (queryUrl) => {
  const getTimestamp = () => {
    return Math.floor(Date.now() / 1000)
  }
  const API_PUBL = '298bab46381a6daaaee19aa5c8cafea5'
  const API_PRIV = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d'
  const ts = getTimestamp()
  const hash = MD5(ts + API_PRIV + API_PUBL).toString()
  const full = queryUrl + '?' + '&ts=' + ts + '&apikey=' + API_PUBL + '&hash=' + hash
  return full
}

export function loadHeroes() {
  return (dispatch, getState) => {
    fetch(getFetchUrl(URL)).then((heroes) => {
      return heroes.json()
    }).then((heroes) => {
      dispatch(heroesLoaded(heroes.data.results))
    })
  }
}

export function heroesLoaded(heroes) {
  return {
    type: HEROES_LOADED,
    heroes
  }
}

export function loadHero(id) {
  return (dispatch, getState) => {
    fetch(getFetchUrl(URL + '/' + id)).then((hero) => {
      return hero.json()
    }).then((hero) => {
      dispatch(heroLoaded(hero.data.results[0]))
    })
  }
}

export function heroLoaded(hero) {
  return {
    type: HERO_LOADED,
    hero
  }
}

export function emptyHero() {
  return {
    type: EMPTY_HERO,
    hero: null
  }
}

export function loadMainPage() {
  return (dispatch, getState) => {
    dispatch(goBack())
    dispatch(emptyHero())
  }
}
