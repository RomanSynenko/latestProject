import { success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
const goodRequest = () =>
    success({
        title: 'Success!',
        delay: 400
    });
const notFound = () =>
    error({
        title: 'Bad Request',
        delay: 400
    });
export default {
    goodRequest,
    error: notFound
}