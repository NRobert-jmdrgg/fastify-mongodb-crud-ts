import { FastifyReply, FastifyRequest } from 'fastify';

const Account = require('../models/account.model');

const getAccounts = async (req: FastifyRequest, reply: FastifyReply) => {
  const accounts = await Account.find();
  return accounts;
};

const getAccount = async (req: any, reply: FastifyReply) => {
  const product = await Account.findById(req.params.id);
  return reply.code(200).send(product);
};

const addAccount = async (req: any, reply: FastifyReply) => {
  const newAccount = new Account(req.body);

  await newAccount.save().then('Account saved');

  reply.code(201).send(newAccount);
};

const deleteAccount = async (req: any, reply: FastifyReply) => {
  await Account.findByIdAndDelete(req.params.id);
  reply.code(201).send(`account id: ${req.params.id} torolve`);
};

const updateAccount = async (req: any, reply: FastifyReply) => {
  try {
    const account = await Account.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    reply.code(200).send(account);
  } catch (err) {
    reply.code(500).send(err);
  }
};

module.exports = {
  getAccounts,
  getAccount,
  addAccount,
  deleteAccount,
  updateAccount,
};
