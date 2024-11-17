import supertest from 'supertest'
import dotenv from 'dotenv'

dotenv.config()

const request = supertest(process.env.URL)

export const getDuckDuckGo = async (query, format) => {
  const response = await request.get('/').query({ q: query, format: format }).redirects()

  return response
}
