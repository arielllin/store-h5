import request from '@/utils/http/request'
import orderRequest from '@/utils/http/orderRequest'

export const accountRequest = req => {
  const serviceApiPrefix = '/api/base'

  return request({
    ...req,
    url: `${serviceApiPrefix}${req.url}`
  })
}

export const zomatoRequest = req => {
  const serviceApiPrefix = '/zomato-api'
  // console.log(req)
  return orderRequest.request({
    ...req,
    queryPath: req.url,
    url: `${serviceApiPrefix}${req.url}`
  })
}

