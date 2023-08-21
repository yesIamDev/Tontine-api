import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cotisations extends BaseSchema {
  protected tableName = 'cotisations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.uuid('member_id').references('id').inTable('members').onDelete('CASCADE')
      table.uuid('activities_id').references('id').inTable('activities').onDelete('CASCADE')
      table.integer('amount').notNullable()
      
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
