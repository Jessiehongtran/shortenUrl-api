
exports.up = function(knex) {
  return knex.schema.createTable('urls', tbl => {
      tbl.increments()
      tbl.string('url')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('urls');
};
