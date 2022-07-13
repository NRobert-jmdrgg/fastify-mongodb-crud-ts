import { FastifyInstance } from 'fastify';

const accountCtrl = require('../../controllers/account.controller');

export default async (fasitfy: FastifyInstance): Promise<void> => {
  fasitfy
    .get('/', { handler: accountCtrl.getAccounts })
    .get('/:id', { handler: accountCtrl.getAccount })
    .post('/', { handler: accountCtrl.addAccount })
    .delete('/:id', { handler: accountCtrl.deleteAccount })
    .put('/:id', { handler: accountCtrl.updateAccount });
};
