let tiny = require('tiny-json-http')
let tap = require('tap')
let sandbox = require('@architect/sandbox')
let data = require('@begin/data')

// first assertion to start the sandbox environment
tap.test('sandbox.start', async t => {
  await sandbox.start({quiet:true})
  tap.pass()
})

// test that there is a response at get /
tap.test('get /', async t => {
  let url = 'http://localhost:3333/'
  await tiny.get({url})
})

// test that you can write data with @begin/data library
tap.test('data.set', async t => {
  let result = await data.set({table: 'tmp'})
  t.ok(result.table === 'tmp')
  console.log(result)
})

// test that you can read data with @begin/data library
tap.test('data.get', async t => {
  let result = await data.get({table: 'tmp'})
  t.ok(result.length == 1)
  console.log(result)
})

// last assertion to end sandbox
tap.test('end', async t => {
  await sandbox.end()
  t.pass()
})
