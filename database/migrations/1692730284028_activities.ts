import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Activities extends BaseSchema {
  protected tableName = 'activities'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('designation').notNullable().unique()
      table.text('description')
      table.date('start')
      table.date('end')
      table.enum('cycle',['parJour','parSemaine','parMois','parAnnee'])
      table.integer('amount_to_give').notNullable()
      table.enum('status',['inProgress','completed'])
      table.enum('currency',['USD','FC'])
      
      table.timestamps(true)
    })
  }
  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

