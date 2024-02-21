export interface FetcherResponse {
  status: number
  data: unknown
  _response: Response
}

export default class Fetcher {
  static async run (
    url: string,
    config?: {
      method?: string
      body?: Record<string, unknown>
      headers?: Record<string, string>
    },
    context?: string
  ) {
    const urlPathname = new URL(url).pathname
    const requestMethod = config?.method?.toLocaleLowerCase() ?? 'get'
    const logContext = context ?? 'fetcher'

    try {
      const headersObj = new Headers()
      headersObj.set('Content-Type', 'application/json')
      let fetchConfig: Fetcher = {
        method: requestMethod
      }

      if (config?.headers != null) {
        for (const property in config.headers) {
          const headerValue = config.headers[property]
          if (headerValue.length > 0) {
            headersObj.set(property, headerValue)
          }
        }

        fetchConfig = {
          ...fetchConfig,
          headers: headersObj
        }
      }

      if (config?.body != null) {
        fetchConfig = {
          ...fetchConfig,
          body: JSON.stringify(config.body)
        }

        console.log(`[${logContext}] ${requestMethod}. API call request. ${urlPathname}`, JSON.stringify(config.body))
      }

      const response = await fetch(url, fetchConfig)

      if (!response.ok) {
        return {
          status: response.status,
          data: null,
          _response: response
        }
      }
      const responseData = await response.json()

      if (response.ok) {
        console.log(`[${logContext}] ${requestMethod}. API call OK. ${urlPathname}`, JSON.stringify(responseData ?? 'WALLET_NOT_DISCOUNT'))
      } else {
        console.warn(`[${logContext}] ${requestMethod}. API call failed. ${urlPathname}`, JSON.stringify(responseData ?? 'WALLET_NOT_DISCOUNT'))
      }

      return {
        status: response.status,
        data: responseData,
        _response: response
      }
    } catch (error) {
      console.error(`[${logContext}] ${requestMethod}. API call error. ${urlPathname}`, error)
      throw error
    }
  }

  static async get (url: string, headers: Record<string, string> = {}, context?: string): Promise<FetcherResponse> {
    return await Fetcher.run(
      url,
      {
        method: 'GET',
        headers
      },
      context
    )
  }

  static async put (url: string, data: Record<string, unknown> = {}, headers: Record<string, string> = {}, context?: string): Promise<FetcherResponse> {
    return await Fetcher.run(
      url,
      {
        body: data,
        method: 'PUT',
        headers
      },
      context
    )
  }

  static async post (url: string, data: Record<string, unknown> = {}, headers: Record<string, string> = {}, context?: string): Promise<FetcherResponse> {
    return await Fetcher.run(
      url,
      {
        body: data,
        method: 'POST',
        headers
      },
      context
    )
  }

  static async delete (url: string, headers: Record<string, string> = {}, context?: string): Promise<FetcherResponse> {
    return await Fetcher.run(
      url,
      {
        method: 'DELETE',
        headers
      },
      context
    )
  }

  static async patch (url: string, data: Record<string, unknown> = {}, headers: Record<string, string> = {}, context?: string): Promise<FetcherResponse> {
    return await Fetcher.run(
      url,
      {
        body: data,
        method: 'PATCH',
        headers
      },
      context
    )
  }
}
