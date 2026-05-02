export class MenuItemUnavailableError extends Error {
  constructor(itemName: string) {
    super(`The item "${itemName}" is currently unavailable.`)
  }
}