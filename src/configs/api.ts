import axios, {AxiosResponse} from 'axios'

const baseUrl = '/root.ts/'

export const instance = axios.create({
    baseURL: baseUrl,
    timeout: 1000 * 60 * 2,
})

type InstanceType = {
    url: string
    params?: Record<string, string | number>
    data?: unknown
}

export const apiGet = async ({url, params}: InstanceType): Promise<unknown> => {
    return await instance.get(url, {
        params: params,
    })
}

export const apiPost = async ({url, data}: InstanceType): Promise<unknown> => {
    return await instance.post(url, data)
}

export const apiPut = async ({url, data}: InstanceType): Promise<unknown> => {
    return await instance.put(url, data)
}

export const apiDelete = async ({url}: InstanceType): Promise<unknown> => {
    return await instance.delete(url)
}

export const apiPatch = async ({url, data}: InstanceType): Promise<unknown> => {
    return await instance.patch(url, data)
}

export const apiDownload = async ({url}: InstanceType): Promise<AxiosResponse> => {
    return await instance.get(url, {
        responseType: 'blob'
    })
}
