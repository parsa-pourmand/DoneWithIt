import Bugsnag from '@bugsnag/expo';


const start = () => Bugsnag.start();

const log = (error) => Bugsnag._notify(error)


export default {start, log}