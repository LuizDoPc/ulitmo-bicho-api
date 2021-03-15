import { User } from '@models/ResultadoType'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Diego'

  expect(user.name).toEqual('Diego')
})
