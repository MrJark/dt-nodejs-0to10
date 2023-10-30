import mongoose from "mongoose";

/**
 * La entidad ( e.g. ): ( viene de domains/entities/log.entity.ts )
  
  level: LogSeverityLevel,
  message: string,
  origin: string,
  createdAt?: Date,

*/

const logSchema = new mongoose.Schema( {
  message: {
    type: String,
    require: true,
  },
  origin: {
    type: String,
  },
  level: {
    type: String,
    enum: [ 'low', 'medium', 'high' ],
    default: 'low',
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
} )

// el modelo es la manera en la cual vas a interactuar con mongo

export const LogModel = mongoose.model( 'Log', logSchema )