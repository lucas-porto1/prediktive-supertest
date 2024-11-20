import { expect } from 'chai'
import { getDuckDuckGo } from '../support/endpoints/duckduckgo.js'

describe('DuckDuckGo - Validations', function () {
  it('Validate simple query', async function () {
    const query = 'the simpsons'
    const format = 'json'

    // Send a GET request to the DuckDuckGo API and parse the response
    const response = await getDuckDuckGo(query, format)
    const responseJson = JSON.parse(response.text)

    // Loop through each result in the "Results" array
    responseJson.Results.forEach((result) => {
      const iconUrl = result.Icon.URL
      // Only validate non-empty URLs
      if (iconUrl !== '') {
        console.log('Results URL:', iconUrl) // Log the result icon URL
        expect(iconUrl).to.contains('/') // Ensure the icon URL contains a "/"
      }
    })

    // Loop through each topic in the "RelatedTopics" array
    responseJson.RelatedTopics.forEach((topic) => {
      const iconUrl = topic.Icon.URL
      // Only validate non-empty URLs
      if (iconUrl !== '') {
        console.log('Related Topics URL:', iconUrl) // Log the related topic icon URL
        expect(iconUrl).to.contains('/') // Ensure the icon URL contains a "/"
      }
    })

    // Ensure the API response status code is 200 (OK)
    expect(response.statusCode).to.be.equal(200)
  })
})
