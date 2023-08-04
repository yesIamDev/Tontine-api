import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import {v4} from 'uuid'
import Activity from './Activity'
import Member from './Member'

export default class Cotisation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public amount: number

  @column()
  public activityId: string

  @hasOne(()=>Activity)
  public activity: HasOne<typeof Activity>

  @column()
  public memberId: string

  @hasOne(()=>Member)
  public member: HasOne<typeof Member>

  @beforeCreate()
  public static async setId(cotisation:Cotisation ){
    cotisation.id=v4()
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
