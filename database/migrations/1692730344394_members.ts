import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Members extends BaseSchema {
  protected tableName = 'members'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('name').notNullable().unique()
      table.string('postname').notNullable()
      table.string('phone').notNullable().unique()
      table.enum('status',['isBeneficiary','isNoBeneficiary'])
      table.uuid('activity_id').references('id').inTable('activities').onDelete('CASCADE') // delete member when an activity is deleted

      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}