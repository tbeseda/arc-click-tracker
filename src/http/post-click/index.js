const id = 'foobar'
const arc = require('@architect/functions')

async function handler() {
  const data = await arc.tables()
  const clicks = await data.clicks.get({ id })
  const count = clicks && clicks.count ? clicks.count + 1 : 1

  await data.clicks.put({ id, count })

  return {
    statusCode: 301,
    headers: { location: '/' },
  }
}

exports.handler = arc.http.async(handler)
