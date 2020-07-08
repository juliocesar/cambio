declare interface Rate {
  id: string
  from: string
  to: string
  amount: numbe
  exchange: number
  timestamp: number
}

// free.currconv.com rates response
declare interface APIResponse {
  [fromTo: string]: float
}
