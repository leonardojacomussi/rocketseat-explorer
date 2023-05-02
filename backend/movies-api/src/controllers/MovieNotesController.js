const knex = require("../database/knex");

const AppError = require("../utils/AppError");

class MovieNotesController {
  async create (req, res) {
    const { title, description, rating, tags } = req.body;
    const { user_id } = req.params;

    if (!title || !description || typeof(rating) !== "number") {
      throw new AppError("Missing required fields.");
    };

    if (rating < 1 || rating > 5) {
      throw new AppError("Rating must be between 1 and 5.");
    };

    const [note_id] = await knex("movie_notes").insert({
      title,
      description,
      rating,
      user_id
    });

    const tagsInsert = tags.map(name => {
      return {
        note_id,
        user_id,
        name,
      }
    });

    await knex("movie_tags").insert(tagsInsert);

    res.status(200).json();
  };

  async show (req, res) {
    const { id } = req.params;

    const note = await knex("movie_notes").where({ id }).first();
    const tags = await knex("movie_tags").where({ note_id: id }).orderBy("name");

    return res.status(200).json({
      ...note,
      tags,
    });
  };

  async delete (req, res) {
    const { id } = req.params;

    await knex("movie_notes").where({ id }).delete();

    return res.status(200).json();
  };

  async index (req, res) {
    const { user_id, title, tags } = req.query;

    let movie_notes;

    if (tags) {
      const filteredTags = tags.split(",").map(tag => tag.trim());
      movie_notes = await knex("movie_tags")
        .select([
          "movie_notes.id",
          "movie_notes.title",
          "movie_notes.user_id",
        ])
        .where("movie_notes.user_id", user_id)
        .whereLike("movie_notes.title", `%${title}%`)
        .whereIn("name", filteredTags)
        .innerJoin("movie_notes", "movie_notes.id", "movie_tags.note_id")
        .orderBy("movie_notes.title");
    } else {
      movie_notes = await knex("movie_notes")
        .where({ user_id })
        .whereLike("title", `%${title}%`)
        .orderBy("title");
    }

    const userTags = await knex("movie_tags").where({ user_id });
    const notesWithTags = movie_notes.map(note => {
      const noteTags = userTags.filter(tag => tag.note_id === note.id);
      return {
        ...note,
        tags: noteTags,
      }
    });

    return res.status(200).json(notesWithTags);
  };
};

module.exports = MovieNotesController;