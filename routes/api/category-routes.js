const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
  const catData = await Category.findAll({
  include: [{ model: Product }],
});
res.status(200).json(catData);
  }catch (err) {
res.status(500).json(err)
}
});


router.get('/:id', async (req, res) => {
  try{
    const catData = await Category.findByPk(req.params.id, { include: [{ model: Product }],
    });
  
    if (!catData) {
      res.status(404).json({ message: 'No category found with that id.'});
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  try{
    const catData = await Category.create(req.body);
    res.status(200).json(catData);
  } catch (err) {
    res.status(400).json(err)
  }
});

router.put('/:id', async (req, res) => {
  try{
    const catData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!catData[0]) {
      res.status(404).json({ message: 'No category with this id was found' });
      return;
    }
    res.status(201).json(catData);
  } catch (err) {
    res.status(400).json(err)
  }
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
