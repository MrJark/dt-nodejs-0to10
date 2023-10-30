import mongoose from "mongoose"

interface ConnectionOptions {
  mongoURL: string,
  DBName: string,
}

export class MongoDB {
  static async connect( options: ConnectionOptions ) {
    const { DBName, mongoURL } = options

    try {
      await mongoose.connect( mongoURL, {
        dbName: DBName
      } )

      console.log( 'Mongo connected!' );
    } catch ( error ) {

      console.log( 'Mongo connection error' );
      throw error
    }
  }
}