import 'reflect-metadata'

import request from 'supertest'
import { application } from './setup'

import { CreateCourseRequestMother } from 'tests/Context/Backoffice/Course/application/CreateCourseRequestMother'

describe('Check the course api', () => {
  const course = CreateCourseRequestMother.random()

  it('I send a GET request to /v1/backoffice/coursess/search, it should return 200', async () => {
    const response = await request(application.httpServer).get('/v1/backoffice/courses/search').query({
      id: course.id
    })

    expect(response.statusCode).toEqual(200)
    expect(response.headers['content-type']).toEqual('application/json; charset=utf-8')
    expect(response.body.success).toEqual(true)
  })

  it('I send a POST request to /v1/backoffice/courses, it should return 201', async () => {
    const response = await request(application.httpServer).post('/v1/backoffice/courses').send(course)

    expect(response.statusCode).toEqual(201)
    expect(response.headers['content-type']).toEqual('application/json; charset=utf-8')
    expect(response.body.success).toEqual(true)
  })

  it('I send a DELETE request to /v1/backoffice/courses, it should return 200', async () => {
    const courseId = course.id

    await request(application.httpServer).delete(`/v1/backoffice/courses/${courseId}`).send({
      id: courseId
    })
  })
})
