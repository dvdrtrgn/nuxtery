const PRIMITIVES = ['string', 'number', 'bigint', 'boolean', 'undefined', 'symbol', 'null']
const isPrimitive = (arg: any) => PRIMITIVES.includes(typeof arg)
let SOMEDIV: HTMLDivElement // make later

export function sanitizeHTML (html: string) {
  SOMEDIV = SOMEDIV || window.document.createElement('div')
  SOMEDIV.innerHTML = html

  return SOMEDIV.innerText
}

export default function (obj: object) {
  const arr = Object.entries(obj)
  const strs = arr.filter((e) => {
    return e.every(isPrimitive)
  })

  return strs.map((e, i) => ({
    order: i,
    name: sanitizeHTML(e[0]),
    desc: sanitizeHTML(e[1])
  }))
}
