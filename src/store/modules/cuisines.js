import {
  getCollections,
  getRestaurants,
  getSingleRestaurant
} from '@/api/cuisines'

const cuisines = {
  namespaced: true,
  state: {
    collections: [],
    restaurants: [],
    restaurant: null
  },
  mutations: {
    SET_COLLECTIONS: (state, collections) => {
      state.collections = collections
    },
    SET_RESTAURANTS: (state, restaurants) => {
      state.restaurants = restaurants
    },
    SET_SINGLE_RESTAURANT: (state, restaurant) => {
      state.restaurant = restaurant
    }
  },
  actions: {
    async GetCollections({ commit }) {
      try {
        const { collections } = await getCollections().toPromise()
        commit('SET_COLLECTIONS', collections)
        console.log(collections)
      } catch (error) {
        console.log(error)
        throw error
      }
    },
    async GetRestaurants({ commit }) {
      try {
        const { restaurants } = await getRestaurants().toPromise()
        commit('SET_RESTAURANTS', restaurants)
        console.log(restaurants)
      } catch (error) {
        console.log(error)
        throw error
      }
    },
    async GetSingleRestaurant({ commit }) {
      try {
        const restaurant = await getSingleRestaurant().toPromise()
        commit('SET_SINGLE_RESTAURANT', restaurant)
        console.log('restaurant', restaurant)
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  }
}

export default cuisines
