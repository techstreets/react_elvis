
const eventsMiddleware = () => next => action => {
  console.log('events middleware', action);
  return next(action);
};

export default eventsMiddleware;
