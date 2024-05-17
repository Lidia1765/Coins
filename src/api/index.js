class Api {
    #baseUrl = 'https://api.coincap.io'

    fetchExchange = async (exchangeId) => {
        const data = await fetch(`${this.#baseUrl}/v2/exchanges/${exchangeId}`)
        return await data.json()
    }

    fetchAsset = async (id) => {
        const data = await fetch(`${this.#baseUrl}/v2/assets/${id}`)
        return await data.json()
    }

    fetchDataCoins = async (search) => {
        const data = await fetch(`${this.#baseUrl}/v2/assets?search=${search}`)
        return await data.json()
    }

    fetchDataExc = async (search) => {
        const data = await fetch(`${this.#baseUrl}/v2/exchanges?search=${search}`)
        return await data.json()
    }

    fetchDataTableCoins = async (limit = 20) => {
        const data = await fetch(`${this.#baseUrl}/v2/assets?limit=${limit}`)
        return await data.json()
    }

    fetchDataTableExc = async (limit = 20) => {
        const data = await fetch(`${this.#baseUrl}/v2/exchanges?limit=${limit}`)
        return await data.json()
    }

}

export const api = new Api()