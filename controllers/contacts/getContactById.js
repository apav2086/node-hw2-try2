const createError = require("http-errors");
const { contactSchema } = require("../../schemas");
const { contacts: service } = require("../../services");


const getContactById = async (req, res) => {
 
  const { error } = contactSchema.validate(req.params.contactId);

 
  if (error) {
    throw createError(404, "Not found");
  }
    const result = await service.getContactById(req.params.contactId);
    res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

// Export the 'getContactById' function to be used in 'routes/api/contacts.js'.
module.exports = getContactById;


