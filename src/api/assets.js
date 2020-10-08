import { accountRequest as request } from '@/utils/http'

export function getSportWallet(form) {
  return request({
    url: '/getSportWallet',
    method: 'post',
    data: form
  })
}

export function getGamingWallet(form) {
  return request({
    url: '/getGamingWallet',
    method: 'post',
    data: form
  })
}

export function getCardWallet(form) {
  return request({
    url: '/getCardWallet',
    method: 'post',
    data: form
  })
}

