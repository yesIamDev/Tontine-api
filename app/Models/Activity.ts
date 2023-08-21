import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, hasMany, HasMany} from '@ioc:Adonis/Lucid/Orm'
import Member from './Member'
import {v4} from 'uuid'

export default class Activity extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public designation: string

  @column()
  public description: string

  @column()
  public start: Date

  @column()
  public end: Date

  @column()
  public cycle: Date

  @column()
  public amountToGive: number

  @column()
  public status: string

  @column()
  public currency: string

  @hasMany(()=>Member)
  public members: HasMany<typeof Member>

  @beforeCreate()
  public static async setId(activity:Activity ){
    activity.id=v4()
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
