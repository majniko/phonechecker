export const getId = phones => {
  const idArray = phones.map(phone => parseInt(phone.id))
  const max = Math.max(...idArray) + 1
  return max.toString()
}
