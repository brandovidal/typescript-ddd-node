import request from 'supertest'
import { application } from './setup'

describe('Check the status api', () => {
  it('I send a GET request to / , it should return 200', async () => {
    const response = await request(application.httpServer).get('/')

    expect(response.statusCode).toEqual(200)
    expect(response.headers['content-type']).toEqual('application/json; charset=utf-8')
  })

  it('I send a GET request to /status, it should return 200', async () => {
    const response = await request(application.httpServer).get('/status')

    expect(response.statusCode).toEqual(200)
    expect(response.headers['content-type']).toEqual('application/json; charset=utf-8')
  })
}, 10000)
