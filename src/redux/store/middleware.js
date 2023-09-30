export const loggingMiddleware = (_) => (next) => (action) => {
    console.log('Logging action with type', action.type)
    // You should always do this at the end of your middleware
    return next(action)
}

export const testMiddleware = (_) => (next) => (action) => {
    console.log('Logging action with type', action.type)
    // You should always do this at the end of your middleware
    return next(action)
}