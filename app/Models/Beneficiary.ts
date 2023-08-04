import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import Activity from './Activity'
import Member from './Member'
import {v4} from 'uuid'

export default class Beneficiary extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public status: string

  @column()
  public activityId: string

  @hasOne(()=>Activity)
  public activity: HasOne<typeof Activity>

  @column()
  public memberId: string

  @hasOne(()=>Member)
  public member: HasOne<typeof Member>
  
  @beforeCreate()
  public static async setId(beneficiary:Beneficiary ){
    beneficiary.id=v4()
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
