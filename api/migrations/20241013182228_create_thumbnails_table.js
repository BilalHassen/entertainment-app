exports.up = function (knex) {
  return knex.schema.createTable("thumbnails", function (table) {
    table.increments("id"); // Auto-incrementing primary key
    table.integer("movie_id").unsigned().notNullable(); // Foreign key referencing 'movies' table
    table.foreign("movie_id").references("movies.id").onDelete("CASCADE"); // If a movie is deleted, its thumbnails will be deleted as well
    table.string("type").notNullable(); // Type of thumbnail (either 'trending' or 'regular')
    table.string("size").notNullable(); // Size of the thumbnail (e.g., 'small', 'medium', 'large')
    table.string("url").notNullable(); // URL of the thumbnail image
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("thumbnails");
};
