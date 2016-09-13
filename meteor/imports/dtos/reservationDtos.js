import {dtoMongoDefinition} from '../utils'

export const reservationsGridDto =
  new dtoMongoDefinition(["_id", "dateTime", "name", "partyNumber", "status"])
