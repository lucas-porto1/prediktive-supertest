import supertest from 'supertest'
import dotenv from 'dotenv'

// Load environment variables from a .env file
dotenv.config()

// Initialize the Supertest request object with the base URL from environment variables
const request = supertest(process.env.URL)

// Makes a GET request to the DuckDuckGo API with the specified query parameters.
export const getDuckDuckGo = async (query, format) => {
  const response = await request.get('/').query({ q: query, format: format }).redirects()

  return response
}
