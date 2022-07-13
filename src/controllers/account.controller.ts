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
  const newProduct = new req.body();

  console.log(newProduct);

  await newProduct.save();

  reply.code(201).send(newProduct);
};

const deleteAccount = async (req: any, reply: FastifyReply) => {
  await Account.findByIdAndDelete(req.params.id);
  reply.code(204).send(`account id: ${req.params.id} torolve`);
};

const updateAccount = async (req: any, reply: FastifyReply) => {
  try {
    const account = await Account.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
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
