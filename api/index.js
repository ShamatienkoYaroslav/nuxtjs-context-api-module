import * as goods from '~/api/goods.api'
import * as orders from '~/api/orders.api'

const mapBindMethods = (context, methods) => {
  const obj = {}
  Object.keys(methods).forEach((key) => {
    obj[key] = methods[key].bind(context)
  })
  return obj
}

export default (context) => ({
  goods: mapBindMethods(context, goods),
  orders: mapBindMethods(context, orders)
})
