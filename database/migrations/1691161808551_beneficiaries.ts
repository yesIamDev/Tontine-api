import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Beneficiaries extends BaseSchema {
  protected tableName = 'beneficiaries'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.enum('status', ['valid', 'invalid'])
      table.uuid('member_id').references('id').inTable('members').onDelete('CASCADE')
      table.uuid('activity_id').references('id').inTable('activities').onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
