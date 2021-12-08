const id = 'foobar'
const arc = require('@architect/functions')

async function handler() {
  const data = await arc.tables()
  const clicks = await data.clicks.get({ id })

  return {
    json: { data: { clicks } }
  }
}

exports.handler = arc.http.async(handler)
