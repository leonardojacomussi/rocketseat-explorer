const knex = require("../database/knex");

const { hash, compare } = require("bcryptjs");

const AppError = require("../utils/AppError");

class UsersController {
  /**
   * index - GET para registrar vários registros
   * show - GET para mostrar um registro específico
   * create - POST para criar um registro
   * update - PUT para atualizar um registro
   * delete - DELETE para deletar um registro
   */

  async create(req, res) {
    const { name, email, password } = req.body;

    const checkUserExists = await knex("users").where({ email }).first();

    if (checkUserExists) {
      throw new AppError("User already exists");
    };

    const hashedPassword = await hash(password, 8);
    await knex("users").insert({ name, email, password: hashedPassword });

    return res.status(201).json();
  };

  async update(req, res) {
    const { name, email, password, old_password } = req.body;
    const { id } = req.params;

    const user = await knex("users").where({ id }).first();

    if (!user) {
      throw new AppError("User does not exists.");
    };

    const userWithUpdatedEmail = await knex("users").where({ email }).first();

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Email already in use.");
    };

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (password && !old_password) {
      throw new AppError("Old password is required.");
    };

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError("Old password does not match.");
      };

      const hashedPassword = await hash(password, 8);
      user.password = hashedPassword;
    };

    await knex("users").where({ id }).update({
      ...user,
      name: user.name,
      email: user.email,
      password: user.password,
      updated_at: knex.fn.now()
    });

    return res.status(200).json();
  };
};

module.exports = UsersController;