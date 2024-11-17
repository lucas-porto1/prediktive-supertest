import { expect } from 'chai'
import { getDuckDuckGo } from '../support/endpoints/duckduckgo.js'

describe('DuckDuckGo - Validations', function () {
  it('Validate simple query', async function () {
    const query = 'the simpsons'
    const format = 'json'
    const response = await getDuckDuckGo(query, format)
    const responseJson = JSON.parse(response.text)

    responseJson.Results.forEach((result) => {
      const iconUrl = result.Icon.URL
      if (iconUrl !== '') {
        console.log('Results URL:', iconUrl)
        expect(iconUrl).to.contains('/')
      }
    })

    responseJson.RelatedTopics.forEach((topic) => {
      const iconUrl = topic.Icon.URL
      if (iconUrl !== '') {
        console.log('Related Topics URL:', iconUrl)
        expect(iconUrl).to.contains('/')
      }
    })

    expect(response.statusCode).to.be.equal(200)
  })
})
