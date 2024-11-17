import { expect } from 'chai'
import { getDuckDuckGo } from '../support/endpoints/duckduckgo.js'

describe('DuckDuckGo - Validations', function () {
  it('Validate simple query', async function () {
    const query = 'the simpsons'
    const format = 'json'
    const response = await getDuckDuckGo(query, format)
    const responseJson = JSON.parse(response.text)

    responseJson.Results.forEach((result) => {
      if (result.Icon.URL && result.Icon.URL !== '') {
        console.log('Results URL:', result.Icon.URL)
      }
    })

    responseJson.RelatedTopics.forEach((topic) => {
      if (topic.Icon.URL && topic.Icon.URL !== '') {
        console.log('Related Topics URL:', topic.Icon.URL)
      }
    })

    expect(response.statusCode).to.be.equal(200)
  })
})
