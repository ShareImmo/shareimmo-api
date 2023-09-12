const getAllExamples = (req, res) => {
	res.status(200).json({
	  message: 'GET request to /examples'
	});
  };
  
  const createExample = (req, res) => {
	res.status(200).json({
	  message: 'POST request to /examples'
	});
  };
  
  const getExampleById = (req, res) => {
	const id = req.params.exampleId;
	if (id === 'special') {
	  res.status(200).json({
		message: 'You discovered the special ID',
		id: id
	  });
	} else {
	  res.status(200).json({
		message: 'You passed an ID',
		id: id
	  });
	}
  };
  
  const updateExample = (req, res) => {
	res.status(200).json({
	  message: 'Updated example!'
	});
  };
  
  const deleteExample = (req, res) => {
	res.status(200).json({
	  message: 'Deleted example!'
	});
  };

  module.exports = {getAllExamples, getExampleById, createExample, updateExample, deleteExample};