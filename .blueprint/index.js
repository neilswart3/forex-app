const fs = require('fs')
const { component, styles } = require('./templates')

const [type] = process.argv.slice(2)
const [relPath] = process.argv.slice(3)
const [name] = process.argv.slice(4)
const [props] = process.argv.slice(5)

if (!name) throw new Error('You must include a component name.')

let dir = `./src/${type}`
if (relPath !== '.') dir = `./src/${type}/${relPath}/fragments`

if (fs.existsSync(`${dir}/${name}`))
  throw new Error('A component with that name already exists.')

fs.mkdirSync(`${dir}/${name}`)

function writeFileErrorHandler(err) {
  if (err) throw err
}

fs.writeFile(
  `${dir}/${name}/index.tsx`,
  component(name, props),
  writeFileErrorHandler
)
fs.writeFile(`${dir}/${name}/styles.ts`, styles(name), writeFileErrorHandler)
fs.writeFile(
  `${dir}/${name}/${name}.test.tsx`,
  styles(name, props),
  writeFileErrorHandler
)

fs.readFile(`${dir}/index.ts`, 'utf8', (err, data) => {
  if (err) throw err

  const currentComponents = data.match(/(?<=import )(.*?)(?= from)/g) || null

  let newComponents = [name]
  if (currentComponents) newComponents = [name, ...currentComponents].sort()

  const fileContent = newComponents
    .map(
      (componentName) =>
        `export { default as ${componentName} } from './${componentName}'\n`
    )
    .join('')

  fs.writeFile(`${dir}/index.ts`, fileContent, writeFileErrorHandler)

  console.log(`${name} has been created.`)
})
