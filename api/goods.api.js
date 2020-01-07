export const getGoods = function() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'Milk'
        },
        {
          id: 2,
          name: 'Coffee'
        },
        {
          id: 3,
          name: 'Honey'
        }
      ])
    }, 5000)
  })
}
