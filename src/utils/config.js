const HOSTS = () => {
    return 'https://smallstrong.site/api/'
}

const API_HOST = HOSTS()

const PROJECT_NAME = 'wte_api/app/'

const API_PATH = `${API_HOST}${PROJECT_NAME}`

module.exports = {
    API_PATH,
}
