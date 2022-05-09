import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clients extends BaseSchema {
  protected tableName = 'clients'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table.string('name')
      table.string('phone')
      table.string('email')
      table.string('birthday')
      table.string('cep')
      table.string('address')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
