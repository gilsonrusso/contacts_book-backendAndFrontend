const Contact = require("../models/contactModel");

const contactRoutes = {
  async index(request, response) {
    try {
      const contacts = await Contact.find();
      return response.status(200).json(contacts);
    } catch (error) {
      return response.status(500).json({ message: "Internal server Error" });
    }
  },

  async show(request, response) {
    const { id } = request.params;

    const contact = await Contact.find({ _id: `${id}` });

    if (!contact) {
      return response.status(400).json({
        message: "Register not Founded!",
      });
    }

    return response.status(200).json(contact);
  },

  async create(request, response) {
    const { name, email, phone } = request.body;
    const { originalname: nameImage, size, filename: key } = request.file;

    if (!name) {
      return response
        .status(400)
        .json({ message: "The parameter name is required!" });
    }
    if (!email) {
      return response
        .status(400)
        .json({ message: "The parameter email is required!" });
    }
    if (!phone) {
      return response
        .status(400)
        .json({ message: "The parameter phone is required!" });
    }

    const contact = {
      name,
      email,
      phone,
      image: {
        nameImage,
        size,
        key,
        url: `http://localhost:3333/contacts/uploads/${key}`,
      },
    };

    await Contact.create(contact)
      .then((res) => {
        return response.status(201).json(res);
      })
      .catch((err) => {
        return response
          .status(400)
          .json({ message: "Contact not created!" + err });
      });
  },

  async delete(request, response) {
    const { id } = request.params;

    const contact = await Contact.find({ _id: `${id}` });

    if (!contact) {
      return response.status(400).json({
        message: "Register not Founded!",
      });
    }

    await Contact.deleteOne({ _id: `${id}` })
      .then(() => {
        return response
          .status(200)
          .json({ message: "Contact deleted with success!" });
      })
      .catch((err) => {
        return response
          .status(400)
          .json({ message: "Contact was not deleted!" });
      });
  },

  async update(request, response) {
    const { id } = request.params;
    const { email, phone } = request.body;

    if (!name) {
      return response
        .status(400)
        .json({ message: "The parameter name is required!" });
    }
    if (!email) {
      return response
        .status(400)
        .json({ message: "The parameter email is required!" });
    }
    if (!phone) {
      return response
        .status(400)
        .json({ message: "The parameter phone is required!" });
    }

    const contactFounded = await Contact.find({ id: `${id}` });

    if (!contactFounded) {
      return response.status(400).json({
        message: "Register not Founded!",
      });
    }

    const contact = {
      email,
      phone,
    };

    await Contact.findByIdAndUpdate(`${id}`, { ...contact })
      .then((res) => {
        return response
          .status(200)
          .json({ message: "Register updated with succefull!" });
      })
      .catch((err) => {
        return response
          .status(400)
          .json({ message: "Does not possible update the register" } + err);
      });

    return response.status(200).json(contact);
  },

  async upload(request, response) {
    // if (!image) {
    //   return response
    //     .status(400)
    //     .json({ message: "The parameter image is required!" });
    // }

    return response.status(201).json({ message: "ok!" });
  },
};

module.exports = contactRoutes;
