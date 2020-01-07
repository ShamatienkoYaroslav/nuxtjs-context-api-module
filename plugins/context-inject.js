import generateApi from '~/api'

const CONTEXT_API_KEY = 'api'

export default (context, inject) => {
  inject(CONTEXT_API_KEY, generateApi(context))
}
