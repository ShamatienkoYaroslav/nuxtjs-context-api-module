export const getOrders = function() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          number: 'OP-096432'
        },
        {
          id: 2,
          number: 'OP-096432'
        },
        {
          id: 3,
          number: 'OP-096432'
        },
        {
          id: 4,
          number: 'OP-096432'
        }
      ])
    }, 5000)
  })
}
