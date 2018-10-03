const HOSTS = () => {
    return 'https://smallstrong.site/'
}

const API_HOST = HOSTS()

const PROJECT_NAME = 'wte'

const VERSION = '/0.1/'

const API_PATH = `${API_HOST}${PROJECT_NAME}${VERSION}`

module.exports = {
    API_PATH,
}
