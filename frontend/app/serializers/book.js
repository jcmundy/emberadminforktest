import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  attrs: {
    author: { serialize: 'books',
               deserialize: 'books' }
    }
});
