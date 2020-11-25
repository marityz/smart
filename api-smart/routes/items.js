const itemsRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { getItems, createItem, deleteItem } = require('../controllers/items');



itemsRouter.get('/', getItems);

itemsRouter.post('/', celebrate({
    body: Joi.object().keys({
        name: Joi.string().required().min(2),
        description: Joi.string().required().min(2),
        params: Joi.object()
    }),
}), createItem);


itemsRouter.delete('/:itemId', deleteItem);



module.exports = itemsRouter;
