const Item = require('../models/item');

const NotFoundError = require('../errors/404-not-found-err');
const BadRequest = require('../errors/400-bad-request-err');


module.exports.getItems = (req, res, next) => {

    let filter = createReqQuery(req.query);
    Item.find(filter)
        .then((items) => {
            if (!items) {
                throw new NotFoundError('Еще нет сохраненных товаров');
            }
            return res.send(items);
        })
        .catch(next);

};


createReqQuery = (reqQuery) => {
    let query = {};

    if (Object.keys(reqQuery).length === 0) {
        return query;
    } else {
        for (let keyQuery in reqQuery) {
            query[keyQuery] = reqQuery[keyQuery];
        }
    }
    return query;
};



module.exports.createItem = (req, res, next) => {
    const {
        name, description, params,
    } = req.body;
    Item.create({
        name, description, params,
    })
        .then((item) => res.send({data: item}))
        .catch((err) => {
            if (err.name === 'ValidationError') {
                throw new BadRequest(err.name);
            }
            return err;
        })
        .catch(next);
};


module.exports.deleteItem = (req, res, next) => {
    Item.findById(req.params.itemId)
        .then((item) => {
            if (!item) {
                throw new NotFoundError('Такого товара нет');
            }
            return item;
        })
        .then((item) => {

            item.remove(req.params.item);
            return res.status(200).send({message: 'Товар удален'});

        })
        .catch(next);
};
