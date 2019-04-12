import 'rxjs/add/operator/catch'

function errorHandler(error, stream) {
  if (error.status === 401) {
    window.location.href = '/login'
  }
  return stream
}

export const epicAdapter = {
  input: action$ => action$,
  output: action$ => action$.catch(errorHandler)
}
