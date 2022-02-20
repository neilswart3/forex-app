import navs, { NavValue } from './navs'

const getPathName = (path: string): NavValue => {
  const [[name]] = Object.entries(navs).filter(
    ([_key, value]) => value.path === path
  )

  return name as NavValue
}

export default getPathName
