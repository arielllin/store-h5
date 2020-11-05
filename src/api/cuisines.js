import { zomatoRequest as request } from '@/utils/http'

export function getCollections() {
  return request({
    url: '/api/v2.1/collections',
    method: 'GET',
    params: {
      city_id: 280
    }
  })
}

export function getRestaurants() {
  return request({
    url: '/api/v2.1/search',
    method: 'GET',
    params: {
      entity_id: 280,
      entity_type: 'city'
    }
  })
}

export function getSingleRestaurant(Id) {
  return request({
    url: '/api/v2.1/restaurant',
    method: 'GET',
    params: {
      res_id: Id
    }
  })
}
