// Imports
const express = require('express');
const { getPeople, createPerson, createPersonPostman, 
	updatePerson, deletePerson } = require('../controllers/people');

// Router
const router = express.Router();

// !!!! We must remove /api/people because in app.js
// We declare /api/people as baseURL for the router
// app.use('/api/people', peopleRouter);

// Get people
router.get('/', getPeople);

// Create person
router.post('/', createPerson);

// Create person with postman
router.post('/postman', createPersonPostman);

// Update a person
router.put('/:id', updatePerson);

// Delete a person
router.delete('/:id', deletePerson);

// Other way to define routes, less lisible...
// router.route('/').get(getPeople).post(createPerson);
// router.route('/postman').post(createPersonPostman);
// router.route('/:id').put(updatePerson).delete(deletePerson);

// Export
module.exports = router;