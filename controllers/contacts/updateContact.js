const createError = require("http-errors");
const { contactSchema } = require("../../schemas");
const { contacts: service } = require("../../services");


const updateContact = async (req, res) => {
 
  const { error } = contactSchema.validate(req.params.contactId, req.body);

 
  if (error) {
    throw createError(404, "Not found");
  }
    const result = await service.updateContact(req.params.contactId, req.body);
    res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateContact;


