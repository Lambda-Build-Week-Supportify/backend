
exports.up = function (knex) {
  return knex.schema.createTable('users_schools', col => {

    col.integer('user_id')
      .unsigned()
      .notNullable()
      .references('user_id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    col.integer('school_id')
      .unsigned()
      .notNullable()
      .references('school_id')
      .inTable('schools')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    col.primary(['user_id', 'school_id']);
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users_schools')
};
