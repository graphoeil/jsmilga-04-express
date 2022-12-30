// Postman
// POST
app.post('/api/postman/people', (req, res) => {
	const { name } = req.body;
	if (!name){
		return res.status(400).json({
			success:false,
			msg:'Please provide name value'
		});
	}
	// Add new person to people array
	res.status(200).json({
		success:true,
		data:[...people, { 'id':people.length + 1, name }]
	});
});
// PUT
app.put('/api/people/:id', (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	const person = people.find((person) => {
		return person.id === Number(id);
	});
	if (!person){
		return res.status(404).json({
			success:false,
			msg:`No person with id : ${ id }`
		});
	}
	const newPeople = people.map((person) => {
		if (person.id === Number(id)){
			person.name = name;
		}
		return person;
	});
	res.status(200).json({
		success:true,
		data:newPeople
	});
});
// DELETE
app.delete('/api/people/:id', (req, res) => {
	const { id } = req.params;
	const person = people.find((person) => {
		return person.id === Number(id);
	});
	if (!person){
		return res.status(404).json({
			success:false,
			msg:`No person with id => ${ id }`
		});
	}
	const newPeople = people.filter((person) => {
		return person.id !== Number(id);
	});
	res.status(200).json({
		success:true,
		data:newPeople
	});
});