import { useEffect, type ComponentType } from 'react'

function withLogger<P extends object>(
  WrappedComponent: ComponentType<P>,
  componentName: string,
) {
  function LoggedComponent(props: P) {
    useEffect(() => {
      console.log(`${componentName} mounted`)

      return () => {
        console.log(`${componentName} unmounted`)
      }
    }, [])

    return <WrappedComponent {...props} />
  }

  LoggedComponent.displayName = `withLogger(${componentName})`

  return LoggedComponent
}

export default withLogger
